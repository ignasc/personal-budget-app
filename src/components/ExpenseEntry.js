function ExpenseEntry(props) {
    return (
      <li key={props.keyField} className={props.class}>
        <p>{props.fieldName}:</p>
        <div>{props.fieldValue} {props.fieldCurrency}</div>
        
        <button>Remove</button>
      </li>
    );
  }
  
  export default ExpenseEntry;