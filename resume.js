const holders = document.querySelectorAll("div.holder")

window.addEventListener("scroll", function () {
	const skillsTag = document.querySelector("section.resume-container")
	const pixels = window.pageYOffset - skillsTag.offsetTop * 0.95;
  
  holders.forEach((holder, index) => {
    
    const step = 500 // height of folder
    const start = -130 * index // start at different angles, 0, -130, -260, etc
    const diff = 195 // how much to turn
    
    const angle = Math.min(0, start + diff * (pixels / step))
    
    const fold = holder.querySelector("div")
    
    fold.style.transform = `rotateX(${angle}deg)`    
  })
  
})