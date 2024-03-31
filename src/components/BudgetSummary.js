function BudgetSummary(props){
    let totalBudget = 2000;
    let usedBudget = 0;
    let remainingBudget = 0;
    let currency = "£";
    //Colours
    let lowBudgetWarning = "text-bg-warning p-2 m-1";
    let overBudgedWarning = "text-bg-danger p-2 m-1";
    let lowBudgetThreshold = 10;
    let budgetColour = "text-bg-success p-2 m-1";

    for (let index = 0; index < props.expenses.length; index++) {
        const element = props.expenses[index];
        usedBudget += element["sum"];
    }

    remainingBudget = totalBudget - usedBudget;
    //Work out background colour for budget
    if(remainingBudget/totalBudget*100 <= 0){
      budgetColour = overBudgedWarning;
    } else if (remainingBudget/totalBudget*100 <= lowBudgetThreshold){
      budgetColour = lowBudgetWarning;
    };

  return(
    <div className={"row d-flex align-items-center text-center " + budgetColour}>
        <div className="biudzeto-irasas col-sm-4">Budget: {currency}{totalBudget}</div>

        <div className="biudzeto-irasas col-sm-4">Used budget: {currency}{usedBudget}</div>

        <div className="biudzeto-irasas col-sm-4">Remaining budget: {currency}{remainingBudget}</div>
    </div>
  );
}

export default BudgetSummary;
