(this["webpackJsonpleast-action"]=this["webpackJsonpleast-action"]||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(3),r=i.n(a),o=(i(8),i(9),i(0));var h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=windows-1250"}),Object(o.jsx)("link",{rel:"stylesheet",type:"text/css",href:"style.css"}),Object(o.jsx)("title",{children:"Principle of Least Action Interactive"}),Object(o.jsx)("h1",{align:"center",children:"PRINCIPLE OF LEAST ACTION INTERACTIVE"}),Object(o.jsxs)("h2",{align:"center",children:["Java programming by Slavomir Tuleja",Object(o.jsx)("br",{}),"Text by Edwin F. Taylor and Slavomir Tuleja",Object(o.jsx)("br",{}),"Draft of March 12, 2003"]}),Object(o.jsx)("h2",{align:"center",children:"Copied from  https://www.eftaylor.com/software/ActionApplets/LeastAction.html"}),Object(o.jsx)("h3",{children:"Introduction"}),Object(o.jsxs)("p",{children:["Throw an apple vertically upward from the ground (zero height). We demand that 3 seconds later the apple return to our hand at the same height (zero) from which we launched it. What is the motion of this apple between the events of launch and catch? At what height can the apple be found at any given time? Or to express the question more technically: What is the ",Object(o.jsx)("i",{children:"worldline"})," of the apple between launch and catch? We use the ",Object(o.jsx)("b",{children:"principle of least action"})," to find answers to these questions."]}),Object(o.jsxs)("p",{children:["The principle of least action defines the action ",Object(o.jsx)("i",{children:"S"})," for motion along a worldline between two fixed events:"]}),Object(o.jsx)("img",{src:"data:image/gif;base64,R0lGODlhtAArAPcAAIGBgQAAAAECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwECAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GlNvZnR3YXJlOiBNaWNyb3NvZnQgT2ZmaWNlACH5BAEAAAAALAAAAAC0ACsAAAj+AAEIHEiwoMGDCBEGWJiwocOHEBMuDBCxosWLGDM6nKixo0cAHD+KHEmyIcOSKCVSTMmypcaTLlvCjEmzpsGZNkfizJky5EqXOwdO/KmQaM2gQkEOHWqRqdKQD3f+hCrTaEGrCnkqlShwatKmBGFiPWiV6NiSSLtG9EoT6Uqzai/CDQuR7dyYac9e/dp2bFmPbOlu5AtSa96NFN+mJRkUq96ohCMLTdx1pt+li6Oe1atY8tOlHRuTDe258M3Kkh8z9muSr2qdjk+rxCx4s2zTuO9Oph2adVbXOUXvJc15eNzcgvv+Pp478FXMr4uONp6RMtfkYis71w6693TCna3+R/d+m3n1x0bDmz5JFW9Z6GEZss8Me7nT6oOfJ1Y8vmd/rSb5xtN/AMZXoEiHBXfgSwQuaOB1bTl4noQMUmghRvRd+JyGHGrW4VoNfjhghh22J+KHJp4YX4gqtujiizDGKKOFLF5Y44yk4Uidjnhttd+PHN2I0n6FBQmakDwW6SNyb+FGIWXyMakWkjoGOWVS/GlopZJXPpXkR3ZJ6SSNX1nHJZVJHgndfByquSZqX8Yp55x01mnnnXeKReSYbU61J5p2zgWoTLXhiZiRPm7p02fIsaRmolF6WeSWfM7ZpHhiNjmpkoPGBWWXZ3q6pJl1EompV5peOiWJco0KKqYo68Waopx/vhqrrKASyp6tqXZJap7HyScskG8KC1SwP3q5JlPGXhgQAAA7",width:180,height:43,alt:"",border:0}),Object(o.jsxs)("p",{children:["Here ",Object(o.jsx)("i",{children:"L"})," is called the ",Object(o.jsx)("b",{children:"Lagrangian"}),". In simple cases the Lagrangian is equal to the difference between the kinetic energy ",Object(o.jsx)("i",{children:"T"})," and the potential energy ",Object(o.jsx)("i",{children:"V"}),", that is, ",Object(o.jsx)("i",{children:"L"}),"\xa0=\xa0",Object(o.jsx)("i",{children:"T"}),"\xa0\u2013\xa0",Object(o.jsx)("i",{children:"V"}),".  In this interactive document we will approximate a continuous worldline with a worldline made of straight connected segments. The computer then multiplies the value of (",Object(o.jsx)("i",{children:"T"}),"\xa0\u2013\xa0",Object(o.jsx)("i",{children:"V"}),") on each segment by the time lapse ",Object(o.jsx)("img",{src:"gifs/delta.gif",width:9,height:11,alt:"",border:0}),Object(o.jsx)("i",{children:"t"})," for that segment and adds up the result for all segments, giving us an approximate value for the action ",Object(o.jsx)("i",{children:"S"})," along the entire worldline. Our task is then to move the connected segments of the worldline so that they result in the minimum total value of the action ",Object(o.jsx)("i",{children:"S"}),"."]}),Object(o.jsx)("p",{children:"In the following we assume a mass of 0.2 kilogram for the apple."}),Object(o.jsxs)("p",{children:["We assume that you are acquainted with the concepts of ",Object(o.jsx)("i",{children:"acceleration"}),", ",Object(o.jsx)("i",{children:"energy"}),", and ",Object(o.jsx)("i",{children:"worldline"}),"."]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Display #1: Manual hunting for the worldline of least action"}),Object(o.jsx)("p",{children:"Find the worldline of the apple that has the minimum value of the action. To do this quickly, use the interactive display to manipulate intermediate points of the worldline. With the cursor, drag each of the three black intermediate points on the worldline up and down. Notice the following features of the display:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["You can find the height and time of any location (any ",Object(o.jsx)("i",{children:"event"}),") on the screen by pointing the cursor at that location. The coordinate values appear at the lower right."]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["The display shows the current value of the total action ",Object(o.jsx)("i",{children:"S"})," at the bottom left of the display. Below it is displayed the ",Object(o.jsx)("i",{children:"minimum"})," value ",Object(o.jsx)("i",{children:"S"}),Object(o.jsx)("sub",{children:"min"})," of the action found so far as you have dragged that dot up and down."]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["Your goal is to find the worldline for which the total action is the minimum. For this particular motion, the ",Object(o.jsx)("i",{children:"minimum"})," value of the action is the ",Object(o.jsx)("i",{children:"most negative"}),"."]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Start with the initial worldline that lies straight across the bottom of the spacetime diagram. (RESET if you have been trying out the display.)"}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"1."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Lazy apple"}),". What motion of the apple does this initial horizontal worldline describe? Have you ever observed an apple following such a horizontal worldline? Is a horizontal worldline possible for an apple subject to only the downward gravitational force?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("p",{children:"Put the cursor on one of the three intermediate point-events and drag it upward. What happens to the value of the action shown below the display? Continue dragging that same point upward."}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"2."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Jumpy apple"}),". From the formula for the action, explain why the value of the action begins to rise again as the point is dragged upward beyond a certain height. [Hint: How does potential energy depend on the height of the dot? How does kinetic energy depend on the velocity (the slope of each segment)?]",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsxs)("p",{children:["Drag the dot to the height for which the value of the total action is minimum. Then drag another intermediate point up and down. You can tell immediately when you have passed the height for minimum action, because the ",Object(o.jsx)("i",{children:"S"}),Object(o.jsx)("sub",{children:"min"})," display stops changing."]}),Object(o.jsx)("p",{children:"Set the second dot to the minimum-action value and move along to drag the third dot up and down. When you have set the third dot to the height for minimum action, make a prediction about the answer to the following question:"}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"3."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Cooperating events. Predict"}),": If you go back and drag the first intermediate dot up and down, can you make the value of the action decrease still further?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("p",{children:"Try it by dragging the first dot up and down again. What is the answer to the question? Did you predict correctly?"}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"4."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Practice, practice"}),". Was ",Object(o.jsx)("i",{children:"one"})," cycle of adjusting the height of each dot to its minimum-action height sufficient to find the worldline of least action? Explain why or why not.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsxs)("p",{children:["Now cycle repeatedly through the three dots, moving each one to find the minimum (most negative) value of the action. ",Object(o.jsx)("i",{children:"PLEASE BE PATIENT"}),". It is worth going through this tedious manual process completely at least once.  After many cycles through the three dots, you reach a condition in which added cycles through the dots does ",Object(o.jsx)("i",{children:"not"})," further reduce the value of the total action. ",Object(o.jsx)("i",{children:"Record the value of the minimum action for your final worldline"}),"."]}),Object(o.jsxs)("p",{children:["The worldline you have constructed satisfies the condition of least action ",Object(o.jsx)("i",{children:"for this special case of a worldline of four straight segments equally spaced along the time axis"}),"."]}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:Object(o.jsxs)("i",{children:["Technical questions, indexed A, B, C, \u2026, typically concern details of the displays rather than basic ideas of the principle of least action.  You may want to skip technical questions the first time through and return to them on a second or third pass.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"A."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Checking the computer. Technical."})," Using the cursor, find coordinates for the endpoints of the first two segments of the worldline. Calculate kinetic energy values for the first two segments of the worldline. Calculate the average potential energy values for the first two segments of the worldline:  ",Object(o.jsx)("img",{src:"gifs/averages.gif",width:79,height:17,alt:"",border:0,align:"middle"})," . Compute the average value of the action along each segment of the worldline. Compute the total action along all four segments of the worldline. Compare your numerical total for the action with that displayed by the computer at the lower left.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Display #2: Automatic hunting for worldline of least action"}),Object(o.jsx)("p",{children:"Of course a worldline with only three intermediate points is not realistic. The second display is a bit better, with many intermediate points. If you want, you can start the process of finding the worldline of least action by dragging each of these many event-dots up and down. But life is short, and computers are designed to do routine work quickly.  So let the computer find the worldline of minimum action by repeated cycling through the dot-events at the ends of each segment of the worldline."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Click on the button labeled HUNT. The computer begins cycling quickly through the dots, hunting for the worldline of least action. You can interrupt the process at any time by clicking on PAUSE and then either continue by pressing HUNT again or return to the initial horizontal worldline by clicking on RESET. When the action stops changing as the program hunts, record the value of the action for this worldline and the value of the maximum height of the trajectory."}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"6."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"In a valley? Predict:"}),' Which of the following statements is correct? Or are both correct? neither? "After the worldline has stopped changing: (a) If I drag one dot ',Object(o.jsx)("i",{children:"upward"}),", the value of the action ",Object(o.jsx)("i",{children:"S"})," will ",Object(o.jsx)("i",{children:"decrease"}),". (b) If instead I drag the same dot ",Object(o.jsx)("i",{children:"downward"}),", the value of the action ",Object(o.jsx)("i",{children:"S"})," will ",Object(o.jsx)("i",{children:"decrease"}),'."  Drag one dot up and then down. Was your prediction correct? Explain.',Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"7."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"More dots better?"})," Compare the value of minimum action for the second display with the value you found for the first display. Are they different? Why or why not?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsxs)("p",{children:["Of course even a worldline consisting of many straight segments is not the same as a ",Object(o.jsx)("i",{children:"continuous"})," worldline, made up of an infinite number of event-points. The computer is not able to carry out the minimization of action for an infinite number of points. But you can imagine that as more and more dots are added, the value of the resulting action gets closer and closer to the value for a continuous worldline."]}),Object(o.jsx)("p",{children:"This second program differs from the first one in that it allows you to change the heights of initial and final events. Drag the final event to 5 meters height. Notice that the program has rescaled the vertical axis to make it possible for the worldline to fit into the window. Before you press the HUNT button answer the following question:"}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"8."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Landing on a step. Predict:"})," With the final event set at 5 meters height, and with the same requirement that the apple arrive at the final event 3 seconds after launch, do you expect the maximum height achieved to be greater or less than the maximum height with the final event at zero height? Make a qualitative argument for your prediction. HUNT and find the maximum height. Was your prediction and qualitative argument correct? If not, what should that argument have been?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"B."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Action when hop up. Technical. Predict:"})," With the final event set at a height of 5 meters in the display, do you expect the minimum action to be less (that is, ",Object(o.jsx)("i",{children:"more"})," negative) or greater (that is, ",Object(o.jsx)("i",{children:"less"})," negative) than for the final event at zero height? HUNT and check out your prediction. Was it correct? Explain why or why not?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"C."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Initial change in action. Technical."})," RESET and drag one intermediate event-dot upward from the horizontal line of dots. As you start to drag the dot, does the value of the action displayed in the lower left initially increase or decrease. Return to the first display (the one with only three intermediate dots), RESET, and drag one dot upward. Initially does the value of the action increase or decrease? Why the difference in the two displays? Hint: Use the expression for the action.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Display #3: Constant acceleration under uniform gravitation."}),Object(o.jsx)("p",{children:"Use the program below to show that for the worldline of least action the acceleration of the apple, corresponding to each pair of successive segments, is constant, i.e. the motion of the apple is governed by Newton's second law of motion."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"The acceleration for each pair of successive segments of current test worldline is displayed in table situated on the right. Click the HUNT button to start automatic hunting for the minimum-action worldline. When the worldline stops changing, click on PAUSE. What is the value of the constant acceleration?"}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"9."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Throwing upward from a cliff. Predict."})," Now you are about to increase the height of the launch event at the left (with zero height for the final event) and then HUNT. Will the resulting motion have the same uniform acceleration as in the case that both launch and catch are at zero height? Does your answer depend on how high the launch event is dragged? Will your answer be different if the catch event is also raised? RESET, drag the initial event upward, then HUNT. Were your predictions correct? If not, state the correct predictions and explain why they are correct.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"D."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Three in one. Technical."})," RESET, then HUNT until the display stops changing. Choose one intermediate point on the worldline and drag this point up and down. Why does the change of height of ",Object(o.jsx)("i",{children:"one"})," point lead to change in ",Object(o.jsx)("i",{children:"three"})," entries in the acceleration table?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Display #4: Constant mechanical energy for the least-action worldline"}),Object(o.jsx)("p",{children:"Use the program below to show that for the worldline of least action the mechanical energy of the apple along each segment is a constant of the motion."}),Object(o.jsxs)("p",{children:["The total energy ",Object(o.jsx)("i",{children:"E"}),"\xa0=\xa0",Object(o.jsx)("i",{children:"T"}),"\xa0+\xa0",Object(o.jsx)("i",{children:"V"})," for each segment of current trial worldline is displayed in the table at the right of the display. Click the HUNT button to find the worldline of  least action. Write down the value of the constant energy."]}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"10."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Throwing from cliff to cliff."})," RESET and drag both the initial event and the final event to the same height greater than zero. ",Object(o.jsx)("i",{children:"Predict:"})," When you HUNT and the display stops changing, will the total energy be greater or less than (or the same as) it was when initial and final events were at zero height? Press the HUNT button. Was your prediction correct? State the correct prediction and explain why it is correct.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"11."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Catching on a step."})," RESET and drag only the final event to a height greater than zero. Predict: When you HUNT and the display stops changing, will the total energy be greater or less than (or the same as) it was when initial and final events were at zero height? HUNT and explain why your prediction was correct or incorrect.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"12."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Predicting the peak I."})," RESET and HUNT until the display stops changing. From the velocity along the first segment in the preceding display, calculate the expected maximum height using the conservation of energy. How does your calculated maximum value compare with the peak value read off of the worldline directly? Can you think of a qualitative reason for any discrepancy between the two values?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"13."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Predicting the peak II."})," Using the velocity-acceleration table in the preceding display, derive an estimate of the initial vertical velocity at ",Object(o.jsx)("i",{children:"t"}),"\xa0=\xa00. (This is not the same as the average velocity along the first segment displayed in the table.) When you use that initial value of the velocity, how does your calculated maximum height compare with the height shown in the graph?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"30%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"E."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Influence of one. Technical."})," How many entries in the energy column ",Object(o.jsx)("i",{children:"E"}),"\xa0=\xa0",Object(o.jsx)("i",{children:"T"}),"\xa0+\xa0",Object(o.jsx)("i",{children:"V"})," are altered by dragging one intermediate point away from the minimum-action condition? Explain why this is the same as or different from the number of entries changed in the acceleration table when you moved one intermediate point (technical question D).",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"14."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Lagrangian a constant?"})," HUNT until the display stops changing and look in the table for values of the Lagrangian ",Object(o.jsx)("i",{children:"L = T\xa0\u2013\xa0V"}),". Is the value of the Lagrangian ",Object(o.jsx)("i",{children:"L"})," a constant of the motion?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"15."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Fickle Lagrangian."})," Explain qualitatively why ",Object(o.jsx)("i",{children:"L"})," has a large positive value for segments near the beginning and end of the worldline and a large negative value for segments near the maximum height.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"16."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"All-negative Lagrangian? Predict."})," Suppose that you raise the initial and final points to the same height greater than zero. Can you find a value for this initial/final height so that all entries in the ",Object(o.jsx)("i",{children:"L = T\xa0\u2013\xa0V"})," column of the table are negative? Try this and report on the correctness of your prediction. Does your result demonstrate that the principle of least action is wrong?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Display #5: The Incremental Principle of Least Action"}),Object(o.jsxs)("p",{children:["Mechanics is often taught using Newton's second law: ",Object(o.jsx)("i",{children:Object(o.jsx)("b",{children:"F = ma"})}),". What is the relation between ",Object(o.jsx)("i",{children:Object(o.jsx)("b",{children:"F = ma"})})," and the principle of least action that we have been describing here? Richard Feynman answers this question clearly:"]}),Object(o.jsx)("p",{children:Object(o.jsxs)("i",{children:["There is quite a difference in the characteristic of a law which says a certain integral from one place to another is a minimum\u2014which tells something about the whole path\u2014and of a law which says that as you go along, there is a force that makes it accelerate. The second way tells how you inch your way along the path, and the other is a grand statement about the whole path. ... Let's suppose that we have the true path and that it goes through some point a in space and time, and also through another nearby point b. Now if the entire integral from t",Object(o.jsx)("sub",{children:"1"})," to t",Object(o.jsx)("sub",{children:"2"})," is a minimum, it is also necessary that the integral along the little section from a to b is also a minimum. It can't be that the part from a to b is a little bit more. Otherwise you could just fiddle with just that piece of the path and make the whole integral a little lower. So every subsection of the path must also be a minimum. And this is true no matter how short the subsection.  Therefore the principle that the whole path gives a minimum can be stated also by saying that an infinitesimal section of path also has a curve such that it has a minimum action. ... So the statement about the gross property of the whole path becomes a statement of what happens for a short section of the path\u2014a differential statement. ... That's the qualitative explanation of the relation between the gross law and the differential law."]})}),Object(o.jsxs)("div",{align:"right",children:["\u2014Richard P. Feynman et. al, ",Object(o.jsx)("i",{children:"The Feynman Lectures on Physics"}),", Volume II, page 19-8"]}),Object(o.jsx)("p",{children:"In brief, Feynman is saying that if the entire worldline has minimum action compared with possible nearby worldlines, then every small segment along the worldline must have minimum action compared to possible nearby segments."}),Object(o.jsx)("p",{children:"This final  display allows you to check out Feynman's description by moving one of the point-events on the worldline and watching the resulting change in the action for segments on either side of that point and also the total action of the entire worldline. "}),Object(o.jsx)("p",{children:"Start by playing with the Zoom feature that allows you to look closely at any moveable point-event on the worldline."}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"17."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Minimum action for segments I?"})," HUNT for a worldline of minimum action. Now zoom in on one intermediate point and move it up and down. Pay attention to the values of the action in the table at the right. Does moving the point increase or decrease the value of the summed action on the two adjacent segments? Does it increase or decrease the value of the total action along the worldline?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"18."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Minimum action for segments II?"}),"  RESET and construct a worldline that is ",Object(o.jsx)("i",{children:"not"})," one of minimum action. One way to do this is to HUNT and then press PAUSE quickly, before the display reaches equilibrium. Zoom in on one intermediate point and ",Object(o.jsx)("i",{children:"predict:"})," Can you move this point so that the summed action on the two adjacent segments increase or decrease? Try it. Was your prediction correct? In this case can you move the point so that the value of the total action along the worldline decreases?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"19."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Minimum action for segments III?"}),"  Explain any difference between the results you found in questions 17 and 18. State clearly the answer to the following question: Under what circumstances can moving one intermediate point-event increase the total value of the action along the worldline?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"20."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Acceleration a minimum?"})," HUNT for a worldline of minimum action, then zoom in, click on one event without moving it, and record the acceleration on the segment pair (value given in the lower right). ",Object(o.jsx)("i",{children:"Predict"})," what will happen when you drag that point up and down: Will the value of the acceleration increase or decrease? Is the acceleration between these two segments either a minimum or a maximum for the minimum-action worldline? Now drag the point up and then down. Was your prediction correct?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("table",{width:"100%",border:0,cellSpacing:2,cellPadding:2,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{width:"10%",align:"right",valign:"top",children:Object(o.jsx)("b",{children:"21."})}),Object(o.jsx)("td",{valign:"top",children:Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:[Object(o.jsx)("i",{children:"Total energy a minimum?"})," HUNT for a worldline of minimum action, then zoom in, click on one event without moving it, and record the energies along each of the two segments on either side of that point. ",Object(o.jsx)("i",{children:"Predict"})," what will happen when you drag that point up and down: Will the energies on the adjacent segments increase or decrease? For the minimum-action worldline, is the energy a minimum (or maximum)? Now drag the point up and then down. Was your prediction correct?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["This diagram demonstrates that when the worldline minimizes action, every segment also minimizes action. Why is this important? Because, as Feynman says, it connects the principle of least action to Newton's acceleration law ",Object(o.jsx)("i",{children:"F\xa0=\xa0ma"}),". By analyzing the action on a pair of segments, as in this display, you can derive ",Object(o.jsx)("i",{children:"F\xa0=\xa0ma"})," using elementary calculus. See details in the paper ",Object(o.jsx)("i",{children:"Classroom derivation of Newtonian mechanics from the principle of least action."})," by Jozef Hanc, Slavomir Tuleja, and Martina Hancova at the website:"]}),Object(o.jsx)("p",{}),Object(o.jsx)("center",{children:Object(o.jsx)("a",{href:"http://www.eftaylor.com/leastaction.html",children:"http://www.eftaylor.com/leastaction.html"})}),Object(o.jsx)("p",{}),Object(o.jsxs)("p",{children:["But there is a further payoff: The so-called ",Object(o.jsx)("i",{children:"Lagrange equations"})," are another expression of Newton's laws which are in some ways more general and powerful than ",Object(o.jsx)("i",{children:"F\xa0=\xa0ma"})," . For an introduction to Lagrange's equations and a paper deriving the Lagrange equations from the principle of least action, see the same website."]})]})},l=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,12)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()},8:function(e,t,i){},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.5e214de7.chunk.js.map