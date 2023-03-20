let typingText = new Typed('#text', {
    strings: ["Wahyudi", "Programmer", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})

let wrapper = document.querySelector('.wrapper')
let darkMode = document.querySelector('.dark-mode')

darkMode.onclick = () => {
    wrapper.classList.toggle('dark')
}