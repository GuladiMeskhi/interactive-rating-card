const ratingValue = document.querySelectorAll('.rating-btns');
const btns = document.querySelectorAll('.rating-btn');
const ratingCard = document.querySelector('.rating-card');
const submit = document.getElementById("submit");

let num = 0;

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        // console.log(resetNum(i,this.innerText));
        if(resetNum(i,this.innerText) == true){
            num = 0;
            return;
        }
        num = this.innerText;
        log();
        btns[i].classList.toggle('active');
        console.log(num);
    })
}

function renderIt(){
    if(num > 0){
        renderHtml(ratingCard)
    }else{
        return;
    }
}


function log(){
    for(let i = 0; i < btns.length; i++){
        if(btns[i].classList.contains('active')){
            btns[i].classList.remove('active');
        }
    }
}

function resetNum(index,txt){
    if(num == txt){
        btns[index].classList.remove('active');
        return true;
    }else{
        return false;
    }
}

function renderHtml(container){
    container.innerHTML = `
    <div class="thank-you">
        <img src="./interactive-rating-component-main/images/illustration-thank-you.svg" class="thank-you-img">
        <span class="thank-you-rating">You selected ${num} out of 5</span>
        <h1 class="thank-you-header">Thank you!</h1>
        <p class="thank-you-txt">We appreciate you taking the time to give a rating. if you ever need more support. don't hesitate to get in touch!</p>
       </div>
    `
}