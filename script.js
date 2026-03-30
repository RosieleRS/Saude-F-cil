function adicionarMedicamento(){

let nome = document.getElementById("medicamento").value;

if(nome === ""){
alert("Digite um medicamento");
return;
}

let lista = document.getElementById("listaMedicamentos");

let item = document.createElement("li");
item.textContent = nome + " ";

let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function(){
item.remove();
};

item.appendChild(botao);
lista.appendChild(item);

document.getElementById("medicamento").value = "";
}


// ✅ B12 COM BOTÃO REMOVER
function adicionarB12(){

let nome = document.getElementById("medicamentoB12").value;

if(nome === ""){
alert("Digite o medicamento");
return;
}

let lista = document.getElementById("listaB12");

let item = document.createElement("li");
item.textContent = nome + " ";

let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function(){
item.remove();
};

item.appendChild(botao);
lista.appendChild(item);

document.getElementById("medicamentoB12").value = "";
}


// ✅ VITAMINA D COM REMOVER
function adicionarD(){

let nome = document.getElementById("medicamentoD").value;

if(nome === ""){
alert("Digite o medicamento");
return;
}

let lista = document.getElementById("listaD");

let item = document.createElement("li");
item.textContent = nome + " ";

let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function(){
item.remove();
};

item.appendChild(botao);
lista.appendChild(item);

document.getElementById("medicamentoD").value = "";
}


// ✅ FUNÇÃO SEPARADA (AGORA CORRETA)
function salvarVitaminas(){

let b12 = document.getElementById("b12").value;
let d = document.getElementById("vitaminaD").value;

if(b12 === "" || d === ""){
alert("Preencha os valores");
return;
}

let resultado = "";

if(b12 < 200){
resultado += "B12 baixa ❌ ";
}else{
resultado += "B12 ok ✅ ";
}

if(d < 30){
resultado += "| Vitamina D baixa ❌";
}else{
resultado += "| Vitamina D ok ✅";
}

document.getElementById("resultadoVitaminas").textContent = resultado;

}


// ✅ DICAS
function adicionarDica(){

let texto = document.getElementById("novaDica").value;

if(texto === ""){
alert("Digite uma dica");
return;
}

let lista = document.getElementById("listaDicas");

let item = document.createElement("li");
item.textContent = texto + " ";

let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function(){
item.remove();
};

item.appendChild(botao);
lista.appendChild(item);

document.getElementById("novaDica").value = "";
}


// ✅ REGISTRO
function salvarRegistro(){

let texto = document.getElementById("sintomas").value;

if(texto === ""){
alert("Digite algo");
return;
}

let lista = document.getElementById("listaRegistros");

let item = document.createElement("li");
item.textContent = texto + " ";

let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function(){
item.remove();
};

item.appendChild(botao);
lista.appendChild(item);

document.getElementById("sintomas").value = "";

}
