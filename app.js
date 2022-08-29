const calculate = document.querySelector('.calculate');
calculate.addEventListener('click',(e) => {

  
let _date = new Date(document.querySelector('.date').value);

var inputDate = {
year: _date.getFullYear(),
month: _date.getMonth(),
day: _date.getDate(),
}

let date = new Date();
let d2 = date.getDate();
let m2 = date.getMonth() + 1;
let y2 = date.getFullYear();

let y = y2 - inputDate.year
let m = m2 - inputDate.month -1
let d = d2 - inputDate.day

console.log('Date', d, inputDate.day, JSON.stringify(_date.getDay))



document.querySelector('.year').innerHTML = y;
document.querySelector('.month').innerHTML = m;
 document.querySelector('.day').innerHTML = d;
});