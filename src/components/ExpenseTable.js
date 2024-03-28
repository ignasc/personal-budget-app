function ExpenseTable(props){

  var listItems = props.expenseList.map( (item, index) =>{
    let componentBackgroundDark = "text-bg-secondary p-1 m-1"
    let componentBackgroundLight = "text-bg-light p-1 m-1"
    return (
      //NOTE: key index is reversed to make sure it matches original expense list (expense list here is reversed to make the latest added item be on top of the list)
      <li key={props.expenseList.length - 1 - index} className={"row border border-secondary-subtle " + (index % 2 === 0 ? componentBackgroundDark : componentBackgroundLight) + "text-center d-flex align-items-center"}>
        <p className="col-sm-5 offset-sm-2">{item.name} ({props.budgetTypes[item.category].name}):</p>
        <div className="col-sm-2">{item.sum} {item.currency}</div>
        
        <button onClick={()=>props.removeExpense(index)} className="col-sm-2 p-0 btn btn-danger">Remove</button>
      </li>
    )
  } );

  return(
    <ul className="row p-3">
      {listItems}
    </ul>
  );
}

export default ExpenseTable;
