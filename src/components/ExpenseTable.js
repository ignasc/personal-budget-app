function ExpenseTable(props){

  var listItems = props.expenseList.map( (item, index) =>{
    let componentBackgroundDark = "text-bg-secondary p-3"
    let componentBackgroundLight = "text-bg-light p-3"
    return (
      //NOTE: key index is reversed to make sure it matches original expense list (expense list here is reversed to make the latest added item be on top of the list)
      <li key={props.expenseList.length - 1 - index} className={"row " + (index % 2 === 0 ? componentBackgroundDark : componentBackgroundLight)}>
        <p className="col-5 offset-2">{item.name} ({props.budgetTypes[item.category].name}):</p>
        <div className="col-2">{item.sum} {item.currency}</div>
        
        <button onClick={()=>props.removeExpense(index)} className="col-1 btn btn-danger">Remove</button>
      </li>
    )
  } );

  return(
    <ul>
      {listItems}
    </ul>
  );
}

export default ExpenseTable;
