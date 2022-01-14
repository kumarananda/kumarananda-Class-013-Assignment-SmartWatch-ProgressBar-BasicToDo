
// 001 Smart Watch Start
let hours =document.querySelector('.hours');
let minutes =document.querySelector('.minutes');
let seconds =document.querySelector('.seconds');
let ampm =document.querySelector('.ampm');
let fullDate =document.querySelector('.fullDate');
let week =document.querySelector('.week');

setInterval(() => {
    let date = new Date();

    let h = date.getHours();
    let format12 = h > 12 ? h - 12 : h ; 
    let fixed_0_12 = format12 == 0 ? 12 : format12 ;
  
    hours.innerHTML = zero(fixed_0_12)
    minutes.innerHTML = zero(date.getMinutes());
    seconds.innerHTML = zero(date.getSeconds());
    
    fullDate.innerHTML = `${monthName(date.getMonth())} ${zero(date.getDate())}, ${date.getFullYear()}`;
    week.innerHTML = weekCal(date.getDay());

    // if(h < 12){
    //     ampm.innerHTML = 'AM';
    // }else{
    //     ampm.innerHTML = 'PM';
    // }
    // }, 1000);
    ampm.innerHTML = h < 12 ? `AM` : `PM`;
    
}, 1000);
// Smart Watch function end -001



//002
//Timer clock- with setTimeinterval Start with injput & loder
//Timer clock- with setTimeinterval with injput & loader start
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
// const resetTimer = document.getElementById('resetTimer');
const inputTimer = document.getElementById('inputTimer');
const countTimer = document.getElementById('countTimer');
const loderTimer = document.querySelector('#loderTimer');

// const startTimer = document.getElementById('startTimer');

// loderTimer.style.width = '50%';

let counter_value;
let timerControl ;

startTimer.addEventListener('click', function () {
    if(inputTimer.value <= 0 || inputTimer.value == ""){
        countTimer.innerHTML = `<p style="font-size:15px;color:red;"> Your value is empty or error</p>`;
    }else{
        clearInterval(timerControl)
    loderTimer.style.width =` 100% `;
    counter_value = inputTimer.value;
    console.log(inputTimer.value);
    countTimer.innerHTML = inputTimer.value;
    timerControl = setInterval(() => {
        let width = loderCalTimer(inputTimer.value , counter_value);
        // counter_value "" -1 ""; for avoid 1 s delay
        countTimer.innerHTML = counter_value - 1 ;
        counter_value--;
        
        loderTimer.style.width = `${loderCalTimer(inputTimer.value , counter_value)}%` ; //'50%';
        if(width >= 75 && width <= 100){
            loderTimer.style.backgroundColor = `green`;    
        }else if(width >= 50 && width < 75){
            loderTimer.style.backgroundColor = `rgb(123, 255, 0)`;
        }else if(width >= 25 && width < 50){
            loderTimer.style.backgroundColor = `rgb(238, 109, 23)`;
        }else if(width >= 0 && width < 25){
            loderTimer.style.backgroundColor = `red`;
        }
        
        if(counter_value <= 0){
            clearInterval(timerControl)
            countTimer.innerHTML = `<p style="font-size:15px;color:green;">${inputTimer.value} S. complite</p>`;
        }
    },1000)
    }
    
    
});


stopTimer.addEventListener('click', () => {
    clearInterval(timerControl)
});
//Timer clock- with setTimeinterval End with injput & loder

//003
// <!-- Basic TO-DO App start (whithout array)-->
const todo = document.getElementById('do');
const add = document.getElementById('add');
const list = document.getElementById('list');

add.addEventListener('click', function () {
    if(todo.value == ""){
        
    }else{
        let li = document.createElement('li');
        li.className ='list-group-item';
        li.innerText = todo.value;
        list.appendChild(li);
        todo.value = "";
    }


});
// <!-- Basic TO-DO App end (whithout array) -->
