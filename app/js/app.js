const modals = document.querySelectorAll('.modal');
const nextButtons = document.querySelectorAll('.modal .button')
function showNext() {
	const dataModal = this.dataset.modal;
	const currentModal = document.querySelector(`[data-step="${dataModal}"]`);
	const nextStep = parseInt(dataModal) + 1;
	const nextModal = document.querySelector(`[data-step="${nextStep}"`)

	currentModal.classList.remove('is-showing');
	nextModal.classList.add('is-showing');
	
	console.log(currentModal);
	console.log(nextModal);
	console.log(nextStep, typeof nextStep);

}


nextButtons.forEach(button => button.addEventListener('click', showNext));
