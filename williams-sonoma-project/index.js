function changeDisplayImage(elmnt, color){
	let displayImageNode = document.getElementById('display-img');
	displayImageNode.src = `./assets/product-large-${color}.jpg`;

	let prevSelectedImage = document.getElementById('selected-img');
	prevSelectedImage.id = '';

	elmnt.id = 'selected-img';
}

function expandContent(elmnt){
	let paragraphDisplay = elmnt.nextElementSibling.style.display
	
	if(!paragraphDisplay || paragraphDisplay === 'none'){
		elmnt.children[0].innerHTML = 'arrow_drop_down';
		elmnt.nextElementSibling.style.display = 'block';
	} else {
		elmnt.children[0].innerHTML = 'arrow_right';
		elmnt.nextElementSibling.style.display = 'none';
	}
}

function itemAdded(){
	let shoppingCartMsg = document.getElementById('shopping-cart-msg');

	function removeMessage(){
		shoppingCartMsg.classList.remove('fadeIn');
		shoppingCartMsg.classList.add('fadeOut');
	}

	shoppingCartMsg.classList.remove('fadeOut');
	shoppingCartMsg.classList.add('fadeIn');
	shoppingCartMsg.style.display = 'inline-block';
	setTimeout(removeMessage, 1500)
}