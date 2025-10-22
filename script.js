const Katalog = [
  { name: "Kalle Anderson", age: 20, active: true },
  { name: "Pelle Larsson", age: 22, active: false },
  { name: "Erik Svensson", age: 21, active: true },
];

const ul = document.getElementById("student-lista");
const addStudentBtn = document.getElementById("addStudentBtn"); // 🔹 Ny rad

 function renderList() {
    ul.innerHTML = ""; // töm listan först
    Katalog.forEach(({ name, age, active }) => {
      const li = document.createElement("li");
      li.className = active ? 'active-student' : 'inactive-student';
      li.innerHTML = `
        <span class="name">${name}</span>
        <span class="age">(${age})</span>
        <span class="status ${active ? 'active' : 'inactive'}">
          ${active ? 'Aktiv' : 'Inaktiv'}
        </span>
      `;
      ul.appendChild(li);
    });
  }

// 🔹 Visa listan första gången
renderList();

// 🔹 Lägg till en ny hårdkodad student när man klickar på knappen
addStudentBtn.addEventListener("click", () => {
  const newStudent = { name: "Lisa", age: 19, active: true }; // ny student
  Katalog.push(newStudent); // lägg till i arrayen
  renderList(); // rita om listan
});


