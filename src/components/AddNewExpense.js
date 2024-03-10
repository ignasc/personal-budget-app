import AppTitle from './AppTitle';
import { budgetTypes } from './temp/DataForTest';

function AddNewExpense(props) {

  function handleSubmit(e){
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
    <AppTitle title={'Add new expense'}/>
    <div className="form-element">
      <label htmlFor="operacija-prideti">Expense type: </label>
      <select form="islaidos-naujas-irasas" name="islaidu-tipas" id="islaidu-tipai" required>
        {listItems}
      </select>
    </div>
    
    <div className="form-element">
      <label htmlFor="islaidos-aprasymas">Expense description: </label>
      <input type="text" form="islaidos-naujas-irasas" id="islaidos-aprasymas" name="islaidu-aprasymas" required></input>
    </div>
    
    <div className="form-element">
      <label htmlFor="islaidos-aprasymas">Expense sum: </label>
      <input type="number" form="islaidos-naujas-irasas" id="islaidos-suma" name="islaidu-suma" min="0" required></input>
    </div>
    
    <button type="submit" form="islaidos-naujas-irasas" className="form-element">Add new expense</button>
  </form>
    
  );
}
  
  export default AddNewExpense;
