// Principle of Least Action Interactive - JavaScript Implementation
// Converted from Java applet to JavaScript/Canvas

class LeastActionSimulation {
    constructor(canvasId, config = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Configuration
        this.config = {
            h1: parseFloat(config.h1) || 0,  // Initial height
            t1: parseFloat(config.t1) || 0,  // Initial time
            h2: parseFloat(config.h2) || 0,  // Final height
            t2: parseFloat(config.t2) || 3,  // Final time
            numOfLayers: parseInt(config.numOfLayers) || 4,  // Number of intermediate points
            appletMode: parseInt(config.appletMode) || 0,  // Display mode for tables
            movableEnds: parseInt(config.movableEnds) || 0,  // Can move start/end points
            enableHunting: parseInt(config.enableHunting) || 0,  // Enable auto-hunt
            enableZoom: parseInt(config.enableZoom) || 0  // Enable zoom feature
        };
        
        // Physics constants
        this.mass = 0.2;  // kg (apple mass)
        this.g = 9.8;     // m/s^2 (gravitational acceleration)
        
        // Display properties
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.margin = 40;
        this.graphWidth = this.width - 2 * this.margin - 200; // Leave space for table
        this.graphHeight = this.height - 2 * this.margin - 60; // Leave space for controls
        
        // Worldline data
        this.points = [];
        this.initializePoints();
        
        // Interaction state
        this.isDragging = false;
        this.dragIndex = -1;
        this.isHunting = false;
        this.huntingTimer = null;
        this.zoomLevel = 1;
        this.zoomCenter = null;
        
        // Action tracking
        this.currentAction = 0;
        this.minAction = Infinity;
        
        // Mouse position
        this.mouseX = 0;
        this.mouseY = 0;
        
        // Initialize event handlers
        this.initEventHandlers();
        
        // Initial draw
        this.draw();
    }
    
    initializePoints() {
        // In Java applet, numOfLayers refers to the number of segments (not points)
        // So numOfLayers=4 means 5 points total (3 intermediate + 2 endpoints)
        const numPoints = this.config.numOfLayers + 1; // Total points
        this.points = [];
        
        // Special case for Display #1: 3 intermediate points at specific times
        if (this.config.numOfLayers === 4 && this.config.appletMode === 0 && 
            this.config.movableEnds === 0 && this.config.enableHunting === 0) {
            // Display #1: Place intermediate points at t = 0.75, 1.5, 2.25
            // This gives equal spacing in time (every 0.75 seconds)
            this.points = [
                { t: 0, h: 0 },      // Start point
                { t: 0.75, h: 0 },   // First intermediate
                { t: 1.5, h: 0 },    // Second intermediate
                { t: 2.25, h: 0 },   // Third intermediate
                { t: 3, h: 0 }       // End point
            ];
        } else {
            // Default: Create evenly spaced points along the worldline
            for (let i = 0; i < numPoints; i++) {
                const t = this.config.t1 + (this.config.t2 - this.config.t1) * i / (numPoints - 1);
                const h = this.config.h1 + (this.config.h2 - this.config.h1) * i / (numPoints - 1);
                this.points.push({ t: t, h: h });
            }
        }
    }
    
    initEventHandlers() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.onMouseUp(e));
        
        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => this.onTouchStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.canvas.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }
    
    // Coordinate transformation functions
    timeToX(t) {
        const tRange = this.config.t2 - this.config.t1;
        return this.margin + (t - this.config.t1) / tRange * this.graphWidth;
    }
    
    heightToY(h) {
        // Find max height for scaling
        const maxH = Math.max(30, ...this.points.map(p => p.h), this.config.h1, this.config.h2);
        const minH = Math.min(0, ...this.points.map(p => p.h), this.config.h1, this.config.h2);
        const hRange = maxH - minH;
        
        return this.margin + this.graphHeight - ((h - minH) / hRange * this.graphHeight);
    }
    
    xToTime(x) {
        const tRange = this.config.t2 - this.config.t1;
        return this.config.t1 + (x - this.margin) / this.graphWidth * tRange;
    }
    
    yToHeight(y) {
        const maxH = Math.max(30, ...this.points.map(p => p.h), this.config.h1, this.config.h2);
        const minH = Math.min(0, ...this.points.map(p => p.h), this.config.h1, this.config.h2);
        const hRange = maxH - minH;
        
        return minH + (this.margin + this.graphHeight - y) / this.graphHeight * hRange;
    }
    
    // Physics calculations - matching Java implementation exactly
    calculateVelocity(i) {
        // Velocity for segment i (between point i-1 and i)
        if (i <= 0 || i >= this.points.length) return 0;
        const dt = this.points[i].t - this.points[i - 1].t;
        const dh = this.points[i].h - this.points[i - 1].h;
        return dh / dt;
    }
    
    calculateKineticEnergy(i) {
        // Kinetic energy for segment i (between point i-1 and i)
        if (i <= 0 || i >= this.points.length) return 0;
        const v = this.calculateVelocity(i);
        return 0.5 * this.mass * v * v;
    }
    
    calculatePotentialEnergy(i) {
        // Potential energy for segment i (average height method)
        if (i <= 0 || i >= this.points.length) return 0;
        const avgHeight = 0.5 * (this.points[i].h + this.points[i - 1].h);
        return this.mass * this.g * avgHeight;
    }
    
    calculateLagrangian(i) {
        // L = T - V for segment i
        if (i <= 0 || i >= this.points.length) return 0;
        return this.calculateKineticEnergy(i) - this.calculatePotentialEnergy(i);
    }
    
    calculateSegmentAction(i) {
        // Action for segment i: S_i = (T - V) * dt
        if (i <= 0 || i >= this.points.length) return 0;
        const dt = this.points[i].t - this.points[i - 1].t;
        return this.calculateLagrangian(i) * dt;
    }
    
    calculateTotalAction() {
        // Total action using the exact formula from Java: S = Σ[0.5*m*(Δh²/Δt - g*(h[i]+h[i+1])*Δt)]
        let S = 0;
        
        for (let i = 0; i < this.points.length - 1; i++) {
            const deltaT = this.points[i + 1].t - this.points[i].t;
            const dh = this.points[i + 1].h - this.points[i].h;
            S += 0.5 * this.mass * (dh * dh / deltaT - this.g * (this.points[i].h + this.points[i + 1].h) * deltaT);
        }
        return S;
    }
    
    calculateAcceleration(i) {
        // Acceleration between segments i and i+1
        if (i <= 0 || i >= this.points.length - 1) return 0;
        
        // Use the actual time between the velocity measurements
        const dt = (this.points[i + 1].t - this.points[i - 1].t) / 2;
        const v1 = this.calculateVelocity(i);
        const v2 = this.calculateVelocity(i + 1);
        
        return (v2 - v1) / dt;
    }
    
    calculateDeltaVelocity(i) {
        // Change in velocity between segments i and i+1
        if (i <= 0 || i >= this.points.length - 1) return 0;
        const v1 = this.calculateVelocity(i);
        const v2 = this.calculateVelocity(i + 1);
        return v2 - v1;
    }
    
    // Drawing functions
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw axes
        this.drawAxes();
        
        // Draw worldline
        this.drawWorldline();
        
        // Draw points
        this.drawPoints();
        
        // Draw action display
        this.drawActionDisplay();
        
        // Draw tables if needed
        if (this.config.appletMode > 0) {
            this.drawTables();
        }
        
        // Draw coordinates at mouse position
        this.drawCoordinates();
    }
    
    drawAxes() {
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        
        // X-axis (time)
        this.ctx.beginPath();
        this.ctx.moveTo(this.margin, this.margin + this.graphHeight);
        this.ctx.lineTo(this.margin + this.graphWidth, this.margin + this.graphHeight);
        this.ctx.stroke();
        
        // Y-axis (height)
        this.ctx.beginPath();
        this.ctx.moveTo(this.margin, this.margin);
        this.ctx.lineTo(this.margin, this.margin + this.graphHeight);
        this.ctx.stroke();
        
        // Labels
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#000';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Time (s)', this.margin + this.graphWidth / 2, this.height - 10);
        
        this.ctx.save();
        this.ctx.translate(15, this.margin + this.graphHeight / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Height (m)', 0, 0);
        this.ctx.restore();
        
        // Grid lines and labels
        this.drawGrid();
    }
    
    drawGrid() {
        this.ctx.strokeStyle = '#ddd';
        this.ctx.lineWidth = 0.5;
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#666';
        
        // Draw vertical grid lines at intermediate point positions
        this.ctx.strokeStyle = '#ccc';
        for (let i = 1; i < this.points.length - 1; i++) {
            const x = this.timeToX(this.points[i].t);
            this.ctx.beginPath();
            this.ctx.moveTo(x, this.margin);
            this.ctx.lineTo(x, this.margin + this.graphHeight);
            this.ctx.stroke();
        }
        
        // Time axis labels
        this.ctx.strokeStyle = '#ddd';
        for (let t = 0; t <= this.config.t2; t += 0.5) {
            const x = this.timeToX(t);
            
            this.ctx.textAlign = 'center';
            this.ctx.fillText(t.toFixed(1), x, this.margin + this.graphHeight + 15);
        }
        
        // Height grid
        const maxH = Math.max(30, ...this.points.map(p => p.h));
        for (let h = 0; h <= maxH; h += 5) {
            const y = this.heightToY(h);
            this.ctx.beginPath();
            this.ctx.moveTo(this.margin, y);
            this.ctx.lineTo(this.margin + this.graphWidth, y);
            this.ctx.stroke();
            
            this.ctx.textAlign = 'right';
            this.ctx.fillText(h.toFixed(0), this.margin - 5, y + 3);
        }
    }
    
    drawWorldline() {
        this.ctx.strokeStyle = '#00f';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        
        for (let i = 0; i < this.points.length; i++) {
            const x = this.timeToX(this.points[i].t);
            const y = this.heightToY(this.points[i].h);
            
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        
        this.ctx.stroke();
    }
    
    drawPoints() {
        for (let i = 0; i < this.points.length; i++) {
            const x = this.timeToX(this.points[i].t);
            const y = this.heightToY(this.points[i].h);
            
            // Determine if point is draggable
            const isDraggable = (i > 0 && i < this.points.length - 1) || 
                               (this.config.movableEnds && (i === 0 || i === this.points.length - 1));
            
            // Draw point
            this.ctx.fillStyle = isDraggable ? '#000' : '#f00';
            this.ctx.beginPath();
            this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
            
            // Highlight if being dragged
            if (i === this.dragIndex) {
                this.ctx.strokeStyle = '#ff0';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 7, 0, 2 * Math.PI);
                this.ctx.stroke();
            }
        }
    }
    
    drawActionDisplay() {
        this.currentAction = this.calculateTotalAction();
        if (this.currentAction < this.minAction) {
            this.minAction = this.currentAction;
        }
        
        this.ctx.font = '14px Arial';
        this.ctx.fillStyle = '#000';
        this.ctx.textAlign = 'left';
        
        this.ctx.fillText(`Action S = ${this.currentAction.toFixed(4)} J·s`, 10, this.height - 40);
        this.ctx.fillText(`Min S = ${this.minAction.toFixed(4)} J·s`, 10, this.height - 25);
    }
    
    drawTables() {
        const tableX = this.margin + this.graphWidth + 20;
        let tableY = this.margin + 20;
        
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#000';
        this.ctx.textAlign = 'center';
        
        const colWidth = 60;
        
        // Table headers based on mode
        if (this.config.appletMode === 1) {
            // Acceleration table - matching Java layout
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('segment', tableX + colWidth/2, tableY);
            this.ctx.fillText('velocity', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('Δ velocity', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('acceleration', tableX + 3*colWidth + colWidth/2, tableY);
            
            tableY += 15;
            this.ctx.font = '11px Arial';
            this.ctx.fillText('#', tableX + colWidth/2, tableY);
            this.ctx.fillText('meters/sec', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('meters/sec', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('meters/sec²', tableX + 3*colWidth + colWidth/2, tableY);
            
            tableY += 20;
            for (let i = 1; i <= this.config.numOfLayers; i++) {
                this.ctx.fillText(`${i}`, tableX + colWidth/2, tableY);
                this.ctx.fillText(this.calculateVelocity(i).toFixed(2), tableX + colWidth + colWidth/2, tableY);
                
                if (i < this.config.numOfLayers) {
                    tableY += 8;
                    this.ctx.fillText(this.calculateDeltaVelocity(i).toFixed(2), tableX + 2*colWidth + colWidth/2, tableY);
                    this.ctx.fillText(this.calculateAcceleration(i).toFixed(1), tableX + 3*colWidth + colWidth/2, tableY);
                    tableY += 12;
                } else {
                    tableY += 20;
                }
            }
        } else if (this.config.appletMode === 2) {
            // Energy table
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('segment', tableX + colWidth/2, tableY);
            this.ctx.fillText('T', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('V', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('E = T + V', tableX + 3*colWidth + colWidth/2, tableY);
            
            tableY += 15;
            this.ctx.font = '11px Arial';
            this.ctx.fillText('#', tableX + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + 3*colWidth + colWidth/2, tableY);
            
            tableY += 20;
            for (let i = 1; i <= this.config.numOfLayers; i++) {
                const T = this.calculateKineticEnergy(i);
                const V = this.calculatePotentialEnergy(i);
                const E = T + V;
                
                this.ctx.fillText(`${i}`, tableX + colWidth/2, tableY);
                this.ctx.fillText(T.toFixed(1), tableX + colWidth + colWidth/2, tableY);
                this.ctx.fillText(V.toFixed(1), tableX + 2*colWidth + colWidth/2, tableY);
                this.ctx.fillText(E.toFixed(1), tableX + 3*colWidth + colWidth/2, tableY);
                tableY += 20;
            }
        } else if (this.config.appletMode === 3) {
            // Lagrangian and energy table
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('segment', tableX + colWidth/2, tableY);
            this.ctx.fillText('T', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('V', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('L = T - V', tableX + 3*colWidth + colWidth/2, tableY);
            this.ctx.fillText('E = T + V', tableX + 4*colWidth + colWidth/2, tableY);
            
            tableY += 15;
            this.ctx.font = '11px Arial';
            this.ctx.fillText('#', tableX + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + colWidth + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + 2*colWidth + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + 3*colWidth + colWidth/2, tableY);
            this.ctx.fillText('joules', tableX + 4*colWidth + colWidth/2, tableY);
            
            tableY += 20;
            for (let i = 1; i <= this.config.numOfLayers; i++) {
                const T = this.calculateKineticEnergy(i);
                const V = this.calculatePotentialEnergy(i);
                const L = T - V;
                const E = T + V;
                
                this.ctx.fillText(`${i}`, tableX + colWidth/2, tableY);
                this.ctx.fillText(T.toFixed(1), tableX + colWidth + colWidth/2, tableY);
                this.ctx.fillText(V.toFixed(1), tableX + 2*colWidth + colWidth/2, tableY);
                this.ctx.fillText(L.toFixed(1), tableX + 3*colWidth + colWidth/2, tableY);
                this.ctx.fillText(E.toFixed(1), tableX + 4*colWidth + colWidth/2, tableY);
                tableY += 20;
            }
        } else if (this.config.appletMode === 5) {
            // Display #5: Action on segments table
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('segment', tableX + colWidth/2, tableY);
            this.ctx.fillText('ΔS', tableX + colWidth + colWidth/2, tableY);
            
            tableY += 15;
            this.ctx.font = '11px Arial';
            this.ctx.fillText('#', tableX + colWidth/2, tableY);
            this.ctx.fillText('joule-sec', tableX + colWidth + colWidth/2, tableY);
            
            tableY += 20;
            for (let i = 1; i <= this.config.numOfLayers; i++) {
                const dS = this.calculateSegmentAction(i);
                this.ctx.fillText(`${i}`, tableX + colWidth/2, tableY);
                this.ctx.fillText(dS.toFixed(4), tableX + colWidth + colWidth/2, tableY);
                tableY += 20;
            }
        }
        
        // Show deltaT at bottom of table
        const deltaT = (this.config.t2 - this.config.t1) / this.config.numOfLayers;
        this.ctx.fillText(`Δt = ${deltaT.toFixed(2)} sec`, tableX + 2*colWidth, this.height - 60);
    }
    
    drawCoordinates() {
        if (this.mouseX >= this.margin && this.mouseX <= this.margin + this.graphWidth &&
            this.mouseY >= this.margin && this.mouseY <= this.margin + this.graphHeight) {
            
            const t = this.xToTime(this.mouseX);
            const h = this.yToHeight(this.mouseY);
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#666';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`t: ${t.toFixed(2)}s, h: ${h.toFixed(2)}m`, this.width - 10, this.height - 10);
        }
    }
    
    // Mouse event handlers
    onMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if clicking on a draggable point
        for (let i = 0; i < this.points.length; i++) {
            const px = this.timeToX(this.points[i].t);
            const py = this.heightToY(this.points[i].h);
            
            const dist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
            if (dist < 10) {
                // Check if point is draggable
                const isDraggable = (i > 0 && i < this.points.length - 1) || 
                                   (this.config.movableEnds && (i === 0 || i === this.points.length - 1));
                
                if (isDraggable) {
                    this.isDragging = true;
                    this.dragIndex = i;
                    break;
                }
            }
        }
    }
    
    onMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
        
        if (this.isDragging && this.dragIndex >= 0) {
            // Update point height (keep time fixed for intermediate points)
            const h = this.yToHeight(this.mouseY);
            this.points[this.dragIndex].h = Math.max(0, h); // Keep height non-negative
            
            // If moving endpoints and movableEnds is enabled, update time too
            if (this.config.movableEnds && (this.dragIndex === 0 || this.dragIndex === this.points.length - 1)) {
                const t = this.xToTime(this.mouseX);
                this.points[this.dragIndex].t = Math.max(0, Math.min(10, t)); // Keep time in reasonable range
            }
        }
        
        this.draw();
        
        // Change cursor
        this.canvas.style.cursor = this.isDragging ? 'grabbing' : 'default';
        
        // Check if hovering over a draggable point
        if (!this.isDragging) {
            for (let i = 0; i < this.points.length; i++) {
                const px = this.timeToX(this.points[i].t);
                const py = this.heightToY(this.points[i].h);
                
                const dist = Math.sqrt((this.mouseX - px) ** 2 + (this.mouseY - py) ** 2);
                if (dist < 10) {
                    const isDraggable = (i > 0 && i < this.points.length - 1) || 
                                       (this.config.movableEnds && (i === 0 || i === this.points.length - 1));
                    
                    if (isDraggable) {
                        this.canvas.style.cursor = 'grab';
                        break;
                    }
                }
            }
        }
    }
    
    onMouseUp(e) {
        this.isDragging = false;
        this.dragIndex = -1;
        this.canvas.style.cursor = 'default';
    }
    
    // Touch event handlers
    onTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.onMouseDown(mouseEvent);
    }
    
    onTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.onMouseMove(mouseEvent);
    }
    
    onTouchEnd(e) {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        this.onMouseUp(mouseEvent);
    }
    
    // Hunting algorithm - Gauss-Seidel method from Java implementation
    hunt() {
        if (this.isHunting) {
            this.stopHunting();
            return;
        }
        
        this.isHunting = true;
        
        const huntStep = () => {
            if (!this.isHunting) return;
            
            // Gauss-Seidel iteration from Euler's Variational Method
            // For uniform spacing: h[i] = (h[i+1] + h[i-1] + g*deltaT*deltaT) / 2.0
            // For non-uniform spacing, we need to adjust the formula
            
            for (let i = 1; i < this.points.length - 1; i++) {
                const dt_prev = this.points[i].t - this.points[i - 1].t;
                const dt_next = this.points[i + 1].t - this.points[i].t;
                
                if (Math.abs(dt_prev - dt_next) < 0.001) {
                    // Uniform spacing - use standard formula
                    this.points[i].h = (this.points[i + 1].h + this.points[i - 1].h + this.g * dt_prev * dt_prev) / 2.0;
                } else {
                    // Non-uniform spacing - weighted average
                    const weight_prev = 1 / dt_prev;
                    const weight_next = 1 / dt_next;
                    const total_weight = weight_prev + weight_next;
                    
                    this.points[i].h = (weight_prev * this.points[i - 1].h + weight_next * this.points[i + 1].h) / total_weight
                                     + this.g * dt_prev * dt_next / 2;
                }
                
                // Keep height non-negative
                if (this.points[i].h < 0) this.points[i].h = 0;
            }
            
            this.draw();
            
            // Continue hunting with small delay for visualization
            setTimeout(() => {
                this.huntingTimer = requestAnimationFrame(huntStep);
            }, 10);
        };
        
        huntStep();
    }
    
    stopHunting() {
        this.isHunting = false;
        if (this.huntingTimer) {
            cancelAnimationFrame(this.huntingTimer);
            this.huntingTimer = null;
        }
    }
    
    reset() {
        this.stopHunting();
        this.initializePoints();
        this.minAction = Infinity;
        this.draw();
    }
    
    // Zoom functionality
    zoomIn(centerX, centerY) {
        if (!this.config.enableZoom) return;
        
        this.zoomLevel *= 1.5;
        this.zoomCenter = { x: centerX, y: centerY };
        this.draw();
    }
    
    zoomOut() {
        if (!this.config.enableZoom) return;
        
        this.zoomLevel = Math.max(1, this.zoomLevel / 1.5);
        if (this.zoomLevel === 1) {
            this.zoomCenter = null;
        }
        this.draw();
    }
}

// Control button handlers
function createControls(simulationId, simulation) {
    const controlsDiv = document.createElement('div');
    controlsDiv.id = `${simulationId}-controls`;
    controlsDiv.style.marginTop = '10px';
    
    // Hunt button
    const huntBtn = document.createElement('button');
    huntBtn.textContent = 'HUNT';
    huntBtn.onclick = () => {
        if (simulation.isHunting) {
            huntBtn.textContent = 'HUNT';
            simulation.stopHunting();
        } else {
            huntBtn.textContent = 'PAUSE';
            simulation.hunt();
        }
    };
    
    // Reset button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'RESET';
    resetBtn.onclick = () => {
        huntBtn.textContent = 'HUNT';
        simulation.reset();
    };
    
    // Zoom buttons (if enabled)
    if (simulation.config.enableZoom) {
        const zoomInBtn = document.createElement('button');
        zoomInBtn.textContent = 'ZOOM IN';
        zoomInBtn.onclick = () => simulation.zoomIn(simulation.width / 2, simulation.height / 2);
        
        const zoomOutBtn = document.createElement('button');
        zoomOutBtn.textContent = 'ZOOM OUT';
        zoomOutBtn.onclick = () => simulation.zoomOut();
        
        controlsDiv.appendChild(zoomInBtn);
        controlsDiv.appendChild(zoomOutBtn);
    }
    
    controlsDiv.appendChild(huntBtn);
    controlsDiv.appendChild(resetBtn);
    
    return controlsDiv;
}

// Initialize simulations when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Find all applet tags and replace with canvas
    const applets = document.querySelectorAll('applet');
    
    applets.forEach((applet, index) => {
        // Extract parameters
        const params = {};
        const paramElements = applet.querySelectorAll('param');
        paramElements.forEach(param => {
            params[param.getAttribute('name')] = param.getAttribute('value');
        });
        
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.id = `simulation-${index}`;
        canvas.width = parseInt(applet.getAttribute('width')) || 700;
        canvas.height = parseInt(applet.getAttribute('height')) || 475;
        canvas.style.border = '1px solid #ccc';
        canvas.style.display = 'block';
        
        // Create container div
        const container = document.createElement('div');
        container.className = 'simulation-container';
        container.appendChild(canvas);
        
        // Replace applet with canvas
        applet.parentNode.replaceChild(container, applet);
        
        // Initialize simulation
        const simulation = new LeastActionSimulation(canvas.id, params);
        
        // Add controls
        if (params.enableHunting === '1') {
            const controls = createControls(canvas.id, simulation);
            container.appendChild(controls);
        }
    });
});