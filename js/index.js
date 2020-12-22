function destroy() {
    document.querySelector('html').innerHTML = '';
    document.querySelector('html').style.backgroundImage = "url(img/shrek.jpg)";
    document.querySelector('html').style.backgroundSize = '10%';
    
       
}

const buttonDestroy = document.querySelector('.dont-click')
buttonDestroy.addEventListener('click', destroy);
