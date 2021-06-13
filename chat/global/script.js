snapKey = ''

function load() {

firebase.database().ref('global/').once('value', (snapshot, s) => {
	snapshot.forEach((ChildSnap) => {
		//console.log(ChildSnap.val().Text)
		appendMsg(ChildSnap.val().Text, ChildSnap.val().Name)
	})
})
}

firebase.database().ref('global/').on('child_added', (snapshot, sn) => {
	snapKey = snapshot.key;
	appendMsg(snapshot.val().Text, snapshot.val().Name, snapshot)
})

function appendMsg(text, sender, snap) {

let li = document.createElement('li')

li.setAttribute('class', snap.key)

let span = document.createElement('span')
span.setAttribute('class', 'sender')
span.innerText = sender

li.appendChild(span)

li.append(text) // + ' ' + li.className)

chats.appendChild(li)

$('#chats').animate({
    scrollTop: $("#chats")[0].scrollHeight
  },
    'fast');
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

var myref = firebase.database().ref('global/')
var mykey = myref.push().key

var data = {
	Text: txtInp,
	Name: '',
	Date: today
}

myref.child(mykey).set(data)

let li = document.createElement('li')
li.setAttribute('class', mykey + ' me')
li.innerText = txtInp

let span = document.createElement('span')
span.setAttribute('class', 'sender me')
span.innerText = 'Sender'
li.appendChild(span)
chats.appendChild(li)
document.getElementById('txt').value = ''

var cls = li.className.replace(' me', '')

if (chats.lastChild.previousElementSibling.className == cls) {
	chats.lastChild.previousElementSibling.style.display = 'none'
}

}
}