const predoader = document.querySelector('.preloder');

predoader.classList.add('active');

setTimeout(() => {
    predoader.classList.remove('active');
}, 500)