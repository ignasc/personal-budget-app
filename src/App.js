import './App.css';
import AppTitle from './components/AppTitle';
import BudgetSumField from './components/BudgetSumField';
import ExpenseTable from './components/ExpenseTable';
import ExpenseSummary from './components/ExpenseSummary.js';
import AddNewExpense from './components/AddNewExpense.js';
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
      let key = listOfCategories.find(key => budgetTypes[key].name == element.category)
      console.log("expenseList")
      expenseList[key].sum = expenseList[key].sum + element.sum
    }
    return expenseList
  })
  //REMOVE EXPENSE
  function removeExpense(keyId){
    setIslaidos(()=>{
      let updatedList = [];
      for (let index = 0; index < islaidos.length; index++) {
        const element = islaidos[index];
        if (keyId != index) {
          updatedList.push(element);
        };
      };
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
  };

  return (
    <div className="app-frame">
      <div id="biudzetas-suvestine" className="flex-container flex-gap">
        <AppTitle title={'Biudzeto suvestine'}/>
        <div>
          <BudgetSumField id='esamas-biudzetas' class='biudzeto-irasas' fieldName='Biudzetas' fieldValue={2000} fieldCurrency='Lt'/>
          
          <BudgetSumField id='isnaudotas-biudzetas' class='biudzeto-irasas' fieldName='Isnaudotas Biudzetas' fieldValue={900} fieldCurrency='Lt'/>
          
          <BudgetSumField id='likes-biudzetas' class='biudzeto-irasas' fieldName='Biudzeto Likutis' fieldValue={1100} fieldCurrency='Lt'/>
        </div>
      </div>
      
      <div id="islaidos-grupes">
        <AppTitle title={'Islaidu suvestine'}/>

        <ExpenseSummary islaidos={ islaidos } expenseSummary={ expenseSummary }/>
      </div>
      
      <div id="islaidos-sarasas">

        <AppTitle title={'Detalus islaidu sarasas'}/>

        <ExpenseTable removeExpense={ removeExpense } expenseList={islaidos}/>

      </div>
      
      <AddNewExpense addExpense={ AddNewExpenseToList } expenseList={islaidos}/>
    
    </div>
  );
}

export default App;
