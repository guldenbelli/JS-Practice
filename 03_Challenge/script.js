/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

const Book1 = new Book(
  "The Last Vampire",
  "C. Pike",
  "grey",
  200,
  "26 March, 2009"
);

const Book2 = new Book(
  "Cool SUmmer",
  "R. Pink",
  "yellow",
  300,
  "13 June, 2017"
);

const Book3 = new Book("Coming home", "R. Stein", "blue", 270, "16 May, 2012");

const Book4 = new Book(
  "Final Friends",
  "C. Pike",
  "red",
  340,
  "12 November, 2018"
);

const Book5 = new Book(
  "Strange Planet",
  "W. Pyle",
  "baby blue",
  60,
  "08 April, 2019"
);

console.log("The first book of this series:", Book1);
console.log("Days since aquired:", Book1.dateAcquired);

console.log("The second book of this series:", Book2);
console.log("Days since aquired:", Book2.dateAcquired);

console.log("The third book of this series:", Book3);
console.log("Days since aquired:", Book3.dateAcquired);

console.log("The fourth book of this series:", Book4);
console.log("Days since aquired:", Book4.dateAcquired);

console.log("The fifth book of this series:", Book5);
console.log("Days since aquired:", Book5.dateAcquired);
