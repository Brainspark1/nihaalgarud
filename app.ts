document.addEventListener('mousemove', (ev: MouseEvent) => {
    const mouseDivBig = document.getElementById('mouse__div__big');
    if (mouseDivBig) {
        mouseDivBig.style.transform = `translateY(${ev.clientY - 80}px)`;
        mouseDivBig.style.transform += `translateX(${ev.clientX - 80}px)`;
    }
}, false);

const mathImg = document.getElementById('math__img');
const moems = document.getElementById('moems');

if (mathImg && moems) {
    mathImg.addEventListener('mouseover', () => {
        moems.style.color = '#ff8177';
    });

    mathImg.addEventListener('mouseout', () => {
        moems.style.color = ''; // Reset to original color
    });
}

const ukmtImg = document.getElementById('ukmt__img');
const gold = document.getElementById('gold');

if (ukmtImg && gold) {
    ukmtImg.addEventListener('mouseover', () => {
        gold.style.color = '#ff8177';
    });

    ukmtImg.addEventListener('mouseout', () => {
        gold.style.color = ''; // Reset to original color
    });
}