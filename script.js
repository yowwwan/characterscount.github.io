const textareaEl = document.querySelector('.textarea');

const statNumberEl = document.querySelector('.stat-number');

const statNumberFacebookEl = document.querySelector('.stat-number-Facebook');
const statNumberTwitterEl = document.querySelector('.stat-number-Twitter');
const statNumberInstagramEl = document.querySelector('.stat-number-Instagram');

const zeroEl = document.querySelector('.stat-number-zero');

const statFontFacebookEl = document.querySelector('.stat-fontFacebook');
const statFontTwitterEl = document.querySelector('.stat-fontTwitter');
const statFonInstagramEl = document.querySelector('.stat-fontInstagram');
const statFontWrittenEl = document.querySelector('.stat-fontWritten');

const faFacebookEl = document.querySelector('.faFacebook');
const faTwitterEl = document.querySelector('.faTwitter');
const faInstagramEl = document.querySelector('.faInstagram');
const faWrittenEl = document.querySelector('.faWritten');
const faKeyboardRedEl = document.querySelector('.fa-keyboardRed');
const faLoadEl = document.querySelector('.faLoad');
const typingModeEl = document.querySelector('.stat-typingMode');

const keyboardResizeEl = document.querySelector('.keyboardResize');


const resizefaWritten = () =>{
  faTwitterEl.classList.add('redlimit');
}


const inputHandler = () => {
 
  const charswritten = textareaEl.value.length;
  zeroEl.textContent = charswritten;
 
  statNumberFacebookEl.textContent = 63000 - charswritten;
  statNumberTwitterEl.textContent = 280 - charswritten;
  statNumberInstagramEl.textContent = 2200 - charswritten;
 
  if(charswritten > 62999){
    statNumberFacebookEl.textContent = 0;
    statNumberFacebookEl.classList.add('redlimit');
    statFontFacebookEl.classList.add('redlimit');
    faFacebookEl.classList.add('redlimit');
  }else{
    statNumberFacebookEl.classList.remove('redlimit');
    statFontFacebookEl.classList.remove('redlimit');
    faFacebookEl.classList.remove('redlimit');
  }
 
  if(charswritten > 279){
    statNumberTwitterEl.textContent = 0;
    statNumberTwitterEl.classList.add('redlimit');
    statFontTwitterEl.classList.add('redlimit');
    faTwitterEl.classList.add('redlimit');
  }else{
    statNumberTwitterEl.classList.remove('redlimit');
    statFontTwitterEl.classList.remove('redlimit');
    faTwitterEl.classList.remove('redlimit');
  }
 
  if(charswritten > 2199){
    statNumberInstagramEl.textContent = 0;
    statNumberInstagramEl.classList.add('redlimit');
    statFonInstagramEl.classList.add('redlimit');
    faInstagramEl.classList.add('redlimit');
  }else{
    statNumberInstagramEl.classList.remove('redlimit');
    statFonInstagramEl.classList.remove('redlimit');
    faInstagramEl.classList.remove('redlimit');
  }
 
 
};

textareaEl.addEventListener('input', inputHandler);

let typingTimer;
let doneTypingIntervalDown = 400;
let doneTypingIntervalUp = 400;

//function
const doneTyping = () => {
  faWrittenEl.classList.remove('greenOnTheGo');
  faLoadEl.classList.remove('fa-spin-pulse');
}

//Evenlistener for keystroke down by adding green keyboard
const keyDownHandler = () => {
 
  faLoadEl.classList.add('fa-spin-pulse');
  faWrittenEl.classList.add('greenOnTheGo');
  clearTimeout(typingTimer);
  if(textareaEl.value){
    typingTimer = setTimeout(doneTyping, doneTypingIntervalDown);
  }else{
    faWrittenEl.classList.add('greenOnTheGo');
  }
   
};

textareaEl.addEventListener('keydown', keyDownHandler);


const keyUpHandler = () => {
  faWrittenEl.classList.remove('greenOnTheGo');
  faWrittenEl.classList.add('greenOnTheGo');
  clearTimeout(typingTimer);
  if(textareaEl.value){
    typingTimer = setTimeout(doneTyping, doneTypingIntervalUp);
  }else{
    faWrittenEl.classList.remove('greenOnTheGo');
    faLoadEl.classList.remove('fa-spin-pulse');
    
  }

   
};

textareaEl.addEventListener('keyup', keyUpHandler);


const focusHandler = () =>{
  typingModeEl.classList.remove('stat-typingmodeRed');
  typingModeEl.classList.add('stat-typingmodeGreen');
  typingModeEl.textContent = "Typing mode ON";
  faKeyboardRedEl.classList.remove('fa-keyboardRed');
  faWrittenEl.classList.remove('keyboardFocusOutColor');
  faWrittenEl.classList.add('keyboardFocusColor');
  
  setTimeout (() =>{
  faWrittenEl.classList.remove('keyboardFocusColor');  
  }, "500");

  
};

textareaEl.addEventListener('focus', focusHandler);

const focusOutHandler = () =>{
  typingModeEl.classList.add('stat-typingmodeRed');
  typingModeEl.textContent = "Typing mode Off"
  faWrittenEl.classList.add('keyboardFocusOutColor');
  
};


textareaEl.addEventListener('focusout', focusOutHandler);
