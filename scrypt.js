let images = [{
    url: "https://s3-alpha-sig.figma.com/img/84d2/4980/7f2a0f3b4ed9cd6671fa4e811b625992?Expires=1699228800&Signature=mhvG~c41LxXu-di2vBM9ZikdvLcxVqK6lvY54Tjdd86H0jonEI1dqSsTXThgoRXumn~44-bHpzKTKFOqESjJrnf~Gx1TayYsUXqee61DXyRG1oRNJLkpKUR-1CyivT~WAc4Zpny8SqPOqu8KO6TVjZ2elvjFo~ebDxz1vIJnhx9RIGqug9g24a4cQ~jAiy6ynHQPf4ovexIj1k9mSHGbHimFkPCUAho~RaJY8P4LSzwgi3Plyee7kDdaUp3rZEf138qT-ymG0vStcq7UJiRcYNpNi7Wctk2mdB4hU4IYvSz2qLeFOfvkrXOOddWQttTZJT11BJMJvIg~TVytTCFK1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title:"Rostov-on-Don, Admiral"
},{
    url: "https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1699228800&Signature=hogOaY1ExXv~~MKBtckFV9OrM-LkbsQLjTQIHxafPXCi3~ZRpiFjO1yY31VuvjUbpgSWNm~dCufHUkpda9hkwRXrjugmgPaMJhKRo43YVUOqKUl~5AjzQE~g6KhHZnXvWe7nQMkXDI8FIO8czFf2DZcEW~Sh2UHArc4z60BluIOiCh0-EFd-nib30bnu7raLMFNbjlBJ2ab0LnLiFDExXq6B8mG1F6GjCMQIJktM-Z8toMKDFo29FMCIOgr3lEkTiuS9Vi5E3HoMAmZUJs7XPtTTsYPR9Lvo-Gab6PCa2lQqxxn2o9KGj2JmPRb1j1eoQJtxNSbLEbnnUiFTqZnSaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title:"Sochi Thieves"
}, {
    url: "https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1699228800&Signature=Z-Hh64kSfVMQUuTshDNecsepzlmLFgTPXq302f-wUlVF0kTmJnyHEXQe8i6cDkR9a1r2l31yTTLLnbY343eIYwc2pVzNsDt6VjGSVc5M3jqBeHd1aXr61ssQnzFotwPd1i5oYI7h32kOtibwYd-iNiN8bnrC6uXppD4H~nDa5FdQ2iWn1S-UjAfeB6TWg689um~1P-gPY8spTXWmuuokJenKINJAIZ1Knld9vLT69cD2FAfYdlZaM-mV2kauoEuplpH3YwLt-4SVN2g01vGQvxskwr9YnQo02HmYH800~6gNZchjKQ87AAUDcVKs1ObUwQBipU4NtsM2BTFllafKcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title:"Rostov-on-Don Patriotic"
}]

function initSlider () {
    if (!images || !images.length) return;
    let sliderImages = document.querySelector(".completed-projects__slider_images");
    let sliderArrows = document.querySelector(".completed-projects__slide-switch");
    let sliderCircles = document.querySelector(".slide-switch__circles");
    let sliderTitles = document.querySelector(".completed-projects-list")

    initImages();
    initArrows();
    initCircles();
    initTitles();

    function initImages(){
        images.forEach((image,index) =>{
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slide-switch__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }
    
    function initCircles() {
        images.forEach((image,index) => {
            let circle = `<div class="slide-switch__circles_circle n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderCircles.innerHTML += circle;
        });
        sliderCircles.querySelectorAll(".slide-switch__circles_circle").forEach(circle => {
            circle.addEventListener("click", function() {
              moveSlider(this.dataset.index);
              sliderCircles.querySelector(".active").classList.remove("active");
              this.classList.add("active");
            })
        })
    }

    function initTitles() {
        images.forEach((image,index) => {
            let title = `<div class="completed-projects-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitles.innerHTML += title;
        });
        sliderTitles.querySelectorAll(".completed-projects-item").forEach(title => {
            title.addEventListener("click", function() {
              moveSlider(this.dataset.index);
              sliderTitles.querySelector(".active").classList.remove("active");
              this.classList.add("active");
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderCircles.querySelector(".active").classList.remove("active");
        sliderCircles.querySelector(".n" + num).classList.add("active");
        sliderTitles.querySelector(".active").classList.remove("active");
        sliderTitles.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded",initSlider);