const questions = [
    {
        question: "Question 1?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 2?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 3?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 4?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 5?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 6?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 7?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 8?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 9?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    {
        question: "Question 10?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
];

function generateForm() {
    const form = document.createElement('form');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            questionElement.appendChild(label);
        });
        form.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.innerText = 'Submit';
    submitButton.onclick = submitAnswers;
    form.appendChild(submitButton);

    document.body.appendChild(form);
}

function submitAnswers() {
    const answers = questions.map((_, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        return selectedOption ? selectedOption.value : 'No answer';
    });

    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with the actual WhatsApp number
    const message = encodeURIComponent(answers.join(', '));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}