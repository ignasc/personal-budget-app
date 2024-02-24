export const expenses = [
    {category: "Mokesciai", name: "Expense No.1", sum: 50, currency: "Lt"},
    {category: "Maistas", name: "Expense No.2", sum: 500, currency: "Lt"},
    {category: "Laisvalaikis", name: "Expense No.3", sum: 50444, currency: "Lt"},
    {category: "Kitos islaidos", name: "Expense No.4", sum: 5, currency: "Lt"},
    {category: "Mokesciai", name: "Expense No.5", sum: 55.6, currency: "Lt"}
];

export const expenseSummary = [
    {name: "Mokesciai", sum: 0, currency: "Lt"},
    {name: "Maistas", sum: 0, currency: "Lt"},
    {name: "Laisvalaikis", sum: 0, currency: "Lt"},
    {name: "Kitos islaidos", sum: 0, currency: "Lt"}
];

const expenseSummary1 = {
    mokesciai: {name: "Mokesciai", sum: 0, currency: "Lt"},
    maistas: {name: "Maistas", sum: 0, currency: "Lt"},
    laisvalaikis:{name: "Laisvalaikis", sum: 0, currency: "Lt"},
    kitos: {name: "Kitos islaidos", sum: 0, currency: "Lt"}
}

export const budgetTypes = {
    mokesciai: {name: "Mokesciai"},
    maistas: {name: "Maistas"},
    laisvalaikis: {name: "Laisvalaikis"},
    kitos: {name: "Kitos islaidos"}
}