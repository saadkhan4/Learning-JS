function renderTable(id, data) {
  // Validate inputs
  // This is called guard clause
  // is.array is a built-in function that checks if the data is an array format
  // data.length will check if the data is empty
  if (!id || !data || !Array.isArray(data) || data.length === 0) {
    console.error("Invalid data provided to renderTable");
    return;
  }

  const body = document.getElementById(id);
  if (!body) {
    console.error(`Element with id "${id}" not found`);
    return;
  }

  const table = document.createElement("table");
  body.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  thead.appendChild(headerRow);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // Create headers from first data object
  for (const key in data[0]) {
    const tableHeading = document.createElement("th");
    tableHeading.innerText = key;
    headerRow.appendChild(tableHeading);
  }

  // Create table rows
  data.forEach((element) => {
    const tableRow = document.createElement("tr");
    tbody.appendChild(tableRow);
    for (const key in element) {
      const tableData = document.createElement("td");
      tableData.innerText = element[key];
      tableRow.appendChild(tableData);
    }
  });
}

async function fetchData() {
  try {
    const response = await fetch("data.json");
    // .ok will check if HTTP is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    // if the data is not found, return null
    return null;
  }
}

fetchData().then((result) => {
  if (result) {
    renderTable("demo", result);
  } else {
    console.error("Failed to load data");
  }
});
