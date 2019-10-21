<<<<<<< HEAD
/* eslint-disable indent */

=======
>>>>>>> ab72486ad41b9082eeffa5925ee6f3b2dd03a6c7
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
            days = `${month} has ${leapYear ? 29:28} days.`;
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
