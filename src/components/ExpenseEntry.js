function ExpenseEntry(props) {
    return (
      <li key={props.keyField} className={props.class}>
        <p>{props.fieldName}:</p>
        <div>{props.fieldValue} {props.fieldCurrency}</div>
        
        <RemoveButton />
    </li>
    );
  }

function RemoveButton(){
    return(
        <button>Remove</button>
    );
}
  
  export default ExpenseEntry;