document.getElementById("targetBtn").onclick = function () {
    let randomX = Math.floor(Math.random() * (100 - (-100) + 1)) + -100;
    let randomY = Math.floor(Math.random() * (100 - (-100) + 1)) + -100;

    let button = document.getElementById('targetBtn');

    button.style.backgroundColor = 'red';
    setTimeout(function () {
        button.style.backgroundColor = '#4CAF50';
    }, 50);
    button.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px';
}