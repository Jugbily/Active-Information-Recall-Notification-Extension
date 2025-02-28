function createFields() {
  const numSubjects = document.getElementById("numSubjects").value;
  
  if (numSubjects < 1 || numSubjects > 10) {
    alert("Please enter a number between 1 and 10.");
    return;
  }
  
  const container = document.getElementById("subjectFields");
  container.innerHTML = ""; 
  
  for (let i = 1; i <= numSubjects; i++) {
    container.innerHTML += `<label>Subject ${i}: </label><input type="text" id="subject${i}" placeholder="Enter subject ${i}"><br>`;
  }
  
  container.innerHTML += `<button onclick="saveSubjects()">Save Subjects</button>`;
  }
  
  function saveSubjects() {
  let subjectsArray = [];
  const numSubjects = document.getElementById("numSubjects").value;
  
  for (let i = 1; i <= numSubjects; i++) {
    const subject = document.getElementById(`subject${i}`).value;
    subjectsArray.push(subject);
  }
  
  console.log(subjectsArray);
}
