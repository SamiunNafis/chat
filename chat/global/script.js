$('#send').click(() => {
sendMsg(document.getElementById('txt').value)
})

function sendMsg(txtInp) {
let chats = document.getElementById('chats')
let li = document.createElement('li')
li.setAttribute('class', 'me')
li.innerText = txtInp

let span = document.createElement('span')
span.setAttribute('class', 'sender me')
span.innerText = 'Sender'
li.appendChild(span)
chats.appendChild(li)
}