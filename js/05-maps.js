const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

const contacts = new Map()
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}


// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
    console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
    console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

myMap.forEach(function(value, key) {
        console.log(key + ' = ' + value)
    })
    // 0 = zero
    // 1 = one

const kvArray = [
    ['key1', 'value1'],
    ['key2', 'value2']
]

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap3 = new Map(kvArray)

myMap3.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap3)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap3])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap3.keys())) // ["key1", "key2"]