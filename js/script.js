// Ini Javascript External

function validateForm() {
    let nameInput = document.getElementById('name-input');
    let emailInput = document.getElementById('email-input');
    let destinationInput = document.getElementById('destination-input');

    // Validate Condition
    if (nameInput.value == '') {
        alert('Nama tidak boleh kosong');
        return false; // Prevent form submission
    } 

    if (emailInput.value == '') {
        alert('Email tidak boleh kosong');
        return false;
    }

    if (destinationInput.value == '') {
        alert('Destinasi tidak boleh kosong');
        return false;
    }
    else {
        alert('Terima Kasih')
    }
    return true; //Form is valid
}


// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    // Reset Condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

// Auto Play
setInterval(nextBanner, 3000);