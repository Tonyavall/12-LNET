const hamDropMenu = document.getElementById('ham-dropdown-menu')
const hamBtn = document.getElementById('ham-btn')

const hbToggle = () => {
    if (hamDropMenu.classList[0] === 'hidden') {
        hamDropMenu.classList.replace('hidden', 'flex')
    } else {
        hamDropMenu.classList.replace('flex', 'hidden')
    }
}

if (hamBtn) hamBtn.addEventListener('click', hbToggle)