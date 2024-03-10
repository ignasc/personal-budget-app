import './App.css';
import AppTitle from './components/AppTitle';
import ExpenseTable from './components/ExpenseTable';
import ExpenseSummary from './components/ExpenseSummary.js';
import AddNewExpense from './components/AddNewExpense.js';
import BudgetSummary from './components/BudgetSummary.js';
import { budgetTypes } from './components/temp/DataForTest';
//Expense list state
import { expenses } from './components/temp/DataForTest.js';
import { useState } from 'react';

function App() {
  const [islaidos, setIslaidos] = useState(expenses)//current expense list
  const [expenseSummary, setExpenseSummary] = useState(()=>{
    //Let's create an initial expense summary list
    let listOfCategories = Object.keys(budgetTypes);
    let expenseList = {};
    for (let index = 0; index < listOfCategories.length; index++) {
      const element = listOfCategories[index];
      expenseList[element] = {
        sum: 0,
        currency: "Lt",
        name: budgetTypes[element].name
      }
    }
    //This loop is temporary (and dirty), to sum up the current list of expenses that are used for test purposes
    for (let index = 0; index < expenses.length; index++) {
      const element = expenses[index];
      let key = listOfCategories.find(key => key === element.category)
      expenseList[key].sum = expenseList[key].sum + element.sum
    }
    return expenseList
  })
  //CALCULATE EXPENSE SUMMARY
  function updateExpense(expenses){
    //Let's create an initial expense summary list
    let newExpenseSummary = {};
    let listOfCategories = Object.keys(budgetTypes);
    for (let index = 0; index < listOfCategories.length; index++) {
      const element = listOfCategories[index];
      newExpenseSummary[element] = {
        sum: 0,
        currency: "Lt",
        name: budgetTypes[element].name
      }
    }

    //First check if there are any expenses
    if (expenses.length !== 0) {
      //Loop through existing expense list and add up all expenses
      for (let index = 0; index < expenses.length; index++) {
        const category = expenses[index].category;
        const sum = expenses[index].sum;
        newExpenseSummary[category].sum = newExpenseSummary[category].sum + sum;
      }
    }

    setExpenseSummary(newExpenseSummary)
  };
  //REMOVE EXPENSE
  function removeExpense(keyId){
    setIslaidos(()=>{
      let updatedList = [];
      for (let index = 0; index < islaidos.length; index++) {
        const element = islaidos[index];
        if (keyId !== index) {
          updatedList.push(element);
        };
      };
    updateExpense(updatedList)
    return updatedList;
    })
  };
  //ADD EXPENSE
  function AddNewExpenseToList(newExpenseObject){
    let newExpenseList = [
      ...islaidos,
      newExpenseObject
    ]
    setIslaidos(newExpenseList)
    updateExpense(newExpenseList)
  };

  return (
    <div className="app-frame">
      <div id="biudzetas-suvestine" className="flex-container flex-gap">
        <AppTitle title={'Budget summary'}/>
        <div>
          <BudgetSummary expenses={ islaidos } />
        </div>
      </div>
      
      <div id="islaidos-grupes">
        <AppTitle title={'Expense summary'}/>

        <ExpenseSummary islaidos={ islaidos } expenseSummary={ expenseSummary }/>
      </div>
      
      <AddNewExpense addExpense={ AddNewExpenseToList } expenseList={islaidos}/>
      
      <div id="islaidos-sarasas">

        <AppTitle title={'List of expenses'}/>

        <ExpenseTable removeExpense={ removeExpense } expenseList={islaidos} budgetTypes={ budgetTypes }/>

      </div>

    </div>
  );
}

export default App;
