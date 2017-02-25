const modals = document.querySelectorAll('.modal');
const nextButtons = document.querySelectorAll('.modal .button')
const rerunButton = document.querySelector('.rerun');
console.log(nextButtons);
function showNext() {
	//This function selects current modal 
	//calculates next modal and step indicators of header section to manipulate
	//Than it adds is-showing class to the modal and is-active class to the related span
	//Clicked button has a corresponding data-modal to the current modal

	const dataModal = this.dataset.modal;
	const currentModal = document.querySelector(`.modal[data-step="${dataModal}"]`);
	const nextStep = parseInt(dataModal) + 1;
	const nextModal = document.querySelector(`.modal[data-step="${nextStep}"`);
	const nextIndicator = document.querySelector(`span[data-step="${dataModal}"`);

	// Check if the element exist before adding a class
	currentModal && currentModal.classList.remove('animate-in');
	currentModal && currentModal.classList.add('animate-out');
	setTimeout(function() {
		currentModal && currentModal.classList.remove('is-showing')
		nextModal  &&	nextModal.classList.add('is-showing', 'animate-in');
		nextIndicator && nextIndicator.classList.add('is-active');
	}, 500);

	// currentModal.classList.remove('animate-out');
	
}

function handleRerun() {
	const activeSpans = document.querySelectorAll('span.is-active');
	const firstModal = 	document.querySelector('.modal');


	firstModal.classList.add('is-showing');
	activeSpans.forEach(span => span.classList.remove('is-active'));
}

//add event listeners to the buttons and call showNext method to maipulate state of the modal and indicators
nextButtons.forEach(button => button.addEventListener('click', showNext));
//finall when all the steps are completed allow user to rerun the whole form

rerunButton.addEventListener('click', handleRerun);