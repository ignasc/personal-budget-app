import logo from './logo.svg';
import './App.css';
import AppTitle from './components/AppTitle'
import BudgetSumField from './components/BudgetSumField'
import ExpenseEntry from './components/ExpenseEntry'

function App() {
  return (
    <div className="app-frame">
      <div id="biudzetas-suvestine" className="flex-container flex-gap">
        <AppTitle
          title={'Biudzeto suvestine'}
        />
        <div>
          <BudgetSumField id='esamas-biudzetas' class='biudzeto-irasas' fieldName='Biudzetas' fieldValue={2000} fieldCurrency='Lt'/>
          
          <BudgetSumField id='isnaudotas-biudzetas' class='biudzeto-irasas' fieldName='Isnaudotas Biudzetas' fieldValue={900} fieldCurrency='Lt'/>
          
          <BudgetSumField id='likes-biudzetas' class='biudzeto-irasas' fieldName='Biudzeto Likutis' fieldValue={1100} fieldCurrency='Lt'/>
        </div>
      </div>
      
      <div id="islaidos-grupes">
        <AppTitle
          title={'Islaidu suvestine'}
        />
        <ul className="flex-container flex-gap">
          <li key="1">Mokesciai: 200 Lt</li>
          <li key="2">Maistas: 500 Lt</li>
          <li key="3">Laisvalaikis: 200 Lt</li>
          <li key="4">Kitos Islaidos: 100 Lt</li>
        </ul>
      </div>
      
      <div id="islaidos-sarasas">
        <AppTitle
          title={'Detalus islaidu sarasas'}
        />
        <ul className="flex-container flex-gap">
          <ExpenseEntry keyField="1" class="flex-container flex-gap" fieldName='Expense No.1' fieldValue={50} fieldCurrency='Lt'/>

          <ExpenseEntry keyField="2" class="flex-container flex-gap" fieldName='Expense No.2' fieldValue={500} fieldCurrency='Lt'/>

          <ExpenseEntry keyField="3" class="flex-container flex-gap" fieldName='Expense No.3' fieldValue={50444} fieldCurrency='Lt'/>

          <ExpenseEntry keyField="4" class="flex-container flex-gap" fieldName='Expense No.4' fieldValue={5} fieldCurrency='Lt'/>

          <ExpenseEntry keyField="5" class="flex-container flex-gap" fieldName='Expense No.5' fieldValue={55.6} fieldCurrency='Lt'/>
        </ul>
      </div>
      
      <form action="/not_implemented.html" method="get" id="islaidos-naujas-irasas" className="flex-container flex-gap">
        <AppTitle
          title={'Prideti naujas islaidas'}
        />
        <div className="form-element">
          <label htmlFor="operacija-prideti">Islaidu tipas:</label>
          <select form="islaidos-naujas-irasas" name="islaidu-tipas" id="islaidu-tipai" required>
            <option value="Mokesciai">Mokesciai</option>
            <option value="Maistas">Maistas</option>
            <option value="Laisvalaikis">Laisvalaikis</option>
            <option value="Kitos-islaidos">Kitos islaidos</option>
          </select>
        </div>
        
        <div className="form-element">
          <label htmlFor="islaidos-aprasymas">Islaidu aprasymas:</label>
          <input type="text" form="islaidos-naujas-irasas" id="islaidos-aprasymas" name="islaidu-aprasymas" required></input>
        </div>
        
        <div className="form-element">
          <label htmlFor="islaidos-aprasymas">Islaidu suma:</label>
          <input type="number" form="islaidos-naujas-irasas" id="islaidos-suma" name="islaidu-suma" min="0" required></input>
        </div>
        
        <button type="submit" form="islaidos-naujas-irasas" className="form-element" disabled="disabled">Prideti</button>
      </form>
    
    </div>
  );
}

export default App;
