function makeSound(char) {
    if (char == 'w' || char == 'W') {
        let audioEl = new Audio('sounds/crash.mp3');
        audioEl.play();
    }
    if (char == 'a' || char == 'A') {
        let audioEl = new Audio('sounds/kick-bass.mp3');
        audioEl.play();
    }
    if (char == 's' || char == 'S') {
        let audioEl = new Audio('sounds/snare.mp3');
        audioEl.play();
    }
    if (char == 'd' || char == 'D') {
        let audioEl = new Audio('sounds/tom-1.mp3');
        audioEl.play();
    }

    if (char == 'j' || char == 'J') {
        let audioEl = new Audio('sounds/tom-2.mp3');
        audioEl.play();
    }
    if (char == 'k' || char == 'K') {
        let audioEl = new Audio('sounds/tom-3.mp3');
        audioEl.play();
    }
    if (char == 'l' || char == 'L') {
        let audioEl = new Audio('sounds/tom-4.mp3');
        audioEl.play();
    }
}

var myBtns = document.querySelectorAll(".drum");
myBtns.forEach((element) => {
    const item = element.innerHTML
    element.addEventListener('click', () => {
        makeSound(item)
    })


})
document.addEventListener('keypress', (event) => {
    makeSound(event.key)
})




/*


var myBtn = document.querySelector(".w");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/crash.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".a");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/kick-bass.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".s");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/snare.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".d");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/tom-1.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".j");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/tom-2.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".k");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/tom-3.mp3');
    audioEl.play();
})

myBtn = document.querySelector(".l");
myBtn.addEventListener('click', () => {
    let audioEl = new Audio('sounds/tom-4.mp3');
    audioEl.play();
})

document.addEventListener("keypress", (event) => {
    if (event.key == 'w' || event.key == 'W') {
        let audioEl = new Audio('sounds/crash.mp3');
        audioEl.play();
    } if (event.key == 'a' || event.key == 'A') {
        let audioEl = new Audio('sounds/kick-bass.mp3');
        audioEl.play();
    } if (event.key == 's' || event.key == 'S') {
        let audioEl = new Audio('sounds/snare.mp3');
        audioEl.play();
    } if (event.key == 'd' || event.key == 'D') {
        let audioEl = new Audio('sounds/tom-1.mp3');
        audioEl.play();
    } if (event.key == 'j' || event.key == 'J') {
        let audioEl = new Audio('sounds/tom-2.mp3');
        audioEl.play();
    } if (event.key == 'k' || event.key == 'K') {
        let audioEl = new Audio('sounds/tom-3.mp3');
        audioEl.play();
    } if (event.key == 'l' || event.key == 'L') {
        let audioEl = new Audio('sounds/tom-4.mp3');
        audioEl.play();
    }
})

*/