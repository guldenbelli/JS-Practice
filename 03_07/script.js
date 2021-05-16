/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cat = {
  colour: "Orange",
  name: "Ginger",
  age: "3",
  eyeColour: {
    left: "brown",
    right: "yellow",
  },
};

const smartphone = {
  colour: "pink",
  brand: "Samsung",
  cameras: {
    front: "16mp",
    rear: "40mp",
  },
};

console.log("Cat's left eyecolour is: ", cat.eyeColour.left);
console.log("Smartphone front camera has: ", smartphone.cameras.front);
