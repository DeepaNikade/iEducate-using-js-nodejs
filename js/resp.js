menu = document.querySelector('.menu');
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')


menu.addEventListener('click',()=>{
    rightnav.classList.toggle('v');
    navlist.classList.toggle('v');
    navbar.classList.toggle('hnav');
})