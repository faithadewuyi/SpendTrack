let addEl = document.getElementById("add-expenses")
let DateEl = document.getElementById ("expense-date");
let amountEl = document.getElementById ("expense-amount");
let descriptionEl = document.getElementById ("expense-description");
let tableEl = document.getElementById ("table");
let categoryEl = document.getElementById ("expense-category");
let class_Name;
// Local storage array
let expensesRecords = [];

// Function to check for existing date data in localStorage

function checkLocalStorageForKey(key) {
  var value = localStorage.getItem(key);
  if (value === null) {
      console.log("No data stored in local storage for the key:", key);
      return false;
  } else {
      console.log("Data found in local storage for the key:", key, "Value:", value);
      return true;
  }
}

// Usage example to check for a date
checkLocalStorageForKey('date');
