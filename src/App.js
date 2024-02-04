import './App.css';
import AppTitle from './components/AppTitle'
import BudgetSumField from './components/BudgetSumField'
import ExpenseTable from './components/ExpenseTable'
import ExpenseSummary from './components/ExpenseSummary.js'
import AddNewExpense from './components/AddNewExpense.js';

function App() {
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

        <ExpenseSummary />
      </div>
      
      <div id="islaidos-sarasas">

        <AppTitle title={'Detalus islaidu sarasas'}/>

        <ExpenseTable />

      </div>
      
      <AddNewExpense />
    
    </div>
  );
}

export default App;
