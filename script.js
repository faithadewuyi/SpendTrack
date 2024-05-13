let addEl = document.getElementById("add-expenses")
let dateEl = document.getElementById ("expense-date");
let amountEl = document.getElementById ("expense-amount");
let descriptionEl = document.getElementById ("expense-description");
let tableEl = document.getElementById ("table");
let categoryEl = document.getElementById ("expense-category");
let class_name;
// Local storage array
let expensesData = [];

if(localStorage.getItem('expensesData')){
  expensesData = JSON.parse(localStorage.getItem('expensesData'))

  rendersTable();
}

let inputArray = [dateEl, amountEl, descriptionEl]

function addExpenses(date= 'N/A', type = 'N/A', amount = 'N/A', description ='N/A'){

  let dateInput = new Date(dateEl.value)
  let dateFormat = dateInput.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})

    date = dateFormat;
    type =  categoryEl.value;
    amount = amountEl.value;
    description = descriptionEl.value;

    switch (categoryEl.value) {
      case 'Food':
          class_name = 'food';
          break;
      case 'Transport':
          class_name = 'transport';
          break;
      case 'Housing':
          class_name = 'housing';
          break;
      case 'Education':
          class_name = 'education';
          break;
      case 'Miscellaneous':
          class_name = 'miscellaneous';
          break;
      case 'Clothing':
          class_name = 'clothing';
          break;
      case 'Others':
          class_name = 'others';
          break;
         
  }
  
  console.log({date, type, amount, description, class_name});  // Debug output

  expensesData.push({date, type, amount, description, class_name});
  
    updateLocalStorage();
    rendersTable();

  }
function deleteExpenses(index){
    expensesData.splice(index,1)
    updateLocalStorage()
    rendersTable()
}

function rendersTable(){
    tableEl.innerHTML = `<tr>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Description</th>
                          <th>Action </th> 
                        </tr>`

    expensesData.forEach((expense,index)=>{
        let colorCode = expense.class_name

        tableEl.innerHTML += `<tr>
        <td class="${colorCode}">${expense.date}</td>
        <td class="${colorCode}">${expense.type}</td>
        <td class="${colorCode}">${expense.amount}</td>
        <td class="${colorCode}">${expense.description}</td>
        <td class="${colorCode}"><button onclick = "deleteExpenses(${index})">Delete</button></td>
      </tr>`;

     })
}

function updateLocalStorage(){
  localStorage.setItem('expensesData', JSON.stringify(expensesData))
}

addEl.addEventListener('click', addExpenses)



  function clearLocalStorage() {
    localStorage.clear();
    alert('Local storage cleared.');
  }

