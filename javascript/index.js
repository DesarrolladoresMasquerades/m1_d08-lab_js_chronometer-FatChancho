const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
    let min=chronometer.getMinutes();
    let num=chronometer.computeTwoDigitNumber(min).split('')
    minUniElement.innerText=num[1]
    minDecElement.innerText=num[0]
}

function printSeconds() {
    let sec=chronometer.getSeconds();
    let num=chronometer.computeTwoDigitNumber(sec).split('')
    secUniElement.innerText=num[1]
    secDecElement.innerText=num[0] 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}


// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
const click = event.target
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText='RESET';
    
  if(btnLeftElement.innerText==='STOP'){
    btnLeftElement.innerText='START';
    chronometer.stop();
  } 
  else {
    btnLeftElement.innerText='STOP';
    btnRightElement.innerText='SPLIT'
    chronometer.start(printTime);
    
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerText==='SPLIT'){
 const list=document.getElementById('splits');
  let li=document.createElement('li');
  li.innerText=chronometer.split();
  list.appendChild(li);
}
if(btnRightElement.innerText==='RESET') chronometer.reset();
});
