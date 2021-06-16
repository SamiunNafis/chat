btn.addEventListener('click', () => {
	pop()
})

let pop = () => {
	con.style.display = 'flex'
	let shadows = document.createElement('div')
	shadows.setAttribute("class", "shadows")
	shadows.setAttribute("id", "shad")
	document.body.appendChild(shadows)
	con.addEventListener('click', rem)
	shadows.addEventListener("click", rem)
}

let rem = () => {
	con.style.display = 'none'
	let shad = document.getElementById("shad")
	document.body.removeChild(shad)
}