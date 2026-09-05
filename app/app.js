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
