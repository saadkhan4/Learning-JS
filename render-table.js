// function renderTable(id, data) {
//   const body = document.getElementById(id);
//   const table = document.createElement("table");

//   body.appendChild(table);

//   const thead = document.createElement("thead");
//   table.appendChild(thead);

//   const th_row = document.createElement("tr");
//   thead.appendChild(th_row);

//   const tbody = document.createElement("tbody");
//   table.appendChild(tbody);

//   for (const key in data[0]) {
//     const t_heading = document.createElement("th");
//     t_heading.innerText = key;
//     th_row.appendChild(t_heading);
//   }

//   data.forEach((element) => {
//     const tb_row = document.createElement("tr");
//     tbody.appendChild(tb_row);

//     for (const key in element) {
//       const t_data = document.createElement("td");
//       t_data.innerText = element[key];
//       tb_row.appendChild(t_data);
//     }
//   });
// }

// async function fetchData() {
//   const response = await fetch("data.json");
//   const data = await response.json();
//   return data;
// }

// fetchData().then((data) => {
//   renderTable("demo", data);
// });

function renderTable(id,data) {
  const body = document.getElementById(id);
  const table = document.createElement("table");

  body.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const th_row = document.createElement("tr");
  thead.appendChild(th_row);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const key in data[0]) {
    const t_heading = document.createElement("th");
    t_heading.innerText = key;
    th_row.appendChild(t_heading);
  }

  data.forEach((element) => {
    const tb_row = document.createElement("tr");
    tbody.appendChild(tb_row);

    for (const key in element) {
      const t_data = document.createElement("td");
      t_data.innerText = element[key];
      tb_row.appendChild(t_data);
    }
  });
}

async function getData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching table", error);
  }
}

getData().then((data) => {
  renderTable("demo",data);
});
// function renderTable(id, data) {
//   if (!id || !data || !Array.isArray(data) || data.length === 0) {
//     console.error("Invalid data provided to renderTable");
//     return;
//   }

//   const body = document.getElementById(id);
//   if (!body) {
//     console.error(`Element with ${id} not found`);
//     return;
//   }

//   const table = document.createElement("table");
//   body.appendChild(table);

//   const thead = document.createElement("thead");
//   table.appendChild(thead);

//   const th_row = document.createElement("tr");
//   thead.appendChild(th_row);

//   const tbody = document.createElement("tbody");
//   table.appendChild(tbody);

//   for (const key in data[0]) {
//     const t_heading = document.createElement("th");
//     t_heading.innerText = key;
//     th_row.appendChild(t_heading);
//   }

//   data.forEach((element) => {
//     const tb_row = document.createElement("tr");
//     tbody.appendChild(tb_row);
//     for (const key in element) {
//       const t_data = document.createElement("td");
//       t_data.innerText = element[key];
//       tb_row.appendChild(t_data);
//     }
//   });
// }

// async function fetchData() {
//   try {
//     const response = await fetch("data.json");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching data:",error);
//     return null;
//   }
// }

// fetchData().then((result) => {
//   if (result) {
//     renderTable("demo", result);
//   } else {
//     console.error("Failed to load data.");
//   }
// })
