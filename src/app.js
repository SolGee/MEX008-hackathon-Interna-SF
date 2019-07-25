// HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

// BUTTONS

const signInButton = document.getElementById('btn-sign-in');
const registerButton = document.getElementById('btn-register');

const incomesButton = document.getElementById('btn-incomes');
const expensesButton = document.getElementById('btn-expenses');
const balanceButton = document.getElementById('btn-balance');
const goals = document.getElementById('btn-goals');