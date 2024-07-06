alert("Hello everyone 🖐️, This is my resume 😊 ");

function adjustLayout() {
    const contentWrapper = document.getElementById('contentWrapper');
    if (window.innerWidth <= 576) {
        contentWrapper.style.flexDirection = 'column';
        contentWrapper.style.height = '100%';
        contentWrapper.style.overflowY = 'auto';
    } else {
        contentWrapper.style.flexDirection = 'row';
        contentWrapper.style.height = '90vh';
        contentWrapper.style.overflowY = 'hidden';
    }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);