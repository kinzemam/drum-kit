function makeSound(char) {
    char = char.toLowerCase();
    if (char == 'w') {
        let audioEl = new Audio('sounds/crash.mp3');
        audioEl.play();
    }
    if (char == 'a') {
        let audioEl = new Audio('sounds/kick-bass.mp3');
        audioEl.play();
    }
    if (char == 's') {
        let audioEl = new Audio('sounds/snare.mp3');
        audioEl.play();
    }
    if (char == 'd') {
        let audioEl = new Audio('sounds/tom-1.mp3');
        audioEl.play();
    }

    if (char == 'j') {
        let audioEl = new Audio('sounds/tom-2.mp3');
        audioEl.play();
    }
    if (char == 'k') {
        let audioEl = new Audio('sounds/tom-3.mp3');
        audioEl.play();
    }
    if (char == 'l') {
        let audioEl = new Audio('sounds/tom-4.mp3');
        audioEl.play();
    }
}

var myBtns = document.querySelectorAll(".drum");
myBtns.forEach((element) => {
    const item = element.innerHTML
    element.addEventListener('click', () => {
        makeSound(item)
        btnAnimation(item)
    })


})
document.addEventListener('keypress', (event) => {
    makeSound(event.key)
    btnAnimation(event.key)
})


function btnAnimation(key) {
    const activeBtn = document.querySelector('.' + key);
    activeBtn.classList.add('pressed');
    setInterval(() => {
        activeBtn.classList.remove('pressed')
    }, 200)
}
