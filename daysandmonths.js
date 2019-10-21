/* eslint-disable indent */

function daysAndMonths(month, leapYear){
    let days;
    switch(month){
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            days = `${month} has 30 days.`;
            break;
        case 'February':
            // if (leapYear === true){
            // days = `${month} has 28 days.`
            // }
            days = `${month} has ${leapYear ? 29:28} days.`;
            // else{
            // days = `${month} has 29 days.`
            // }
            break;
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            days = `${month} has 31 days`;
            break;
        default:
            throw new Error ('Must provide a valid month.');
        }
        return days;
   }
console.log(daysAndMonths('February', false));
