// Manipulação do DOM

const div = document.createElement("div");
const p = document.createElement("p");

p.textContent = "As melhores ofertas da cidade!";
div.appendChild(p);
document.body.appendChild(div);

// Outra possibilidade

const novaDiv = document.createElement("div");
novaDiv.innerHTML = "<p>As <strong>melhores ofertas</strong> da cidade!</p>";

document.body.append(novaDiv);
