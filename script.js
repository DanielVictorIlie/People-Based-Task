// HAMBURGER MENU FOR TABLET AND MOBILE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// HAMBURGER MENU FOR TABLET AND MOBILE END


// TESTIMONIAL SLIDE

const testimonials = [
    {
        name: "Albert Abello",
        job: "CEO, Growth",
        image: "./assets/people-1.png",
        testimonial:
            "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.",
    },
    {
        name: "Katey Topaz",
        job: "Developer, TechCrew",
        image: "https://i.postimg.cc/xdLsJL23/profile-image-4.png",
        testimonial:
            "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat.",
    },
    {
        name: "Jae Robin",
        job: "Designer, Affinity",
        image: "./assets/people-1.png",
        testimonial:
            "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.",
    },
    {
        name: "Nicola Blakely",
        job: "CEO,Zeal Wheels",
        image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
        testimonial:
            "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
];

let currentSlide = 0;
let totalSlides = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.querySelectorAll(".next");
let prevBtn = document.querySelectorAll(".prev");

nextBtn.forEach(nextClick => {
    nextClick.addEventListener("click", () => {
        currentSlide = (totalSlides + currentSlide + 1) % totalSlides;
        displayTestimonial();
    });
})
prevBtn.forEach(prevClick => {
    prevClick.addEventListener("click", () => {
        currentSlide = (totalSlides + currentSlide - 1) % totalSlides;
        displayTestimonial();
    });
})


let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <div class="testimonial-header">
                <img src=${testimonials[currentSlide].image}>
                <div class="testimonial-name-job">
                    <h3 class="title">${testimonials[currentSlide].name}</h3>
                    <h6 class="content">${testimonials[currentSlide].job}</h6>
                </div>      
                <div class="quote">
                    <img src="./assets/”.svg" alt="quote" class="visble-on-tablet"/>
                </div> 
        </div>
    <p class="testimonial-content title">${testimonials[currentSlide].testimonial}</p>
    <p class="page title">0${currentSlide + 1} / 0${totalSlides}</p>
  `;
};
window.onload = displayTestimonial;

// TESTIMONIAL SLIDE END


// FAQ READ MORE / LESS

const toggleQuestionByButton = document.querySelectorAll(".question-toggle");
const toggleQuestion = document.querySelectorAll(".question");

toggleQuestion.forEach(question => {
    question.addEventListener("click", () => {
        let button = question.querySelector(".question-toggle")
        question.querySelector(".more").classList.toggle("active");
        button.classList.toggle("active");
    })
})

// FAQ READ MORE / LESS END


// INPUT GROUP VALID / INVALID

const contactForm = document.querySelector('.contact-form'),
    contactName = document.querySelector('#contact-name'),
    contactEmail = document.querySelector('#contact-email'),
    contactMessage = document.querySelector('#contact-message'),
    contactSent = document.querySelector('.contact-sent'),
    invalidEmail = document.querySelector('.invalid-email-text')

contactEmail.addEventListener('invalid', (e) => {
    e.preventDefault()
    console.log(e)
    invalidEmail.style.visibility = "visible";
    setTimeout(() => {
        invalidEmail.style.visibility = "hidden";
    }, 3500)
})

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    invalidEmail.style.visibility = "hidden";
    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
    contactSent.style.visibility = "visible";
    setTimeout(() => {
        contactSent.style.visibility = "hidden";
    }, 3500)
})

// INPUT GROUP VALID / INVALID END
