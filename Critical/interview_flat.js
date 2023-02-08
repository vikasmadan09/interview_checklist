/**
 * Returns a new object with all the properties (including nested ones) listed on the first level.
 * Nested keys are be joined with a dot "." and keys for arrays we will use the index wrapped with square brackets "[i]".
 * @param {Object} obj Object to be flattened
 * @returns {Object} New object with all properties on the first level.
 */
const flatten = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((item) => {
    if (typeof obj[item] === "object") {
      Object.keys(obj[item]).map((sub) => {
        if (
          typeof obj[item][sub] === "object" &&
          Array.isArray(obj[item][sub])
        ) {
          obj[item][sub].map((arr, ind) => {
            newObj[`${item}.${sub}.[${ind}]`] = obj[item][sub][ind];
          });
        } else {
          newObj[`${item}.${sub}`] = obj[item][sub];
        }
      });
    } else {
      newObj[item] = obj[item];
    }
    // return newObj;
  });
  return newObj;
  // return {};
};

// Example:
const person = {
  name: "John Doe",
  pet: {
    type: "Dog",
    color: "White",
    name: "Casper",
    tags: ["playful", "loud", "fast"],
  },
};

const flatPersonObject = flatten(person);

// console.log(flatPersonObject);

// Example 2:
const friend = {
  name: "John Smith",
  friends: [person],
  pet: {
    type: "Cat",
    color: "Orange",
    tags: ["lazy", "slow"],
  },
};

const flatFriendObject = flatten(friend);

console.log(flatFriendObject);

/*
Expected output:
{
  'name': 'John Doe',
  'pet.type': 'Dog',
  'pet.color': 'White',
  'pet.name': 'Casper',
  'pet.tags.[0]': 'playful',
  'pet.tags.[1]': 'loud',
  'pet.tags.[2]': 'fast'
}
*/

console.assert(flatPersonObject["name"] === "John Doe", "name");
console.assert(flatPersonObject["pet.type"] === "Dog", "pet.type");
console.assert(flatPersonObject["pet.color"] === "White", "pet.color");
console.assert(flatPersonObject["pet.name"] === "Casper", "pet.name");
console.assert(flatPersonObject["pet.tags.[0]"] === "playful", "pet.tags.[0]");
console.assert(flatPersonObject["pet.tags.[1]"] === "loud", "pet.tags.[1]");
console.assert(flatPersonObject["pet.tags.[2]"] === "fast", "pet.tags.[2]");

/*

// Example 2:
const friend = {
  name: 'John Smith',
  friends: [person],
  pet: {
      type: 'Cat',
      color: 'Orange',
      tags: ['lazy', 'slow'],
  }
}

const flatFriendObject = flatten(friend);

// console.log(flatFriendObject);
/*
Expected output:
{
'name': 'John Smith',
'friends.[0].name': 'John Doe',
'friends.[0].pet.type': 'Dog',
'friends.[0].pet.color': 'White',
'friends.[0].pet.name': 'Casper',
'friends.[0].pet.tags.[0]': 'playful',
'friends.[0].pet.tags.[1]': 'loud',
'friends.[0].pet.tags.[2]': 'fast',
'pet.type': 'Cat',
'pet.color': 'Orange',
'pet.tags.[0]': 'lazy',
'pet.tags.[1]': 'slow'
}

console.assert(flatFriendObject['name'] === 'John Smith', "'name' doesn't match")
console.assert(flatFriendObject['pet.tags.[0]'] === 'lazy', "pet.tags.[0] doesn't match")
console.assert(flatFriendObject['pet.tags.[1]'] === 'slow', "pet.tags.[1] doesn't match")
console.assert(flatFriendObject['friends.[0].pet.tags.[0]'] === 'playful', "friends.[0].pet.tags.[0] doesn't match")
console.assert(flatFriendObject['friends.[0].pet.tags.[1]'] === 'loud', "friends.[0].pet.tags.[1] doesn't match")
*/
