const menu = document.querySelector('#menu');
const background = document.querySelector('#background');
const sidenav = document.querySelector('#sidenav');
const closeMenu = document.querySelector('#close-menu');

menu.addEventListener('click', function() {
  background.style.transform = 'translateX(200px) scale(.8) rotateY(-6deg) skewY(2deg)';
  background.style.filter = 'blur(1.5px)';
  sidenav.style.left = '2%';
}); 

closeMenu.addEventListener('click', function() {
  background.style.transform = 'translateX(0px) scale(1)';
  background.style.filter = 'blur(0px)';
  sidenav.style.left = '-10%';
});