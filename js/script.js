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
    slidesPerView: 1,
    spaceBetween: 10,
     navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
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

function popUpShow() {
    document.getElementById('agePopup').style.display = 'none';

    setTimeout(() => {
        document.getElementById('agePopup').style.display = 'flex';

        const storedAge = parseInt(localStorage.getItem("UserAge"));
        if (isNaN(storedAge) || storedAge < 18 || storedAge >= 100) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';
            document.getElementById('agePopup').style.display = 'none';
        }
    }, 1);
}
popUpShow();


function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    if (isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }
    document.getElementById('agePopup').style.display = 'none';

    if (age >= 18 && age < 100) {
        localStorage.setItem("UserAge", age);
        document.getElementById('welcomePopup').style.display = 'flex';
    } else {
        document.getElementById('notEligiblePopup').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('notEligiblePopup').style.display = 'none';
            document.getElementById('agePopup').style.display = 'flex';
        }, 2000);
    }
}

function closeWelcomePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}