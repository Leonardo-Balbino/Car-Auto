let searchBox = document.querySelector(".search-box")


document.querySelector('#search-icon').onclick=() => {
    searchBox.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector(".navbar")


document.querySelector('#menu-icon').onclick=() => {
    menu.classList.toggle('active');
    searchBox.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    searchBox.classList.remove('active');

}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    //console.log("aqui")
    header.classList.toggle('shadow', window.scrollY > 0);
  });