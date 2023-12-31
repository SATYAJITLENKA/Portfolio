let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            })
        }
    })

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar link
let menuIcon=document.querySelector('#menu-icon')
function menuClick(){
    console.log("clicked")
    // menuIcon.classList.remove('bx-x');
    // navbar.classList.remove('active');
}
 
}

//menu
let menuClick=()=>{
console.log("menu clicked")
}



// scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

