
document.getElementById('year').textContent = new Date().getFullYear();
function handleSubmit(e) {
    e.preventDefault();
    alert('This demo form does not send messages. Replace with your own backend or a service like Formspree.');
    e.target.reset();
}
