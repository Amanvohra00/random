const messages=[
    "ARe you sure ?? pakka?",
    "Edum pakka baby??",
    "are you positive bachha???",
    "pookiee pleaseee",
    "just think about it",
    "Aaap mana karoge to mai naraz ho jauga",
    "udasss ho jauga pakka",
    "januuuuuu ",
    "han bolo ab babyyy"
];

let messageIndex=0;

function handleNoclick(){
    const noButton=document.querySelector('.no-button');
    const yesButton=document.querySelector('.yes-button');
    noButton.textContent=messages[messageIndex];
    messageIndex=(messageIndex + 1)% messages.length;
    const currentsize=parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize= `${currentsize*1.5}px`;
}

function handleYesclick(){
    window.location.href="yes.html";
}