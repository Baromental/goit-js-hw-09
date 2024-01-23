const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

form.email.value = savedData.email || '';
form.message.value = savedData.message || '';

form.addEventListener('input', (event) => {
  const { name, value } = event.target;

  const updatedData = { ...savedData, [name]: value.trim() };
  localStorage.setItem(storageKey, JSON.stringify(updatedData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.email.value.trim() && form.message.value.trim()) {
    console.log({
      email: form.email.value.trim(),
      message: form.message.value.trim()
    });

    localStorage.removeItem(storageKey);
    form.reset();
  }
});