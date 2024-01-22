// script.js

// Create a mapping between destination values and names
var destinationNames = {
    '1': 'Depok',
    '2': 'Bogor',
    '3': 'Lombok',
    '4': 'Jogja',
    '5': 'Bandung',
    '6': 'Malang'
};

var durationNames = {
    '1': 'Terima Beres',
    '2': 'Pasutri',
    '3': 'Biasa'
};

function collectFormDataAndRedirect() {
    // Mengumpulkan data dari formulir
    var destinationValue = document.getElementById('destination').value;
    var destinationName = destinationNames[destinationValue];
    var departDate = document.querySelector('#date1 input').value;
    var returnDate = document.querySelector('#date2 input').value;
    var duration = document.getElementById('duration').value;
    var durationName = durationNames[duration];

    // Membuat URL dengan parameter
    var redirectUrl = 'validasi.html?destination=' + encodeURIComponent(destinationValue) +
                      '&destinationName=' + encodeURIComponent(destinationName) +
                      '&departDate=' + encodeURIComponent(departDate) +
                      '&returnDate=' + encodeURIComponent(returnDate) +
                      '&duration=' + encodeURIComponent(duration) +
                      '&durationName=' + encodeURIComponent(durationName);

    // Mengarahkan ke halaman validasi dengan membawa parameter
    window.location.href = redirectUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan parameter dari URL
    var params = new URLSearchParams(window.location.search);

    // Mendapatkan nilai parameter
    var destination = params.get('destination');
    var destinationName = destinationNames[destination];
    var departDate = params.get('departDate');
    var returnDate = params.get('returnDate');
    var duration = params.get('duration');
    var durationName = params.get('durationName');

    // Menampilkan data pada halaman
    displayResults(destinationName, departDate, returnDate, duration, durationName);
});

function displayResults(destination, departDate, returnDate, duration, durationName) {
    var resultContainer = document.getElementById('resultContainer');

    if (resultContainer) {
        resultContainer.innerHTML = '<div class="bg-light shadow p-4 mb-3">' +
                                    '<h4 class="mb-3">Detail Pesanan:</h4>' +
                                    '<p class="mb-2"><strong>Destination:</strong> ' + destination + '</p>' +
                                    '<p class="mb-2"><strong>Departure Date:</strong> ' + departDate + '</p>' +
                                    '<p class="mb-2"><strong>Return Date:</strong> ' + returnDate + '</p>' +
                                    '<p class="mb-2"><strong>Duration:</strong> ' + durationName + '</p>' +
                                    '</div>';
    } else {
        console.error("Error: resultContainer tidak ditemukan di halaman.");
    }
}
