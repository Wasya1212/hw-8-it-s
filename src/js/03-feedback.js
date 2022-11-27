import throttle from 'lodash.throttle';

const SAVE_DATA_TIMEOUT = 500;
const FORM_STATE_STORAGE_KEY = 'feedback-form-state';

const getFormStateFromLocalstorage = () => {
  return JSON.parse(localStorage.getItem(FORM_STATE_STORAGE_KEY));
};

const setFormStateToLocalstorage = throttle((data) => {
  localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(data));
}, SAVE_DATA_TIMEOUT);

const applicableFields = ['INPUT', 'TEXTAREA'];

const formContainer = document.querySelector('form.feedback-form');
const inputs = Array.from(formContainer.elements).filter(el => applicableFields.includes(el.nodeName));

let sendData = getFormStateFromLocalstorage() || {};

inputs.forEach(input => {
  input.addEventListener('input', ({ currentTarget: { value, name } }) => {
    sendData[name] = value;
    setFormStateToLocalstorage(sendData);
  });
});

formContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(sendData);
  setFormStateToLocalstorage({});
  e.currentTarget.reset();
  sendData = new Object(null);
});

document.addEventListener('DOMContentLoaded', () => {
  // init fields with saved data from localstorage
  Object.entries(sendData).forEach(([fieldName, value]) => {
    formContainer.querySelector(`[name="${fieldName}"]`).value = value.toString();
  });
});