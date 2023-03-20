function submitForm() {
  const married = document.getElementById("married").value;
  const age = document.getElementById("age").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const salary = document.getElementById("salary").value;

  if (married == 1 && age >= 35 && age <= 50 && education == 1 && experience >= 5 && salary >= 2500 && salary <= 3000) {
    document.getElementById("resultMessage").innerHTML = "Candidato selecionado!";
  } else {
    document.getElementById("resultMessage").innerHTML = "Candidato não selecionado.";
  }
}

document.getElementById("result").addEventListener("click", submitForm);
