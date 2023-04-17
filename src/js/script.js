function enabletyping(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((letter, i)=>{
        setTimeout(()=>{
            element.innerHTML += letter;
        }, 170 * i)
    })
}
    
const title = document.getElementById('typing');
    
enabletyping(title);    



const activateMenu = document.querySelector('.fa-bars');

const navMenu = document.querySelector('header .primary-navigation');

activateMenu.addEventListener('click', ()=>{
    activateMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('active')
})

