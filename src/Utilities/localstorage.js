import moment from 'moment';

export const localStorageUtility = {
  addToLocalStorageArray,
  addToLocalStorageObject,
  addToLocalStorageString,
  parseJWT,
  getItemLocalStorage,
  addDatesLocalStorage,
  getDatesLocalStorage
};


/**
* Add an item to a localStorage() array
* @param {String} name  The localStorage() key
* @param {String} value The localStorage() value
*/
function addDatesLocalStorage(name, value) {

  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  existing = existing ? existing.split(',') : [];

  // Add new data to localStorage Array
  if(value) value = moment(value)
  existing.push(value);

  // Save back to localStorage
  localStorage.setItem(name, existing.toString());

};


var dateString = 'Thu Jul 15 2016 19:31:44 GMT+0200 (CEST)';
var dateObj = new Date(dateString);
var momentObj = moment(dateObj);
var momentString = momentObj.format('YYYY-MM-DD'); // 2016-07-15

function getDatesLocalStorage(){
  let existing = localStorage.getItem('dates');

  existing = existing ? existing.split(',') : [];

  let momentDates = existing.map(date => {
    let dateObject = new Date(date);
    return moment(dateObject).format('YYYY-MM-DD');
  });

  return momentDates;
}

/**
* Add an item to a localStorage() array
* @param {String} name  The localStorage() key
* @param {String} value The localStorage() value
*/
function addToLocalStorageArray(name, value) {

  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  existing = existing ? existing.split(',') : [];

  // Add new data to localStorage Array
  existing.push(value);

  // Save back to localStorage
  localStorage.setItem(name, existing.toString());

};

/**
* Add an item to a localStorage() object
* @param {String} name  The localStorage() key
* @param {String} key   The localStorage() value object key
* @param {String} value The localStorage() value object value
*/
function addToLocalStorageObject(name, key, value) {

  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  existing = existing ? JSON.parse(existing) : {};

  // Add new data to localStorage Array
  existing[key] = value;

  // Save back to localStorage
  localStorage.setItem(name, JSON.stringify(existing));

};

/**
* Add an item to a local storage string
* @param  {String} name      The localStorage() key
* @param  {String} value     The localStorage() value
* @param  {String} delimiter The delimiter to use to separate items
*/
function addToLocalStorageString(name, value, delimiter) {

  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, use the value by itself
  // Otherwise, add the new value to it
  var data = existing ? existing + delimiter + value : value;

  // Save back to localStorage
  localStorage.setItem(name, data);

};

function parseJWT(keyLocalStorage, keyJWT, keyPayload = false){
  // Get the existing data in localStorage
  var existing = localStorage.getItem(keyLocalStorage);

  // If no existing data, return false
  // Otherwise, convert the localStorage string to an array
  if (existing) {
      existing = JSON.parse(existing);
  } else {
      return false;
  }
  //Get specific JWT by key.
  let JWT = existing[keyJWT];
  if(typeof JWT === 'undefined') return false;

  //Get payload from JWT.
  let payloadJWT = JWT.split('.')[1];
  let parsePayloadJWT = JSON.parse(atob(payloadJWT))

  //Get specific key from payload.
  if(keyPayload) {
      parsePayloadJWT = parsePayloadJWT[keyPayload];
  }

  return parsePayloadJWT;
}

function getItemLocalStorage(keyLocalStorage){
  let existing = localStorage.getItem(keyLocalStorage);
  let item = false;

  if(existing) {
      item = JSON.parse(existing);
  }

  return item;
}
