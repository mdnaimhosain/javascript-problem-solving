// Problem: Calculate a student's average marks and determine the grade.
// Concepts: Objects, for...in loop, sum, counter, average, if-else.

student = {
  name: "Naim",
  id: 102,
  marks: {
    Bangla: 82,
    English: 85,
    Math: 93,
    Physics: 87,
    Chamistry: 92,
  },
};
let totalmarks = 0;
let totalsubject = 0;

for (const subject in student.marks) {
  totalmarks = totalmarks + student.marks[subject];
  totalsubject++;
}

let avg = totalmarks / totalsubject;
if (avg >= 80) {
  console.log("Your Grade A+", avg.toFixed(2) + "%");
} else if (avg >= 60) {
  console.log("Your Grade A", avg.toFixed(2) + "%");
} else if (avg >= 33) {
  console.log("you Passed", avg.toFixed(2) + "%");
} else {
  console.log("You Fail");
}
