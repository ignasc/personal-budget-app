export const expenses = [
    {category: "bills", name: "Water", sum: 50, currency: "£"},
    {category: "food", name: "Weekly food", sum: 500, currency: "£"},
    {category: "leasure", name: "Party time!", sum: 505, currency: "£"},
    {category: "other", name: "Cinema", sum: 15, currency: "£"},
    {category: "bills", name: "Electricity", sum: 55, currency: "£"}
];

export const expenseSummary = [
    {name: "Bills", sum: 0, currency: "£"},
    {name: "Food", sum: 0, currency: "£"},
    {name: "Entertainment", sum: 0, currency: "£"},
    {name: "Other", sum: 0, currency: "£"}
];

export const budgetTypes = {
    bills: {name: "Bills", categoryID: "1"},
    food: {name: "Food", categoryID: "2"},
    leasure: {name: "Entertainment", categoryID: "3"},
    other: {name: "Other", categoryID: "4"}
}
