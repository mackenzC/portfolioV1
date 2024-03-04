function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
    
}    

(() => {
    AOS.init({
      easing: "ease",
      duration: 1500,
      once: true,
    });
})();
