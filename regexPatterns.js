/*
  A collection of usefull JavaScript Regular Expressions (and utilities)
*/

function sanitizePhoneNumber(str){
  return str.replace(/[^\d+x]|x(?=[^x]*x)/ig, '');
}

var isValidEmailAddress = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/;
