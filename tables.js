async function getData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        data.forEach(element => {
            const tb_row = document.createElement("tr");
            tbody.appendChild(tb_row);
            for (const key in element) {
                const t_data = document.createElement("td");
                t_data.innerHTML = element[key];
                tb_row.appendChild(t_data);
            }
        });
    } catch (error) {
        console.log("Error", error);
    }
}

getData();

const body = document.getElementById("table-practice");
const table = document.createElement("table");

body.appendChild(table);

// Table Headings
const thead = document.createElement("thead");
table.appendChild(thead);

const th_row = document.createElement("tr");
thead.appendChild(th_row);

const t_heading = document.createElement("th");
t_heading.innerHTML = "ID";
th_row.appendChild(t_heading);

const t_heading2 = document.createElement("th");
t_heading2.innerHTML = "NAME";
th_row.appendChild(t_heading2);

const t_heading3 = document.createElement("th");
t_heading3.innerHTML = "AGE";
th_row.appendChild(t_heading3);

const t_heading4 = document.createElement("th");
t_heading4.innerHTML = "GRADE";
th_row.appendChild(t_heading4);

// TABLE BODY

const tbody = document.createElement("tbody");
table.appendChild(tbody);



