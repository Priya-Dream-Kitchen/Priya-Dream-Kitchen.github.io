document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (!name || !email || !phone || !date || !time || !guests) {
    alert('Please fill out all fields.');
    return;
  }

  const message = `Booking Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime Slot: ${time}\nGuests: ${guests}`;

  const phoneNumber = '+94742417308'; // <-- Replace with your WhatsApp number

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
});

const toggleSwitch = document.querySelector('.switch input');
const body = document.body;
body.classList.add('dark-theme');
body.classList.remove('light-theme');
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
});
