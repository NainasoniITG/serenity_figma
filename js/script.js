var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".categories-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

var swiper = new Swiper(".featured-collection-slider", {
    slidesPerView: 1, // default mobile
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

//website pop-up
function popShow() {
    document.getElementById('agePopup').style.visibility = 'hidden';

    setTimeout(() => {
        document.getElementById('agePopup').style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    },1);
}
popShow();

function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    if (isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }
    document.getElementById('agePopup').style.display = 'none';

    if (age >= 18 && age < 100) {
        document.getElementById('welcomePopup').style.display = 'flex';
        const value = localStorage.getItem("UserAge");
        const value2 = JSON.parse(value);
    } else {
        document.getElementById('notEligiblePopup').style.display = 'flex';
    }
}

function closeWelcomePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}