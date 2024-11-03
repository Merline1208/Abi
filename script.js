// Open the reservation popup with date and time displayed
function openReservationPopup() {
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;

    if (!date || !time) {
        alert('Please select both a date and time for your reservation.');
        return;
    }

    document.getElementById('display-date').innerText = date;
    document.getElementById('display-time').innerText = time;

    // Show the popup
    document.getElementById('reservation-popup').style.display = 'flex';
}

// Close the reservation popup
function closePopup() {
    document.getElementById('reservation-popup').style.display = 'none';
}

// Submit the reservation form using AJAX
function submitReservation() {
    const form = document.getElementById('reservation-form');
    const formData = new FormData(form);

    // Add date and time to formData
    formData.append('reservation_date', document.getElementById('reservation-date').value);
    formData.append('reservation_time', document.getElementById('reservation-time').value);

    // AJAX request to submit_reservation.php
    fetch('submit_reservation.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('reservation-message').innerText = data;
            form.reset(); // Clear form fields after submission
            setTimeout(() => {
                closePopup(); // Close the popup after a short delay
            }, 2000);
        })
        .catch(error => {
            document.getElementById('reservation-message').innerText = 'Failed to reserve. Please try again.';
            console.error('Error:', error);
        });
}

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
