const anchors = document.querySelectorAll('header nav a')
    // loop over them
anchors.forEach(anchor => {
    // listen for clicks on each one
    anchor.addEventListener('click', event => {
        // grab the href attribute
        const href = anchor.getAttribute('href')
            // if the href starts with a #
        if (href.charAt(0) === '#') {
            // stop the default action
            event.preventDefault()
                // find the element the href points to and scroll it into view
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})