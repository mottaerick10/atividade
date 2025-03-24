const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

const clearAll = () => {
    nameInput.value = '';
    messageP.innerText = '';
}

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        helloWorld();
    } else if (event.key === 'Escape') {
        event.preventDefault();
        clearAll();
    }
});


nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}