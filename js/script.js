

// function reDirecting(form) {
// 	var name = document.getElementById('exampleInputEmail1')
// 	var pass = document.getElementById('exampleInputPassword1')
// 	var help = document.getElementById('emailHelp')


// 	if (name.value == 'user' && pass.value == 1234) {
// 		help.innerHTML = 'Yes'
// 		location.href = 'http://yandex.ru/'
// 		help.classList.add('green')

// 	} else {
// 		help.innerHTML = 'No'
// 		help.classList.add('red')

// 	}

// 	return false
// }



// function reDirecting(form) {
// 	let name = document.getElementById('exampleInputEmail1')
// 	let pass = document.getElementById('exampleInputPassword1')
// 	let help = document.getElementById('emailHelp')

//     let message = (name.value == 'user' && pass.value == 1234) ? 
// 		(help.innerHTML = 'Yes', location.href = 'http://yandex.ru/',help.classList.add('green')) : 
// 		(help.innerHTML = 'No, you are not allowed to login without a username and password', help.classList.add('red'));

// 	return false
// }


let reDirecting = form => {

	let name = document.getElementById('exampleInputEmail1')
	let pass = document.getElementById('exampleInputPassword1')
	let help = document.getElementById('emailHelp');

	let message = (name.value == 'user' && pass.value == 1234) ? 
	(help.innerHTML = 'Yes', location.href = 'http://yandex.ru/',help.classList.add('green')) : 
	(help.innerHTML = 'No, you are not allowed to login without a username and password', help.classList.add('red'));

	return false	
}