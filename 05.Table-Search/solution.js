import { render } from "./../node_modules/lit-html/lit-html.js";
import { allStudentsTemplate } from "./templates/studentTemplates.js";

document.querySelector('#searchBtn').addEventListener('click', onClick);
let tableTBody = document.querySelector('.container tbody');

let students = [];

loadStudents();

async function loadStudents() {
    let studentsResponse = await fetch('http://localhost:3030/jsonstore/advanced/table');
    let studentsObj = await studentsResponse.json();
    console.log(studentsObj);

    students = Object.values(studentsObj).map(s => ({
        name: `${s.firstName} ${s.lastName}`,
        course: s.course,
        email: s.email
    }));

    render(allStudentsTemplate(students), tableTBody);
}

function onClick() {
    let searchInput = document.getElementById('searchField');
    let searchText = searchInput.value.toLowerCase();

    let allStudents = students.map(s => Object.assign({}, s));
    let matchedStudents = allStudents
        .filter(s => Object.values(s).some(val => {
            return val.toLowerCase().includes(searchText)
        }));
    matchedStudents.forEach(s => s.class = 'select');

    searchInput.value = '';
    render(allStudentsTemplate(allStudents), tableTBody);
}