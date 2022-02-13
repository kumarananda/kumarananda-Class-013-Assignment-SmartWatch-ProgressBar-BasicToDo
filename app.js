
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


// regulaar expretion / validition
let nameV = /^[a-zA-Z\s\.]{4,20}$/;
let rollV = /^[0-9]{1,4}$/;
let classV = /^[0-9]{2}$/;
//marks valivation 
function markV(m){
    let d = parseInt(m)
    if(d < 0 || d > 100){
        return false;
    }else{
        return true;
    }
}

// console.log(markV(101));

// // creat elements
// let forName = document.createElement('p');
// forName.textContent = `Name must be a-z, A-Z, "." min 4 max 20 characters`;
// forName.style.color = 'red';

// let forRoll = document.createElement('p');
// forRoll.innerHTML = `Roll must be 2-4 number characters & not be 0`;
// forRoll.style.color = 'red';

// let forClass = document.createElement('p');
// forClass.innerHTML = `Class must be 2 number characters`;
// forClass.style.color = 'red';


// Subject Marks app with notification Color start
const inName = document.getElementById('inputName');
const inFathers = document.getElementById('inputFathers');
const inMothers = document.getElementById('inputMothers');
const inAge = document.getElementById('inputAge');
const inClass = document.getElementById('inputClass');

const inBangla  = document.getElementById('inputBangla');
const inEnglish = document.getElementById('inputEnglish');
const inMath = document.getElementById('inputMath');
const inSocial = document.getElementById('inputSocial');
const inScience = document.getElementById('inputScience');
const inReligion = document.getElementById('inputReligion');

const gpaForm = document.getElementById('gpaForm');

const detailsBody = document.getElementById('detailsBody');
const resultBody = document.getElementById('resultBody');
const finalResult = document.getElementById('finalResult');

const visibleCon = document.querySelector('.visibleCon')

const mess = document.querySelector('.mess');

gpaForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let avrMark = (parseInt(inBangla.value) + parseInt(inEnglish.value) + parseInt(inMath.value) + parseInt(inSocial.value) + parseInt(inSocial.value) + parseInt(inReligion.value)) / 6;
  let avrGpa = myr.gpa(avrMark);
  let finalGrade = myr.totalGrade(avrGpa);


  if(inName.value =="" || inFathers.value=="" || inMothers.value=="" || inAge.value=="" || inClass.value =="" || inBangla.value=="" || inEnglish.value=="" || inMath.value=="" || inSocial.value=="" || inScience.value=="" || inReligion.value==""){
    mess.style.display ='block';
    } else if(nameV.test(inName.value) == false){
        inName.nextElementSibling.innerHTML = `<p>Name must be a-z, A-Z, "." min 4 max 20 characters</p>`;
        inName.nextElementSibling.style= `font-size: 12px; color: red; margin-bottom: 0;`;

        mess.style.display ='none';
        
    }else  if(nameV.test(inFathers.value) == false){
        inFathers.nextElementSibling.innerHTML = `<p>Name must be a-z, A-Z, "." min 4 max 20 characters</p>`;
        inFathers.nextElementSibling.style= `font-size: 12px; color: red; margin-bottom: 0px;`;
        
        inName.nextElementSibling.display = 'none';
        mess.style.display ='none';
        
    }else // will update

  

  detailsBody.innerHTML = `
  <tr>
    <td class="tg-0lax">01</td>
    <td class="tg-0lax">${inName.value}</td>
    <td class="tg-0lax">${inFathers.value}</td>
    <td class="tg-0lax">${inMothers.value}</td>
    <td class="tg-0lax">${inAge.value}</td>
    <td class="tg-0lax">${inClass.value}</td>
  </tr>`;
  resultBody.innerHTML = `
  <tr>
  <td class="tg-0lax">01</td>
  <td class="tg-0lax">Bangla</td>
  <td class="tg-0lax">${inBangla.value}</td>
  <td class="tg-0lax">${myr.gpa(inBangla.value)}</td>
  <td class="tg-0lax">${myr.grade(inBangla.value)}</td>
  </tr>
  <tr>
  <td class="tg-0lax">02</td>
  <td class="tg-0lax">English</td>
  <td class="tg-0lax">${inEnglish.value}</td>
  <td class="tg-0lax">${myr.gpa(inEnglish.value).toFixed(2)}</td>
  <td class="tg-0lax">${myr.grade(inEnglish.value)}</td>
  </tr>
  <tr>
  <td class="tg-0lax">03</td>
  <td class="tg-0lax">Math</td>
  <td class="tg-0lax">${inMath.value}</td>
  <td class="tg-0lax">${myr.gpa(inMath.value).toFixed(2)}</td>
  <td class="tg-0lax">${myr.grade(inMath.value)}</td>
  </tr>
  <tr>
  <td class="tg-0lax">04</td>
  <td class="tg-0lax">Social Science</td>
  <td class="tg-0lax">${inSocial.value}</td>
  <td class="tg-0lax">${myr.gpa(inSocial.value).toFixed(2)}</td>
  <td class="tg-0lax">${myr.grade(inSocial.value)}</td>
  </tr>
  <tr>
  <td class="tg-0lax">05</td>
  <td class="tg-0lax">Science</td>
  <td class="tg-0lax">${inScience.value}</td>
  <td class="tg-0lax">${myr.gpa(inScience.value).toFixed(2)}</td>
  <td class="tg-0lax">${myr.grade(inScience.value)}</td>
  </tr>
  <tr>
  <td class="tg-0lax">06</td>
  <td class="tg-0lax">Religion</td>
  <td class="tg-0lax">${inReligion.value}</td>
  <td class="tg-0lax">${myr.gpa(inReligion.value).toFixed(2)}</td>
  <td class="tg-0lax">${myr.grade(inReligion.value)}</td>
  </tr>
  `;

  if(myr.grade(inBangla.value) == 'F' || myr.grade(inEnglish.value) == 'F' || myr.grade(inMath.value) == 'F' || myr.grade(inSocial.value) == 'F' || myr.grade(inScience.value) == 'F' || myr.grade(inReligion.value) == 'F' ){
    
    finalResult.style.backgroundColor = 'red';
    finalResult.innerHTML =`
    <p>${myr.cgpacal(myr.gpa(inBangla.value), myr.gpa(inEnglish.value), myr.gpa(inMath.value), myr.gpa(inSocial.value), myr.gpa(inScience.value), myr.gpa(inReligion.value) )}</p>
  `;
  }else{
    finalResult.innerHTML =`
    <p>${myr.cgpacal(myr.gpa(inBangla.value), myr.gpa(inEnglish.value), myr.gpa(inMath.value), myr.gpa(inSocial.value), myr.gpa(inScience.value), myr.gpa(inReligion.value) )}</p>
    `;
    finalResult.style.backgroundColor =  myr.notifiColor(finalGrade);
  };

  visibleCon.style =`
  visibility: visible;
  display: inherit;
  `;


});

// Subject Marks app with notification Color End