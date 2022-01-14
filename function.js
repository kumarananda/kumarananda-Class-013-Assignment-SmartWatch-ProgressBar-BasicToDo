
// Smart Watch function start
function weekCal(day){

    if(day == 0){return `Sunday`}
    else if(day == 1){return `Monday`}
    else if(day == 2){return `Tuesday`}
    else if(day == 3){return `Wednesday`}
    else if(day == 4){return `Thursday`}
    else if(day == 5){return `Friday`}
    else if(day == 6){return `Saturday`}
    else{}
};

function zero(value) {
    if(value < 10){return `0${value}`}
    else{return value;}   
}

function monthName(value) {
    if(value == 0){return `Jan`;}
    else if(value == 1){return `Feb`;}
    else if(value == 2){return `Mar`;}
    else if(value == 3){return `Apr`;}
    else if(value == 4){return `May`;}
    else if(value == 5){return `Jun`;}
    else if(value == 6){return `Jul`;}
    else if(value == 7){return `Aug`;}
    else if(value == 8){return `Sep`;}
    else if(value == 9){return `Oct`;}
    else if(value == 10){return `Nov`;}
    else if(value == 11){return `Dec`;}
    else{}
}
// Smart Watch function end

//Timer clock- with setTimeinterval Start with injput & loder
function loderCalTimer(start_value, current_value) {
    return (current_value * 100)/start_value;
    
}
// function note
// input/start value 30 ------100%
// for 1 will small , --100/30
// current value dynamic
// if curren Value. 10 ----(100*10)/30
 //   (current_value*100)/start_value;

//Timer clock- with setTimeinterval End with injput & loder
 