"use strict";

if (1) {  
    console.log('Ok!');
} else {
    console.log('Error');
}



/* if (num < 49) {
    console.log('Error');
} else if (num > 100) {/* 
    console.log('Mnogo');
} else {
    console.log('Ok!');    
}
/*  */
/* (num === 50) ? console.log('Ok!') : console.log('Error'); */

const num = 50;

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('Neverni');
        break;
    case 51:    
        console.log('V tochku!');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}