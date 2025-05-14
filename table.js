const body = document.getElementById("table-practice");
const table = document.createElement("table");

body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const row = document.createElement("tr");
thead.appendChild(row);

const t_heading = document.createElement("th");
t_heading.innerHTML = "Heading";
row.appendChild(t_heading);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const row2 = document.createElement("tr");
tbody.appendChild(row2);

const t_data = document.createElement("td");
t_data.innerHTML = "Table body.";
row2.appendChild(t_data);

const tfoot = document.createElement("tfoot");
table.appendChild(tfoot);

const row3 = document.createElement("tr");
tfoot.appendChild(row3);

const tf_data = document.createElement("td");
tf_data.innerHTML = "Table footer";
row3.appendChild(tf_data);

