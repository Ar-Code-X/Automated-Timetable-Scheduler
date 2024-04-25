import { venue } from "../data/lectureRooms.js";

let venueName = "";

let buttonElement = document.querySelector('.js-lr-add-button');

buttonElement.addEventListener('click', () => {
  venueName = document.querySelector('.lr-name').value;
  venue[venueName] = Number(document.querySelector('.lr-capacity').value);
  console.log(venue);

  document.querySelector('.lr-capacity').value = "";
  document.querySelector('.lr-name').value = "";
})



let newDepartmentHTML = `
<div class="department-details-form1">
  <div class="a">&#43</div>
  <div class="b">Add a department</div>
</div>
`;

let replacementHTML = `
<div class="department-details-form">
  <input placeholder="Department name" type="text">
  <input placeholder="Population" type="number">
  <h3>Selcet Courses:</h3>
  <table id="courseTable">
    <tr id="headerRow">
      <!-- Header row -->
    </tr>
  </table>
</div>

<div class="department-details-form1">
  <div class="a">&#43</div>
  <div class="b">Add a department</div>
</div>
`;

let departmentsHTML = `
<div class="department-details-form">
  <input placeholder="Department name" type="text">
  <input placeholder="Population" type="number">
  <h3>Selcet Courses:</h3>
  <table id="courseTable">
    <tr id="headerRow">
      <!-- Header row -->
    </tr>
  </table>
</div>

<div class="department-details-form">
  <input placeholder="Department name" type="text">
  <input placeholder="Population" type="number">
  <h3>Selcet Courses:</h3>
  <table id="courseTable">
    <tr id="headerRow">
      <!-- Header row -->
    </tr>
  </table>
</div>

<div class="department-details-form1">
  <div class="a">&#43</div>
  <div class="b">Add a department</div>
</div>
`;

document.querySelector('.js-department-details').innerHTML = departmentsHTML;

let newDepartmentButton = document.querySelector('.department-details-form1');

newDepartmentButton.addEventListener('click', () => {
  if (departmentsHTML.includes(newDepartmentHTML)) {
    departmentsHTML = departmentsHTML.replace(newDepartmentHTML, replacementHTML);

    console.log(departmentsHTML);

    document.querySelector('.js-department-details').innerHTML = departmentsHTML;

    populateDropdowns();
  }
})

// List of all courses offered in the faculty
const courses = [
  { name: 'CSC 202' },
  { name: 'IFT 201' },
  { name: 'CSC 207' },
  { name: 'SEN 202' },
  { name: 'CYB 208' },
  { name: 'CSC 206' },
  { name: 'MTH 203' },
  { name: 'STT 201' },
  { name: 'MTH 206' },
  { name: 'GST 208' }
];

// Function to populate dropdowns vertically
function populateDropdowns() {
  const table = document.querySelector('#courseTable');
  courses.forEach((course, index) => {
      const row = table.insertRow(index);
      const cell = row.insertCell(0);
      const select = document.createElement('select');
      courseDropdown(select); // Function to populate dropdown with courses
      cell.appendChild(select);
  });
}

// Function to populate dropdown with courses
function courseDropdown(select) {
  courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.name;
      option.textContent = course.name;
      select.appendChild(option);
  });
}

// Call function to populate dropdowns
populateDropdowns();