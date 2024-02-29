import AppTitle from './AppTitle';
import { budgetTypes } from './temp/DataForTest';

function AddNewExpense(props) {

  let islaidos = props.expenseList;

  function handleSubmit(e){
    //{key: 4, name: "Expense No.5", sum: 55.6, currency: "Lt"}
    e.preventDefault()
    const form = e.target.elements;
    
    let newExpense = {
      name: form["islaidu-aprasymas"].value,
      sum: Number(form["islaidu-suma"].value),
      category: form["islaidu-tipas"].value,
      currency: "Lt"
    }

    props.addExpense(newExpense)
  };

  var listOfCategories = Object.keys(budgetTypes);
  var listItems = listOfCategories.map( (item, index) =>{
      return (
      <option key={index} value={item}>{budgetTypes[item].name}</option>
      )
  });

  return (
    <form onSubmit={handleSubmit} method="get" id="islaidos-naujas-irasas" className="flex-container flex-gap">
    <AppTitle title={'Prideti naujas islaidas'}/>
    <div className="form-element">
      <label htmlFor="operacija-prideti">Islaidu tipas:</label>
      <select form="islaidos-naujas-irasas" name="islaidu-tipas" id="islaidu-tipai" required>
        {listItems}
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
    
    <button type="submit" form="islaidos-naujas-irasas" className="form-element">Prideti</button>
  </form>
    
  );
}
  
  export default AddNewExpense;
