// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  //adding to local storage

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
};

const createStudent = ({ name, age, roll }) => {
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  studentName.innerText = `Student name: ${name}`;
  studentAge.innerText = `Student age: ${age}`;
  studentRoll.innerText = `Student roll: ${roll}`;

  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);
};

students.forEach(createStudent);

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );
  createStudent(newStudent);
  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
});
