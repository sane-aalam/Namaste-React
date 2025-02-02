// Filter Method
// student age == 22 and student.name == "bob"
// only which we have to filter data

const students = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 17 },
];

const adults = students.filter((student) => {
  return student.age == 22 && student.name == "Bob";
});

console.log(adults);
