function ExpenseTable(props){

  var listItems = props.expenseList.map( (item, index) =>{
    return (
      <li key={index} className="flex-container flex-gap">
        <p>{item.name} ({item.category}):</p>
        <div>{item.sum} {item.currency}</div>
        
        <button onClick={()=>props.removeExpense(index)}>Remove</button>
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
