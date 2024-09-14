
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

window.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (savedData) {
      form.elements.email.value = savedData.email || ""; // Wypełnienie pola email
      form.elements.message.value = savedData.message || ""; // Wypełnienie pola message
    }
  });

form.addEventListener("input", (evt) => {
    const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    
    formData[evt.target.name] = evt.target.value;
   
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const email = formData.get("email");
  const message = formData.get('message');

  if (!email || !message) {
    alert("Please fill out both fields.");
    return;
  }

  console.log({
    email: email,
    message: message
});
    localStorage.removeItem(localStorageKey);
    form.reset();
});

