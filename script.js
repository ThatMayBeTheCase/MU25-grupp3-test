const Katalog = [
  { name: "Kalle Anderson", age: 20, active: true },
  { name: "Pelle Larsson", age: 22, active: false },
  { name: "Erik Svensson", age: 21, active: true },
];

const ul = document.getElementById("student-lista");

Katalog.forEach(({ name, age, active }) => {
  const li = document.createElement("li");
  li.className = active ? 'active-student' : 'inactive-student';
  li.innerHTML = `
    <span class="name">${name}</span>
    <span class="age">Age ${age}</span>
    <span class="status ${active ? 'active' : 'inactive'}">
        ${active ? 'Aktiv' : 'Inaktiv'}
    </span>
  `;
  ul.appendChild(li);
});

