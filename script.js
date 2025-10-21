const Katalog = ["kalle", "Pelle","Erik"];

const ul = document.getElementById("student-lista");

Katalog.forEach(name => {
const li = document.createElement("li");
li.textContent = name;
ul.appendChild(li);
});