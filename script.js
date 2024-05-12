let addEl = document.getElementById("add-expenses")
let dateEl = document.getElementById ("expense-date");
let amountEl = document.getElementById ("expense-amount");
let descriptionEl = document.getElementById ("expense-description");
let tableEl = document.getElementById ("table");
let categoryEl = document.getElementById ("expense-category");
let class_Name;
// Local storage array
let expensesData = [];

// Function to check for existing date data in localStorage

// function checkLocalStorageForKey(key) {
//   var value = localStorage.getItem(key);
//   if (value === null) {
//       console.log("No data stored in local storage for the key:", key);
//       return false;
//   } else {
//       console.log("Data found in local storage for the key:", key, "Value:", value);
//       return true;
//   }
// }

// // Usage example to check for a date
// checkLocalStorageForKey('date');

if(localStorage.getItem('expensesData')){
  expensesData = JSON.parse(localStorage.getItem('expensesData'))

  rendersTable()
}

let inputArray = [dateEl, amountEl, descriptionEl]

function addExpenses(date= 'N/A', type = 'N/A', amount = 'N/A', description ='N/A'){

  let dateInput = new Date(dateEl.value)
  let dateFormat = dateInput.toLocaleDateString('en-UK', {month: '2-digit', day: '2-digit', year: 'numeric'})

    date = dateFormat
    type =  categoryEl.value
    amount = amountEl. value
    description = descriptionEl.value

    switch (categoryEl.value) {
      case 'Food':
        class_Name = 'food';
        break;
    
      case 'Transport':
      class_Name = 'transport';
        break;

        case 'Housing':
      class_Name = 'housing';
        break;

        case 'Education':
      class_Name = 'education';
        break;

        case 'Miscellaneous':
      class_Name = 'miscellaneous';
        break;

        case 'Others':
      class_Name = 'others'
        break;
    }

    expensesData.push(date, type, amount, description, class_Name)

    updateLocalStorage();

    rendersTable();

  }
function deleteExpenses(index){
    expensesData.splice(index,1)
    updateLocalStorage()
    rendersTable()
}

function rendersTable(){
    tableEl.innerHTML = `<tr>`
}