import { budgetTypes } from './constants/InitialVariables';

function AddNewExpense(props) {

  function handleSubmit(e){
    e.preventDefault()
    const form = e.target.elements;
    
    let newExpense = {
      name: form["expense-description"].value,
      sum: Number(form["expense-sum"].value),
      category: form["expense-type"].value,
      currency: "£"
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
    <form onSubmit={handleSubmit} method="get" id="expenses-new-entry" className="row p-3">

    <div  className="row g-0">
      <label htmlFor="operation-add" className='p-1 col col-xs-3 offset-xs-4  border border-secondary-subtle'>Expense type: </label>
      <select form="expenses-new-entry" name="expense-type" id="expenses-types" className='col col-xs-2' required>
        {listItems}
      </select>
    </div>
    
    <div  className="row g-0">
      <label htmlFor="expenses-description" className='p-1 col col-xs-3 offset-xs-4 border border-secondary-subtle'>Expense description: </label>
      <input type="text" form="expenses-new-entry" id="expenses-description" name="expense-description" className='col col-xs-2' required></input>
    </div>
    
    <div  className="row g-0">
      <label htmlFor="expenses-description" className='p-1 col col-xs-3 offset-xs-4 border border-secondary-subtle'>Expense sum: </label>
      <input type="number" form="expenses-new-entry" id="expenses-sum" name="expense-sum" min="0" className='col col-xs-2' required></input>
    </div>
    
    <button type="submit" form="expenses-new-entry"  className="col col-xs-2 offset-xs-5 btn btn-primary mt-2">Add new expense</button>
  </form>
    
  );
}
  
  export default AddNewExpense;
