const mouseCursor = document.querySelector('.cursor')
const linkTag = document.querySelectorAll('a')

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

linkTag.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    })
})