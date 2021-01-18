navbar = document.querySelector(".nav-bar");
site = document.querySelector(".content");
navproject = document.querySelector(".projects");
projectbar = document.querySelector(".projectsbar");
navcontacts = document.querySelector(".contacts");
contactsbar = document.querySelector(".contactsbar");

navproject.addEventListener("click", ()=>{
    projectbar.classList.toggle("open");
    // contactsbar.classList.toggle("close");

});
navcontacts.addEventListener("click", ()=>{
    contactsbar.classList.toggle("open");
    // projectbar.classList.toggle("close");
});
// navbar.addEventListener("click", ()=>{
//     projectbar.classList.toggle("close");
//     contactsbar.classList.toggle("close");
// });
// site.addEventListener("click", ()=>{
//     projectbar.classList.toggle("close");
//     contactsbar.classList.toggle("close");
// });