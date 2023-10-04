// /* < !-- ------------------------------------------------------------------health problem card container Start --------------------------------------------------------------------------------> *
const cardSlider1 = document.querySelector('.card-slider1');
const prevButton1 = document.querySelector('.prev-button1');
const nextButton1 = document.querySelector('.next-button1');

let currentIndex = 0;

prevButton1.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton1.addEventListener('click', () => {
    if (currentIndex < cardSlider1.children.length - 6) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const card1Width = document.querySelector('.card1').offsetWidth;
    cardSlider1.style.transform = `translateX(-${currentIndex * card1Width}px)`;
}

// Initial slide
updateSlider();

// /* < !-- ------------------------------------------------------------------health problem card container End --------------------------------------------------------------------------------> */




// ---------------------------------------------faq section start--------------------------------------------------------->>
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}
// ---------------------------------------------faq section End--------------------------------------------------------->>