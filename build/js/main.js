const year = document.querySelector('#year')
year.innerText = new Date().getFullYear()

const initApp = () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    const hamburgerMenu = document.querySelector('#hamburger-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('flex')
        mobileMenu.classList.toggle('hidden')
        hamburgerMenu.classList.toggle('toggle-btn')
    }

    hamburgerMenu.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)