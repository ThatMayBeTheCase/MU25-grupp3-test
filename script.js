const Katalog = [
  { name: "Kalle", age: 20, active: true },
  { name: "Pelle", age: 22, active: false },
  { name: "Erik", age: 21, active: true },
];

const ul = document.getElementById("student-lista");

Katalog.forEach(({ name, age }) => {
  const li = document.createElement("li");
  li.innerHTML =
  `
    <span class="name">${name}</span>
    <span class="age">Age ${age}</span>
  `;
  ul.appendChild(li);
});

