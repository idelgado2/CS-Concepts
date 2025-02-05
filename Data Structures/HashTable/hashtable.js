/**
 * HashTables are really useful for really fast serach and insertion
 *
 * Time Complexity
 * Function ==> Average ==> Wrost Case
 * Space ==> O(N) ==> O(N)
 * Search ==> O(1) ==> O(N)
 * Insertion ==> O(1) ==> O(N)
 * Delete ==> O(1) ==> O(N)
 */

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    let index = this.hash(key);
    if (this.table[index]) {
      //if index collision happens
      //check if key already exist which means we are reassinging
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      // no index collision
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    if (this.table.size !== 0 && this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("ǻ", 192);

console.log(ht.get("Canada"));
console.log(ht.get("France"));
console.log(ht.get("Spain"));
console.log(ht.get("ǻ"));

ht.display();

console.log(ht.remove("Spain")); // true
console.log(ht.get("Spain")); // undefined
ht.display();

/* -------------------------------------------------------------------------- */
/*                      Object Hash Table Implementation                      */
/* -------------------------------------------------------------------------- */

let myObject = {};
myObject.name = "Isaac";
// myObject.hasOwnProperty = false; ==> with object hash table implementation you could overwrite inherited functions
// console.log(myObject.name);
// console.log(myObject.hasOwnProperty("name"));

/* ----------------------------------- ^^^ ---------------------------------- */

/* -------------------------------------------------------------------------- */
/*              Using Map function for hash table implementation              */
/* -------------------------------------------------------------------------- */
const collection = new Map();
collection.set("Isaac", "12345");
collection.set("Leslie", "987493840");

// console.log(collection.get("Isaac"));
// console.log(collection.get("Leslie"));
// console.log(collection.size);

for ([value, key] of collection) {
  //   console.log(`${value}: ${key}`);
}

/* ----------------------------------- ^^^ ---------------------------------- */
