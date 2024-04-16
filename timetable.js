import { venue } from "../data/lectureRooms.js";

let buttonElement = document.querySelector('.js-lr-add-button');

buttonElement.addEventListener('click', () => {
  console.log("hdh");
})

// List of all courses offered in the faculty
const objects = [
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
  const table = document.getElementById('objectTable');
  objects.forEach((object, index) => {
      const row = table.insertRow(index);
      const cell = row.insertCell(0);
      const select = document.createElement('select');
      objectDropdown(select); // Function to populate dropdown with objects
      cell.appendChild(select);
  });
}

// Function to populate dropdown with courses
function objectDropdown(select) {
  objects.forEach(object => {
      const option = document.createElement('option');
      option.value = object.name;
      option.textContent = object.name;
      select.appendChild(option);
  });
}

// Call function to populate dropdowns
populateDropdowns();