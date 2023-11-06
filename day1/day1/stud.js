class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getName() {
      return this.name;
    }
    getAge(){
      return this.age;
    }
  }
  
  // Create two student objects
  const student1 = new Student("Anvesh", 21);
  const student2 = new Student("Mahesh", 24);

const students = [
  new Student("Student1", 10),
  new Student("Student2", 15),
  new Student("Student3", 20),
  new Student("Student4", 25),
  new Student("Student5", 30),
];

const filteredStudents = students.filter((student) => student.age >= 20);

console.log("Students with age >= 20:");
filteredStudents.forEach((student) => {
  console.log(`Name: ${student.getName()}, 
               Age: ${student.age}`);
});