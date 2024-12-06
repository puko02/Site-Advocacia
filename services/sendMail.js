const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  const formData = {
    name: elements[0].value || '',
    date: elements[1].value || '',
    phone: elements[2].value || '',
    message: elements[3].value || '',
  };
  try {
    await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error(error);
  }
});

