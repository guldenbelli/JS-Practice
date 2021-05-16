/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const person = {
  firstName: "Gulden",
  lastName: "Belli",
  age: "27",
  dob: "26/05/1994",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  newFullName: function (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  },
};

console.log("Full name is: ", person.fullName());

person.newFullName("Jane", "Shepard");

console.log("New first name is: ", person.firstName);
console.log("New last name is: ", person.lastName);
