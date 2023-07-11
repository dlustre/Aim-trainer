// multiplayer
// play with a friend option
// player with most clickcount wins

let clickCount = 0;
let increasing = true;
let distance = 50;
let minDistance = 50;
let maxDistance = 400;

let button = document.getElementById('targetBtn');

const audio = new Audio('aim-trainer-hitsound.wav');

// Load click count
if (document.cookie.includes('clickCount=')) {
    clickCount = parseInt(document.cookie.split('clickCount=')[1]);
}



document.getElementById('clickCount').textContent = clickCount;

// button.addEventListener('mousedown', function () {
//     button.style.border = '100px';
//     button.style.height = '100px';

// });

// button.addEventListener('mousedown', function () {
//     button.style.width = '50px';
//     button.style.height = '50px';
// });

// Add event listener for click
button.addEventListener('click', function (event) {
    // Create a new overlay element
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Set the position of the overlay to the previous position of the button
    let buttonRect = button.getBoundingClientRect();
    overlay.style.left = buttonRect.left + 'px';
    overlay.style.top = buttonRect.top + 'px';

    // Append the overlay to the button's parent element
    button.parentNode.appendChild(overlay);

    // Add the "clicked" class to the button
    button.classList.add('clicked');

    // Move the button to a new position
    // ...
    // Your code to move the button goes here

    // Remove the "clicked" class and the overlay element after the fade-out animation ends
    overlay.addEventListener('animationend', function () {
        button.classList.remove('clicked');
        overlay.remove();
    });
});

button.onclick = function () {
    clickCount++;

    document.getElementById('clickCount').textContent = clickCount;

    if (increasing) {
        distance += 10;
        if (distance >= maxDistance) {
            increasing = false;
        }
    } else {
        distance -= 10;
        if (distance <= minDistance) {
            increasing = true;
        }
    }


    let randomX = Math.floor(Math.random() * (distance - (-distance) + 1)) + -distance;
    let randomY = Math.floor(Math.random() * (distance - (-distance) + 1)) + -distance;

    let counter = document.getElementById('clickCount');

    // let prevButtonColor = button.style.backgroundImage;
    button.style.backgroundImage = 'none';
    button.style.transition = 'background-image 0.5s'
    counter.style.color = 'white';
    counter.style.transition = 'color 0.5s';

    button.classList.add('clicked');



    setTimeout(function () {
        button.classList.remove('clicked');
        button.style.backgroundImage = '';
        counter.style.color = '';
    }, 100);
    button.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px';

    const newAudio = new Audio(audio.src);
    newAudio.play();
}

window.addEventListener('beforeunload', function () {
    this.document.cookie = 'clickCount=' + clickCount;
});