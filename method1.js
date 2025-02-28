function createFields() {
  const numSubjects = document.getElementById("numSubjects").value;
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
}
