const body = document.getElementById("table-practice");
const table = document.createElement("table");

body.appendChild(table);

// TABLE HEADINGS.

const thead = document.createElement("thead");
table.appendChild(thead);

const th_row = document.createElement("tr");
thead.appendChild(th_row);

const t_heading = document.createElement("th");
t_heading.innerHTML = "Name";
th_row.appendChild(t_heading);

const t_heading2 = document.createElement("th");
t_heading2.innerHTML = "Company";
th_row.appendChild(t_heading2);

const t_heading3 = document.createElement("th");
t_heading3.innerHTML = "Country";
th_row.appendChild(t_heading3);

// TABLE BODY.

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const tb_row = document.createElement("tr");
tbody.appendChild(tb_row);

const t_data = document.createElement("td");
t_data.innerHTML = "Iqbal";
tb_row.appendChild(t_data);

const t_data2 = document.createElement("td");
t_data2.innerHTML = "Xiaomi";
tb_row.appendChild(t_data2);

const t_data3 = document.createElement("td");
t_data3.innerHTML = "China";
tb_row.appendChild(t_data3);


//TABLE FOOTER.

const tfoot = document.createElement("tfoot");
table.appendChild(tfoot);

const tf_row = document.createElement("tr");
tfoot.appendChild(tf_row);

const tf_data = document.createElement("td");
tf_data.innerHTML = "Owais";
tf_row.appendChild(tf_data);

const tf_data2 = document.createElement("td");
tf_data2.innerHTML = "Samsung";
tf_row.appendChild(tf_data2); 

const tf_data3 = document.createElement("td");
tf_data3.innerHTML = "Korea";
tf_row.appendChild(tf_data3);






