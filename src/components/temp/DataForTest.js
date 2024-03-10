export const expenses = [
    {category: "mokesciai", name: "Water", sum: 50, currency: "Lt"},
    {category: "maistas", name: "Weekly food", sum: 500, currency: "Lt"},
    {category: "laisvalaikis", name: "Party time!", sum: 50444, currency: "Lt"},
    {category: "kitos", name: "Cinema", sum: 15, currency: "Lt"},
    {category: "mokesciai", name: "Electricity", sum: 55.6, currency: "Lt"}
];

export const expenseSummary = [
    {name: "Bills", sum: 0, currency: "Lt"},
    {name: "Food", sum: 0, currency: "Lt"},
    {name: "Entertainment", sum: 0, currency: "Lt"},
    {name: "Other", sum: 0, currency: "Lt"}
];

export const budgetTypes = {
    mokesciai: {name: "Bills", categoryID: "1"},
    maistas: {name: "Food", categoryID: "2"},
    laisvalaikis: {name: "Entertainment", categoryID: "3"},
    kitos: {name: "Other", categoryID: "4"}
}
