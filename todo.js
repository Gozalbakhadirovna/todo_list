let fName = document.querySelector("#name"),
  lName = document.querySelector("#l-name"),
  group = document.querySelector("#group"),
  tbody = document.querySelector("tbody"),
  form = document.querySelector("form");

let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");
  count++
  let res = `
    <td>${count}</td>
    <td>${fName.value}</td>
    <td>${lName.value}</td>
    <td>${group.value}</td>`;

  tr.innerHTML = res;

  if (fName.value !== "" && lName.value !== "" && group.value !== "") {
    tbody.appendChild(tr);
  } else {
    count = 0;  
  }
});
