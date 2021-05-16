/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Person from "./Person.js";

const Gulden = new Person("Gulden", "Belli", 27, "26/05/1994", true);

console.log("The new user:", Gulden);
console.log("Is new user a member?", Gulden.Member);
