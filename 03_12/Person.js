/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Person {
  constructor(
    // Defines parameters:
    firstName,
    lastName,
    age,
    dob,
    Member
  ) {
    // Define properties:
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = dob;
    this.Member = Member;
  }
  // Add methods like normal functions:
  membership(isMember) {
    this.Member = isMember;
  }
}

export default Person;
