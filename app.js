//UI variables
const ratingCard = document.getElementById('rating-card');
const thankYou = document.getElementById('thank-you');
const btns = document.querySelectorAll('.btn');
const submit = document.getElementById('submit');
const rate= document.getElementById('rate-value');


//A for loop to add 
btns.forEach((btn) =>{
    btn.addEventListener('click', () => {
        // btn.style.background = "red";

        document.querySelector(".active")?.classList.remove('active');
        btn.classList.add('active');
        console.log(btn.className);
        rate.innerHTML = btn.innerHTML;
    })
})

submit.addEventListener('click', () => {
   
    if(btns.clicked ===false){
    let err = document.createElement('div');
    err.innerHTML = "Please click a number";
    }

    ratingCard.style.display = 'none';
    document.querySelector(".hidden").classList.remove('hidden');
});
