// HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

// BUTTONS

const signInButton = document.getElementById('btn-sign-in');
const registerButton = document.getElementById('btn-register');
const sendRegisterButton = document.getElementById('form-send');

const homeButton = document.getElementById('btn-home');
const incomesButton = document.getElementById('btn-incomes');
const expensesButton = document.getElementById('btn-expenses');
const balanceButton = document.getElementById('btn-balance');
const goalsButton = document.getElementById('btn-goals');

//FUNCTIONS

const showHomeSection = () => {
    showSection ('home');
    hideSection ('login-user');
}

signInButton.addEventListener('click', showHomeSection);
homeButton.addEventListener('click', showHomeSection);

const showHomeFromRegister = () => {
    showSection ('home');
    hideSection ('register-user');
}

sendRegisterButton.addEventListener('click', showHomeFromRegister);

const showIncomesSection = () => {
    showSection ('incomes');
    hideSection ('home');
}

incomesButton.addEventListener('click', showIncomesSection);

const showExpensesSection = () => {
    showSection ('expenses');
    hideSection ('incomes');
}

expensesButton.addEventListener('click', showExpensesSection);


const showRegisterSection = () => {
    hideSection ('login-user');
    showSection ('register-user');
}

registerButton.addEventListener('click', showRegisterSection);