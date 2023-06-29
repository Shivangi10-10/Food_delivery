let menu = document.querySelector('#menu-bars');//method built in js to select and retrieve first elt
//This line selects the element with the id of "menu-bars" using the querySelector method and assigns it to the variable menu.

let navbar = document.querySelector('.navbar');

menu.onclick = () =>{                //when menu btn will be clicked this will work
  menu.classList.toggle('fa-times');  //used to toggle ex:if class is present it will be removed vice versa
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');   //all section elt afre selected and assigned to section variable
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{    //event handler when we scroll the below will work

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{      //foreach starts a loop

    let top = window.scrollY;  //vertical nscroll to the variable on top
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {         //specifies that for screen widths smaller than 640 pixels (including 0), only one slide should be displayed per view.
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);   //recurring timer of loader is 3000 milisecond or 3 seconds
}

window.onload = fadeOut;