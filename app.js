document.addEventListener('mousemove', function(ev){
    document.getElementById('mouse__div__big').style.transform = 'translateY('+(ev.clientY-80)+'px)';
    document.getElementById('mouse__div__big').style.transform += 'translateX('+(ev.clientX-80)+'px)';            
},false);

document.getElementById('math__img').addEventListener('mouseover', function() {
    document.getElementById('moems').style.color = '#ff8177';
});

document.getElementById('math__img').addEventListener('mouseout', function() {
    document.getElementById('moems').style.color = ''; // Reset to original color
});

document.getElementById('ukmt__img').addEventListener('mouseover', function() {
    document.getElementById('gold').style.color = '#ff8177';
});

document.getElementById('ukmt__img').addEventListener('mouseout', function() {
    document.getElementById('gold').style.color = ''; // Reset to original color
});

const textElements = document.querySelectorAll('.grow__text h1, .grow__text h2, .grow__text h3');
let index = 0;

function animateText() {
    textElements.forEach((text, i) => {
        text.classList.remove('grow');
        if (i === index) {
            text.classList.add('grow');
        }
    });
    index = (index + 1) % textElements.length;
}

setInterval(animateText, 1000);