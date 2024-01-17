"use strict";

const employees = [
   { id: 1, name: "John", department: "Sales", salary: 55000 },
   { id: 2, name: "Mary", department: "Marketing", salary: 40000 },
   { id: 3, name: "Bob", department: "Engineering", salary: 15000 },
   { id: 4, name: "Pavel", department: "Engineering", salary: 10000 },
   { id: 5, name: "Gustav", department: "Finance", salary: 25000 },
   { id: 6, name: "Liza", department: "Finance", salary: 20000 },
   { id: 7, name: "Eva", department: "Sales", salary: 35000 },
   { id: 8, name: "Karl", department: "Legal", salary: 30000 },
   { id: 9, name: "Charlie", department: "HR", salary: 45000 },
   { id: 10, name: "Djo", department: "HR", salary: 40000 },
];

class AdvancedArray extends Array {
   constructor(arr, department) {
      super();
      this.arr = arr;
      this.department = department;
   }

   sum() {
      for (let i = 0; i < this.arr.length; i++) {
         if (this.arr[i].department === this.department) {
            return this.arr.reduce((sum, item) => sum + item.salary, 0);
         }
      }
   }

   bigSalary() {
      return this.arr.reduce((acc, val) => {
         if (
            this.department === acc.department && acc.salary < val.salary
               ? val
               : acc
         );
      });
   }
}

const advancedArrayEmployees = new AdvancedArray(employees, "HR");
const bigArrayEmployees = new AdvancedArray(employees, "Engineering");

console.log(advancedArrayEmployees.sum());
console.log(bigArrayEmployees.bigSalary());
