function addRequest() {
  const patientName = document.getElementById("patientName").value;
  const requestType = document.getElementById("requestType").value;
  const requestDate = document.getElementById("requestDate").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;

  const table = document.getElementById("requestTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = patientName;
  row.insertCell(1).innerText = requestType;
  row.insertCell(2).innerText = requestDate;
  row.insertCell(3).innerText = status;
  row.insertCell(4).innerText = notes;

  document.getElementById("patientName").value = "";
  document.getElementById("requestType").value = "";
  document.getElementById("requestDate").value = "";
  document.getElementById("status").value = "Pending";
  document.getElementById("notes").value = "";
}
