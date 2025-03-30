**📌 JavaScript Key Concepts -- Complete Summary & Quick Revision**
==================================================================

**🔹 JavaScript Data Types**
----------------------------

JavaScript has **two types** of data types:\
1️⃣ **Primitive Data Types** (Immutable & stored by value)\
2️⃣ **Reference (Non-Primitive) Data Types** (Mutable & stored by reference)

| **Primitive Data Types** | **Reference Data Types** |
| --- | --- |
| Number (`1, 3.14`) | Objects (`{name: "Prakhar"}`) |
| String (`"hello"`) | Arrays (`[1, 2, 3]`) |
| Boolean (`true, false`) | Functions (`function() {}`) |
| Null (`null`) | Dates, RegExp, Maps, Sets |
| Undefined (`undefined`) | - |
| BigInt (`123456789n`) | - |
| Symbol (`Symbol('id')`) | - |

* * * * *

**🔹 Hoisting (Function & Variable)**
-------------------------------------

**Hoisting** is JavaScript's default behavior of moving function and variable declarations **to the top of their scope** before execution.

| Type | Hoisted? | Default Value | Can Use Before Declaration? |
| --- | --- | --- | --- |
| **Function Declaration** | ✅ Yes | ✅ Full function | ✅ Yes |
| **Function Expression** | ❌ No | ❌ Not hoisted | ❌ No |
| **var** | ✅ Yes | `undefined` | ✅ Yes (but undefined) |
| **let** | ✅ Yes (TDZ) | ❌ No value | ❌ No (TDZ error) |
| **const** | ✅ Yes (TDZ) | ❌ No value | ❌ No (TDZ error) |

* * * * *

**🔹 Loops in JavaScript**
--------------------------

| Loop | Use Case | Works on | Example |
| --- | --- | --- | --- |
| **forEach** | Used for arrays, doesn't return new array | Arrays | `arr.forEach(el => console.log(el));` |
| **for...in** | Iterates over object keys | Objects & Arrays | `for (let key in obj) { console.log(key) }` |
| **for...of** | Iterates over values directly | Arrays, Strings, Maps, Sets | `for (let val of arr) { console.log(val) }` |

* * * * *

**🔹 Functions in JavaScript**
------------------------------

JavaScript has different types of functions:

| Function Type | Explanation | Example |
| --- | --- | --- |
| **Function Declaration** | Named function, hoisted | `function greet() {}` |
| **Function Expression** | Anonymous function stored in a variable | `const greet = function() {};` |
| **Arrow Function (`=>`)** | Shorter syntax, no `this` binding | `const greet = () => {};` |
| **IIFE** | Runs immediately | `(function() { console.log("Run!"); })();` |
| **Callback Function** | Function passed to another function | `fetchData(callback)` |
| **Higher-Order Function** | Function that returns/accepts another function | `function operate(cb) { cb(); }` |
| **Generator Function** | Can pause execution with `yield` | `function* gen() { yield 1; }` |
| **Recursive Function** | Calls itself | `factorial(n) { return n * factorial(n-1); }` |

* * * * *

**🔹 Spread vs Rest Operator**
------------------------------

| Operator | Usage | Example |
| --- | --- | --- |
| **Spread (`...`)** | Expands elements | `let arr2 = [...arr1, 4, 5]` |
| **Rest (`...args`)** | Collects multiple parameters | `function sum(...args) {}` |

* * * * *

**🔹 Important Array Methods**
------------------------------

| Method | Purpose | Example |
| --- | --- | --- |
| **map()** | Transforms each element | `arr.map(x => x * 2);` |
| **filter()** | Returns elements that match condition | `arr.filter(x => x > 10);` |
| **reduce()** | Reduces array to a single value | `arr.reduce((acc, x) => acc + x, 0);` |
| **forEach()** | Loops through elements (no return) | `arr.forEach(x => console.log(x));` |
| **find()** | Finds first matching element | `arr.find(x => x > 5);` |
| **sort()** | Sorts array (default lexicographical) | `arr.sort((a, b) => a - b);` |
| **splice()** | Adds/removes elements | `arr.splice(1, 2, 'new');` |
| **slice()** | Returns part of array | `arr.slice(1, 3);` |
| **shift()** | Removes first element | `arr.shift();` |
| **unshift()** | Adds element to the start | `arr.unshift('new');` |

* * * * *

**🔹 Sorting in JavaScript**
----------------------------

✅ **Ascending Order**
```js

arr.sort((a, b) => a - b);

```

✅ **Descending Order**

```js

arr.sort((a, b) => b - a);

```

* * * * *

**🔹 JavaScript Versions (ES5 vs ES6)**
---------------------------------------

| Feature | ES5 | ES6 |
| --- | --- | --- |
| `var` | ✅ Yes | 🚫 No, replaced by `let` and `const` |
| Function Hoisting | ✅ Yes | ✅ Yes |
| Arrow Functions | 🚫 No | ✅ Yes |
| Classes (`class`) | 🚫 No | ✅ Yes |
| `let` and `const` | 🚫 No | ✅ Yes |
| Template Literals | 🚫 No | ✅ Yes |
| Default Parameters | 🚫 No | ✅ Yes |
| Destructuring | 🚫 No | ✅ Yes |
| Modules (`import/export`) | 🚫 No | ✅ Yes |
| Spread & Rest Operators | 🚫 No | ✅ Yes |

* * * * *


**Final Table for Quick Learning**
----------------------------------

| Concept | Key Points |
| --- | --- |
| **Hoisting** | Functions are fully hoisted, `var` is hoisted with `undefined`, `let`/`const` are hoisted but in TDZ |
| **forEach vs for-in vs for-of** | `forEach` for arrays, `for-in` for object keys, `for-of` for array values |
| **Functions** | Arrow functions are shorter, higher-order functions take other functions as arguments |
| **Array Methods** | `map()` transforms, `filter()` selects, `reduce()` accumulates, `find()` finds first match |
| **Sort in JS** | `(a, b) => a - b` for ascending, `(a, b) => b - a` for descending |
| **Spread vs Rest** | Spread (`...`) expands, Rest (`...args`) collects |
| **Enumerable Properties** | Properties that can be iterated using `for...in` & `Object.keys()` |
| **ES5 vs ES6** | ES6 introduces `let`, `const`, arrow functions, classes, destructuring, and more |


**🔹 Key Differences Between Stack and Heap**
---------------------------------------------

| Feature | **Stack** | **Heap** |
| --- | --- | --- |
| **Used For** | Primitive data types | Non-primitive data (objects, arrays, functions) |
| **Memory Allocation** | Fixed size, managed automatically | Dynamically allocated, requires garbage collection |
| **Speed** | Very fast | Slower compared to stack |
| **Data Storage** | Stores actual values | Stores references (pointers) to memory locations |
| **Copy Behavior** | Copies values | Copies references (not the actual object) |


**Takeaways**
-------------

-   **Stack stores primitive data & function calls.**
-   **Heap stores objects, arrays, & functions.**
-   **Primitive values are copied, while objects store references.**
-   **Use deep copy for avoiding reference issues in heap memory.**

**📌 Why Are Functions Called First-Class Citizens in JavaScript?**
-------------------------------------------------------------------

In JavaScript, **functions are first-class citizens** because they can be:\
✔️ Assigned to variables\
✔️ Passed as arguments to other functions\
✔️ Returned from other functions\
✔️ Stored in data structures like arrays & objects


**🚀 Summary For HOISTING**
--------------------

| Feature | `var` | `let` / `const` | Function Declaration | Function Expression (`var`) |
| --- | --- | --- | --- | --- |
| **Hoisted?** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Initialized?** | ✅ As `undefined` | ❌ No (TDZ) | ✅ Fully hoisted | ✅ As `undefined` |
| **Usable Before Declaration?** | ✅ Yes (but `undefined`) | ❌ No (TDZ) | ✅ Yes | ❌ No (TypeError) |

📌 **Key Takeaways:**

-   **`var` is hoisted but initialized as `undefined`**.
-   **`let` and `const` are hoisted but NOT initialized** (Temporal Dead Zone).
-   **Function declarations are fully hoisted**.
-   **Function expressions behave like variables (hoisted but undefined if using `var`)**.


### **JavaScript DOM Methods & Properties**

| **Topic** | **Description** | **Example** |
| --- | --- | --- |
| `setAttribute` | Sets an attribute (like `id`, `class`, `src`, etc.) on an HTML element. | `document.querySelector('img').setAttribute('alt', 'Image Description');` |
| `className` | Gets or sets the `class` attribute of an element. | `element.className = 'new-class';` |
| `cssText` | Directly sets the CSS styles of an element as a string. | `element.style.cssText = 'color: red; font-size: 20px;';` |
| `$0` | Refers to the currently selected element in the browser developer tools. | Type `$0` in the browser console to interact with the selected element. |
| `addEventListener` | Attaches an event listener to an element. | `button.addEventListener('click', () => alert('Clicked!'));` |
| `removeEventListener` | Removes an event listener from an element. | `button.removeEventListener('click', clickHandler);` |
| `dispatchEvent` | Triggers a custom or predefined event on an element. | `button.dispatchEvent(new Event('click'));` |
| `monitorEvents` | Tracks all events happening on an element. Works in the console for debugging. | `monitorEvents(document.body);` |
| `unmonitorEvents` | Stops tracking all events on an element. | `unmonitorEvents(document.body);` |

* * * * *

### **All Browser Events**

Here are the common categories of browser events:

| **Category** | **Examples** | **Description** |
| --- | --- | --- |
| **Mouse Events** | `click`, `dblclick`, `mousemove` | Triggered by user interactions with the mouse. |
| **Keyboard Events** | `keydown`, `keyup`, `keypress` | Triggered when a user presses or releases a key. |
| **Form Events** | `submit`, `input`, `change` | Triggered by form actions like submission or input changes. |
| **Window Events** | `resize`, `scroll`, `load` | Triggered by actions related to the browser window or document. |
| **Touch Events** | `touchstart`, `touchmove`, `touchend` | Triggered by touch gestures on devices like smartphones. |
| **Custom Events** | Custom user-defined events. | Events created using `new CustomEvent('eventName')`. |

* * * * *

### **Core Event Concepts**

| **Term** | **Description** |
| --- | --- |
| **Event** | Any action or occurrence that happens in the browser, like clicking a button or pressing a key. |
| **Event Target** | The element on which the event occurred. Example: If you click a button, the button is the target. |
| **Event Listener** | A function that listens for a specific event and runs code when the event occurs. |
| **Event Type** | The type of event being listened for (e.g., `click`, `mousemove`, etc.). |

* * * * *

### **Event Phases**

Events go through **3 phases** in the DOM:

| **Phase** | **Description** | **Example** |
| --- | --- | --- |
| **Capturing Phase** | The event is captured from the top of the DOM tree and moves down to the target. | Document → Parent → Child → Target |
| **Target Phase** | The event reaches the target element. | Event occurs directly on the clicked button. |
| **Bubbling Phase** | The event bubbles back up the DOM tree after reaching the target. | Target → Child → Parent → Document |

* * * * *

### **Event Object**

The **event object** contains information about the event. Some important properties and methods:

| **Property/Method** | **Description** | **Example** |
| --- | --- | --- |
| `type` | The type of event (e.g., `click`, `keydown`). | `event.type` |
| `target` | The element on which the event occurred. | `event.target` |
| `preventDefault` | Prevents the default behavior of the event (e.g., stopping form submission). | `event.preventDefault();` |
| `stopPropagation` | Stops the event from bubbling or capturing. | `event.stopPropagation();` |

### **Key Differences**

| **Type** | **Who Makes the Request** | **Purpose** | **Example** |
| --- | --- | --- | --- |
| **Network Request** | The browser or app | Communicates with a server to load or send data. | Loading a webpage or API call. |
| **AJAX Request** | The browser (via JavaScript) | Fetches or sends data without reloading the page. | Updating content dynamically (like a search suggestion box). |
| **Database Connection Request** | The server | Fetches or saves data in a database. | Running a query like `SELECT * FROM users`. |


# DOM Manipulation Methods in JavaScript

| **Category**    | **Property/Method**       | **Purpose**                                       | **Example Usage**                                      | **Notes** |
|---------------|----------------------|-------------------------------------------------|-------------------------------------------------|---------|
| **Attributes** | `setAttribute`        | Sets the value of an attribute.                  | `element.setAttribute('id', 'myDiv');`         | Use for `id`, `src`, `alt`, `data-*`, etc. |
|               | `getAttribute`        | Retrieves the value of an attribute.             | `let id = element.getAttribute('id');`        | Works for any attribute. |
|               | `removeAttribute`     | Removes an attribute from an element.           | `element.removeAttribute('id');`              | Removes the attribute entirely. |
| **Classes**   | `className`           | Sets or gets all classes of an element as a string. | `element.className = 'class1 class2';`        | Overwrites all existing classes. |
|               | `classList.add`       | Adds a single class to an element.              | `element.classList.add('newClass');`          | Does not overwrite existing classes. |
|               | `classList.remove`    | Removes a specific class.                       | `element.classList.remove('oldClass');`       | Use for targeted removal. |
|               | `classList.toggle`    | Toggles a class on or off.                      | `element.classList.toggle('hidden');`         | Handy for state changes (e.g., showing/hiding elements). |
|               | `classList.contains`  | Checks if a class exists on an element.         | `element.classList.contains('hidden');`       | Returns `true` or `false`. |
| **Styles**    | `cssText`             | Sets or gets all styles of an element as a single string. | `element.style.cssText = 'color: red; font-size: 16px;';` | Use for multiple inline styles at once. |
|               | `style.propertyName`  | Sets or gets a single style property.           | `element.style.color = 'blue';`               | Use camelCase for CSS properties like `backgroundColor`. |
|               | `getComputedStyle`    | Retrieves computed (final) styles applied to an element. | `let styles = window.getComputedStyle(element); console.log(styles.color);` | Useful for dynamically determining applied styles. |
| **Content**   | `innerHTML`           | Gets or sets the HTML content inside an element. | `element.innerHTML = '<p>Hello</p>';`         | Allows embedding HTML. Be cautious of potential XSS risks. |
|               | `textContent`         | Gets or sets the text content of an element.    | `element.textContent = 'Hello, world!';`      | Only plain text---no HTML parsing. |
|               | `outerHTML`           | Gets or sets the entire HTML, including the element itself. | `console.log(element.outerHTML);` | Overwrites or retrieves the entire element structure. |
| **Elements**  | `appendChild`         | Appends a child node to the parent element.     | `parent.appendChild(child);`                  | Adds elements dynamically. |
|               | `removeChild`         | Removes a specific child node from the parent element. | `parent.removeChild(child);` | Removes an existing element. |
|               | `replaceChild`        | Replaces one child node with another.           | `parent.replaceChild(newChild, oldChild);`    | Updates existing elements. |
|               | `insertAdjacentHTML`  | Inserts HTML at specific positions relative to an element. | `element.insertAdjacentHTML('beforeend', '<p>New content</p>');` | Positions: `beforebegin`, `afterbegin`, `beforeend`, `afterend`. |
| **Events**    | `addEventListener`    | Attaches an event listener to an element.       | `element.addEventListener('click', () => console.log('Clicked!'));` | Supports multiple events of the same type. |
|               | `removeEventListener` | Removes an attached event listener.             | `element.removeEventListener('click', callbackFunction);` | Ensure the callback reference is the same as when added. |
| **Special Shortcuts** | `$0`           | Refers to the currently selected element in DevTools **Elements tab**. | `$0.style.color = 'blue';` | `$1`, `$2`, etc., refer to previously selected elements. |



### **2\. All Browser Events**

Browser events are actions or occurrences that can happen in the browser and can be handled using JavaScript. Events are broadly categorized into the following types:

| **Category** | **Examples of Events** | **Description** |
| --- | --- | --- |
| **Mouse Events** | `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`, `contextmenu` | Triggered by mouse actions. |
| **Keyboard Events** | `keydown`, `keyup`, `keypress` | Triggered by keyboard actions. |
| **Form Events** | `submit`, `change`, `focus`, `blur`, `reset`, `input` | Related to form interactions. |
| **Window Events** | `load`, `unload`, `resize`, `scroll`, `error`, `beforeunload` | Triggered by actions related to the window or document. |
| **Touch Events** | `touchstart`, `touchmove`, `touchend`, `touchcancel` | Triggered by touch interactions (mobile devices). |
| **Clipboard Events** | `copy`, `cut`, `paste` | Triggered when clipboard actions occur. |
| **Drag Events** | `drag`, `dragstart`, `dragend`, `dragover`, `drop` | Triggered when an element is dragged or dropped. |
| **Media Events** | `play`, `pause`, `ended`, `volumechange`, `timeupdate` | Triggered by media elements (e.g., video or audio). |
| **Focus Events** | `focus`, `blur`, `focusin`, `focusout` | Triggered when an element gains or loses focus. |
| **Custom Events** | Any event created with `CustomEvent` | User-defined events. |



### **Summary Table**

| **Method/Concept** | **Purpose** | **Example** |
| --- | --- | --- |
| `monitorEvents()` | Logs all or specific events on an element. | `monitorEvents(btn, 'click');` |
| `unmonitorEvents()` | Stops logging monitored events. | `unmonitorEvents(btn, 'click');` |
| `addEventListener()` | Attaches an event listener to an element. | `btn.addEventListener('click', callback);` |
| `removeEventListener()` | Removes a previously attached event listener. | `btn.removeEventListener('click', callback);` |
| `dispatchEvent()` | Manually triggers an event. | `btn.dispatchEvent(new Event('click'));` |
| **Event** | Represents an action or occurrence in the browser. | `{ type: 'click', target: <button> }` |
| **Event Target** | The DOM element that triggered the event. | `event.target` |
| **Event Listener** | A function that executes when an event occurs. | `function handleClick(event) { ... }` |
| **Event Type** | The type of event (e.g., `click`, `keydown`). | `event.type` |

### **Event Propagation in Summary**

| **Phase** | **Trigger Order** | **How to Listen** | **Notes** |
| --- | --- | --- | --- |
| **Capturing Phase** | From root to the target element. | Use `{ capture: true }` | Rarely used compared to bubbling. |
| **At Target** | Executes at the target element. | Normal `addEventListener()` syntax. | Happens for all listeners. |
| **Bubbling Phase** | From target back to the root element. | Default phase (no special options). | Most commonly used phase. |


### **1\. Key Properties of the Event Object**

| **Property** | **Description** |
| --- | --- |
| `type` | The type of event (e.g., `'click'`, `'keydown'`). |
| `target` | The DOM element that triggered the event. |
| `currentTarget` | The element on which the event listener is currently executing. |
| `bubbles` | `true` if the event bubbles up the DOM tree. |
| `cancelable` | `true` if the event's default action can be prevented. |
| `defaultPrevented` | `true` if `preventDefault()` has been called on the event. |
| `timeStamp` | The time (in milliseconds) when the event was created. |
| `isTrusted` | Indicates if the event was triggered by the user (`true`) or by code (`false`). |
| `key` | For keyboard events, the key pressed (e.g., `'Enter'`, `'a'`). |
| `clientX` / `clientY` | For mouse events, the X and Y coordinates relative to the viewport. |


### **Summary Table**

| **Concept** | **Description** | **Example/Usage** |
| --- | --- | --- |
| **`nodeName`** | Returns the name of the DOM node (uppercase for elements, `#text` for text nodes). | `element.nodeName // "DIV", "#text"` |
| **`DOMContentLoaded`** | Fires when the DOM is fully loaded and parsed, before images or stylesheets are loaded. | `document.addEventListener('DOMContentLoaded', callback);` |
| **Dynamically Adding Script** | Add `<script>` dynamically to the DOM, ensuring it runs after the DOM is loaded. | Dynamically create and append `<script>` inside `DOMContentLoaded`. |
| **`useCapture = true`** | Listens to events during the **capturing phase** (default is `false`, which listens during bubbling). | `element.addEventListener('click', handler, true);` |


#### **Reflow vs. Repaint Comparison:**

| **Aspect** | **Reflow** | **Repaint** |
| --- | --- | --- |
| **Definition** | Recalculates layout and geometry of elements. | Updates visual appearance without layout. |
| **Triggered By** | Changes to size, position, structure. | Visual changes (e.g., color, visibility). |
| **Performance** | More expensive (affects layout and tree). | Less expensive (only redraws the visuals). |


### **Summary Table**

| **Concept** | **Description** | **Example/Details** |
| --- | --- | --- |
| **`performance.now()`** | Provides high-precision timestamps (in milliseconds) for measuring elapsed time. | `performance.now() - startTime` |
| **Reflow** | Recalculates layout due to changes in geometry (e.g., size, position). | Adding a DOM element triggers reflow. |
| **Repaint** | Updates visual appearance without affecting layout. | Changing `background-color` triggers repaint. |
| **DocumentFragment** | Lightweight DOM container for batch updates without triggering reflows/repaints. | Use `document.createDocumentFragment()` to append multiple elements efficiently. |
| **Why no Reflow/Repaint?** | `DocumentFragment` is not attached to the DOM, so changes occur offscreen until appended. | Single reflow/repaint occurs when the `DocumentFragment` is appended to the DOM. |


### **Key Differences**

| **Aspect** | **Synchronous Code** | **Asynchronous Code** |
| --- | --- | --- |
| **Execution Order** | Tasks execute sequentially, one after the other. | Tasks can run in the background, allowing others to proceed. |
| **Blocking** | Yes---next task waits until the current one finishes. | No---next task can proceed while waiting for others. |
| **Performance** | Slower if tasks are time-intensive. | Faster for tasks like I/O operations or API requests. |
| **Examples** | Regular functions, loops, calculations. | Promises, `setTimeout`, `fetch`, async/await. |


### **Summary Table**

| **Category** | **Example Events** | **Purpose** |
| --- | --- | --- |
| Timers | `setTimeout`, `setInterval` | Delayed or repeated execution. |
| User Interaction | `click`, `keypress`, `mousemove` | Handles user actions. |
| DOM Events | `DOMContentLoaded`, `load`, `resize`, `scroll` | Interact with DOM or resource loading. |
| Network/API Events | `fetch`, `load`, `error` | Network requests or errors. |
| Web Workers | `message`, `error` | Background thread communication. |
| Promises | `then`, `catch`, `finally`, `async/await` | Asynchronous operations with Promises. |
| Media/Audio | `play`, `pause`, `ended` | Handle media playback. |
| Input/Form Events | `input`, `change`, `submit`, `focus`, `blur` | Input and form interactions. |
| Animation/Transition | `animationstart`, `animationend`, `transitionend` | CSS animation and transition handling. |
| Custom Events | `CustomEvent` | Define and dispatch custom events. |
| Drag and Drop | `dragstart`, `drag`, `drop`, `dragend` | Drag-and-drop functionality. |


### **Key Differences: Call Stack, Browser, Callback Queue**

| **Component** | **Purpose** | **Example** |
| --- | --- | --- |
| **Call Stack** | Executes synchronous code and tracks function calls. | Function calls, variable declarations |
| **Browser/Web APIs** | Handles asynchronous operations outside the Call Stack. | Timers, fetch, event listeners |
| **Callback Queue** | Holds asynchronous callbacks ready for execution after the Call Stack clears. | `setTimeout`, `setInterval`, DOM events |
| **Microtask Queue** | Holds high-priority asynchronous callbacks. Processed before the Callback Queue. | Promises, `queueMicrotask()` |


### **Differences Between `setTimeout` and `setInterval`**

| **Feature** | **`setTimeout`** | **`setInterval`** |
| --- | --- | --- |
| Execution Time | Executes a callback once after a delay. | Executes a callback repeatedly at specified intervals. |
| Cancellation | Use `clearTimeout(timeoutId)`. | Use `clearInterval(intervalId)`. |
| Usage | Used for delayed execution. | Used for periodic tasks. |

# JavaScript Asynchronous Concepts

| **Concept**          | **Description**                                                            | **Example** |
|----------------------|----------------------------------------------------------------|-----------|
| `setTimeout`        | Executes a function **once** after a specified delay (in milliseconds). | `setTimeout(() => console.log("Hello"), 1000);` (Executes after 1 sec) |
| `setInterval`       | Repeatedly executes a function at a specified interval until stopped. | `let id = setInterval(() => console.log("Tick"), 1000); clearInterval(id);` |
| **Promise**         | Represents an asynchronous operation that may complete in the future. | `let p = new Promise((resolve, reject) => resolve(42));` |
| `Promise.resolve()` | Creates a Promise that is **already resolved** with a given value. | `Promise.resolve(10).then(console.log); // 10` |
| `then()`           | Handles the **fulfilled** state of a Promise and allows chaining. | `p.then(value => console.log(value));` |
| `catch()`          | Handles the **rejected** state of a Promise. | `p.catch(error => console.error(error));` |
| `finally()`        | Runs a callback when a Promise is settled (resolved or rejected). | `p.finally(() => console.log("Done"));` |
| **Microtask Queue** | Stores tasks like **Promises** (`then/catch/finally`), which execute **before** macrotasks. | `Promise.resolve().then(() => console.log("Microtask"));` |
| **Macrotask Queue** | Stores **setTimeout**, **setInterval**, and other delayed tasks. | `setTimeout(() => console.log("Macrotask"), 1000);` |
| **Event Loop**      | Monitors the **Call Stack** and processes tasks from the **Microtask Queue** before macrotasks. | Ensures JavaScript remains responsive while handling async tasks. |
| **Call Stack**      | The execution context stack where JavaScript runs synchronous code. | Calls are added and removed in LIFO (Last-In-First-Out) order. |
| **Callback Queue**  | Stores macrotasks like `setTimeout`, `setInterval`, and I/O tasks. | Executes only after the **Call Stack** is empty. |
| **Single-threaded** | JavaScript can execute **one task at a time** in the Call Stack. | JS achieves async behavior using the Event Loop. |
| **Concurrency**     | The ability to handle multiple tasks **interleaved** (not necessarily in parallel). | Handled using async mechanisms like Promises and callbacks. |
| **Parallelism**     | Running multiple tasks **simultaneously** (e.g., using Web Workers). | Web Workers enable true multi-threading in JS. |
