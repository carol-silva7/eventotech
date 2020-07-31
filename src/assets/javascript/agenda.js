filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("materia");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function selecionarT(tipo, professores) {
  console.log(professores);
  const arrayProfessores = Object.values(professores).filter((item) =>
    item.name.includes("data")
  );

  arrayProfessores.forEach((professor) => {
    const elementos = document.querySelectorAll(`.${tipo}[${professor.name}]`);

    elementos.forEach((elemento) => {
      elemento.classList.toggle("selected");
    });
  });
}

const materias = document.querySelectorAll(".materia");
materias.forEach((materia) => {
  materia.onclick = () => {
    clearTags();
    selecionarT("professor", materia.attributes);
  };
});

function clearTags() {
  document
    .querySelectorAll(".professor, .materia")
    .forEach((item) => item.classList.remove("selected"));

  document.querySelector("#clear").onclick = () => {
    clearTags();
  };
}
