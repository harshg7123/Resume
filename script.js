function showGreeting() {
            var now = new Date();
            var hours = now.getHours();
            var message = "";

            if (hours >= 0 && hours < 12) {
                message = "Hello everyone 🖐️,Good Morning";
            } else if (hours >= 12 && hours < 18) {
                message = "Hello everyone 🖐️,Good Afternoon";
            } else {
                message = "Hello everyone 🖐️,Good Evening";
            }

            alert(message);
        }

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
