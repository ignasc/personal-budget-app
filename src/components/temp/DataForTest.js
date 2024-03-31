export const expenses = [
    {category: "mokesciai", name: "Water", sum: 50, currency: "£"},
    {category: "maistas", name: "Weekly food", sum: 500, currency: "£"},
    {category: "laisvalaikis", name: "Party time!", sum: 505, currency: "£"},
    {category: "kitos", name: "Cinema", sum: 15, currency: "£"},
    {category: "mokesciai", name: "Electricity", sum: 55, currency: "£"}
];

export const expenseSummary = [
    {name: "Bills", sum: 0, currency: "£"},
    {name: "Food", sum: 0, currency: "£"},
    {name: "Entertainment", sum: 0, currency: "£"},
    {name: "Other", sum: 0, currency: "£"}
];

export const budgetTypes = {
    mokesciai: {name: "Bills", categoryID: "1"},
    maistas: {name: "Food", categoryID: "2"},
    laisvalaikis: {name: "Entertainment", categoryID: "3"},
    kitos: {name: "Other", categoryID: "4"}
}
