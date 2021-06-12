load()

function load() {

firebase.database().ref('global/').once('value', (snapshot, s) => {
	snapshot.forEach((ChildSnap) => {
		console.log(ChildSnap.val().Text)
		appendMsg(ChildSnap.val().Text, ChildSnap.val().Name)
	})
})
}

firebase.database().ref('global/').on('child_added', (sn, ssn) => {
//alert(sn.val().Text)
	appendMsg(sn.val().Text, sn.val().Name)
})

function appendMsg(text, sender) {

let li = document.createElement('li')

let span = document.createElement('span')
span.setAttribute('class', 'sender')
span.innerText = sender

li.appendChild(span)

li.append(text)

chats.appendChild(li)
}


function sendMsg() {
var txtInp = document.getElementById('txt').value;

$('#chats').animate({
    //scrollTop: $("#chats li").last().offset().top
    scrollTop: $("#chats")[0].scrollHeight
  },
    'fast');

if (txtInp.trim().length != 0) {
let chats = document.getElementById('chats')
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hous = today.getHours()
var mins = today.getMinutes()

today = mm + '/' + dd + '/' + yyyy + ' ' + hous + ':' + mins;


firebase.database().ref('global/').push().set({
	Text: txtInp,
	Name: '',
	Date: today
})


let li = document.createElement('li')
li.setAttribute('class', 'me')
li.innerText = txtInp

let span = document.createElement('span')
span.setAttribute('class', 'sender me')
span.innerText = 'Sender'
li.appendChild(span)
chats.appendChild(li)
document.getElementById('txt').value = ''
}
}