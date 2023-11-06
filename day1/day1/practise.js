/*const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

//
const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers.map((num) => num * 3);
console.log(multipliedNumbers);



//OOPs
class Person{
    constructor (name, age, city){
        this.name-name,
        this.age-age,
        this.city-city
      }
      getName(){
          return this.name;
        }
      getAge(){
          return this.age;
        }
  }
  
  let p1=new Person("Anvesh", 22, "Bengaluru"); 
  console.log(p1.getName());
  
  let p2=new Person("shubham", 20, "Pune"); 
  console.log(p2.getName()); 
  console.log(p2.getAge());
  

  class Animal{
    speak(){
      console.log("Animal makes sound");
    }
  }

  class Dog extends Animal{
    constructor(name,age){
      super();
      this.name=name;
      this.age=age;
    }

    speak(){
      console.log("Dog barks");
    }
  }


  let d1=new Dog("Doggyy",12);
  console.log(d1.name);
  d1.speak();

*/

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





  
  /*
  var b=10;
  //var a=10;
  function f1(){
    function f2(){

    }
  }
  