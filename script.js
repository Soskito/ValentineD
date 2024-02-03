const oui = document.getElementById('oui');
const non = document.getElementById('non');

function clickNon() {
    let currentPadding = parseInt(window.getComputedStyle(oui).paddingRight, 10);

    currentPadding += 10;

    oui.style.padding = `${currentPadding}px`;
}

non.addEventListener('click', clickNon);

function clickOui(){
    window.location.href = 'page2.html';
}

oui.addEventListener('click', clickOui)
