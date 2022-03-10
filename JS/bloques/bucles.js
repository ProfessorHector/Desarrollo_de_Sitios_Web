/**
 * Bucles
 */

//for
var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
/*
for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

console.log(info);
*/
/*
for (var i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
}

console.log(info);
*/
//while
/*
var i = 0;

while (i < cats.length) {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    
    i++;
}

console.log(info);
*/
//do while

var i = 0;

do {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    
    i++;
} while (i < cats.length);

console.log(info);