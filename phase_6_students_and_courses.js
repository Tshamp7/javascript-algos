/*
Phase 6: Students and Courses
Overview
Here's our reading Object-Oriented Programming in JS. Use the reading for 
reference as you work on this exercise!

Instructions
Write classes to model students and the courses they can enroll in.

Student class
Student - a constructor function which should take a first and last name, and set
both of those as attributes. It should also set a courses attribute to an empty array.

Student.prototype.name - returns the concatenation of the student's first and last name
Student.prototype.enroll - receives Course object, adds it to the student's list 
of courses, and updates the Course's list of enrolled students
enroll should ignore attempts to re-enroll a student

Student.prototype.courseLoad - returns a hash of departments to number of credits 
the student is taking in that department

Course class

Course, a constructor function which should take the course name, department, 
and number of credits. It should also initialize students attribute to an empty array.

Course.prototype.addStudent should add a student to the class
Probably can rely upon Student.prototype.enroll

Overlapping Courses

Each course should also take a set of days of the week ('mon', 'tue', ...), plus 
a time block (assume each day is broken into 8 consecutive time blocks). So a 
course could meet ['mon', 'wed', 'fri'] during block #1.
Update your constructor function to also take a time block and days of the week

Write a method Course.prototype.conflictsWith which takes a second Course and 
returns true if they conflict

Update Student.prototype.enroll so that an error is raised if a Student enrolls 
in a course that conflicts with an existing course time
Write a Student.prototype.hasConflict helper method
*/

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }
}

class Course {
  constructor(name, dept, numCredits, daysOfWeek, timeBlock) {
    this.name = name;
    this.dept = dept;
    this.numCredits = numCredits;
    this.daysOfWeek = daysOfWeek;
    this.timeBlock = timeBlock;
    this.students = [];
  }
}

Student.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

Student.prototype.enroll = function (course) {
  let thisCourse = course;

  let studentsCourses = this.courses;

  let conflict = false;
  let conflictingCourse = null;

  studentsCourses.forEach((ele) => {
    if (thisCourse.conflictsWith(ele)) {
      conflict = true;
      conflictingCourse = ele.name;
    }
  });

  if (!this.courses.includes(thisCourse) && !conflict) {
    thisCourse.students.push(this);
    this.courses.push(thisCourse);
  } else if (conflict) {
    console.log(`${thisCourse.name} conflicts with the time of ${conflictingCourse}, 
      please choose another day or time slot.`);
  } else {
    console.log(`${this.name()} is already enrolled in ${thisCourse.name}.`);
  }
};

Student.prototype.courseLoad = function () {
  const courses = this.courses;
  let studentCourseLoad = {};

  courses.forEach((course) => {
    dep = course.dept;
    credits = course.numCredits;
    if (Object.keys(studentCourseLoad).includes(dep)) {
      studentCourseLoad[dep] += credits;
    } else {
      studentCourseLoad[dep] = credits;
    }
  });
  return studentCourseLoad;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function (course) {
  thisCourse = this;
  thatCourse = course;

  if (
    thisCourse.daysOfWeek.equals(thatCourse.daysOfWeek) &&
    thisCourse.timeBlock === thatCourse.timeBlock
  ) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.clone = function () {
  let arr = [];

  this.forEach((ele) => {
    arr.push(ele);
  });

  return arr;
};

Array.prototype.equals = function (arr) {
  let thisLength = this.length;
  let arrLength = arr.length;
  let arrCopy = arr.clone();

  if (thisLength !== arrLength) {
    return false;
  } else {
    let counter = 0;

    this.forEach((ele) => {
      if (arr.includes(ele)) {
        counter++;
        arrCopy.splice(arrCopy.indexOf(ele), 1);
      } else {
        return false;
      }
    });
    if (counter == thisLength) {
      return true;
    } else {
      return false;
    }
  }
};

let kyle = new Student("Kyle", "Weebs");
const bio101 = new Course("Bio101", "Science", 4, ["mon", "wed", "fri"], 1);
const phl101 = new Course("Phl101", "Philosophy", 3, ["tue", "thu"], 1);
const mth101 = new Course("Mth101", "Math", 3, ["mon", "wed", "fri"], 1);
const bio108 = new Course("Bio108", "Science", 4, ["tue", "thu"], 2);

kyle.enroll(bio101); // -> no conflict
kyle.enroll(phl101); // -> no conflict
kyle.enroll(mth101); // -> conflicts with bio 101
kyle.enroll(bio108); // -> no conflict

console.log(bio101.students);
console.log(kyle.courseLoad());

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 3, 4, 5];
let arr3 = [1, 2, 2, 3, 4];
let arr4 = [1, 2, 3, 4, 5];

console.log(bio101.conflictsWith(mth101)); // -> true
console.log(phl101.conflictsWith(mth101)); // -> false

console.log(mth101.daysOfWeek.equals(bio101.daysOfWeek)); // -> true
