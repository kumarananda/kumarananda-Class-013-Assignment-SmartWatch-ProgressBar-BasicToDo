
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
 


// Subject Marks app with notification Color start
function Myresult(){
    this.gpa = function (marks){
        let gpa;
        if (marks >= 0 && marks < 33) {
            return gpa = 0;
        } else if (marks >= 33 && marks < 40) {
            return gpa = 1;
        } else if (marks >= 40 && marks < 50) {
            return gpa = 2;
        } else if (marks >= 50 && marks < 60) {
            return gpa = 3;
        } else if (marks >= 60 && marks < 70) {
            return gpa = 3.5;
        } else if (marks >= 70 && marks < 80) {
            return gpa = 4;
        } else if (marks >= 80 && marks <= 100) {
            return gpa = 5;
        }else if (marks > 100) {
            return `Invalid`;
        }
        return gpa;
        
    };

    this.grade = function (marks){
        let grade;
        if (marks >= 0 && marks < 33) {
            return grade = `F`;
        } else if (marks >= 33 && marks < 40) {
            return grade = `D`;
        } else if (marks >= 40 && marks < 50) {
            return grade = `C`;
        } else if (marks >= 50 && marks < 60) {
            return grade = `B`;
        } else if (marks >= 60 && marks < 70) {
            return grade = `A-`;
        } else if (marks >= 70 && marks < 80) {
            return grade = `A`;
        } else if (marks >= 80 && marks <= 100) {
            return grade = `A+`;
        }else if (marks > 100) {
            return `Invalid`;
        }
        return grade;
        
    };

    this.cgpacal = (bangla, english, math, socialScience, science, religion) => {

        let cgpacal = (bangla + english + math + socialScience + science + religion) / 6;

        if (bangla == 0 || english == 0 || math == 0 || socialScience == 0 || science == 0 || religion == 0) {
            return `Your result is Failed`;
        } else {
            return `Your CGPA: ${cgpacal.toFixed(2)} & Grade: ${myr.totalGrade(cgpacal)} `;
        }

    }

    this.totalGrade = function(cgpacal){
        
        if( cgpacal >= 0 && cgpacal < 1){
            return `F`;
        }else if( cgpacal >= 1  && cgpacal < 2){
            return `D`;
        }else if( cgpacal >= 2  && cgpacal < 3){
            return `C`;
        }else if( cgpacal >= 3  && cgpacal < 3.5){
            return `B`;
        }else if( cgpacal >= 3.5  && cgpacal < 4){
            return `A-`;
        }else if( cgpacal >= 4  && cgpacal < 5){
            return `A`;
        }else if( cgpacal <= 5){
            return  `A+`;
        }
    
    }
    this.notifiColor = function (tGrade) {
        if(tGrade == 'F'){
            return `red`;
        }else if(tGrade == 'D'){
            return `fuchsia`;
        }else if(tGrade == 'C'){
            return `orchid`;
        }else if(tGrade == 'B'){
            return `#556B2F`;
        }else if(tGrade == 'A-'){
            return `lime`;
        }else if(tGrade == 'A'){
            return `magenta`;
        }else if(tGrade == 'A+'){
            return `gold`;
        }
    }

    

}

let  myr = new Myresult();

// Subject Marks app with notification Color End