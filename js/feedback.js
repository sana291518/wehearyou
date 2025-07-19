// ...

// Function to load feedback from Local Storage and display it on the page
function loadFeedback() {
    const feedbackArray = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear the existing feedback entries
    feedbackList.innerHTML = '';

    feedbackArray.forEach((feedbackData) => {
        displayFeedback(
            feedbackData.name,
            feedbackData.email,
            feedbackData.experience,
            feedbackData.rating
        );
    });
}

// Remove the existing event listener to avoid multiple bindings
feedbackForm.removeEventListener('submit', submitFeedback);

// Event listener for form submission
function submitFeedback(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const experience = event.target.experience.value;
    const rating = event.target.rating.value;

    displayFeedback(name, email, experience, rating);
    saveFeedback(name, email, experience, rating);

    // Clear the form
    event.target.reset();
}

feedbackForm.addEventListener('submit', submitFeedback);

// Load existing feedback when the page loads
loadFeedback();
