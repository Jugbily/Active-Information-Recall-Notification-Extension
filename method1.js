function createFields() {
  const numSubjects = document.getElementById("numSubjects").value;
  if (numSubjects < 1 || numSubjects > 10) {
    alert("Please enter a number between 1 and 10.");
    return; 
  }
  const container = document.getElementById("subjectFields");
  
  container.innerHTML = "";
  
  for (let i = 1; i <= numSubjects; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Subject ${i}`;
    input.id = `subject${i}`;
    
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
  document.getElementById("numSubjects").disabled = true;
  document.getElementById("confirmButton").disabled = true; 
}
