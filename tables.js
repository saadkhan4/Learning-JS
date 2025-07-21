const body = document.getElementById("table-practice");
const table = document.createElement("table");

body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const th_row = document.createElement("tr");
thead.appendChild(th_row);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  for (const key in data[0]) {
    const t_heading = document.createElement("th");
    t_heading.innerHTML = key;
    th_row.appendChild(t_heading);
  }
  data.forEach((element) => {
    const tb_row = document.createElement("tr");
    tbody.appendChild(tb_row);
    for (const key in element) {
      const t_heading = document.createElement("th");
      t_heading.innerHTML = element[key];
      tb_row.appendChild(t_heading);
    }
  });
}

getData();
