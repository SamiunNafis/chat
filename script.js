

$('.btn-personal').click(() => {
	$("#root").load('chat/personal/index.html')
	$('#root').show()
	$('.btn-personal').addClass('active')
	$('.btn-global').removeClass('active')
})

$('.btn-global').click(() => {
	$("#root").load('chat/global/chat.html')
	$('.btn-global').addClass('active')
	$('.btn-personal').removeClass('active')
})

/*$("#root").load('chat/global/chat.html')
	$('.btn-global').addClass('active')*/