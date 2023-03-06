
let start_quiz_btn = document.getElementById("start-quiz-btn");
let quiz_banner_btn_container = document.getElementById("quiz-banner-btn-container");
let timer_container = document.getElementById("timer-container");
let quiz_container = document.getElementById("quiz-container");
let quiz_result_container = document.getElementById("quiz-result-container");

let quiz_banner_text_p = document.getElementById("quiz-banner-text-p");

let correction_items = document.getElementById("correction-items");
let time_taken_display = document.getElementById("time-taken");

let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let time_count = 60; 
let countDownIntervalTimer;

let running_total = 0;
let total_mark_display = document.getElementById("total-mark");
let time_
const correct_ans = [1, 3, 2, 4, 2, 3, 1, 2, 3, 1]
let body_container = document.getElementById("body-container");

let submit_quiz_btn = document.getElementById("submit-quiz-btn");

timer_container.style.display = "none";
quiz_container.style.display = "none";

quiz_result_container.style.display = "none";
submit_quiz_btn.style.display = "none";

start_quiz_btn.addEventListener("click", showTimer);
submit_quiz_btn.addEventListener("click", quizSubmit);

function showTimer() {
    
    quiz_banner_btn_container.style.display = "none";
    quiz_container.style.display = "block";
    body_container.style.paddingBottom = "50px";
    timer_container.style.display = "block";
    
    submit_quiz_btn.style.display = "block";

    mins.innerText = "01";
    secs.innerText = "00";
    countDownIntervalTimer = setInterval(countDown, 1000);   
}



function countDown() {

    time_count = time_count - 1;
    mins.innerText = "00";
    secs.innerText = `${time_count}`;

    if (time_count < 10) {
        
        secs.innerText = `0${time_count}`;
        timer_container.style.color = "red";
    }
    
    if (time_count == 0) {
        secs.innerText = "00";
        clearInterval(countDownIntervalTimer);
        quizSubmit();
    }    
}


function quizSubmit() {

    clearInterval(countDownIntervalTimer);
    let wrong_radio_items = [];
    quiz_banner_text_p.style.display = "none";

    for (let i = 1; i <= 10; i++) {
        
        const radio_set = document.getElementsByName(`${i}`);
        // console.log(radio_set);
        radio_set.forEach(radio_item => {
            
            if (radio_item.checked == true) {
                
                // console.log(radio_item.value);
                if (radio_item.value == correct_ans[i-1]) {
                    
                    running_total = running_total + 2;
                } else {
                    
                    running_total = running_total - 1;
                    wrong_radio_items.push(radio_item);
                }
            }
        });
        
    }
    console.log(running_total);
    // console.log(wrong_radio_items);
    renderResults(wrong_radio_items);
}

function renderResults(radio_items) {
    
    quiz_container.style.display = "none";
    body_container.style.paddingBottom = "400px";
    timer_container.style.display = "none";
    
    quiz_result_container.style.display = "block";
    submit_quiz_btn.style.display = "block";

    total_mark_display.innerText = ` ${running_total}`;
    time_taken_display.innerText = `${60 - time_count}`


    if (running_total >= 15) {
        
        body_container.style.backgroundColor = '#8FC1D4';
    }else if(running_total >= 7){
        
        body_container.style.backgroundColor = '#A68DAD';
    }else if(running_total >= 0) {

        body_container.style.backgroundColor = '#F68989';
    }else{

        body_container.style.backgroundColor = '#C65D7B';
    }

    // console.log(radio_items);
    let correction_items_html = "";

    for (let i = 0; i < radio_items.length; i++) {
        
        console.dir(radio_items[i]);
        // console.log(document.getElementById(`p-${radio_items[i].name}`).innerText);
        let question_text = radio_items[i].parentElement.parentElement.parentElement.children[0].innerText;
        let your_answer_text = radio_items[i].parentElement.children[1].innerText;
        let correct_label = correct_ans[parseInt(radio_items[i].name)-1];
        // console.log(correct_label);
        let correct_label_text = radio_items[i].parentElement.parentElement.children[correct_label-1].children[1].innerText;
        
        // console.log(question_text);
        // console.log(your_answer_text);
        // console.log(correct_label_text);

        correction_items_html = correction_items_html + `<div class="correction-p-item">
        <p>${question_text}</p>
        <div class="answer-box">
          <p>Your answer: <span id="your-answer">${your_answer_text}</span></p>
          <p>Correct answer: <span id="correct-answer">${correct_label_text}</span> </p>
        </div>
      </div>\n\n`;
    } 
    console.log(correction_items_html);
    correction_items.innerHTML = correction_items_html;

}

