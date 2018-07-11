/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  this.phonebook = {};
  jazbook.forEach((entry) => {
    this.phonebook[entry[0]] = {phoneNumber: entry[1]};
  });
};

makePhoneBookObject.prototype.addContact = function(name, phoneNumber) {
  this.phonebook[name] = {phoneNumber: phoneNumber};
}

makePhoneBookObject.prototype.getContact = function(name) {
  if (this.phonebook[name] === undefined) return false;
  return this.phonebook[name].phoneNumber;
}

makePhoneBookObject.prototype.removeContact = function(name) {
  if (this.phonebook[name] === undefined) return false;
  delete this.phonebook[name];
  return true;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
