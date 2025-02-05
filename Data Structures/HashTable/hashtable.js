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
    const index = this.hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    let index = this.hash(key);
    if (this.table.size !== 0 && this.table[index]) {
      this.table[index] = undefined;
      this.size--;
      return truel;
    } else {
      return false;
    }
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

console.log(ht.get("Canada"));
console.log(ht.get("France"));
console.log(ht.get("Spain"));

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
