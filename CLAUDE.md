# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Interactive educational demo of the Principle of Least Action, ported from the original Java applet by Slavomir Tuleja / Edwin F. Taylor (https://www.eftaylor.com/software/ActionApplets/LeastAction.html) to vanilla JavaScript + Canvas. Published via GitHub Pages at https://murguia.github.io/least-action/.

## Running / developing

No build system, no package manager, no tests. It is a static site — three files load directly from `index.html`:

- `leastAction.js` — the simulation
- `questionStyles.js` — renders the pedagogical question blocks
- `style.css`

To develop, open `index.html` in a browser, or serve the directory (e.g. `python3 -m http.server`) and reload on edits. Cache-bust query strings (`?v=1.2`) in `index.html` may need bumping when testing script changes.

## Architecture

The original `index.html` keeps the Java `<applet>` tags intact as configuration carriers. On `DOMContentLoaded`, `leastAction.js` scans for every `<applet>`, reads its `<param>` children (`h1`, `t1`, `h2`, `t2`, `numOfLayers`, `appletMode`, `movableEnds`, `enableHunting`, `enableZoom`), replaces the applet node with a `<canvas>` wrapped in a `.simulation-container`, and instantiates a `LeastActionSimulation` per canvas. HUNT/RESET/ZOOM buttons are appended by `createControls` only when the corresponding param is enabled. This means: **to add a new simulation instance, add another `<applet>` block in `index.html` with the desired params** — no JS changes needed.

`LeastActionSimulation` (single class, ~660 lines, all in `leastAction.js`):

- **State**: a `points[]` array of `{t, h}` — endpoints plus `numOfLayers - 1` intermediate points. The array length is always `numOfLayers + 1` (note: `numOfLayers` is the number of *segments*, matching the original Java naming, not points).
- **Physics**: mass = 0.2 kg, g = 9.8 m/s². `calculateSegmentAction(i)` returns `(T − V) · Δt` for segment i using average V across its endpoints; `calculateTotalAction()` sums segments.
- **HUNT** (`hunt()` / `stopHunting()`): on each `setInterval` tick, sweeps intermediate points and moves each to a locally action-minimizing height via a small numeric search. This is what produces the worldline convergence to the classical trajectory.
- **Rendering**: `draw()` is the single render entrypoint; sub-methods (`drawAxes`, `drawGrid`, `drawWorldline`, `drawPoints`, `drawActionDisplay`, `drawTables`, `drawCoordinates`) all read from `this.points`. `drawTables` branches on `config.appletMode` (0–5) to show different pedagogical tables (acceleration / energy / Lagrangian / ΔS pairs). Mode semantics are documented in HTML comments next to each `<applet>` in `index.html` — keep those comments in sync if modes change.
- **Coordinates**: `timeToX`/`heightToY` and their inverses handle the graph↔canvas mapping, including `zoomLevel`/`zoomCenter` for display #5.
- **Interaction**: mouse + touch handlers share logic; `movableEnds=0` locks endpoints to dragging.

`questionStyles.js` exposes three globals (`question`, `technicalQuestion`, `technicalQuestionIntro`) used inline in `index.html` to render numbered pedagogical prompts. It is purely presentational.

## Porting status

Per the README, the JS port is a work-in-progress. The original Java applet source is checked out locally at `/Users/rpm/Projects/LeastAction` (Java classes under `ActionApplets/JAction/`) — consult it for intended physics/UX when porting behavior. The live version on eftaylor.com is the other reference. Preserve the `<applet>`-tag-as-config pattern — it's what keeps `index.html` diff-minimal against the original.
