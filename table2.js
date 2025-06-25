const body = document.getElementById("students-table");
const table = document.createElement("table");


body.appendChild(table);

// Table headings
const thead = document.createElement("thead");
table.appendChild(thead);

const th_row = document.createElement("tr");
thead.appendChild(th_row);

const t_heading = document.createElement("th");
t_heading.innerHTML = "NAME";
th_row.appendChild(t_heading);

const t_heading2 = document.createElement("th");
t_heading2.innerHTML = "CLASS";
th_row.appendChild(t_heading2);

const t_heading3 = document.createElement("th");
t_heading3.innerHTML = "MARKS";
th_row.appendChild(t_heading3);

// TABLE BODY

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const tb_row = document.createElement("tr");
tbody.appendChild(tb_row);


const t_data = document.createElement("td");
t_data.innerHTML = "Ali";
tb_row.appendChild(t_data);

const t_data2 = document.createElement("td");
t_data2.innerHTML = "VII";
tb_row.appendChild(t_data2);

const t_data3 = document.createElement("td");
t_data3.innerHTML = 45;
tb_row.appendChild(t_data3);

const tb_row2 = document.createElement("tr");
tbody.appendChild(tb_row2);

const t_data4 = document.createElement("td");
t_data4.innerHTML = "Saad";
tb_row2.appendChild(t_data4);

const t_data5 = document.createElement("td");
t_data5.innerHTML = "XI";
tb_row2.appendChild(t_data5);

const t_data6 = document.createElement("td");
t_data6.innerHTML = 95;
tb_row2.appendChild(t_data6);

const tb_row3 = document.createElement("tr");
tbody.appendChild(tb_row3);

const t_data7 = document.createElement("td");
t_data7.innerHTML = "Hamza";
tb_row3.appendChild(t_data7);


const t_data8 = document.createElement("td");
t_data8.innerHTML = "VIII";
tb_row3.appendChild(t_data8);

const t_data9 = document.createElement("td");
t_data9.innerHTML = 78;
tb_row3.appendChild(t_data9);



// TABLE FOOTER

const tfoot = document.createElement("tfoot");
table.appendChild(tfoot);

const tf_row = document.createElement("tr");
tfoot.appendChild(tf_row);

const tf_row2 = document.createElement("tr");
tfoot.appendChild(tf_row2);

const tf_data4 = document.createElement("td");
tf_data4.innerHTML = "Total Marks";
tf_row2.appendChild(tf_data4);

const tf_data5 = document.createElement("td");
tf_data5.innerHTML = "";
tf_row2.appendChild(tf_data5);

const tf_data6 = document.createElement("td");
tf_data6.innerHTML = 218;
tf_row2.appendChild(tf_data6);
