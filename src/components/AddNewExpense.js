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
    <form onSubmit={handleSubmit} method="get" id="islaidos-naujas-irasas" className="row">

    <div  className="row">
      <label htmlFor="operacija-prideti" className='col-3 offset-3'>Expense type: </label>
      <select form="islaidos-naujas-irasas" name="islaidu-tipas" id="islaidu-tipai" className='col-2' required>
        {listItems}
      </select>
    </div>
    
    <div  className="row">
      <label htmlFor="islaidos-aprasymas" className='col-3 offset-3'>Expense description: </label>
      <input type="text" form="islaidos-naujas-irasas" id="islaidos-aprasymas" name="islaidu-aprasymas" className='col-2' required></input>
    </div>
    
    <div  className="row">
      <label htmlFor="islaidos-aprasymas" className='col-3 offset-3'>Expense sum: </label>
      <input type="number" form="islaidos-naujas-irasas" id="islaidos-suma" name="islaidu-suma" min="0" className='col-2' required></input>
    </div>
    
    <button type="submit" form="islaidos-naujas-irasas"  className="col-2 offset-5 btn btn-primary">Add new expense</button>
  </form>
    
  );
}
  
  export default AddNewExpense;
