

In JavaScript, the `Symbol` data type is a primitive type introduced in **ES6 (ECMAScript 2015)**. It is used to create unique identifiers that are immutable and cannot be accidentally overwritten.

### **Characteristics of Symbols**

1. **Unique**: Every `Symbol` is guaranteed to be unique, even if they have the same description.

2. **Immutable**: Once created, a `Symbol` value cannot be changed.

3. **Not Automatically Convertible to String**: Unlike other primitives, Symbols do not implicitly convert to strings.

4. **Used as Object Keys**: Symbols can be used as property keys in objects to create non-enumerable, hidden properties.

* * * * *

### **Creating Symbols**

```js
const sym1 = Symbol(); // Creates a unique symbol
const sym2 = Symbol("description"); // Creates a symbol with a description
const sym3 = Symbol("description");

console.log(sym1 === sym2); // false (Symbols are always unique)
console.log(sym2 === sym3); // false (Even with the same description, they are different)


```
* * * * *

### **Using Symbols as Object Keys**


```js
const mySymbol = Symbol("secretKey");

const obj = {

[mySymbol]: "Hidden Value",

name: "Prakhar"

};

console.log(obj[mySymbol]); // "Hidden Value"

console.log(obj.name); // "Prakhar"

console.log(Object.keys(obj)); // ["name"] (Symbol keys are not listed)

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(secretKey)]
```

* * * * *

### **Global Symbol Registry (`Symbol.for`)**

JavaScript provides a **global registry** for symbols, allowing reuse of the same symbol by key.
```js

const symA = Symbol.for("shared");

const symB = Symbol.for("shared");

console.log(symA === symB); // true (Retrieves the same symbol from the registry)

```
* * * * *

### **Well-Known Symbols**

JavaScript has built-in "well-known" symbols for modifying default behaviors:

```js
const myArray = [1, 2, 3];

console.log(myArray[Symbol.iterator]); // Function for iteration

class MyClass {

[Symbol.toStringTag] = "CustomClass";

}

console.log(Object.prototype.toString.call(new MyClass())); // [object CustomClass]

```

* * * * *

### **When to Use Symbols**

- To create **unique object keys** that won't clash with other properties.

- To define **hidden properties** that don't show up in loops or `Object.keys()`.

- To use **well-known symbols** for customizing JavaScript behaviors.




### **What is a Symbol in JavaScript?**

A **Symbol** is a special data type in JavaScript used to create **unique** values.

Think of it like a **secret key** that is different every time you make one. Even if two Symbols look the same, they are actually different.

* * * * *

### **How to Create a Symbol?**

You can create a Symbol using the `Symbol()` function:

```js

const mySymbol = Symbol();

console.log(mySymbol); // Symbol()`
```
This creates a **unique** Symbol.

If you add a description, it's just for debugging (it doesn't affect uniqueness):

```js

const sym1 = Symbol("hello");

const sym2 = Symbol("hello");

console.log(sym1 === sym2); // false (Even though they look the same, they are different)

```

* * * * *

### **Why Use Symbols?**

1. **Symbols are Unique** → Even if you create two Symbols with the same description, they are **never** equal.

2. **Used as Secret Object Keys** → You can use Symbols to create object properties that are **hidden** from normal loops.

3. **Prevents Property Conflicts** → Since each Symbol is unique, it won't accidentally overwrite another property.

* * * * *

### **Example: Using Symbol as an Object Key**

```js

const secretKey = Symbol("mySecret");

const person = {

name: "Prakhar",

[secretKey]: "This is hidden"

};

console.log(person.name); // Prakhar

console.log(person[secretKey]); // This is hidden

// Normal object loops won't show the Symbol key

console.log(Object.keys(person)); // ["name"]

```

**Notice**: The `secretKey` property is **hidden** when using `Object.keys()`. This makes Symbols useful for adding **private** properties.

* * * * *

### **Simple Analogy**

Imagine you have a **locker**.

- A normal object key is like using a **common key**---anyone with a copy can open it.

- A Symbol is like a **unique key** that only you have, so no one else can access the locker.

* * * * *

### **When Should You Use Symbols?**

✅ When you want to create **hidden properties** in objects.

✅ When you need **unique keys** that won't accidentally conflict with other properties.

✅ When using **built-in JavaScript features** like iterators and custom object behaviors.

* * * * *

### **TL;DR**

- `Symbol()` creates a **unique value** every time.

- Even if Symbols look the same, they are **always different**.

- Symbols can be used as **hidden object keys**.

- They help **prevent conflicts** in objects.





### **What is a Literal in JavaScript?**

A **literal** in JavaScript is a **fixed value** that is directly written in the code. It is not stored in a variable but used **as it is**.

Think of literals as **hardcoded values** in your program.

* * * * *

### **Types of Literals in JavaScript**

JavaScript has different types of literals:

1. **Number Literal** → Represents numeric values

```js
42 // Integer

3.14 // Floating point number

0b1010 // Binary (10 in decimal)

0o52 // Octal (42 in decimal)

0x2A // Hexadecimal (42 in decimal)

```

2. **String Literal** → Represents text values

```js

"Hello, Prakhar!"

'JavaScript is fun!'

`Template literals allow ${2 + 2} inside them`

```

3. **Boolean Literal** → Represents `true` or `false`

```js
true

false

```

4. **Array Literal** → Represents an array

```js
[1, 2, 3, 4]

["apple", "banana", "cherry"]

```

5. **Object Literal** → Represents an object

```js
{

name: "Prakhar",

age: 20,

isCoder: true

}

```

6. **Null Literal** → Represents an empty value

```js

null

```

7. **Undefined Literal** → Represents an undefined value

```js

undefined

```

8. **Regular Expression Literal** → Represents a pattern for searching

```js

/hello/gi // Regular expression to match "hello" (case insensitive)

```

9. **BigInt Literal** → Represents large numbers (ends with `n`)

```js

9007199254740991n

```
* * * * *

### **Template Literals (Backticks ````)**

Template literals are a special kind of string literal that allows **multi-line strings** and **string interpolation**.

```js

const name = "Prakhar";

const greeting = `Hello, ${name}! Welcome to JavaScript.`;

console.log(greeting); // Hello, Prakhar! Welcome to JavaScript.

```

* * * * *

### **Why Use Literals?**

✔ **Easy to use** → No need to declare a variable.

✔ **Improves readability** → Directly shows the value in the code.

✔ **Efficient** → No extra memory is used for simple values.

* * * * *

### **TL;DR**

- **Literals** are fixed values written directly in JavaScript code.

- Examples: `42`, `"hello"`, `true`, `[1,2,3]`, `{name: "Prakhar"}`

- **Template literals** (``backticks``) allow dynamic strings.



```js

let name = "prakhar";
```
and

```js

let name = new String("prakhar");

```

lies in **how JavaScript treats them**.

* * * * *

### **1️⃣ Primitive String (`"prakhar"`)**

```js

let name = "prakhar";

console.log(typeof name); // "string"

```

- This is a **primitive string**.

- It is stored as a **simple value** in memory.

- Fast and lightweight.

* * * * *

### **2️⃣ String Object (`new String("prakhar")`)**

```js

let name = new String("prakhar");

console.log(typeof name); // "object"

```

- This creates a **String object**, not a primitive.

- It is stored as a **complex object** with extra properties.

- Takes more memory and is slower compared to a primitive string.

* * * * *

### **Major Differences**

| Feature       | `"prakhar"` (Primitive) | `new String("prakhar")` (Object) |
|--------------|------------------------|---------------------------------|
| **Type**      | `string` (primitive)    | `object` (instance of `String`) |
| **Storage**   | Stored as a simple value | Stored in heap memory as an object |
| **Performance** | Faster (lightweight)  | Slower (object overhead) |
| **Comparison** | Compares values (`===` works) | Compares references (`===` fails) |

* * * * *

### **Example: Comparison Behavior**

```js

let str1 = "prakhar";

let str2 = "prakhar";

console.log(str1 === str2); // true (same primitive value)

let obj1 = new String("prakhar");

let obj2 = new String("prakhar");

console.log(obj1 === obj2); // false (different object references)

```

🔹 Even though both `obj1` and `obj2` have the same string inside, they are **different objects in memory**, so they are **not equal**.

However, if you compare an object string with a primitive string, JavaScript automatically converts the object to a primitive:

```js

let obj = new String("prakhar");

let prim = "prakhar";

console.log(obj == prim); // true (because JS converts object to primitive)

console.log(obj === prim); // false (strict check: different types)

```

* * * * *

### **When to Use What?**

✅ **Use primitive strings (`"prakhar"`)** → **99% of the time**. It is simple, fast, and efficient.

❌ **Avoid `new String()`** → It creates unnecessary objects and makes comparisons difficult.

**TL;DR:**

Always use **primitive strings** unless you specifically need an object (which is very rare). 🚀



### **Data Types in JavaScript**

JavaScript has **two categories** of data types:

1. **Primitive Data Types** → Simple, immutable values.

2. **Non-Primitive (Reference) Data Types** → Objects, arrays, functions, etc.

* * * * *

**1️⃣ Primitive Data Types**

----------------------------




Primitive data types are **immutable** (cannot be changed) and stored **directly in memory**.

JavaScript has **7 primitive data types**:

| PrimitiveType  | Example              | Description                              |
|----------------|----------------------|------------------------------------------|
| **1. String**  | `"hello"`            | Text values enclosed in quotes           |
| **2. Number**  | `42, 3.14`           | Integers & floating-point numbers        |
| **3. Boolean** | `true, false`        | Represents logical values                |
| **4. Undefined**| `let x;`            | A variable that is declared but not assigned |
| **5. Null**    | `let y = null;`      | Represents "nothing" (intentional empty value) |
| **6. Symbol**  | `Symbol("id")`       | Unique identifiers (used in objects)     |
| **7. BigInt**  | `9007199254740991n`  | Used for very large numbers              |


* * * * *

### **Examples of Primitive Data Types**

```js

// String

let name = "Prakhar";

// Number

let age = 20;

let pi = 3.14;

// Boolean

let isStudent = true;

// Undefined

let job; // No value assigned, so it is undefined

// Null

let car = null; // Intentionally empty

// Symbol

let uniqueID = Symbol("id");

// BigInt

let bigNumber = 9007199254740991n;

```

* * * * *

**2️⃣ Non-Primitive (Reference) Data Types**

--------------------------------------------

Non-primitive types **store references** to objects in memory, not the actual value.

| Non-Primitive Type | Example                                          |
|--------------------|--------------------------------------------------|
| **Object**         | `{ name: "Prakhar", age: 20 }`                   |
| **Array**          | `[1, 2, 3, 4]`                                   |
| **Function**       | `function sayHello() { console.log("Hello"); }`  |


* * * * *

### **Primitive vs Non-Primitive**

| Feature        | **Primitive**                | **Non-Primitive**             |
|----------------|------------------------------|------------------------------|
| **Stored in**  | Stack (direct value)          | Heap (reference)             |
| **Mutable?**   | No (immutable)                | Yes (mutable)                |
| **Example**    | `let x = "hello";`            | `let obj = { name: "Prakhar" };` |
| **Comparison** | Compares **value**            | Compares **reference**        |

* * * * *

### **Example: Primitive vs Non-Primitive Behavior**

```js

// Primitive (Immutable)

let a = "hello";

let b = a; // Copy of value is created

b = "world";

console.log(a); // "hello" (unchanged)

// Non-Primitive (Mutable)

let obj1 = { name: "Prakhar" };

let obj2 = obj1; // Reference is copied

obj2.name = "Ayushi";

console.log(obj1.name); // "Ayushi" (changed because of reference)

```

* * * * *

### **💡 Key Takeaways**

✔ **Primitive types are immutable & stored by value.**

✔ **Non-primitive types are mutable & stored by reference.**

✔ **Use primitives for simple data, objects for complex structures.**



Great question! The reason `typeof null` returns `"object"` in JavaScript is actually a **historical bug** in the language. Let's break it down.

* * * * *

**1️⃣ Why does `typeof null` return `"object"`?**

-------------------------------------------------

Originally, JavaScript's `typeof` operator was designed in the early days, and a mistake was made in the implementation.

- JavaScript stores **objects** as **binary data**.

- The type information was stored in the first 3 bits of the binary representation.

- The binary representation of `null` was similar to an **object**.

### **Binary Representation of `null`**

```js

console.log(null); // null

console.log(typeof null); // "object"

```

Internally, `null` was **mistakenly classified** as an object and this bug was never fixed for backward compatibility.

* * * * *

**2️⃣ Is `null` Actually an Object?**

-------------------------------------

**No!** `null` is **not** an object. It is a **primitive value** that represents an empty or unknown value.

Even though `typeof null` says `"object"`, it is actually a primitive data type.

* * * * *

**3️⃣ How to Correctly Check for `null`?**

------------------------------------------

Instead of using `typeof`, use **strict equality (`===`)**:

```js
let x = null;

console.log(x === null); // true ✅ (Correct way to check null)

console.log(typeof x === "object"); // true (but misleading!)
```

Another alternative:

```js
console.log(Object.prototype.toString.call(null)); // "[object Null]"

```

* * * * *

**4️⃣ Why Hasn't This Been Fixed?**

-----------------------------------

- JavaScript is widely used, and changing this now would **break** existing code.

- Instead of fixing `typeof null`, developers just **accept this quirk**.

* * * * *

**5️⃣ Summary**

---------------

| Check                                          | Result                           |
|------------------------------------------------|----------------------------------|
| `typeof null`                                  | `"object"` (Bug 🐞)              |
| `null === null`                                | `true` ✅                        |
| `Object.prototype.toString.call(null)`         | `"[object Null]"` ✅             |

So, **just remember that `null` is a primitive type**, even though `typeof null` returns `"object"` due to an old bug. 🚀



### **Shallow Copy vs Deep Copy in JavaScript**

When copying objects in JavaScript, you can either create a **shallow copy** or a **deep copy**. The difference lies in how they handle nested objects.

* * * * *

**1️⃣ Shallow Copy (📄 Copies Only One Level)**

-----------------------------------------------

A **shallow copy** creates a **new object**, but it only copies **references** for nested objects instead of duplicating them.

### **Example of Shallow Copy**

```js

let original = {

name: "Prakhar",

details: { age: 20, city: "Delhi" }

};

// Creating a shallow copy using spread operator

let shallowCopy = { ...original };

// Modifying the nested object in the copied object

shallowCopy.details.city = "Mumbai";

console.log(original.details.city); // "Mumbai" (Original is also changed 😲)

```

💡 **Why?**

- The top-level properties (`name`) are copied **by value**.

- The nested object (`details`) is copied **by reference**, so changes affect both `original` and `shallowCopy`.

* * * * *

**2️⃣ Deep Copy (📜 Copies Everything, Including Nested Objects)**

------------------------------------------------------------------

A **deep copy** creates a completely **independent copy** of an object, including all nested objects.

### **Example of Deep Copy**

```js

let original = {

name: "Prakhar",

details: { age: 20, city: "Delhi" }

};

// Creating a deep copy using JSON methods

let deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the nested object in the copied object

deepCopy.details.city = "Mumbai";

console.log(original.details.city); // "Delhi" (Original is NOT changed ✅)

```

💡 **Why?**

- JSON methods **break** the reference by **recreating a new object** with new nested structures.

🚨 **Limitations of `JSON.parse(JSON.stringify())`**

- Does **not** support `undefined`, `functions`, `Symbol`, or `BigInt`.

- May cause issues with **circular references**.

* * * * *

**3️⃣ Alternative Ways to Create Deep Copies**

----------------------------------------------

### **Using `structuredClone()` (Best Way)**

```js

let deepCopy = structuredClone(original);
```

- ✅ Supports `undefined`, `BigInt`, and circular references.

- 🚀 **Fast and reliable** (available in modern browsers).

### **Using Lodash (`_.cloneDeep`)**

If you are using **Lodash**, you can use:

```js

let deepCopy = _.cloneDeep(original);
```

* * * * *

**4️⃣ Difference Between Shallow Copy & Deep Copy**

---------------------------------------------------

| Feature             | Shallow Copy                                     | Deep Copy                                      |
|---------------------|--------------------------------------------------|------------------------------------------------|
| **Definition**      | Copies only the top-level properties             | Copies the entire object, including nested ones |
| **Nested Objects**  | **Still references the original object**         | **Creates a completely new copy**              |
| **Mutation Effect** | Changes to nested objects affect the original    | Changes do not affect the original             |
| **Methods**         | `Object.assign()`, spread `{ ...obj }`           | `JSON.parse(JSON.stringify(obj))`, `structuredClone()`, Lodash's `_.cloneDeep()` |


* * * * *

### **5️⃣ Which One to Use?**

✅ Use **shallow copy** when you only need to copy simple objects or modify top-level properties.

✅ Use **deep copy** when you need a completely independent copy of an object, including nested properties.


### **1️⃣ Arrow Function (`=>`) in JavaScript**

An **arrow function** is a shorter way to write functions in JavaScript.

#### **Example: Normal Function vs Arrow Function**

```js

// Regular function

function add(a, b) {

return a + b;

}

// Arrow function

const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // 5

console.log(addArrow(2, 3)); // 5

```

✅ **Advantages of Arrow Functions:**

- Shorter syntax

- **No `this` binding** (inherits `this` from the parent scope)

- Automatically returns a value if there's no `{}`

#### **Arrow Function with One Parameter**

```js

const greet = name => `Hello, ${name}!`;

console.log(greet("Prakhar")); // "Hello, Prakhar!"

```

#### **Arrow Function Without Parameters**

```js

const sayHello = () => "Hello, World!";

console.log(sayHello()); // "Hello, World!"`


```

* * * * *

### **2️⃣ `for...in` Loop (Used for Objects)**

- **Iterates over the keys (property names) of an object.**

- Also works for arrays, but it's **not recommended**.

#### **Example: Using `for...in` with Objects**

```js

let person = {

name: "Prakhar",

age: 20,

city: "Delhi"

};

for (let key in person) {

console.log(`${key}: ${person[key]}`);

}

// Output:

// name: Prakhar

// age: 20

// city: Delhi`

```

#### **Example: Using `for...in` with Arrays (Not Recommended)**

```js

let numbers = [10, 20, 30];

for (let index in numbers) {

console.log(numbers[index]);

}

// Output:

// 10

// 20

// 30

```

🚨 **Why Not Use `for...in` for Arrays?**

- It iterates **keys (indexes)**, not values.

- It may also iterate over non-indexed properties if they exist.

🔹 **Use `forEach` or `for...of` instead for arrays.**

* * * * *

### **3️⃣ `forEach()` Loop (Used for Arrays)**

- Calls a function for **each element** in an array.

- Does **not** return anything (undefined).

#### **Example: Using `forEach()`**

```js

let numbers = [10, 20, 30];

numbers.forEach((num) => {

console.log(num * 2);

});

// Output:

// 20

// 40

// 60

```

✅ **Advantages of `forEach()`:**

- Easy to use

- No need for manual indexing

- Works well with arrow functions

🚨 **Limitations of `forEach()`:**

- **Cannot break** the loop (`for` or `for...of` allows breaking).

- **Does not return** a new array (use `map()` if you need a transformed array).

* * * * *

### **4️⃣ Creating an Array Using Constructor**

Instead of using `[]`, we can use the `Array` constructor.

#### **Example 1: Creating an Empty Array**

```js

let arr = new Array();

console.log(arr); // []
```


#### **Example 2: Creating an Array with Fixed Size**

```js

let arr = new Array(5);

console.log(arr); // [ <5 empty items> ] (5 undefined slots)

```

#### **Example 3: Creating an Array with Elements**

```js

let arr = new Array(10, 20, 30);

console.log(arr); // [10, 20, 30]

```

🚨 **Caution:** If you pass **one number**, it creates an array with that many empty slots.

```js

let arr = new Array(3);

console.log(arr.length); // 3 (but empty)

```

✅ **Instead, use `Array.of()` to avoid this issue.**

```js

let arr = Array.of(3);

console.log(arr); // [3]

```

* * * * *

**Summary**

-----------

| Concept             | Description                                | Example                                      |
|---------------------|--------------------------------------------|----------------------------------------------|
| **Arrow Function**   | Short function syntax                      | `const sum = (a, b) => a + b;`               |
| **for...in Loop**    | Iterates over object keys                  | `for (let key in obj) {}`                    |
| **forEach Loop**     | Calls a function for each array element    | `arr.forEach(item => console.log(item));`    |
| **Array Constructor**| Creates arrays using `new Array()`         | `let arr = new Array(10, 20, 30);`           |



### **Array Methods in JavaScript (With Examples)**

JavaScript provides several built-in **array methods** for modifying and processing arrays. Let's break them down with **examples**. 🚀

* * * * *

**1️⃣ `splice()` → Add/Remove Elements (Modifies Original Array)**

------------------------------------------------------------------

- **Used to add, remove, or replace elements.**

- **Modifies the original array.**

- **Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`

### **Example: Removing Elements**

```js

let arr = [10, 20, 30, 40, 50];

// Removing 2 elements from index 1

arr.splice(1, 2);

console.log(arr); // [10, 40, 50]
```


### **Example: Adding Elements**

```js

let arr = [10, 20, 30];

// Adding at index 1

arr.splice(1, 0, 15, 18);

console.log(arr); // [10, 15, 18, 20, 30]

```

### **Example: Replacing Elements**

```js

let arr = [10, 20, 30];

arr.splice(1, 1, 25); // Replace 20 with 25

console.log(arr); // [10, 25, 30]
```

* * * * *

**2️⃣ `slice()` → Extract a Portion of Array (Does Not Modify Original)**

-------------------------------------------------------------------------

- **Returns a portion of the array.**

- **Does not modify** the original array.

- **Syntax:** `array.slice(startIndex, endIndex)`

### **Example: Extracting Elements**

```js

let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(1, 4); // Extracts from index 1 to 3

console.log(newArr); // [20, 30, 40]

console.log(arr); // [10, 20, 30, 40, 50] (Original remains unchanged)

```
* * * * *

**3️⃣ `map()` → Transform Each Element (Returns New Array)**

------------------------------------------------------------

- **Creates a new array** by applying a function to each element.

- **Does not modify** the original array.

### **Example: Multiply Each Element by 2**

```js

let arr = [1, 2, 3, 4];

let doubled = arr.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

```

* * * * *

**4️⃣ `filter()` → Return Elements That Meet a Condition**

----------------------------------------------------------

- **Creates a new array** with only the elements that pass a condition.

### **Example: Get Even Numbers**

```js

let arr = [10, 15, 20, 25, 30];

let evenNumbers = arr.filter(num => num % 2 === 0);

console.log(evenNumbers); // [10, 20, 30]

```

* * * * *

**5️⃣ `reduce()` → Reduce Array to a Single Value**

---------------------------------------------------

- **Performs an operation on each element** and returns a single value.

- **Syntax:** `array.reduce((accumulator, currentValue) => {...}, initialValue)`

### **Example: Sum of All Elements**

```js

let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10

```

### **Example: Find Maximum Number**

```js

let numbers = [10, 5, 8, 20, 15];

let maxNumber = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);

console.log(maxNumber); // 20

```

* * * * *

**6️⃣ `shift()` → Remove First Element**

----------------------------------------

- Removes the **first element** from an array and returns it.

- **Modifies the original array**.

### **Example: Removing First Element**

```js

let arr = [10, 20, 30];

let firstElement = arr.shift();

console.log(firstElement); // 10

console.log(arr); // [20, 30]
```

* * * * *

**7️⃣ `unshift()` → Add Elements at Beginning**

-----------------------------------------------

- **Adds elements to the beginning** of the array.

- **Modifies the original array**.

### **Example: Adding at the Beginning**

```js

let arr = [20, 30];

arr.unshift(10, 15);

console.log(arr); // [10, 15, 20, 30]
```


* * * * *

**8️⃣ `push()` → Add Elements at the End**

------------------------------------------

- **Adds elements to the end** of the array.

- **Modifies the original array**.

### **Example: Adding Elements**

```js

let arr = [10, 20];

arr.push(30, 40);

console.log(arr); // [10, 20, 30, 40]

```

* * * * *

**9️⃣ `pop()` → Remove Last Element**

-------------------------------------

- **Removes the last element** from an array and returns it.

- **Modifies the original array**.

### **Example: Removing Last Element**

```js

let arr = [10, 20, 30];

let lastElement = arr.pop();

console.log(lastElement); // 30

console.log(arr); // [10, 20]

```

* * * * *

**🔟 `concat()` → Merge Two or More Arrays**

--------------------------------------------

- **Returns a new array** combining multiple arrays.

- **Does not modify the original arrays**.

### **Example: Merging Arrays**

```js

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let merged = arr1.concat(arr2);

console.log(merged); // [1, 2, 3, 4, 5, 6]

```

* * * * *

**🔢 `indexOf()` → Find Index of an Element**

---------------------------------------------

- Returns the **first index** of a given value.

- Returns **-1** if the element is not found.

### **Example: Find Index**

```js

let arr = [10, 20, 30, 40];

console.log(arr.indexOf(30)); // 2

console.log(arr.indexOf(50)); // -1 (not found)

```

* * * * *

**🔢 `includes()` → Check If Array Contains an Element**

--------------------------------------------------------

- **Returns `true` or `false`**.

### **Example: Checking Existence**

```js

let arr = [10, 20, 30];

console.log(arr.includes(20)); // true

console.log(arr.includes(50)); // false

```

* * * * *

**📌 Summary Table**

--------------------

| Method          | Description                              | Modifies Original? |
|-----------------|------------------------------------------|--------------------|
| **`splice()`**  | Add/remove/replace elements              | ✅ Yes             |
| **`slice()`**   | Extracts portion of an array            | ❌ No              |
| **`map()`**     | Transforms each element                 | ❌ No              |
| **`filter()`**  | Filters elements based on condition     | ❌ No              |
| **`reduce()`**  | Reduces array to a single value         | ❌ No              |
| **`shift()`**   | Removes first element                   | ✅ Yes             |
| **`unshift()`** | Adds elements to the beginning          | ✅ Yes             |
| **`push()`**    | Adds elements to the end                | ✅ Yes             |
| **`pop()`**     | Removes last element                    | ✅ Yes             |
| **`concat()`**  | Merges two arrays                       | ❌ No              |
| **`indexOf()`** | Returns index of an element             | ❌ No              |
| **`includes()`**| Checks if an element exists             | ❌ No              |

* * * * *

🚀 **Now you have a complete understanding of JavaScript array methods!**



**Sorting in JavaScript (`sort()`)**

------------------------------------

The **`sort()` method** in JavaScript is used to sort an array.

- By **default**, it **sorts elements as strings** (lexicographically).

- To **sort numbers**, we must provide a comparison function.

* * * * *

### **1️⃣ Sort in Ascending Order (Small to Large)**

Use a comparison function:

```js

let numbers = [40, 10, 5, 100, 25];

// Ascending order

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 10, 25, 40, 100]

```

✅ **How it works?**

- If `(a - b)` is **negative**, `a` is placed before `b`.

- If `(a - b)` is **positive**, `b` is placed before `a`.

* * * * *

### **2️⃣ Sort in Descending Order (Large to Small)**

Use a **reverse comparison function**:

```js

let numbers = [40, 10, 5, 100, 25];

// Descending order

numbers.sort((a, b) => b - a);

console.log(numbers); // [100, 40, 25, 10, 5]`
```


✅ **How it works?**

- If `(b - a)` is **negative**, `b` is placed before `a`.

- If `(b - a)` is **positive**, `a` is placed before `b`.

* * * * *

### **3️⃣ Sorting Strings Alphabetically**

```js

let fruits = ["Banana", "Apple", "Mango", "Orange"];

// Ascending (A to Z)

fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Descending (Z to A)

fruits.sort().reverse();

console.log(fruits); // ["Orange", "Mango", "Banana", "Apple"]

```

* * * * *

**Finding an Element in JavaScript (`find()`)**

-----------------------------------------------

The **`find()` method** returns the **first** element in an array that satisfies a given condition.

- **If no element matches, it returns `undefined`.**

* * * * *

### **1️⃣ Find the First Even Number**

```js

let numbers = [15, 9, 22, 31, 42];

// Find first even number

let firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // 22

```

* * * * *

### **2️⃣ Find an Object in an Array**

```js

let users = [

{ id: 1, name: "Prakhar" },

{ id: 2, name: "Ayushi" },

{ id: 3, name: "Rahul" }

];

// Find user with id = 2

let user = users.find(user => user.id === 2);

console.log(user); // { id: 2, name: "Ayushi" }

```

* * * * *

**Difference Between `find()` and `filter()`**

----------------------------------------------

| Feature         | `find()`                            | `filter()`                         |
|-----------------|-------------------------------------|------------------------------------|
| **Returns**     | First matching element             | All matching elements             |
| **Output Type** | Single value/object                 | Array of values/objects           |
| **If No Match** | Returns `undefined`                | Returns empty array `[]`          |


### **Example**

```js

let numbers = [5, 10, 15, 20, 25];

console.log(numbers.find(num => num > 10)); // 15 (First match)

console.log(numbers.filter(num => num > 10)); // [15, 20, 25] (All matches)

```

* * * * *

**🔍 `find()` Method in JavaScript**

------------------------------------

The **`find()` method** is used to find the **first** element in an array that satisfies a given condition.

- **If a match is found, it returns the first matching element.**

- **If no match is found, it returns `undefined`.**

### **📌 Syntax**

```js

array.find(callbackFunction);

```

- `callbackFunction`: A function that checks a condition.

- The function should return `true` for the desired element.

* * * * *

### **📝 Example 1: Find the First Even Number**

```js

let numbers = [3, 7, 10, 15, 18];

// Find the first even number

let firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // 10

```

💡 **Explanation:** It finds **10** because it's the first even number.

* * * * *

### **📝 Example 2: Find an Object in an Array**

```js

let users = [

{ id: 1, name: "Prakhar" },

{ id: 2, name: "Ayushi" },

{ id: 3, name: "Rahul" }

];

// Find user with id = 2

let user = users.find(user => user.id === 2);

console.log(user); // { id: 2, name: "Ayushi" }

```

💡 **Explanation:** It returns the object `{ id: 2, name: "Ayushi" }` because it matches the condition.

* * * * *

**🔢 `sort()` Method in JavaScript**

------------------------------------

The **`sort()` method** sorts an array **in place** (modifies the original array).

- By **default**, it sorts elements as **strings** (lexicographically).

- To sort numbers correctly, you **must provide a compare function**.

* * * * *

### **📌 Syntax**

```js

array.sort([compareFunction]);

```

- `compareFunction`: A function that **compares two values**.

* * * * *

### **📝 Example 1: Sorting Numbers in Ascending Order**

```js

let numbers = [40, 10, 5, 100, 25];

// Ascending order (small → large)

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 10, 25, 40, 100]

```

💡 **Explanation:**

- If `a - b` is **negative**, `a` comes before `b`.

- If `a - b` is **positive**, `b` comes before `a`.

* * * * *

**🔽 Sorting in Descending Order**

----------------------------------

To sort in **descending order (large → small)**, use `b - a`.

### **📝 Example 2: Sorting Numbers in Descending Order**

```js

let numbers = [40, 10, 5, 100, 25];

// Descending order (large → small)

numbers.sort((a, b) => b - a);

console.log(numbers); // [100, 40, 25, 10, 5]`

```

💡 **Explanation:**

- If `b - a` is **negative**, `b` comes before `a`.

- If `b - a` is **positive**, `a` comes before `b`.

* * * * *

### **📝 Example 3: Sorting Strings Alphabetically (A → Z)**

```js

let fruits = ["Banana", "Apple", "Mango", "Orange"];

// Alphabetical order

fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

```

* * * * *

### **📝 Example 4: Sorting Strings in Reverse Order (Z → A)**

```js

let fruits = ["Banana", "Apple", "Mango", "Orange"];

// Reverse alphabetical order

fruits.sort().reverse();

console.log(fruits); // ["Orange", "Mango", "Banana", "Apple"]

```

* * * * *

**🆚 Difference Between `find()` and `sort()`**

-----------------------------------------------

| Feature               | `find()`                            | `sort()`                          |
|-----------------------|-------------------------------------|-----------------------------------|
| **Purpose**           | Finds the first matching element    | Sorts elements in order          |
| **Returns**           | A single value or `undefined`       | A sorted array (modifies original)|
| **Modifies Original?**| ❌ No                                | ✅ Yes                            |
| **Usage Example**     | `array.find(x => x > 10);`          | `array.sort((a, b) => a - b);`    |


* * * * *




**📌 What is "Enumerable" in JavaScript?**

------------------------------------------

The term **"enumerable"** refers to whether a property of an object can be **listed** (or iterated over) using loops like `for...in` or `Object.keys()`.

* * * * *

**🔍 Enumerable Properties of Objects**

---------------------------------------

### **1️⃣ What are Enumerable Properties?**

✅ **Enumerable properties** are the ones that:

- Can be iterated over using `for...in` or `Object.keys()`.

- Have their `enumerable` attribute set to **true** (by default, most properties are enumerable).

* * * * *

### **2️⃣ Example: Checking Enumerable Properties**

```js

let obj = {

name: "Prakhar",

age: 21

};

// Using for...in loop

for (let key in obj) {

console.log(key);

}

// Output: name, age

// Using Object.keys()

console.log(Object.keys(obj));

// Output: ["name", "age"]

```

💡 **Explanation:**

- `name` and `age` are **enumerable properties**, so they appear in the output.

* * * * *

### **3️⃣ Non-Enumerable Properties**

By default, properties you create **inside an object** are **enumerable**.

But you can make them **non-enumerable** using `Object.defineProperty()`.

#### **🔹 Example: Making a Property Non-Enumerable**

```js

let user = {

name: "Ayushi",

age: 22

};

// Adding a non-enumerable property

Object.defineProperty(user, "secret", {

value: "Hidden Info",

enumerable: false

});

// Checking properties

console.log(Object.keys(user)); // ["name", "age"]

console.log(user.secret); // "Hidden Info"

// for...in loop will not show "secret"

for (let key in user) {

console.log(key);

}

// Output: name, age

```

💡 **Explanation:**

- `"secret"` property **exists**, but it's **not enumerable**, so it's hidden from loops.

* * * * *

### **4️⃣ How to Get ALL Properties (Including Non-Enumerable)?**

If you want to get **all properties**, including non-enumerable ones, use:

```js

console.log(Object.getOwnPropertyNames(user));

// Output: ["name", "age", "secret"]

```

* * * * *

**🔄 Enumerable vs Non-Enumerable Summary**

-------------------------------------------
| Feature                                   | Enumerable                    | Non-Enumerable                 |
|-------------------------------------------|-------------------------------|--------------------------------|
| **Visible in `for...in`?**                | ✅ Yes                        | ❌ No                          |
| **Visible in `Object.keys()`?**           | ✅ Yes                        | ❌ No                          |
| **Visible in `Object.getOwnPropertyNames()`?** | ✅ Yes                    | ✅ Yes                         |
| **Can be set manually?**                  | ✅ Yes                        | ✅ Yes                         |

* * * * *

🚀 **Now you know what "enumerable" means in JavaScript!**




**🔍 Difference Between `forEach()`, `for...in`, and `for...of` in JavaScript**

-------------------------------------------------------------------------------

| Feature                             | `forEach()`                                      | `for...in`                                     | `for...of`                                  |
|-------------------------------------|-------------------------------------------------|------------------------------------------------|---------------------------------------------|
| **Use Case**                        | Used for **iterating over arrays**               | Used for **iterating over object properties (keys)** | Used for **iterating over iterable objects (arrays, strings, maps, sets, etc.)** |
| **Works on**                        | Arrays                                          | Objects (keys)                                 | Arrays, Strings, Maps, Sets, NodeLists, etc. |
| **Accesses**                        | Values only                                     | Keys (property names)                         | Values directly                             |
| **Can modify original array?**      | ❌ No                                           | ✅ Yes                                         | ✅ Yes                                       |
| **Breakable (`break`, `continue`)?** | ❌ No                                           | ✅ Yes                                         | ✅ Yes                                       |
| **Return Value**                    | ❌ Doesn't return anything                      | ❌ Doesn't return anything                     | ❌ Doesn't return anything                   |


* * * * *

**📌 1️⃣ `forEach()` - Used for Arrays**

----------------------------------------

- Works **only on arrays**.

- Calls a function for each element.

- Cannot be stopped (`break` and `continue` don't work).

### **✅ Example: Using `forEach()`**

```js

let numbers = [10, 20, 30, 40];

// Print each number

numbers.forEach((num) => {

console.log(num);

});

// Output: 10, 20, 30, 40
```

🔹 **Use when:** You need to **execute a function on each element** of an array.

* * * * *

**📌 2️⃣ `for...in` - Used for Objects**

----------------------------------------

- Iterates over the **keys** of an object.

- Can be used on **arrays**, but it iterates over **indexes** (not values), so avoid it for arrays.

### **✅ Example: Using `for...in` with Objects**

```js

let person = { name: "Prakhar", age: 21, city: "Delhi" };

for (let key in person) {

console.log(key + ": " + person[key]);

}

// Output:

// name: Prakhar

// age: 21

// city: Delhi

```

🔹 **Use when:** You need to iterate over **object properties (keys).**

* * * * *

### **⚠️ Avoid `for...in` for Arrays**

```js

let numbers = [10, 20, 30, 40];

for (let index in numbers) {

console.log(index, numbers[index]); // Index, not value

}

// Output:

// 0 10

// 1 20

// 2 30

// 3 40

```

🔹 **Why avoid?** It iterates over **keys (indexes), not values**.

* * * * *

**📌 3️⃣ `for...of` - Used for Iterables (Arrays, Strings, Maps, Sets, etc.)**

------------------------------------------------------------------------------

- Iterates over **values** directly.

- Works on **arrays, strings, sets, maps**, etc.

- Can use `break` and `continue`.

### **✅ Example: Using `for...of` with Arrays**

```js

let numbers = [10, 20, 30, 40];

for (let num of numbers) {

console.log(num);

}

// Output: 10, 20, 30, 40

```

🔹 **Use when:** You need to iterate over **values** of an iterable (array, string, map, set, etc.).

* * * * *

### **✅ Example: Using `for...of` with Strings**

```js

let text = "Hello";

for (let char of text) {

console.log(char);

}

// Output: H, e, l, l, o

```

* * * * *

### **✅ Example: Using `for...of` with Maps**

```js

let userMap = new Map([

["name", "Prakhar"],

["age", 21]

]);

for (let [key, value] of userMap) {

console.log(key + ": " + value);

}

// Output:

// name: Prakhar

// age: 21

```

* * * * *

**🔄 Summary - When to Use What?**

----------------------------------

| Use Case                                              | Best Loop                           |
|-------------------------------------------------------|-------------------------------------|
| Loop over an **array** and access **values**          | ✅ `forEach()` or `for...of`        |
| Loop over an **object** and access **keys & values**  | ✅ `for...in`                       |
| Loop over **iterables (arrays, strings, maps, sets)** | ✅ `for...of`                       |
| Need **`break` or `continue`**                        | ✅ `for...in` or `for...of` (❌ Not `forEach()`) |

🚀 **Now you know when to use `forEach()`, `for...in`, and `for...of`!**


**📌 Differences Between `for...in`, `for...of`, and `forEach()` in JavaScript**

--------------------------------------------------------------------------------

* * * * *

### **🔄 Difference Between `for...in` and `forEach()`**
| Feature                              | `for...in`                             | `forEach()`                              |
|--------------------------------------|----------------------------------------|------------------------------------------|
| **Works on**                         | Objects and Arrays (keys/indexes)      | Only Arrays                             |
| **Iterates Over**                    | Keys (property names/indexes)          | Values (array elements)                 |
| **Use `break` / `continue`?**        | ✅ Yes                                  | ❌ No                                    |
| **Modifies Original Array?**         | ✅ Yes (if modified)                   | ❌ No                                    |
| **Callback Function?**               | ❌ No                                  | ✅ Yes (function required)               |


✅ **Use `for...in`** when looping over **objects**.

✅ **Use `forEach()`** when looping over **arrays** and executing a function on each element.

* * * * *

### **🔄 Difference Between `for...of` and `forEach()`**
| Feature                              | `for...of`                               | `forEach()`                              |
|--------------------------------------|------------------------------------------|------------------------------------------|
| **Works on**                         | Arrays, Strings, Maps, Sets, NodeLists (Iterables) | Only Arrays                             |
| **Iterates Over**                    | Values directly                          | Values directly                          |
| **Use `break` / `continue`?**        | ✅ Yes                                    | ❌ No                                    |
| **Modifies Original Array?**         | ✅ Yes (if modified)                     | ❌ No                                    |
| **Callback Function?**               | ❌ No                                    | ✅ Yes (function required)               |


✅ **Use `for...of`** when looping over **arrays, strings, or other iterables**.

✅ **Use `forEach()`** when looping over **arrays** and calling a function on each element.

* * * * *

### **🔄 Difference Between `for...in` and `for...of`**
| Feature                             | `for...in`                               | `for...of`                                |
|-------------------------------------|------------------------------------------|------------------------------------------|
| **Works on**                        | Objects & Arrays                         | Arrays, Strings, Maps, Sets, NodeLists (Iterables) |
| **Iterates Over**                   | Keys (property names/indexes)            | Values directly                          |
| **Use `break` / `continue`?**       | ✅ Yes                                    | ✅ Yes                                    |
| **Best for**                        | Looping over object properties           | Looping over iterable values             |

✅ **Use `for...in`** for **objects**.

✅ **Use `for...of`** for **arrays, strings, maps, sets, and other iterables**.

* * * * *

**📌 Where to Use Each Loop?**

------------------------------

| Loop Type     | Used for                                                              |
|---------------|-----------------------------------------------------------------------|
| **`forEach()`** | ✅ **Arrays** (Execute a function on each element)                    |
| **`for...in`**  | ✅ **Objects** (Iterate over keys) <br> ✅ Arrays (but not recommended) |
| **`for...of`**  | ✅ **Arrays** <br> ✅ **Strings** <br> ✅ **Maps, Sets, NodeLists, etc.** |

* * * * *

**📌 Summary Table (Easy to Remember)**

---------------------------------------
| Loop Type     | Best For      | Works On                                          | Iterates Over                        | Can Use `break`/`continue`? |
|---------------|---------------|---------------------------------------------------|--------------------------------------|----------------------------|
| **`forEach()`** | Arrays        | Arrays                                           | Values                               | ❌ No                      |
| **`for...in`**  | Objects       | Objects, Arrays (not recommended)                 | Keys (Property names/indexes)        | ✅ Yes                     |
| **`for...of`**  | Iterables     | Arrays, Strings, Maps, Sets, NodeLists            | Values                               | ✅ Yes                     |

* * * * *

🚀 **Key Takeaways**:

- Use **`forEach()`** when working with **arrays** and applying a function to each value.

- Use **`for...in`** when working with **objects** and iterating over **keys**.

- Use **`for...of`** when working with **iterables** like **arrays, strings, maps, and sets**.



**📌 Types of Functions in JavaScript**

---------------------------------------

JavaScript has multiple types of functions based on **syntax, behavior, and usage**. Let's break them down:

* * * * *

**1️⃣ Function Declaration (Named Function)**

---------------------------------------------

✅ **Has a name and can be called before it's defined (hoisted).**

### **✅ Example: Function Declaration**

```js

function greet() {

console.log("Hello, Prakhar!");

}

greet(); // Output: Hello, Prakhar!

```

🔹 **Hoisting:** You can call `greet()` **before** defining it.

* * * * *

**2️⃣ Function Expression (Anonymous Function)**

------------------------------------------------

✅ **Assigned to a variable, NOT hoisted.**

❌ **Cannot be called before defining.**

### **✅ Example: Function Expression**

```js

const greet = function() {

console.log("Hello, Ayushi!");

};

greet(); // Output: Hello, Ayushi!

```

🔹 **Hoisting:** ❌ **NOT hoisted**, so you **must define it before calling**.

* * * * *

**3️⃣ Arrow Function (ES6)**

----------------------------

✅ **Shorter syntax for function expressions.**

✅ **No `this` binding (inherits from parent scope).**

### **✅ Example: Arrow Function**

```js

const greet = () => console.log("Hello, World!");

greet(); // Output: Hello, World!

```

🔹 **Best for:** Short functions, callbacks, and when `this` should not change.

* * * * *

**4️⃣ Immediately Invoked Function Expression (IIFE)**

------------------------------------------------------

✅ **Runs as soon as it is defined.**

✅ **Used to avoid polluting the global scope.**

### **✅ Example: IIFE**

```js

(function() {

console.log("I am an IIFE!");

})();

// Output: I am an IIFE!


```

🔹 **Use case:** Prevent global scope pollution.

* * * * *

**5️⃣ Generator Function**

--------------------------

✅ **Uses `function*` syntax.**

✅ **Pauses execution with `yield` and resumes with `.next()`.**

### **✅ Example: Generator Function**

```js

function* numbers() {

yield 1;

yield 2;

yield 3;

}

const gen = numbers();

console.log(gen.next().value); // 1

console.log(gen.next().value); // 2

```

🔹 **Best for:** Handling sequences, iterators, and async operations.

* * * * *

**6️⃣ Higher-Order Function**

-----------------------------

✅ **Takes another function as an argument OR returns a function.**

### **✅ Example: Higher-Order Function**

```js

function operate(x, y, callback) {

return callback(x, y);

}

const sum = operate(5, 3, (a, b) => a + b);

console.log(sum); // Output: 8

```

🔹 **Best for:** Callbacks, functional programming.

* * * * *

**7️⃣ Callback Function**

-------------------------

✅ **A function passed as an argument to another function.**

### **✅ Example: Callback Function**

```js

function fetchData(callback) {

setTimeout(() => {

callback("Data received");

}, 1000);

}

fetchData((message) => console.log(message)); // Output: Data received (after 1 sec)

```

🔹 **Best for:** Asynchronous operations.

* * * * *

**8️⃣ Recursive Function**

--------------------------

✅ **A function that calls itself.**

### **✅ Example: Recursive Function**

```js

function countdown(n) {

if (n <= 0) return;

console.log(n);

countdown(n - 1);

}

countdown(5);

// Output: 5, 4, 3, 2, 1

```

🔹 **Best for:** Recursion problems (factorial, tree traversal, etc.).

* * * * *

**📌 Summary Table (Easy to Remember)**

---------------------------------------

| Function Type               | Syntax                             | Hoisted? | `this` Binding | Best For                             |
|-----------------------------|------------------------------------|----------|-----------------|--------------------------------------|
| **Function Declaration**     | `function name() {}`               | ✅ Yes   | ✅ Yes          | Standard functions                  |
| **Function Expression**      | `const fn = function() {}`        | ❌ No    | ✅ Yes          | Assigning functions to variables    |
| **Arrow Function**           | `const fn = () => {}`              | ❌ No    | ❌ No           | Short functions, callbacks          |
| **IIFE**                     | `(function() {})();`               | ❌ No    | ✅ Yes          | Avoiding global scope pollution     |
| **Generator Function**       | `function* name() {}`              | ❌ No    | ✅ Yes          | Iterators, async flows              |
| **Higher-Order Function**    | `function fn(callback) {}`        | ✅ Yes   | ✅ Yes          | Callbacks, functional programming   |
| **Callback Function**        | `fn(() => {})`                     | ✅ Yes   | ✅ Yes          | Async operations                    |
| **Recursive Function**       | `function recurse() { recurse(); }`| ✅ Yes   | ✅ Yes          | Recursive problems                  |


* * * * *



### **📌 Functions in ES5 vs ES6 in JavaScript**
| Function Type                                           | Introduced In | Available in ES6? | Notes                                                 |
|---------------------------------------------------------|---------------|-------------------|-------------------------------------------------------|
| **Function Declaration**                                | ✅ ES5        | ✅ Yes            | Standard way to declare functions.                    |
| **Function Expression**                                 | ✅ ES5        | ✅ Yes            | Functions assigned to variables.                      |
| **Immediately Invoked Function Expression (IIFE)**      | ✅ ES5        | ✅ Yes            | Used to avoid global scope pollution.                 |
| **Higher-Order Function**                               | ✅ ES5        | ✅ Yes            | Functions that take or return functions.              |
| **Callback Function**                                   | ✅ ES5        | ✅ Yes            | Used in asynchronous operations.                      |
| **Recursive Function**                                  | ✅ ES5        | ✅ Yes            | Used for recursion problems.                          |
| **Arrow Function (`=>`)**                               | ❌ **ES6**    | ✅ Yes            | Shorter syntax, no `this` binding.                    |
| **Generator Function (`function*`)**                    | ❌ **ES6**    | ✅ Yes            | Supports `yield` and `next()`.                        |
| **Default Parameters (`function(a = 5)`)**              | ❌ **ES6**    | ✅ Yes            | Allows default values for parameters.                 |
| **Rest Parameters (`...args`)**                         | ❌ **ES6**    | ✅ Yes            | Collects arguments into an array.                     |
| **Spread Operator (`...arr`)**                          | ❌ **ES6**    | ✅ Yes            | Expands elements of an array.                         |


* * * * *

### **📌 Which ES6 Features Are Still Used and Which Are Deprecated?**

🔹 **✅ Still Used in ES6 and Later:**

1. **Arrow Functions** (`()=>{}`)

2. **Generator Functions** (`function* {}`)

3. **Default Parameters** (`function(name = "Prakhar")`)

4. **Rest Parameters** (`function(...args)`)

5. **Spread Operator** (`console.log(...arr)`)

🔹 **❌ Deprecated / Rarely Used:**

- **None of the ES6 function features are deprecated**, but **some ES5 methods (like IIFE) are less commonly used** due to newer ES6+ alternatives.

* * * * *

**🚀 Summary Table**

--------------------

| Function Type               | ES5      | ES6      | Deprecated?  |
|-----------------------------|----------|----------|--------------|
| **Function Declaration**     | ✅ Yes   | ✅ Yes   | ❌ No        |
| **Function Expression**      | ✅ Yes   | ✅ Yes   | ❌ No        |
| **IIFE**                     | ✅ Yes   | ✅ Yes   | ⏳ Rarely Used |
| **Higher-Order Function**    | ✅ Yes   | ✅ Yes   | ❌ No        |
| **Callback Function**        | ✅ Yes   | ✅ Yes   | ❌ No        |
| **Recursive Function**       | ✅ Yes   | ✅ Yes   | ❌ No        |
| **Arrow Function**           | ❌ No    | ✅ Yes   | ❌ No        |
| **Generator Function**       | ❌ No    | ✅ Yes   | ❌ No        |
| **Default Parameters**       | ❌ No    | ✅ Yes   | ❌ No        |
| **Rest Parameters**          | ❌ No    | ✅ Yes   | ❌ No        |
| **Spread Operator**          | ❌ No    | ✅ Yes   | ❌ No        |

* * * * *

🚀 **Key Takeaways:**

- **ES5 Functions**: Function declarations, expressions, IIFE, callbacks, recursion.

- **ES6 Functions**: Arrow functions, generator functions, default/rest parameters, and spread operator.

- **Some ES5 methods (like IIFE) are rarely used now** because ES6 offers better solutions.



**📌 JavaScript Functions -- Explained with Examples**

-----------------------------------------------------

Below are 11 types of functions with explanations and examples:

* * * * *

**1️⃣ Spread Operator (`...`)**

-------------------------------

✅ **Used to expand elements of an array, object, or string.**

✅ **Allows easy copying and merging of arrays/objects.**

### **✅ Example: Using Spread Operator with Arrays**

```js

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

### **✅ Example: Using Spread Operator with Objects**

```js

const obj1 = { name: "Prakhar", age: 22 };

const obj2 = { ...obj1, city: "Delhi" };

console.log(obj2); // Output: { name: "Prakhar", age: 22, city: "Delhi" }`

```

* * * * *

**2️⃣ Rest Parameters (`...args`)**

-----------------------------------

✅ **Used in function parameters to collect multiple arguments into an array.**

✅ **Allows flexible number of arguments.**

### **✅ Example: Using Rest Parameters**

```js

function sum(...numbers) {

return numbers.reduce((acc, num) => acc + num, 0);

}

console.log(sum(1, 2, 3, 4)); // Output: 10

console.log(sum(10, 20)); // Output: 30`
```

🔹 **Rest parameters must be the last parameter in a function!**

* * * * *

**3️⃣ Default Parameters**

--------------------------

✅ **Allows functions to have default values for parameters if no value is passed.**

✅ **Prevents `undefined` errors when parameters are missing.**

### **✅ Example: Using Default Parameters**

```js

function greet(name = "Guest") {

console.log(`Hello, ${name}!`);

}

greet("Prakhar"); // Output: Hello, Prakhar!

greet(); // Output: Hello, Guest!`


```
* * * * *

**4️⃣ Generator Function (`function*`)**

----------------------------------------

✅ **Special type of function that can pause execution using `yield`.**

✅ **Resumes execution using `.next()` method.**

### **✅ Example: Generator Function**

```js

function* numberGenerator() {

yield 1;

yield 2;

yield 3;

}

const gen = numberGenerator();

console.log(gen.next().value); // Output: 1

console.log(gen.next().value); // Output: 2

console.log(gen.next().value); // Output: 3

```

🔹 **Great for handling iterators, infinite sequences, and async tasks!**

* * * * *

**5️⃣ Recursive Function**

--------------------------

✅ **A function that calls itself until a base condition is met.**

✅ **Used in problems like factorial, Fibonacci, tree traversal.**

### **✅ Example: Recursive Function (Factorial)**

```js

function factorial(n) {

if (n === 0) return 1; // Base case

return n * factorial(n - 1); // Recursive call

}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)`
```
* * * * *

**6️⃣ Arrow Function (`=>`)**

-----------------------------

✅ **Shorter syntax for function expressions.**

✅ **Does not have its own `this`, uses lexical scope.**

### **✅ Example: Arrow Function**

```js

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Prakhar")); // Output: Hello, Prakhar!`
```
🔹 **Shorter version for single-line functions!**

* * * * *

**7️⃣ Higher-Order Function**

-----------------------------

✅ **A function that takes another function as an argument OR returns a function.**

✅ **Used in functional programming.**

### **✅ Example: Higher-Order Function**

```js

function operate(x, y, callback) {

return callback(x, y);

}

const sum = operate(5, 3, (a, b) => a + b);

console.log(sum); // Output: 8
```

🔹 **Great for callbacks, map, filter, reduce, and functional programming!**

* * * * *

**8️⃣ Immediately Invoked Function Expression (IIFE)**

------------------------------------------------------

✅ **Runs immediately after it is defined.**

✅ **Prevents polluting the global scope.**

### **✅ Example: IIFE**

```js

(function() {

console.log("This is an IIFE!");

})(); // Output: This is an IIFE!
```

* * * * *

**9️⃣ Function Expression**

---------------------------

✅ **A function stored in a variable (anonymous or named).**

✅ **Cannot be hoisted (must be defined before use).**

### **✅ Example: Function Expression**

```js

const greet = function(name) {

return `Hello, ${name}!`;

};

console.log(greet("Ayushi")); // Output: Hello, Ayushi!

```

* * * * *

**🔟 Callback Function**

------------------------

✅ **A function passed as an argument to another function.**

✅ **Used in asynchronous programming (setTimeout, fetch, etc.).**

### **✅ Example: Callback Function**

```js

function fetchData(callback) {

setTimeout(() => {

callback("Data received!");

}, 2000);

}

fetchData((message) => console.log(message)); // Output (after 2 sec): Data received!

```

* * * * *

**1️⃣1️⃣ Function Declaration**

-------------------------------

✅ **The traditional way of defining a function.**

✅ **Can be hoisted (called before being defined).**

### **✅ Example: Function Declaration**

```js

function sayHello() {

console.log("Hello, world!");

}

sayHello(); // Output: Hello, world!

```

* * * * *

**📌 Summary Table (Easy to Remember)**

---------------------------------------

| Function Type                       | What It Does                                    | Example                                         |
|-------------------------------------|-------------------------------------------------|-------------------------------------------------|
| **Spread Operator (`...`)**         | Expands arrays, objects                         | `[...arr]`, `{...obj}`                          |
| **Rest Parameters (`...args`)**     | Collects multiple arguments                     | `function(...args) {}`                          |
| **Default Parameters**              | Assigns default values                          | `function(x = 5) {}`                            |
| **Generator Function (`function*`)**| Pauses with `yield`, resumes with `.next()`     | `function* gen() { yield 1; }`                  |
| **Recursive Function**              | Calls itself until a base condition             | `factorial(n) { return n * factorial(n-1); }`   |
| **Arrow Function (`=>`)**           | Shorter function syntax, no `this`              | `const fn = () => {}`                           |
| **Higher-Order Function**           | Accepts/returns another function                | `function operate(cb) { cb(); }`                |
| **IIFE**                            | Runs immediately after definition               | `(function() { console.log("Run!"); })();`      |
| **Function Expression**             | Function stored in a variable                   | `const fn = function() {}`                      |
| **Callback Function**               | Passed into another function                    | `fetchData(callback)`                           |
| **Function Declaration**            | Standard function definition                    | `function sayHi() {}`                           |

* * * * *

🚀 **Key Takeaways:**

- **Spread (`...`)** expands, **Rest (`...args`)** collects.

- **Arrow functions (`=>`)** are shorter and don't have their own `this`.

- **Generators (`function*`)** allow pausing with `yield`.

- **Higher-order functions** use other functions inside them.

- **IIFE** runs immediately to avoid polluting global scope.





###### ChatGPT said:

No, we **cannot** directly use `num` instead of `...numbers` in this case. Here's why:

### **🔹 Explanation**

The `...numbers` syntax (Rest Parameters) collects all arguments into an **array**. Without it, JavaScript would not automatically bundle multiple arguments into an array.

### **✅ What Happens with `...numbers`?**

```js

function sum(...numbers) {

console.log(numbers); // numbers is an array

return numbers.reduce((acc, num) => acc + num, 0);

}

console.log(sum(1, 2, 3, 4)); // Output: 10

console.log(sum(10, 20)); // Output: 30
```

📌 Here, `numbers` is an array:

- `numbers = [1, 2, 3, 4]`

- `numbers.reduce(...)` works because `.reduce()` is an **array method**.

* * * * *

### **❌ What Happens if We Remove `...`?**

If we write:

```js

function sum(numbers) { // ❌ Wrong: numbers is NOT an array

return numbers.reduce((acc, num) => acc + num, 0);

}

console.log(sum(1, 2, 3, 4)); // ❌ ERROR: numbers.reduce is not a function

```

🚨 **Error: `numbers.reduce is not a function`**

Because `numbers` is not an **array**; it is just the **first argument** (`1` in this case).

* * * * *

### **🛠 Correcting It Without Rest Parameters**

If you **don't** want to use `...numbers`, you must pass an **array explicitly**:

```js

function sum(numbers) {

return numbers.reduce((acc, num) => acc + num, 0);

}

console.log(sum([1, 2, 3, 4])); // ✅ Output: 10

console.log(sum([10, 20])); // ✅ Output: 30

```

📌 Here, we **manually pass an array**.

* * * * *

### **🔹 Conclusion**
| Approach             | Works? | Why?                                              |
|----------------------|--------|---------------------------------------------------|
| `sum(...numbers)`     | ✅ Yes | `numbers` collects arguments as an array.         |
| `sum(numbers)`        | ❌ No  | `numbers` is just the first argument, not an array. |
| `sum([numbers])`      | ✅ Yes | We explicitly pass an array.                      |


🚀 **Use `...numbers` when you want a function to accept multiple arguments dynamically!**



**🔹 Function Hoisting & Variable Hoisting in JavaScript**

----------------------------------------------------------

Hoisting is a behavior in JavaScript where **variable and function declarations are moved (hoisted) to the top of their scope before execution**.

* * * * *

**1️⃣ Function Hoisting**

-------------------------

✅ **Only function declarations are hoisted (not function expressions).**

✅ You can call a function **before** declaring it.

### **✅ Example: Function Hoisting (Works)**

```js

sayHello(); // ✅ Works! Output: Hello, world!

function sayHello() {

console.log("Hello, world!");

}
```

📌 **Why does it work?**

- JavaScript **hoists** the function declaration to the top before execution.

* * * * *

### **❌ Function Expression is NOT Hoisted**

🚨 Function expressions are NOT hoisted.

```js

greet(); // ❌ ERROR: Cannot access 'greet' before initialization

const greet = function() {

console.log("Hi!");

};

```

📌 **Why error?**

- `greet` is declared using `const`, so it **does not** get hoisted like function declarations.

* * * * *

**2️⃣ Variable Hoisting**

-------------------------

✅ **Only variable declarations (not values) are hoisted.**

✅ `var` is hoisted **without an initial value** (undefined).

✅ `let` and `const` are hoisted **but remain in a "temporal dead zone" (TDZ) until initialized.**

### **✅ Example: `var` Hoisting**

```js

console.log(x); // ✅ Output: undefined

var x = 10;

console.log(x); // Output: 10

```

📌 **Why `undefined`?**

- `var x` is hoisted, but its **value (10) is not hoisted**.

* * * * *

### **❌ `let` and `const` Hoisting (Error in TDZ)**

```js

console.log(y); // ❌ ERROR: Cannot access 'y' before initialization

let y = 20;
```

📌 **Why error?**

- `let` and `const` are hoisted **but stay in the Temporal Dead Zone (TDZ)** until initialized.

* * * * *

**🚀 Summary Table**

--------------------
| Type                    | Hoisted?           | Default Value     | Can Use Before Declaration? |
|-------------------------|--------------------|-------------------|----------------------------|
| **Function Declaration** | ✅ Yes             | ✅ Full function  | ✅ Yes                     |
| **Function Expression**  | ❌ No              | ❌ Not hoisted    | ❌ No                      |
| **var**                  | ✅ Yes             | `undefined`       | ✅ Yes (but undefined)     |
| **let**                  | ✅ Yes (TDZ)       | ❌ No value       | ❌ No (TDZ error)          |
| **const**                | ✅ Yes (TDZ)       | ❌ No value       | ❌ No (TDZ error)          |

* * * * *

### **🔹 Key Takeaways**

- **Function declarations** are fully hoisted (can be used before defining).

- **Function expressions** are NOT hoisted.

- **`var` is hoisted but initializes as `undefined`**.

- **`let` and `const` are hoisted but in the Temporal Dead Zone (TDZ), causing errors if accessed before declaration.**


**📌 Stack vs Heap in JavaScript (Memory Management)**
------------------------------------------------------

JavaScript uses **two types of memory** for storing data:

-   **🗂 Stack Memory (Call Stack)** → Stores **primitive values** & function calls.
-   **📦 Heap Memory** → Stores **objects, arrays, and functions** (non-primitive values).

* * * * *

**🔹 Stack Memory (Call Stack)**
--------------------------------

-   **Fast & automatically managed.**
-   Stores **primitive data types** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
-   Also stores function **call execution context**.
-   Uses **Last In, First Out (LIFO)**.
-   When a function is called, it's added to the stack, and when it finishes execution, it's removed.

### **✅ Example of Stack Memory**
```js
let x = 10;
let y = "Hello";
let z = x;  // Copy of value

console.log(z);  // ✅ Output: 10
```

📌 **Here,**

-   `x` and `y` are stored in the **stack**.
-   `z = x` creates a **copy** of `x`, so changing `z` won't affect `x`.

* * * * *

**🔹 Heap Memory (Dynamic Memory Allocation)**
----------------------------------------------

-   **Slower but used for dynamic memory allocation.**
-   Stores **reference (non-primitive) data types** (`objects`, `arrays`, `functions`).
-   Variables store only a **reference (memory address) pointing to the object in heap**.
-   Changes in objects/arrays **affect the original reference**.

### **✅ Example of Heap Memory**
```js

let person1 = { name: "Prakhar" };
let person2 = person1;  // Reference, NOT a copy

person2.name = "Ayushi";

console.log(person1.name);  // ✅ Output: "Ayushi"
```

📌 **Why?**

-   `person1` is stored in the **heap**.
-   `person2` **does not create a copy** but **references the same object in heap**.
-   Changing `person2.name` also **modifies `person1.name`**.


**🔹 Key Differences Between Stack and Heap**
---------------------------------------------

| Feature | **Stack** | **Heap** |
| --- | --- | --- |
| **Used For** | Primitive data types | Non-primitive data (objects, arrays, functions) |
| **Memory Allocation** | Fixed size, managed automatically | Dynamically allocated, requires garbage collection |
| **Speed** | Very fast | Slower compared to stack |
| **Data Storage** | Stores actual values | Stores references (pointers) to memory locations |
| **Copy Behavior** | Copies values | Copies references (not the actual object) |

**🔹 Important Concept: Shallow Copy vs Deep Copy**
---------------------------------------------------

-   **Shallow Copy** → Creates a new reference but **still points to the same object in the heap**.
-   **Deep Copy** → Creates a completely **new object with a new memory allocation**.

### **✅ Shallow Copy Example**

```js
let obj1 = { name: "Prakhar" };
let obj2 = obj1;  // Shallow copy (same reference)

obj2.name = "Ayushi";
console.log(obj1.name);  // ✅ Output: "Ayushi" (both changed)

```

* * * * *

### **✅ Deep Copy Example**

```js
let obj1 = { name: "Prakhar" };
let obj2 = JSON.parse(JSON.stringify(obj1));  // Deep copy (new memory allocation)

obj2.name = "Ayushi";
console.log(obj1.name);  // ✅ Output: "Prakhar" (original remains unchanged)`
```


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

### **✅ Example 1: Assigning a Function to a Variable**

```js
const greet = function() {
    return "Hello, Prakhar!";
};

console.log(greet());  // ✅ Output: "Hello, Prakhar!"
```

📌 Here, `greet` is a **function expression** assigned to a variable.

* * * * *

### **✅ Example 2: Passing a Function as an Argument (Callback Function)**

```js

function execute(callback) {
    callback();  // Calls the function passed as an argument
}

execute(() => console.log("Executing function!"));
// ✅ Output: "Executing function!"

```

📌 Since functions are **first-class citizens**, they can be **passed as arguments** like any other variable.

* * * * *

### **✅ Example 3: Returning a Function from Another Function**

```js
function outerFunction() {
    return function innerFunction() {
        return "Returned from inner function!";
    };
}

const result = outerFunction();  // result now holds innerFunction
console.log(result());  // ✅ Output: "Returned from inner function!"

```

📌 A function can **return another function**, allowing us to build **closures**.

* * * * *

### **✅ Example 4: Storing Functions in an Object**



```js
const obj = {
    sayHello: function() {
        return "Hello from object!";
    }
};

console.log(obj.sayHello());  // ✅ Output: "Hello from object!"

```

📌 Functions can be **properties of objects**, making them **methods**.

* * * * *

**🚀 Summary: Why Functions Are First-Class Citizens**
------------------------------------------------------

| Feature | Explanation |
| --- | --- |
| **Stored in Variables** | Functions can be assigned to variables (`const greet = function() {...}`) |
| **Passed as Arguments** | Functions can be passed as callbacks (`setTimeout(callback, 1000)`) |
| **Returned from Functions** | Functions can return another function (`return function() {...}`) |
| **Stored in Data Structures** | Functions can be stored in objects & arrays |

### **🔥 Final Takeaway**

📌 **Functions in JavaScript behave like regular values**, making them powerful and flexible!



-----------


### **📌 Understanding the Issues in Your Code**

Let's break down both cases and understand why they are giving unexpected results.

* * * * *

### **❌ Issue in the First Case: NaN Output**

```js
function solve(number) {

    return function(number) { // ❌ This is causing an issue

        return number * number;

    };

}

let ans = solve(5);

console.log(ans());  // ❌ Output: NaN

```

#### **❗ Why is it `NaN`?**

-   `solve(5)` **returns a function** (anonymous function inside).

-   But when calling `ans()`, it does not receive any argument.

-   Inside that function:

```js
return number * number;
```

    Here, `number` is **undefined** (since we didn't pass anything to `ans()`), and `undefined * undefined` results in **NaN**.

#### **✅ Corrected Code: Pass the argument when calling `ans()`**

```js

function solve(number) {

    return function(n) {  // ✅ Changed `number` to `n` to avoid variable shadowing

        return n * n;

    };

}

let ans = solve(5);

console.log(ans(5));  // ✅ Output: 25

```

📌 **Fix:** The inner function should take a different parameter (e.g., `n`) **or** you should pass an argument when calling `ans()`.

* * * * *

### **❓ Second Case: Why Does It Print `[Function (anonymous)]`?**

```js
function solve(number) {

    return function(number) {

        return number * number;

    };

}

let ans = solve(5);

console.log(ans);
```

#### **❗ Why does it print `[Function (anonymous)]`?**

-   `solve(5)` **returns a function** but does not execute it.

-   `console.log(ans);` just prints the function itself, **not its result**.

#### **✅ Corrected Code: Call the Function**

```js


function solve(number) {

    return function(n) {  // Changed `number` to `n` to avoid confusion

        return n * n;

    };

}

let ans = solve(5);

console.log(ans(5));  // ✅ Output: 25

```

* * * * *

**🚀 Final Summary**

--------------------

| Issue | Reason | Fix |

| Output                  | Issue                                               | Solution                                     |
|-------------------------|-----------------------------------------------------|----------------------------------------------|
| `NaN` output           | Inner function expects a parameter but receives `undefined` | Pass an argument when calling `ans()`, or rename the inner parameter |
| `[Function (anonymous)]` output | The function reference is printed instead of executing it | Call the function (`ans(5)`) |







**📌 What is an Anonymous Function in JavaScript?**

---------------------------------------------------

An **anonymous function** is a function **without a name**. It is usually assigned to a variable or used as an argument inside another function.

* * * * *

**🔹 Example 1: Anonymous Function Assigned to a Variable**

-----------------------------------------------------------


```js

const greet = function() {

    return "Hello, Prakhar!";

};

console.log(greet());  // ✅ Output: "Hello, Prakhar!"

```

📌 **Here,**

-   The function **does not have a name**.

-   It is stored in the `greet` variable.

-   Calling `greet()` executes the function.

* * * * *

**🔹 Example 2: Anonymous Function as a Callback**

--------------------------------------------------


```js

setTimeout(function() {

    console.log("This runs after 2 seconds!");

}, 2000);

```

📌 **Here,**

-   The function **has no name**.

-   It is passed directly as a **callback** to `setTimeout`.

* * * * *

**🔹 Example 3: Anonymous Function Inside Another Function**

------------------------------------------------------------


```js

function execute(func) {

    func();

}

execute(function() {

    console.log("Executing function!");

});

// ✅ Output: "Executing function!"

```

📌 The anonymous function is passed as an argument and executed inside `execute()`.

* * * * *

**🔹 Example 4: Immediately Invoked Function Expression (IIFE)**

----------------------------------------------------------------


```js

(function() {

    console.log("This function runs immediately!");

})();

// ✅ Output: "This function runs immediately!"
```

📌 **IIFE (Immediately Invoked Function Expression)** is an **anonymous function** that runs immediately after its definition.

* * * * *

**🔹 Named Function vs. Anonymous Function**

--------------------------------------------

| Feature         | Named Function                  | Anonymous Function                        |
|---------------|--------------------------------|------------------------------------------|
| **Definition** | Has a name (`function greet() {}`) | No name (`function() {}`) |
| **Reference** | Can be called by name | Usually assigned to a variable or passed as an argument |
| **Usage** | Useful for recursion, debugging | Often used as callbacks, IIFE, and function expressions |


* * * * *

**🚀 Summary**

--------------

✅ **Anonymous functions** are functions **without a name**.

✅ They are often used as **function expressions, callbacks, and IIFE**.

✅ **Cannot be called directly** (must be assigned to a variable or passed as an argument).







**📌 Variable Hoisting in JavaScript**

--------------------------------------

### **🔹 What is Hoisting?**

**Hoisting** is JavaScript's behavior of **moving declarations to the top of their scope** before code execution.

* * * * *

**🔹 Example 1: `var` is hoisted (but initialized as `undefined`)**

-------------------------------------------------------------------

```js


console.log(a);  // ✅ Output: undefined (hoisted but not initialized)

var a = 10;

console.log(a);  // ✅ Output: 10

```

📌 **Why?**

-   The **declaration** `var a;` is hoisted to the top.

-   But **the assignment** `a = 10;` remains in place.

-   So `console.log(a);` before assignment prints `undefined`.

🔴 **What actually happens behind the scenes:**


```js

var a;

console.log(a);  // undefined

a = 10;

console.log(a);  // 10
```

* * * * *

**🔹 Example 2: `let` and `const` are NOT hoisted like `var`**

--------------------------------------------------------------

```js
console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization

let b = 20;

```

📌 **Why?**

-   `let` and `const` are hoisted **but not initialized**.

-   They stay in the **"Temporal Dead Zone"** until the declaration is encountered.

🔴 **Behind the scenes:**

```js
// let b is hoisted but not initialized → Temporal Dead Zone

console.log(b);  // ❌ ReferenceError

let b = 20;

```

* * * * *

**🔹 Example 3: Function Declarations are Hoisted**

---------------------------------------------------

```js

hello();  // ✅ Output: "Hello, Prakhar!"

function hello() {

    console.log("Hello, Prakhar!");

}
```

📌 **Why?**

-   **Function declarations** are fully hoisted, meaning the entire function is moved to the top of the scope.

🔴 **Behind the scenes:**

```js

function hello() {  // ✅ Function is moved to the top

    console.log("Hello, Prakhar!");

}

hello();  // ✅ Works fine

```

* * * * *

**🔹 Example 4: Function Expressions are NOT Hoisted**

------------------------------------------------------

```js
greet();  // ❌ TypeError: greet is not a function

var greet = function() {

    console.log("Hello, World!");

};
```

📌 **Why?**

-   `greet` is declared using `var`, so it is **hoisted as `undefined`**.

-   But the function assignment (`greet = function() {...}`) is **not hoisted**.

🔴 **Behind the scenes:**

```js
var greet;  // Hoisted as undefined

greet();  // ❌ TypeError: greet is not a function

greet = function() {

    console.log("Hello, World!");

};
```

* * * * *

**🔹 Example 5: Function Expressions using `let` or `const`**

-------------------------------------------------------------

```js
console.log(fun);  // ❌ ReferenceError: Cannot access 'fun' before initialization

let fun = function() {

    console.log("Hello!");

};

```

📌 **Why?**

-   `let fun` is hoisted, but remains in the **Temporal Dead Zone** until the declaration is executed.

-   Unlike `var`, it does not get an **initial `undefined` value**.

* * * * *

**🚀 Final Summary**

--------------------
| Feature                          | `var`      | `let` / `const` | Function Declaration | Function Expression (`var`) |
|----------------------------------|-----------|----------------|----------------------|-----------------------------|
| **Hoisted?**                     | ✅ Yes    | ✅ Yes         | ✅ Yes               | ✅ Yes                      |
| **Initialized?**                 | ✅ As `undefined` | ❌ No (TDZ) | ✅ Fully hoisted   | ✅ As `undefined`          |
| **Usable Before Declaration?**   | ✅ Yes (but `undefined`) | ❌ No (TDZ) | ✅ Yes | ❌ No (TypeError) |

📌 **Key Takeaways:**

-   **`var` is hoisted but initialized as `undefined`**.

-   **`let` and `const` are hoisted but NOT initialized** (Temporal Dead Zone).

-   **Function declarations are fully hoisted**.

-   **Function expressions behave like variables (hoisted but undefined if using `var`)**.





**📌 `var`, `let`, and `const` in Different Scopes (Block, Function, and Global)**

----------------------------------------------------------------------------------

JavaScript has **three types of scope**:

1️⃣ **Global Scope** -- Variables accessible everywhere.

2️⃣ **Function Scope** -- Variables accessible only inside a function.

3️⃣ **Block Scope** -- Variables accessible only inside `{}` (for loops, if-else, etc.).

* * * * *

**🔹 `var` Does NOT Work in Block Scope (Only Function Scope)**

---------------------------------------------------------------

```js
if (true) {

    var x = 10;  // ✅ Declared inside block

}

console.log(x);  // ✅ Output: 10 (Still accessible outside the block!)
```

📌 **Why?**

-   `var` is **NOT block-scoped**, it **ignores `{}` and leaks outside**.

-   It behaves as if it was declared outside the `if` block.

🔴 **Behind the scenes:**

```js
var x;  // `var` is function-scoped, so it behaves as if declared globally

if (true) {

    x = 10;

}

console.log(x);  // ✅ 10 (Accessible outside block)
```

* * * * *

**🔹 `let` and `const` are Block Scoped (Stay Inside `{}`)**

------------------------------------------------------------

```js
if (true) {

    let y = 20;

    const z = 30;

}

console.log(y);  // ❌ ReferenceError: y is not defined

console.log(z);  // ❌ ReferenceError: z is not defined`
```
📌 **Why?**

-   `let` and `const` **stay inside `{}`** and are **not accessible outside**.

* * * * *

**🔹 Function Scope: `var`, `let`, and `const` Work Inside Functions**

----------------------------------------------------------------------

```js
function test() {

    var a = 10;

    let b = 20;

    const c = 30;

}

console.log(a);  // ❌ ReferenceError: a is not defined

console.log(b);  // ❌ ReferenceError: b is not defined

console.log(c);  // ❌ ReferenceError: c is not defined`
```
📌 **Why?**

-   `var`, `let`, and `const` inside a function **cannot be accessed outside the function**.

* * * * *

**🔹 Global Scope: `var`, `let`, and `const` Work Globally**

------------------------------------------------------------

```js
var globalVar = "I am global!";

let globalLet = "I am also global!";

const globalConst = "I am global too!";

console.log(globalVar);  // ✅ "I am global!"

console.log(globalLet);  // ✅ "I am also global!"

console.log(globalConst); // ✅ "I am global too!"
```

📌 **Why?**

-   Variables declared **outside functions** are **global**.

* * * * *

**🚀 Final Summary**

--------------------
| Feature                          | `var`            | `let`           | `const`         |
|----------------------------------|-----------------|----------------|----------------|
| **Global Scope**                 | ✅ Accessible   | ✅ Accessible  | ✅ Accessible  |
| **Function Scope**               | ✅ Limited to function | ✅ Limited to function | ✅ Limited to function |
| **Block Scope (`{}`)**           | ❌ NO (Leaks outside) | ✅ YES | ✅ YES |
| **Reassignable?**                | ✅ Yes          | ✅ Yes        | ❌ No         |
| **Re-declarable in Same Scope?** | ✅ Yes          | ❌ No         | ❌ No         |


📌 **Key Takeaways:**

-   **`var` is function-scoped** (not block-scoped) and **leaks outside `{}`**.

-   **`let` and `const` are block-scoped** and **stay inside `{}`**.

-   **Use `let` or `const` instead of `var`** for better scoping.




Let's analyze the code step by step and understand why the output is as follows:

### **🔹 Code Given**

```js
var fullName;

console.log(fullName + " first");  // (1)

function sayHello() {

    var fullName = "Earth";

    console.log("Hello Dunia", fullName);  // (2)

}

console.log(fullName + " second");  // (3)

sayHello();  // (4)

```

### **🔹 Step-by-Step Execution**

#### **Step 1: `var fullName;` is declared**

-   `var fullName;` is declared but not assigned any value.

-   In JavaScript, uninitialized `var` variables **default to `undefined`**.

#### **Step 2: First `console.log(fullName + " first");`**

```js
console.log(fullName + " first");

```

-   `fullName` is `undefined`, so:

```js
console.log(undefined + " first");
```

-   JavaScript converts `undefined` to `"undefined"` when concatenating with a string.

-   ✅ **Output:**

```js
undefined first
```

#### **Step 3: Function `sayHello` is Defined but Not Executed Yet**

```js
function sayHello() {

    var fullName = "Earth";

    console.log("Hello Dunia", fullName);

}
```

-   The function is only **declared**, so nothing is printed yet.

#### **Step 4: Second `console.log(fullName + " second");`**

```js
console.log(fullName + " second");
```

-   `fullName` is still `undefined` in the global scope.

-   So:
```js
    console.log(undefined + " second");
```

-   ✅ **Output:**
```js
    undefined second
```

#### **Step 5: `sayHello()` is Called**

```js
sayHello();
```

-   Inside `sayHello`, a **new variable `fullName` is declared inside the function scope**.

-   This `fullName` is different from the global `fullName` and is assigned `"Earth"`.

-   ✅ **Output:**

```js

    `Hello Dunia Earth

```

* * * * *

### **🔹 Final Output**

```js
undefined first

undefined second

Hello Dunia Earth
```

* * * * *

### **🔹 Why Does `"undefined second"` Come Before `"Hello Dunia Earth"`?**

-   The function `sayHello()` is called **after** `console.log(fullName + " second");`.

-   Since JavaScript executes **line by line**, the second `console.log` runs **before** `sayHello()` is executed.

* * * * *

### **🔹 If You Wanted `"Hello Dunia Earth"` Before `"undefined second"`, Modify Like This:**

```js
var fullName;

console.log(fullName + " first");

sayHello();   // 👈 Call the function here

console.log(fullName + " second");  // Now this runs AFTER sayHello()

function sayHello() {

    var fullName = "Earth";

    console.log("Hello Dunia", fullName);

}
```

✅ **Output Now:**

```js
undefined first

Hello Dunia Earth

undefined second
```

### **🚀 Key Takeaways**

1️⃣ **`var` is hoisted and initialized with `undefined`**, so using `console.log(fullName)` before assigning a value gives `"undefined"`.

2️⃣ **Function execution happens only when called**, so `"Hello Dunia Earth"` appears **after the second `console.log`**, not before.

3️⃣ **Inside `sayHello`, `fullName` is a local variable**, meaning it does not affect the global `fullName`.




**🔹 What is a Callback Function in JavaScript?**

-------------------------------------------------

A **callback function** is a function **passed as an argument** to another function and executed later.

### **✅ Example of Callback Function**

```js
function greet(name, callback) {

    console.log("Hello, " + name);

    callback();

}

function sayBye() {

    console.log("Goodbye!");

}

greet("Prakhar", sayBye);
```

✅ **Output:**

```js
Hello, Prakhar

Goodbye
```

### **📌 Why Use Callbacks?**

-   Used in **asynchronous operations** (e.g., API calls, file reading, timers).

-   Allows code to execute **after another function finishes**.

* * * * *

**🔹 What is an Object in JavaScript?**

---------------------------------------

An **object** is a collection of **key-value pairs** (also called properties).

Objects can store **data** and **methods (functions inside objects)**.

### **✅ Example of an Object**

```js
    const person = {

    name: "Prakhar",

    age: 21,

    greet: function() {

        console.log("Hello, my name is " + this.name);

    }

};

console.log(person.name);  // ✅ Output: Prakhar

person.greet();            // ✅ Output: Hello, my name is Prakhar
```

### **📌 Why Use Objects?**

-   Objects **group related data and behaviors together**.

-   They allow **reusable and structured code**.

* * * * *

**🚀 Summary**

--------------

| Concept             | Explanation                                      | Example |
|--------------------|------------------------------------------------|---------|
| **Callback Function** | A function passed as an argument to another function. | `setTimeout(() => console.log("Done!"), 1000);` |
| **Object**           | A collection of key-value pairs storing data and functions. | `{ name: "John", age: 30 }` |


**🔹 Default Parameters in JavaScript**

---------------------------------------

Default parameters allow us to **set a default value** for a function parameter **if no value is provided**.

### **✅ Basic Example**

```js
function greet(name = "Guest") {

    console.log("Hello, " + name);

}

greet("Prakhar"); // ✅ Output: Hello, Prakhar

greet();          // ✅ Output: Hello, Guest (default value used)
```

📌 If no argument is passed, `"Guest"` is used as the **default value**.

* * * * *

**🔹 Default Parameters in Different Cases**

--------------------------------------------

### **1️⃣ When No Argument is Passed (`undefined` Case)**

```js

function example(x = 10) {

    console.log(x);

}

example();  // ✅ Output: 10 (default value is used)
```

📌 If we **don't pass any value**, JavaScript treats it as `undefined`, so the **default value is used**.

* * * * *

### **2️⃣ When `undefined` is Explicitly Passed**

```js
function example(x = 10) {

    console.log(x);

}

example(undefined);  // ✅ Output: 10 (default value is used)
```

📌 `undefined` **triggers the default value**, so `10` is printed.

* * * * *

### **3️⃣ When `null` is Passed**

```js
function example(x = 10) {

    console.log(x);

}

example(null);  // ✅ Output: null
```

📌 `null` is **a real value** (not `undefined`), so JavaScript **does NOT use the default value**.

* * * * *

### **4️⃣ When an Argument is Passed Normally**

```js
function example(x = 10) {

    console.log(x);

}

example(20);  // ✅ Output: 20
```

📌 Since `20` is passed, the default value (`10`) **is ignored**.

* * * * *

### **5️⃣ Default Parameter with Another Parameter**

```js
function sum(a, b = a * 2) {

    console.log(a + b);

}

sum(5);   // ✅ Output: 15 (b = 5 * 2)

sum(5, 10); // ✅ Output: 15 (b is explicitly given as 10)
```

📌 **`b` depends on `a`**. If `b` is not provided, it takes `a * 2`.

* * * * *

**🚀 Final Summary**

--------------------
| Case                              | Passed Value  | Output                               |
|-----------------------------------|--------------|--------------------------------------|
| No argument passed               | `undefined`  | Default value is used               |
| `undefined` is passed             | `undefined`  | Default value is used               |
| `null` is passed                  | `null`       | Default **NOT used** (prints `null`) |
| Normal argument passed            | Actual value | Default **ignored**                 |
| Default depends on another parameter | Uses computed value | Works dynamically                 |




**🔹 Objects in JavaScript**

----------------------------

In JavaScript, an **object** is a collection of **key-value pairs** (also called properties). Objects allow you to **store multiple related values** and define behaviors using methods.

* * * * *

**✅ Creating an Object**

------------------------

### **1️⃣ Using Object Literal `{}`**

```js
const person = {

    name: "Prakhar",

    age: 21,

    greet: function() {

        console.log("Hello, my name is " + this.name);

    }

};

console.log(person.name);  // ✅ Output: Prakhar

person.greet();            // ✅ Output: Hello, my name is Prakhar
```

📌 **Here:**

-   `name` and `age` are **properties**.

-   `greet()` is a **method** (function inside an object).

* * * * *

### **2️⃣ Using `new Object()`**

```js
const student = new Object();

student.name = "Ayushi";

student.grade = "A";

console.log(student.name);  // ✅ Output: Ayushi
```

📌 **This is another way** to create an object, but object literals `{}` are preferred.

* * * * *

### **3️⃣ Using Constructor Function**

```js
function Car(brand, model) {

    this.brand = brand;

    this.model = model;

}

const myCar = new Car("Toyota", "Corolla");

console.log(myCar.brand);  // ✅ Output: Toyota

```

📌 **`this` refers to the object being created**.

* * * * *

### **4️⃣ Using `Object.create()`**

```js
const protoPerson = {

    greet: function() {

        console.log("Hello!");

    }

};

const newPerson = Object.create(protoPerson);

newPerson.name = "Prakhar";

console.log(newPerson.name);  // ✅ Output: Prakhar

newPerson.greet();            // ✅ Output: Hello!
```

📌 This creates a **new object with `protoPerson` as its prototype**.

* * * * *

**🔹 Accessing and Modifying Object Properties**

------------------------------------------------

```js
const user = { name: "John", age: 25 };

// ✅ Access properties

console.log(user.name);    // John

console.log(user["age"]);  // 25

// ✅ Modify properties

user.age = 30;

console.log(user.age);  // 30

// ✅ Add new properties

user.city = "New York";

console.log(user.city);  // New York

// ✅ Delete properties

delete user.age;

console.log(user.age);  // undefined

```

* * * * *

**🔹 Looping Through an Object**

--------------------------------

### **1️⃣ Using `for...in` Loop**

```js
const user = { name: "Alice", age: 22, country: "India" };

for (let key in user) {

    console.log(key + ": " + user[key]);

}
```

✅ **Output:**
```js
name: Alice

age: 22

country: India
```

* * * * *

**🔹 Object Methods**

---------------------

| Method                     | Description                                 | Example |
|----------------------------|---------------------------------------------|---------|
| `Object.keys(obj)`         | Returns an array of keys                    | `Object.keys(user)` → `["name", "age"]` |
| `Object.values(obj)`       | Returns an array of values                  | `Object.values(user)` → `["Alice", 22]` |
| `Object.entries(obj)`      | Returns an array of `[key, value]` pairs    | `Object.entries(user)` → `[["name", "Alice"], ["age", 22]]` |
| `Object.assign(target, source)` | Copies properties from `source` to `target` | `Object.assign({}, user)` |
| `obj.hasOwnProperty(key)`  | Checks if key exists in object              | `user.hasOwnProperty("name")` |


* * * * *

**🚀 Final Summary**

--------------------

-   **Objects store key-value pairs** (like dictionaries in Python).

-   Can store **both data (properties) and functions (methods)**.

-   Can be created using `{}`, `new Object()`, constructor functions, or `Object.create()`.

-   Can be **modified, looped through, and manipulated** using built-in methods.



**🔹 JavaScript `Math` Object**

-------------------------------

The **`Math` object** in JavaScript provides built-in mathematical functions and constants. It is **not a constructor**, so we do not need to create an instance of `Math` (i.e., we use `Math.method()` directly).

* * * * *

**🔹 Math Properties (Constants)**

----------------------------------
| Property      | Value                  | Description             |
|--------------|----------------------|-------------------------|
| `Math.PI`    | `3.141592653589793`   | Value of Pi (π)        |
| `Math.E`     | `2.718281828459045`   | Euler's number (e)     |
| `Math.LN2`   | `0.6931471805599453`  | Natural log of 2       |
| `Math.LN10`  | `2.302585092994046`   | Natural log of 10      |
| `Math.SQRT2` | `1.4142135623730951`  | Square root of 2       |
| `Math.SQRT1_2` | `0.7071067811865476` | Square root of 1/2     |


✅ **Example Usage:**

```js
console.log(Math.PI);  // ✅ Output: 3.141592653589793

console.log(Math.E);   // ✅ Output: 2.718281828459045`
```
* * * * *

**🔹 Math Methods**

-------------------
| Method                | Description                                  | Example |
|-----------------------|----------------------------------------------|---------|
| `Math.abs(x)`        | Returns the **absolute value** of `x`         | `Math.abs(-5)` → `5` |
| `Math.ceil(x)`       | Rounds `x` **up** to the nearest integer      | `Math.ceil(4.3)` → `5` |
| `Math.floor(x)`      | Rounds `x` **down** to the nearest integer    | `Math.floor(4.9)` → `4` |
| `Math.round(x)`      | Rounds `x` to the **nearest integer**         | `Math.round(4.5)` → `5` |
| `Math.trunc(x)`      | Removes the decimal part                      | `Math.trunc(4.9)` → `4` |
| `Math.max(a, b, c, ...)` | Returns the **largest number**           | `Math.max(10, 5, 8)` → `10` |
| `Math.min(a, b, c, ...)` | Returns the **smallest number**          | `Math.min(10, 5, 8)` → `5` |
| `Math.pow(x, y)`     | Returns `x` raised to the power `y`          | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)`       | Returns the **square root** of `x`           | `Math.sqrt(25)` → `5` |
| `Math.cbrt(x)`       | Returns the **cube root** of `x`             | `Math.cbrt(27)` → `3` |
| `Math.random()`      | Returns a **random number** between `0` and `1` | `Math.random()` → `0.57` (random) |
| `Math.log(x)`        | Returns the **natural logarithm** of `x`      | `Math.log(10)` → `2.30` |
| `Math.log10(x)`      | Returns the **log base 10** of `x`           | `Math.log10(100)` → `2` |
| `Math.sin(x)`        | Returns the **sine** of `x` (in radians)     | `Math.sin(Math.PI/2)` → `1` |
| `Math.cos(x)`        | Returns the **cosine** of `x` (in radians)   | `Math.cos(0)` → `1` |
| `Math.tan(x)`        | Returns the **tangent** of `x` (in radians)  | `Math.tan(Math.PI/4)` → `1` |


* * * * *

**🔹 Generating Random Numbers**

--------------------------------

### **1️⃣ Random Number Between 0 and 1**

```js
console.log(Math.random());  // ✅ Output: Random value between 0 and 1

```

### **2️⃣ Random Integer Between `min` and `max`**

```js
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log(getRandomInt(1, 100));  // ✅ Output: Random number between 1 and 100
```

* * * * *

**🔹 Examples**

---------------

### **🔸 Round Numbers**

```js
console.log(Math.round(4.6));  // ✅ Output: 5

console.log(Math.ceil(4.2));   // ✅ Output: 5

console.log(Math.floor(4.9));  // ✅ Output: 4

console.log(Math.trunc(4.9));  // ✅ Output: 4
```

### **🔸 Find Max & Min**

```js
console.log(Math.max(5, 10, 15, 20)); // ✅ Output: 20

console.log(Math.min(5, 10, 15, 20)); // ✅ Output: 5`
```
### **🔸 Square & Power**

```js
console.log(Math.sqrt(16));   // ✅ Output: 4

console.log(Math.pow(2, 3));  // ✅ Output: 8
```

* * * * *

**🚀 Summary Table**
| Property/Method         | Description          | Example |
|-------------------------|----------------------|---------|
| `Math.PI`              | Value of Pi (π)      | `Math.PI` → `3.1415` |
| `Math.abs(x)`          | Absolute value       | `Math.abs(-7)` → `7` |
| `Math.ceil(x)`         | Round up             | `Math.ceil(4.3)` → `5` |
| `Math.floor(x)`        | Round down           | `Math.floor(4.9)` → `4` |
| `Math.round(x)`        | Round to nearest     | `Math.round(4.5)` → `5` |
| `Math.trunc(x)`        | Remove decimals      | `Math.trunc(4.9)` → `4` |
| `Math.max(a, b, c, ...)` | Find max number   | `Math.max(1, 2, 3)` → `3` |
| `Math.min(a, b, c, ...)` | Find min number   | `Math.min(1, 2, 3)` → `1` |
| `Math.pow(x, y)`       | Power calculation    | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)`         | Square root          | `Math.sqrt(9)` → `3` |
| `Math.random()`        | Random number (0-1)  | `Math.random()` → `0.543` |
| `Math.log(x)`          | Natural log          | `Math.log(10)` → `2.30` |
| `Math.sin(x)`          | Sine function        | `Math.sin(Math.PI/2)` → `1` |

* * * * *

### **💡 Key Takeaways**

-   `Math` is **not a constructor**, so no `new Math()`.

-   **Random numbers** are generated with `Math.random()`, but need scaling.

-   **Rounding functions**: `Math.ceil()`, `Math.floor()`, `Math.round()`, `Math.trunc()`.

-   **Power & roots**: `Math.pow()`, `Math.sqrt()`, `Math.cbrt()`.

-   **Trigonometric functions** are in **radians**.

* * * * *





**📅 JavaScript Date & Time (`Date` Object)**

---------------------------------------------

The **`Date` object** in JavaScript is used to work with **dates and times**. It provides methods to create, modify, and format dates.

* * * * *

**🔹 Creating a Date Object**

-----------------------------

We create a date object using `new Date()`.

### **1️⃣ Get the Current Date & Time**

```js
const now = new Date();

console.log(now);

// ✅ Output: Current Date & Time (e.g., "Fri Mar 14 2025 10:00:00 GMT+0530 (IST)")
```



* * * * *

**🔹 Different Ways to Create a Date**

--------------------------------------
| Syntax | Description | Example |
|--------|-------------|---------|
| `new Date()` | Current date & time | `new Date()` |
| `new Date(year, month, day, hours, minutes, seconds, ms)` | Specific date & time | `new Date(2025, 2, 14, 10, 30, 0, 0)` → `Mar 14 2025 10:30:00` |
| `new Date(year, month, day)` | Only date, time set to `00:00:00` | `new Date(2025, 2, 14)` → `Mar 14 2025 00:00:00` |
| `new Date("YYYY-MM-DD")` | ISO date format | `new Date("2025-03-14")` |
| `new Date(milliseconds)` | Date from milliseconds (from Jan 1, 1970) | `new Date(0)` → `Thu Jan 01 1970` |


📌 **Note:** Months in JavaScript are **0-based** (`0 = January`, `1 = February`, etc.).

✅ **Example:**

```js
console.log(new Date(2025, 2, 14));  // ✅ Output: Fri Mar 14 2025
```

* * * * *

**🔹 Getting Date & Time Components**
| Method | Description | Example Output |
|--------|-------------|---------------|
| `getFullYear()` | Get year | `new Date().getFullYear()` → `2025` |
| `getMonth()` | Get month (0-11) | `new Date().getMonth()` → `2` (March) |
| `getDate()` | Get day of the month (1-31) | `new Date().getDate()` → `14` |
| `getDay()` | Get weekday (0 = Sunday, 1 = Monday) | `new Date().getDay()` → `5` (Friday) |
| `getHours()` | Get hours (0-23) | `new Date().getHours()` → `10` |
| `getMinutes()` | Get minutes (0-59) | `new Date().getMinutes()` → `30` |
| `getSeconds()` | Get seconds (0-59) | `new Date().getSeconds()` → `15` |
| `getMilliseconds()` | Get milliseconds (0-999) | `new Date().getMilliseconds()` → `500` |
| `getTime()` | Get timestamp (milliseconds since Jan 1, 1970) | `new Date().getTime()` → `1744726800000` |
| `toDateString()` | Get date as a string | `new Date().toDateString()` → `"Fri Mar 14 2025"` |
| `toTimeString()` | Get time as a string | `new Date().toTimeString()` → `"10:30:00 GMT+0530 (IST)"` |

✅ **Example:**

```js
const today = new Date();

console.log(today.getFullYear());  // ✅ Output: 2025

console.log(today.getMonth());     // ✅ Output: 2 (March)

console.log(today.getDate());      // ✅ Output: 14

console.log(today.getDay());       // ✅ Output: 5 (Friday)

console.log(today.getHours());     // ✅ Output: 10

```

* * * * *

**🔹 Setting Date & Time Components**
| Method | Description | Example |
|--------|-------------|---------|
| `setFullYear(year)` | Set the year | `date.setFullYear(2030)` |
| `setMonth(month)` | Set the month (0-11) | `date.setMonth(5)` (June) |
| `setDate(day)` | Set day of the month (1-31) | `date.setDate(20)` |
| `setHours(hour)` | Set hours (0-23) | `date.setHours(14)` |
| `setMinutes(min)` | Set minutes (0-59) | `date.setMinutes(45)` |
| `setSeconds(sec)` | Set seconds (0-59) | `date.setSeconds(30)` |
| `setMilliseconds(ms)` | Set milliseconds (0-999) | `date.setMilliseconds(500)` |
| `setTime(ms)` | Set time (milliseconds since 1970) | `date.setTime(1744726800000)` |

✅ **Example:**

```js
const futureDate = new Date();

futureDate.setFullYear(2030);

futureDate.setMonth(5);  // June

futureDate.setDate(20);

console.log(futureDate.toDateString());  // ✅ Output: "Thu Jun 20 2030"

```

* * * * *

**🔹 Formatting Date & Time**

-----------------------------
| Method | Description | Example |
|--------|-------------|---------|
| `toISOString()` | Converts to ISO format | `"2025-03-14T10:30:00.000Z"` |
| `toUTCString()` | Converts to UTC format | `"Fri, 14 Mar 2025 10:30:00 GMT"` |
| `toLocaleDateString()` | Converts to local date | `"3/14/2025"` (US format) |
| `toLocaleTimeString()` | Converts to local time | `"10:30:00 AM"` |
| `toLocaleString()` | Converts to local date & time | `"3/14/2025, 10:30:00 AM"` |


✅ **Example:**

```js
const date = new Date();

console.log(date.toISOString());  // ✅ Output: "2025-03-14T10:30:00.000Z"

console.log(date.toLocaleDateString());  // ✅ Output: "3/14/2025"

console.log(date.toLocaleTimeString());  // ✅ Output: "10:30:00 AM"

console.log(date.toLocaleString());  // ✅ Output: "3/14/2025, 10:30:00 AM"
```

* * * * *

**🔹 Working with Timestamps**

------------------------------

A **timestamp** is the number of milliseconds since **January 1, 1970**.

### **1️⃣ Get Current Timestamp**

```js
console.log(Date.now());

// ✅ Output: 1744726800000 (Milliseconds since 1970)`
```
### **2️⃣ Convert Timestamp to Date**

```js
const timestamp = 1744726800000;

const dateFromTimestamp = new Date(timestamp);

console.log(dateFromTimestamp.toDateString());

// ✅ Output: "Fri Mar 14 2025"
```

* * * * *

**🚀 Summary Table**

--------------------
| Method | Description |
|--------|-------------|
| `new Date()` | Creates a new date object with the current date & time |
| `new Date(year, month, day, hours, min, sec, ms)` | Creates a date with specified values |
| `getFullYear()` | Returns the year (e.g., `2025`) |
| `getMonth()` | Returns the month (`0-11`, where `0 = Jan`) |
| `getDate()` | Returns the day of the month (`1-31`) |
| `getDay()` | Returns the day of the week (`0-6`, where `0 = Sunday`) |
| `getHours(), getMinutes(), getSeconds(), getMilliseconds()` | Returns time components |
| `setFullYear(year), setMonth(month), setDate(day)` | Modifies the date |
| `toISOString(), toUTCString(), toLocaleString()` | Formats the date & time |
| `Date.now()` | Returns the timestamp (ms since 1970) |


* * * * *

**🎯 Key Takeaways**

--------------------

-   The `Date` object is used to work with **dates and times**.

-   **Months are 0-based** (`0 = Jan`, `11 = Dec`).

-   Use `Date.now()` to get the **current timestamp**.

-   Use `toLocaleString()` for **formatted output**.





**🔹 Dynamic Nature of Objects in JavaScript**

----------------------------------------------

In JavaScript, objects are **dynamic**, meaning:

-   You can **add, modify, or delete** properties at runtime.

-   They do not have a fixed structure like objects in some other languages.

### **Example: Adding, Modifying & Deleting Properties**

```js
let person = {

    name: "Prakhar",

    age: 21

};

// ✅ Add a new property

person.city = "Delhi";

// ✅ Modify an existing property

person.age = 22;

// ✅ Delete a property

delete person.name;

console.log(person);

// ✅ Output: { age: 22, city: "Delhi" }
```

👉 **Objects can change anytime** because JavaScript allows modifying them freely at runtime.

* * * * *

**🔹 Cloning (Copying) Objects in JavaScript**

----------------------------------------------

Since objects in JavaScript are **reference types**, copying them normally just creates a reference instead of an actual new copy.

### **❌ Incorrect Way (Reference Copy)**

```js
let obj1 = { name: "Prakhar", age: 21 };

let obj2 = obj1;  // ❌ Both point to the same object

obj2.age = 22;

console.log(obj1.age);  // ❌ Output: 22 (Changes reflect in both)

```

👉 Both `obj1` and `obj2` **point to the same object** in memory.

* * * * *

**🔹 Different Ways to Clone an Object**

----------------------------------------

Here are the correct ways to **clone** an object:

### **1️⃣ Using `Object.assign()` (Shallow Copy)**

```js
let obj1 = { name: "Prakhar", age: 21 };

let obj2 = Object.assign({}, obj1);

obj2.age = 22;

console.log(obj1.age);  // ✅ Output: 21 (Original remains unchanged)
```

-   ✅ Works for **shallow copy** (doesn't copy nested objects).

-   ❌ If the object has **nested objects**, changes will reflect in both.

* * * * *

### **2️⃣ Using Spread Operator `{ ...obj }` (Shallow Copy)**

```js
let obj1 = { name: "Prakhar", age: 21 };

let obj2 = { ...obj1 };

obj2.age = 22;

console.log(obj1.age);  // ✅ Output: 21

```

-   ✅ Works for **shallow copy**.

-   ❌ Doesn't deep copy nested objects.

* * * * *

### **3️⃣ Using `JSON.parse(JSON.stringify(obj))` (Deep Copy)**

```js
let obj1 = { name: "Prakhar", details: { age: 21, city: "Delhi" } };

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.age = 22;

console.log(obj1.details.age);  // ✅ Output: 21
```

-   ✅ **Deep copies** nested objects.

-   ❌ Doesn't work for functions, `undefined`, `Symbol`, `BigInt`.

* * * * *

### **4️⃣ Using `structuredClone(obj)` (Best for Deep Copy)**

```js
let obj1 = { name: "Prakhar", details: { age: 21, city: "Delhi" } };

let obj2 = structuredClone(obj1);

obj2.details.age = 22;

console.log(obj1.details.age);  // ✅ Output: 21
```

-   ✅ **Best method for deep cloning**.

-   ✅ Supports **functions, `undefined`, `Symbol`, `BigInt`**.

-   ❌ **Not supported in older browsers**.

* * * * *

**🔹 Summary Table**

| Method | Type | Works for Nested Objects? | Preserves Functions, `Symbol`, `BigInt`? |
|--------|------|-------------------------|--------------------------------|
| `Object.assign({}, obj)` | Shallow Copy | ❌ No | ✅ Yes |
| `{ ...obj }` (Spread) | Shallow Copy | ❌ No | ✅ Yes |
| `JSON.parse(JSON.stringify(obj))` | Deep Copy | ✅ Yes | ❌ No |
| `structuredClone(obj)` | Deep Copy | ✅ Yes | ✅ Yes |

* * * * *



**🎯 Key Takeaways**

--------------------

-   **Objects are dynamic** and can be modified at runtime.

-   **Shallow copies (`Object.assign`, `{ ...obj }`)** do not copy nested objects.

-   **Deep copies (`JSON.stringify`, `structuredClone`)** copy everything but have limitations.



**🔹 All Uses of Spread Operator (`...`) in JavaScript**

--------------------------------------------------------

The **spread operator (`...`)** allows us to **expand** an iterable (array, object, string) into individual elements.

* * * * *

**1️⃣ Copying Arrays (Shallow Copy)**

-------------------------------------

The spread operator helps to create a **new copy** of an array without modifying the original.

```js
let arr1 = [1, 2, 3];

let arr2 = [...arr1];  // ✅ Creates a new array

arr2.push(4);

console.log(arr1);  // ✅ Output: [1, 2, 3] (Original unchanged)

console.log(arr2);  // ✅ Output: [1, 2, 3, 4]`
```

* * * * *

**2️⃣ Merging Arrays**

----------------------

Spread operator is an easy way to **combine** multiple arrays.

```js
let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);  // ✅ Output: [1, 2, 3, 4, 5, 6]
```

* * * * *

**3️⃣ Converting String to Array**

----------------------------------

It expands a string into individual characters.

```js
let word = "Hello";

let letters = [...word];

console.log(letters);  // ✅ Output: ['H', 'e', 'l', 'l', 'o']
```

* * * * *

**4️⃣ Copying Objects (Shallow Copy)**

--------------------------------------

You can create a **new object copy** using spread.

```js
let obj1 = { name: "Prakhar", age: 21 };

let obj2 = { ...obj1 };  // ✅ Creates a new copy

obj2.age = 22;

console.log(obj1.age);  // ✅ Output: 21 (Original unchanged)

console.log(obj2.age);  // ✅ Output: 22
```

* * * * *

**5️⃣ Merging Objects**

-----------------------

The spread operator can **merge multiple objects**.

```js
let obj1 = { name: "Prakhar", age: 21 };

let obj2 = { city: "Delhi", country: "India" };

let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

// ✅ Output: { name: "Prakhar", age: 21, city: "Delhi", country: "India" }
```

-   If properties **overlap**, the **rightmost object** overwrites the previous ones.

* * * * *

**6️⃣ Passing Arrays as Function Arguments**

--------------------------------------------

```js

function sum(a, b, c) {

    return a + b + c;

}

let numbers = [10, 20, 30];

console.log(sum(...numbers));  // ✅ Output: 60
```

* * * * *

**7️⃣ Adding New Elements to an Array Without Modifying the Original**

----------------------------------------------------------------------

```js
let arr = [1, 2, 3];

let newArr = [0, ...arr, 4];  // ✅ Add elements before & after

console.log(newArr);  // ✅ Output: [0, 1, 2, 3, 4]
```

* * * * *

**8️⃣ Removing Duplicates from an Array**

-----------------------------------------

Spread operator can be used with `new Set()` to remove duplicates.

```js
let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);  // ✅ Output: [1, 2, 3, 4, 5]
```

* * * * *

**9️⃣ Spreading in Function Calls (for Variable Arguments)**

------------------------------------------------------------

Useful when working with `Math` functions.

```js
let nums = [12, 45, 78, 34, 9];

console.log(Math.max(...nums));  // ✅ Output: 78

console.log(Math.min(...nums));  // ✅ Output: 9
```

* * * * *



**🔹 Summary Table**
| Use Case | Example |
|----------|---------|
| Copying an array | `let arr2 = [...arr1];` |
| Merging arrays | `let merged = [...arr1, ...arr2];` |
| Converting string to array | `let letters = [..."Hello"];` |
| Copying an object | `let obj2 = {...obj1};` |
| Merging objects | `let mergedObj = {...obj1, ...obj2};` |
| Passing array as arguments | `sum(...numbers);` |
| Adding elements in an array | `let newArr = [0, ...arr, 4];` |
| Removing duplicates | `let unique = [...new Set(arr)];` |
| Finding max/min from an array | `Math.max(...nums);` |

* * * * *

**🎯 Key Takeaways**

--------------------

-   ✅ **Expands** arrays, objects, and strings into individual elements.

-   ✅ **Creates copies** without affecting the original.

-   ✅ **Merges objects & arrays** efficiently.

-   ✅ **Simplifies function calls** with multiple arguments.

🚀 **Spread operator is a powerful feature that makes JavaScript code cleaner and more efficient!**


**🔹 Difference Between Shallow Copy and Deep Copy in JavaScript**

------------------------------------------------------------------

When copying an object or an array in JavaScript, we can either make a **shallow copy** or a **deep copy**.

### **1️⃣ Shallow Copy**

A **shallow copy** creates a new object or array, but **copies only the top-level properties**. If the original object has **nested objects**, the references to those nested objects are copied instead of the actual objects.

### **Example of Shallow Copy**
```js
let obj1 = { name: "Prakhar", details: { age: 21, city: "Delhi" } };

let obj2 = { ...obj1 };  // Shallow copy

obj2.details.age = 22;

console.log(obj1.details.age);  // ❌ Output: 22 (Original object also changed)

console.log(obj2.details.age);  // ✅ Output: 22`
```

👉 **The nested object (`details`) is shared between `obj1` and `obj2`, so changes in one affect the other.**


### **Ways to Create a Shallow Copy**
| Method | Works for Objects? | Works for Arrays? | Works for Nested Objects? |
|--------|------------------|----------------|---------------------|
| `Object.assign({}, obj)` | ✅ Yes | ❌ No | ❌ No |
| `{ ...obj }` (Spread) | ✅ Yes | ✅ Yes | ❌ No |
| `Array.slice()` | ❌ No | ✅ Yes | ❌ No |
| `Array.concat()` | ❌ No | ✅ Yes | ❌ No |

* * * * *

### **2️⃣ Deep Copy**

A **deep copy** creates a completely independent copy of the object, including all **nested objects**. Any changes to the copied object will **not affect** the original.

### **Example of Deep Copy**

```js
let obj1 = { name: "Prakhar", details: { age: 21, city: "Delhi" } };

let obj2 = JSON.parse(JSON.stringify(obj1));  // Deep copy

obj2.details.age = 22;

console.log(obj1.details.age);  // ✅ Output: 21 (Original remains unchanged)

console.log(obj2.details.age);  // ✅ Output: 22
```

👉 **Since we performed a deep copy, modifying `obj2.details.age` does not affect `obj1.details.age`.**

### **Ways to Create a Deep Copy**
| Method | Works for Objects? | Works for Arrays? | Works for Nested Objects? | Preserves Functions, `undefined`, `Symbol`? |
|--------|------------------|----------------|---------------------|----------------------------------|
| `JSON.parse(JSON.stringify(obj))` | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| `structuredClone(obj)` | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| `_.cloneDeep(obj)` (Lodash) | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Manual recursion** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

* * * * *


**🔹 Summary Table**

--------------------
| Feature | Shallow Copy | Deep Copy |
|---------|--------------|----------|
| Copies top-level properties | ✅ Yes | ✅ Yes |
| Copies nested objects | ❌ No (Only references are copied) | ✅ Yes (Creates new copies) |
| Changes in copied object affect the original? | ✅ Yes (For nested objects) | ❌ No (Fully independent) |
| Performance | 🔥 Faster | 🐢 Slower |
| Common Methods | `{ ...obj }`, `Object.assign()` | `JSON.stringify`, `structuredClone()` |

* * * * *

**🎯 Key Takeaways**

--------------------

-   **Shallow Copy:** Duplicates only the top-level properties and **shares references** of nested objects.

-   **Deep Copy:** Creates a completely new copy, including **nested objects**, making them fully independent.

-   **Use shallow copy for simple cases** where no nested objects exist.

-   **Use deep copy for complex objects** where you need full independence.

🚀 **Use `structuredClone()` for the best deep copy method in modern JavaScript!**



**🔹 All Different Ways to Clone an Object in JavaScript**

----------------------------------------------------------

When cloning an object in JavaScript, there are multiple ways, depending on whether you need a **shallow copy** or a **deep copy**.

* * * * *

**1️⃣ Shallow Copy Methods**

----------------------------

A **shallow copy** duplicates only the top-level properties, while **nested objects remain referenced**.

### **📌 Using `Object.assign()`**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = Object.assign({}, obj1);

obj2.details.age = 22;

console.log(obj1.details.age); // ❌ Output: 22 (Changes original)
```

✔ Works for flat objects

❌ Nested objects are shared (not cloned)

* * * * *

### **📌 Using Spread Operator `{ ...obj }`**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = { ...obj1 };

obj2.details.age = 22;

console.log(obj1.details.age); // ❌ Output: 22 (Changes original)
```

✔ More modern and cleaner than `Object.assign()`

❌ Only makes a shallow copy

* * * * *

### **📌 Using `for...in` Loop (Manual Iteration)**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = {};

for (let key in obj1) {

    obj2[key] = obj1[key];

}

obj2.details.age = 22;

console.log(obj1.details.age); // ❌ Output: 22 (Changes original)
```

✔ Works for simple objects

❌ Does not handle nested objects properly

* * * * *

**2️⃣ Deep Copy Methods**

-------------------------

A **deep copy** ensures **all nested objects are also cloned**, making them fully independent.

### **📌 Using `JSON.parse(JSON.stringify(obj))`**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.age = 22;

console.log(obj1.details.age); // ✅ Output: 21 (Original unchanged)
```

✔ Simple and easy to use

❌ **Loses functions, `undefined`, `Symbol`, and circular references**

* * * * *

### **📌 Using `structuredClone(obj)` (Best Modern Method)**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = structuredClone(obj1);

obj2.details.age = 22;

console.log(obj1.details.age); // ✅ Output: 21 (Original unchanged)
```

✔ Handles functions, `undefined`, and circular references

✔ The best **built-in** deep cloning method in JavaScript

❌ **Not supported in older browsers**

* * * * *

### **📌 Using Lodash `_.cloneDeep(obj)`**

```js
let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = _.cloneDeep(obj1);  // Requires Lodash library

obj2.details.age = 22;

console.log(obj1.details.age); // ✅ Output: 21 (Original unchanged)
```

✔ Best **third-party** method

✔ Handles **nested objects, arrays, functions, symbols**

❌ Requires an **external library**

* * * * *

### **📌 Using Recursion (Custom Deep Copy)**

```js
function deepClone(obj) {

    if (typeof obj !== "object" || obj === null) return obj;

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {

        clone[key] = deepClone(obj[key]);  // Recursively clone

    }

    return clone;

}

let obj1 = { name: "Prakhar", details: { age: 21 } };

let obj2 = deepClone(obj1);

obj2.details.age = 22;

console.log(obj1.details.age); // ✅ Output: 21 (Original unchanged)

```

✔ Fully customizable

❌ More complex than built-in methods

* * * * *


**🔹 Summary Table**

--------------------
| Method | Type | Preserves Nested Objects? | Handles Functions & Symbols? | Handles Circular References? | Notes |
|--------|------|-------------------------|-----------------------------|-----------------------------|-------|
| `Object.assign()` | Shallow | ❌ No | ✅ Yes | ❌ No | Simple but only top-level copy |
| `{ ...obj }` (Spread) | Shallow | ❌ No | ✅ Yes | ❌ No | Modern and cleaner than `assign()` |
| `for...in` loop | Shallow | ❌ No | ✅ Yes | ❌ No | Manually iterates |
| `JSON.stringify + parse` | Deep | ✅ Yes | ❌ No | ❌ No | Loses functions & symbols |
| `structuredClone()` | Deep | ✅ Yes | ✅ Yes | ✅ Yes | Best modern built-in solution |
| `_.cloneDeep()` (Lodash) | Deep | ✅ Yes | ✅ Yes | ✅ Yes | Requires Lodash |
| Recursion (Custom) | Deep | ✅ Yes | ✅ Yes | ❌ No | Fully customizable |


* * * * *

**🎯 Key Takeaways**

--------------------

-   **Use `{ ...obj }`** for quick shallow copies.

-   **Use `structuredClone(obj)`** for deep copies (modern and built-in).

-   **Use `JSON.parse(JSON.stringify(obj))`** if you don't have functions or symbols.

-   **Use `_.cloneDeep(obj)`** if using Lodash.

-   **Use a recursive function** if you want full control.


**🔹 Garbage Collector in JavaScript**

--------------------------------------

### **What is Garbage Collection?**

In JavaScript, **Garbage Collection (GC)** is an **automatic process** that **removes unused objects from memory** to free up space and improve performance.

JavaScript uses a **memory management system** that automatically deallocates objects that are **no longer reachable**.

* * * * *

**🔹 How Does Garbage Collection Work in JavaScript?**

------------------------------------------------------

JavaScript uses an algorithm called **"Mark-and-Sweep"** to manage memory.

### **🔹 Mark-and-Sweep Algorithm**

1\.  **Mark Phase**: The Garbage Collector identifies objects that are **still reachable (in use)**.

2\.  **Sweep Phase**: Objects that **are not reachable** are removed from memory.

### **Example**

```js
function test() {

    let name = "Prakhar";  // 'name' is created in memory

}  // After the function ends, 'name' becomes unreachable and is garbage collected.
```

🚀 **Once the function `test()` finishes execution, `name` is no longer needed and gets removed from memory automatically!**

* * * * *

**🔹 What Objects Are Considered Reachable?**

---------------------------------------------

JavaScript considers an object "reachable" if:

1\.  **A variable still holds a reference to it.**

2\.  **It is part of the global scope (e.g., `window`).**

3\.  **It is referenced by another object in use.**

### **Example of Reachable and Unreachable Objects**

```js
`let obj = { name: "Prakhar" };  // Reachable

obj = null;  // The object is now unreachable -> Garbage collected!

```

👉 **When we set `obj = null`, the original object `{ name: "Prakhar" }` is no longer referenced and gets removed.**

* * * * *

**🔹 Memory Leaks and How to Avoid Them**

-----------------------------------------

A **memory leak** happens when objects **stay in memory** even when they are **no longer needed**.

### **Common Causes of Memory Leaks**

| Cause | Explanation | Solution |
|-------|------------|----------|
| **Unwanted Global Variables** | Variables declared without `let`, `const`, or `var` remain in memory. | Always use `let` or `const`. |
| **Uncleared Timers/Intervals** | `setInterval()` keeps running if not cleared. | Use `clearInterval()` when done. |
| **Detached DOM Elements** | Removing elements from the DOM but still keeping references to them in JavaScript. | Manually remove references after deletion. |
| **Closures Holding References** | Closures keep objects in memory if they reference an outer variable. | Set unused references to `null`. |

### **Example: Preventing a Memory Leak**

```js

let timer = setInterval(() => console.log("Hello"), 1000);

// Later, clear the interval

clearInterval(timer);

timer = null; // Allow garbage collection

```

✔ **This ensures that memory is freed when the interval is no longer needed.**

* * * * *

**🔹 Summary**

--------------
| Feature | Explanation |
|---------|------------|
| **Garbage Collection** | Automatic process of freeing memory. |
| **Algorithm Used** | Mark-and-Sweep. |
| **Reachable Objects** | Objects that are still referenced and accessible. |
| **Unreachable Objects** | Objects that have no remaining references and can be garbage collected. |
| **Memory Leaks** | Occur when objects remain in memory unintentionally due to lingering references. |
| **Prevention** | Use `clearInterval()`, remove unused DOM references, avoid global variables, and set unnecessary references to `null`. |


🚀 **JavaScript's Garbage Collector works automatically, but it's good to write clean code to prevent memory leaks!**




**🔹 Different Types of Errors in JavaScript & Error Handling**

---------------------------------------------------------------

### **1️⃣ Types of Errors in JavaScript**

JavaScript has different types of errors that can occur during program execution.

| **Error Type**    | **Description**                                      | **Example**                                  |
|-------------------|--------------------------------------------------|--------------------------------------------|
| **Syntax Error**  | Occurs when JavaScript encounters invalid syntax. | `console.log("Hello"` ❌ (Missing closing `)`) |
| **Reference Error** | Happens when trying to access an undefined variable. | `console.log(x);` ❌ (`x` is not defined) |
| **Type Error**    | Occurs when an operation is performed on an incompatible type. | `null.toUpperCase();` ❌ (`null` has no methods) |
| **Range Error**   | Triggered when a value is out of the allowed range. | `new Array(-1);` ❌ (Array size cannot be negative) |
| **URI Error**     | Happens when using incorrect URI handling functions. | `decodeURIComponent('%');` ❌ (Invalid URI character) |
| **Eval Error**    | Raised when using `eval()` incorrectly (rare case). | `eval("var x = 5;");` ✅ (Discouraged practice) |


* * * * *

### **2️⃣ What is Error Handling?**

Error handling is the **process of managing errors gracefully** so that they **don't crash the application**.

#### **🔹 Using `try...catch` (Basic Error Handling)**

```js
try {

    let x = undefinedVar;  // ReferenceError

} catch (error) {

    console.log("An error occurred:", error.message);

}
```

✅ **Prevents app from crashing** and gives a useful error message.

* * * * *

#### **🔹 Using `finally` (Execute Code Always)**

```js
try {

    console.log("Start");

    let x = 10 / 0;  // No error, but Infinity

} catch (error) {

    console.log("An error occurred");

} finally {

    console.log("This runs always!");

}
```

✔ **`finally` always executes**, whether an error occurs or not.

* * * * *

#### **🔹 Using `throw` (Custom Errors)**

```js
function checkAge(age) {

    if (age < 18) {

        throw new Error("Age must be 18 or above!");

    }

    return "Access granted!";

}

try {

    console.log(checkAge(16));

} catch (error) {

    console.log(error.message);

}
```

✔ **`throw` allows custom error messages** and better debugging.

* * * * *

#### **🔹 Handling Asynchronous Errors (Using `try...catch` with Promises)**

```js
async function fetchData() {

    try {

        let response = await fetch("https://wrong-url.com");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Failed to fetch data:", error.message);

    }

}

fetchData();
```

✔ **Prevents unhandled errors in async functions.**

* * * * *

### **🔹 Summary Table**
| **Concept**             | **Description**                           | **Example** |
|-------------------------|-------------------------------------------|------------|
| `try...catch`           | Handles errors inside the `try` block.    | `try { riskyCode(); } catch (e) { console.log(e); }` |
| `finally`              | Executes always, even if no error occurs. | `try { riskyCode(); } finally { cleanup(); }` |
| `throw`                | Manually triggers an error.               | `throw new Error("Something went wrong");` |
| `async/await try-catch` | Handles errors in asynchronous functions. | `try { await fetchData(); } catch (e) { console.log(e); }` |

🚀 **Using proper error handling makes your JavaScript code more reliable and easier to debug!**



**🔹 Higher-Order Functions & Callback Functions in JavaScript**

----------------------------------------------------------------

### **1️⃣ Higher-Order Functions (HOFs)**

A **Higher-Order Function (HOF)** is a function that **does one or both** of the following:

✅ Takes another function as an **argument (callback function)**.

✅ Returns a function as its **output**.

👉 **Example of a Higher-Order Function**

```js
function greet(name, callback) {

    console.log("Hello, " + name);

    callback(); // Calling the callback function

}

function sayGoodbye() {

    console.log("Goodbye!");

}

// Passing `sayGoodbye` function as a callback

greet("Prakhar", sayGoodbye);

```

✔ **Output:**
```

Hello, Prakhar

Goodbye!

```

🔹 Here, `greet()` is a **higher-order function** because it accepts `sayGoodbye()` as a callback.

* * * * *

### **2️⃣ Callback Functions**

A **Callback Function** is a function that is passed as an **argument** to another function and is executed later.

👉 **Why Use Callback Functions?**

-   Helps in **asynchronous programming** (e.g., fetching data, event handling).

-   Used in **higher-order functions** like `map`, `filter`, and `reduce`.

👉 **Example: Using Callback for Asynchronous Code**

```js
function fetchData(callback) {

    setTimeout(() => {

        console.log("Data fetched");

        callback();

    }, 2000);

}

function processData() {

    console.log("Processing data...");

}

// Passing `processData` as a callback

fetchData(processData);
```

✔ **Output (after 2 seconds)**
```js

Data fetched

Processing data...
```

* * * * *

### **3️⃣ Higher-Order Array Methods (Using Callbacks)**

JavaScript has built-in higher-order functions like **`map()`, `filter()`, `reduce()`**, which use callback functions.

👉 **Example: `map()` -- Transforming an Array**

```js
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);  // [1, 4, 9, 16]
```

🔹 **`map()`** is a higher-order function that takes a **callback function** (`num => num * num`).

* * * * *

👉 **Example: `filter()` -- Filtering an Array**

```js
const ages = [18, 22, 15, 30, 16];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 22, 30]
```

🔹 **`filter()`** is a higher-order function that **filters elements based on a condition**.

* * * * *

👉 **Example: `reduce()` -- Reducing an Array**

```js
const numbers = [10, 20, 30];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);  // 60
```

🔹 **`reduce()`** accumulates values **using a callback function**.

* * * * *

### **🔹 Summary Table**

| **Concept**               | **Explanation**                                      | **Example** |
|---------------------------|------------------------------------------------------|------------|
| **Higher-Order Function (HOF)** | A function that takes another function as an argument OR returns a function. | `map()`, `filter()`, `reduce()` |
| **Callback Function**      | A function passed as an argument to another function, to be executed later. | `setTimeout(() => console.log("Done!"), 2000);` |
| **Asynchronous Callback**  | A callback that runs after an asynchronous operation completes. | `fetchData(response => console.log(response));` |
| **`map()`**                | Creates a new array by applying a function to each element. | `[1,2,3].map(num => num * num);` → `[1,4,9]` |
| **`filter()`**             | Creates a new array with elements that match a condition. | `[18,15,20].filter(age => age >= 18);` → `[18,20]` |
| **`reduce()`**             | Reduces an array to a single value using a callback function. | `[10,20,30].reduce((acc, num) => acc + num, 0);` → `60` |


🚀 **Higher-Order Functions and Callbacks are powerful tools for writing clean, reusable JavaScript code!**


### **🔹 Tokenizers in JavaScript**

-   A **tokenizer** (or lexical analyzer) in JavaScript is part of the JavaScript engine that **breaks down code into small components** called **tokens** during the parsing phase. These tokens are the building blocks for further interpretation or compilation.

#### **How Does Tokenizing Work?**

When you write JavaScript code like this:

```js
let num = 42;
```

The tokenizer breaks it into:

1\.  `let` → Keyword

2\.  `num` → Identifier

3\.  `=` → Operator

4\.  `42` → Literal

5\.  `;` → Terminator



These tokens are then passed to the parser to build an **Abstract Syntax Tree (AST)** for execution.

* * * * *

### **🔹 What is `window` in JavaScript?**

-   The **`window`** object in JavaScript is the **global object** in the browser environment. It represents the browser **window or tab** where your JavaScript code is running.

#### **Key Features of the `window` Object**

1\.  **Global Scope**: Variables and functions declared globally are properties of the `window` object.

```js
var a = 10;

    console.log(window.a); // 10
```

2\.  **Methods**: `window` provides many built-in methods like:

    -   `alert()`: Display alerts.

    -   `prompt()`: Ask for user input.

    -   `setTimeout()` and `setInterval()`: Manage asynchronous tasks.

    -   `fetch()`: Make HTTP requests.

3\.  **Properties**:

    -   `window.document`: Represents the DOM.

    -   `window.location`: Provides the current URL and allows redirection.

4\.  **Events**:

    -   Handles global browser events like `onload`, `onresize`, etc.

#### **Example of `window` Usage**

```js

window.alert("Welcome!");

console.log(window.location.href); // Logs the current page URL
```

* * * * *

### **🔹 What is DOM and BOM in JavaScript?**

#### **1️⃣ DOM (Document Object Model)**

-   The **DOM** is a programming interface for web documents. It represents the **structure and content of a webpage** as an object that JavaScript can interact with.

#### **Key Features of the DOM**

1\.  Represents the **HTML document** as a tree structure.

2\.  Allows **manipulation of elements**:

    -   Add, remove, or modify HTML elements.

    -   Change styles, attributes, or content.

3\.  Accessible via `document`:

```js

    const title = document.querySelector("h1");

    title.textContent = "Hello World!";
```

#### **Example of DOM Manipulation**

```js

const div = document.createElement("div");  // Create a new element

div.textContent = "Hello, DOM!";            // Add text

document.body.appendChild(div);             // Add it to the page
```

* * * * *

#### **2️⃣ BOM (Browser Object Model)**

-   The **BOM** provides methods and properties to interact with the **browser environment** (excluding the DOM).

#### **Key Features of the BOM**

1\.  Provides **browser-related properties**:

    -   `window.navigator`: Information about the browser (e.g., user-agent).

    -   `window.location`: URL manipulation.

    -   `window.history`: Access browser history.

2\.  Provides **browser-related events**:

    -   `resize`, `scroll`, etc.

#### **Example of BOM Usage**

```js
console.log(window.location.href); // Get the current URL

window.location.href = "https://google.com"; // Redirect to Google
```

* * * * *

### **🔹 Comparison Table: DOM vs BOM vs `window`**

| **Feature**    | **DOM (Document Object Model)** | **BOM (Browser Object Model)** | **window (Global Object)** |
|---------------|---------------------------------|---------------------------------|----------------------------|
| **Definition** | Interface for accessing and modifying the webpage’s content and structure. | Interface for interacting with browser features outside the document. | The global object that serves as a bridge between DOM and BOM. |
| **Examples**  | `document.getElementById()`, `document.createElement()`, `document.querySelector()` | `window.location`, `navigator.userAgent`, `history.back()` | `window.alert()`, `window.open()`, `setTimeout()` |
| **Focus**     | Managing and modifying HTML, CSS, and structure of a webpage. | Handling browser-related functionalities like history, navigation, and screen properties. | Central object that encompasses both DOM and BOM functionalities. |


* * * * *

### **🔹 Summary**

-   **Tokenizer**: Breaks JavaScript code into tokens for parsing.

-   **Window**: The global object in the browser representing the current tab or window.

-   **DOM**: Represents the webpage's structure and allows manipulation of its content.

-   **BOM**: Provides browser-related functionalities like navigation, history, and location.

🚀 **In a nutshell**: DOM is for interacting with the page, BOM is for interacting with the browser, and the `window` object ties everything together!


### **🔹 Key Properties to Access or Modify Content in JavaScript**

In JavaScript, properties like **`innerHTML`**, **`outerHTML`**, **`innerText`**, and **`textContent`** are used to interact with or modify elements in the DOM. Let's break them down with examples.

* * * * *

### **1️⃣ `innerHTML`**

-   Retrieves or sets the **HTML content** of an element (including its children).

-   Can include HTML tags and raw HTML strings.

#### **Usage**

```js
const div = document.querySelector("div");

// Get the HTML inside the element

console.log(div.innerHTML); // "<p>Hello <strong>World!</strong></p>"

// Set new HTML content

div.innerHTML = "<p>Updated <strong>HTML</strong> content!</p>";
```

#### **Output in the DOM**

```html
<div>

  <p>Updated <strong>HTML</strong> content!</p>

</div>
```

* * * * *

### **2️⃣ `outerHTML`**

-   Retrieves or sets the **HTML content of the element itself**, including the element's tag and its children.

-   Replaces the entire element when set.

#### **Usage**

```js
const div = document.querySelector("div");

// Get the entire HTML of the element (including the element itself)

console.log(div.outerHTML); // "<div><p>Hello <strong>World!</strong></p></div>"

// Replace the entire element

div.outerHTML = "<section>Replaced element!</section>";
```

#### **Output in the DOM**
```html
<section>Replaced element!</section>
```

* * * * *

### **3️⃣ `innerText`**

-   Retrieves or sets the **visible text content** of an element.

-   Excludes hidden text (e.g., `display: none` or `visibility: hidden`).

-   Takes into account CSS styles.

#### **Usage**

```js
const div = document.querySelector("div");

// Get the visible text

console.log(div.innerText); // "Hello World!"

// Set the visible text

div.innerText = "Updated text content!";
```

#### **Output in the DOM**
```html

<div>Updated text content!</div>
```

* * * * *

### **4️⃣ `textContent`**

-   Retrieves or sets the **text content** of an element, including hidden text.

-   Does not parse or include HTML tags---outputs the raw text only.

-   Faster than `innerText` since it doesn't calculate CSS styles.

#### **Usage**

```js
const div = document.querySelector("div");

// Get all text content (even hidden)

console.log(div.textContent); // "Hello World!"

// Set raw text content

div.textContent = "Updated raw text content!";
```

#### **Output in the DOM**

```html
<div>Updated raw text content!</div>
```

* * * * *

### **Comparison Table: `innerHTML`, `outerHTML`, `innerText`, `textContent`**

| **Property**      | **Gets/Sets**                         | **Includes HTML tags?** | **Includes hidden text?** | **Modifies the element itself?** |
|------------------|---------------------------------|----------------------|----------------------|--------------------------|
| **`innerHTML`**  | Gets or sets the HTML content inside an element. | ✅ Yes | ✅ Yes | ❌ No |
| **`outerHTML`**  | Gets or sets the entire element, including its content. | ✅ Yes | ✅ Yes | ✅ Yes (Replaces the element itself). |
| **`innerText`**  | Gets or sets only the visible text inside an element. | ❌ No | ❌ No (Excludes hidden text) | ❌ No |
| **`textContent`** | Gets or sets the raw text content of an element. | ❌ No | ✅ Yes (Includes hidden text) | ❌ No |


* * * * *

### **Example to See the Difference**

Suppose we have the following HTML:

```html
<div id="example">

  <p style="display: none;">Hidden text</p>

  <strong>Hello World!</strong>

</div>
```

Now, consider the following:

```js
const div = document.getElementById("example");

console.log(div.innerHTML);    // "<p style="display: none;">Hidden text</p><strong>Hello World!</strong>"

console.log(div.outerHTML);    // "<div id="example"><p style="display: none;">Hidden text</p><strong>Hello World!</strong></div>"

console.log(div.innerText);    // "Hello World!"

console.log(div.textContent);  // "Hidden textHello World!"
```

* * * * *

### **5️⃣ Additional Notes**

-   **Use `innerHTML`** when working with raw HTML strings.

-   **Use `textContent`** for simple text manipulation (faster than `innerText`).

-   **Avoid using `innerHTML`** for user input (it can cause security risks like **XSS**).

🚀 These properties are essential for working with and modifying the DOM dynamically!



### **DOM Manipulation Methods in JavaScript**

Let's break down these methods and understand how they work with examples.

* * * * *

### **🔹 1. `querySelector()`**

-   **Use**: Selects the first element that matches the given CSS selector.

-   **Returns**: A single element (or `null` if no match is found).

-   **Example**:

```js
const firstParagraph = document.querySelector("p");

    console.log(firstParagraph); // Logs the first <p> element in the DOM
```

* * * * *

### **🔹 2. `querySelectorAll()`**

-   **Use**: Selects **all elements** that match the given CSS selector.

-   **Returns**: A **NodeList** (not an array, but similar to it).

-   **Example**:

```js
const allParagraphs = document.querySelectorAll("p");

    console.log(allParagraphs); // Logs a NodeList of all <p> elements
```

* * * * *

### **🔹 3. `getElementById()`**

-   **Use**: Selects an element by its `id` attribute.

-   **Returns**: A single element (or `null` if no match is found).

-   **Example**:

```js
const heading = document.getElementById("main-heading");

    console.log(heading); // Logs the element with id="main-heading"
```

* * * * *

### **🔹 4. `getElementsByTagName()`**

-   **Use**: Selects all elements with a specific tag name.

-   **Returns**: An **HTMLCollection** (live, dynamic collection).

-   **Example**:

```js
const allDivs = document.getElementsByTagName("div");

    console.log(allDivs); // Logs an HTMLCollection of all <div> elements
```

* * * * *

### **🔹 5. `getElementsByClassName()`**

-   **Use**: Selects all elements with a specific class name.

-   **Returns**: An **HTMLCollection**.

-   **Example**:

```js

const buttons = document.getElementsByClassName("btn");

    console.log(buttons); // Logs an HTMLCollection of elements with class "btn"
```

* * * * *

### **🔹 Comparison Table**
| **Method**                  | **Selector Type** | **Returns**                     | **Live/Static?** | **Example**                     |
|-----------------------------|------------------|---------------------------------|------------------|---------------------------------|
| `querySelector()`           | CSS Selector     | First matching element          | Static           | `document.querySelector(".btn")` |
| `querySelectorAll()`        | CSS Selector     | NodeList of all matches         | Static           | `document.querySelectorAll(".btn")` |
| `getElementById()`          | ID Selector      | Single element                  | Static           | `document.getElementById("main")` |
| `getElementsByTagName()`    | Tag name         | HTMLCollection (all matches)    | Live             | `document.getElementsByTagName("div")` |
| `getElementsByClassName()`  | Class name       | HTMLCollection (all matches)    | Live             | `document.getElementsByClassName("btn")` |

* * * * *

### **🔹 DOM Manipulation Methods**

#### **1\. `insertAdjacentElement()`**

-   **Use**: Inserts an element at a specified position relative to another element.

-   **Positions**:

    -   `"beforebegin"`: Before the target element.

    -   `"afterbegin"`: Inside the target element, before its first child.

    -   `"beforeend"`: Inside the target element, after its last child.

    -   `"afterend"`: After the target element.

-   **Example**:

```js

const div = document.getElementById("container");

    const newElement = document.createElement("p");

    newElement.textContent = "Inserted paragraph!";

    div.insertAdjacentElement("beforeend", newElement);
```

* * * * *

#### **2\. `appendChild()`**

-   **Use**: Adds a new child element to the end of a parent element.

-   **Example**:

```js
const parent = document.querySelector("#container");

    const newChild = document.createElement("span");

    newChild.textContent = "Appended text!";

    parent.appendChild(newChild);
```

* * * * *

#### **3\. `removeChild()`**

-   **Use**: Removes a specified child element from its parent.

-   **Example**:

```js
const parent = document.querySelector("#container");

    const child = document.querySelector("#child");

    parent.removeChild(child);
```

* * * * *

#### **4\. `createElement()`**

-   **Use**: Creates a new element (does not attach it to the DOM until explicitly appended).

-   **Example**:

```js
const newDiv = document.createElement("div");

    newDiv.textContent = "I am a new div!";

    document.body.appendChild(newDiv);
```

* * * * *

### **🔹 Insert Positions (`beforeend`, `beforebegin`, etc.)**

| **Position**     | **Description**                                   | **Example in Relation to `<div>`**                 |
|-----------------|---------------------------------------------------|---------------------------------------------------|
| `beforebegin`   | Inserts content **before** the element itself.    | `<p>Before</p><div>Content</div>`               |
| `afterbegin`    | Inserts content **inside**, as the **first child**. | `<div><p>After Begin</p>Content</div>`         |
| `beforeend`     | Inserts content **inside**, as the **last child**.  | `<div>Content<p>Before End</p></div>`          |
| `afterend`      | Inserts content **after** the element itself.      | `<div>Content</div><p>After</p>`               |

* * * * *

### **🔹 Full Example**
```js


const container = document.querySelector("#container");

// Create and insert a new element

const newElement = document.createElement("p");

newElement.textContent = "Hello, DOM!";

// Insert before the container

container.insertAdjacentElement("beforebegin", newElement);

// Append as a child

container.appendChild(newElement);

// Remove the newly added element

container.removeChild(newElement);
```