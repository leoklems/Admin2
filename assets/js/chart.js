document.addEventListener('DOMContentLoaded', function () {
    // Generate random data for the area chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Sales',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set background color for the area
            borderWidth: 2,
            borderJoinStyle: 'round', // Set the border join style to 'round' for rounded edges
            pointRadius: 0, // Set pointRadius to 0 to remove markers from data points
            fill: 'start', // Set fill to 'start' for an area plot
            data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false // Set display to false to remove the legend
        }
    };

    // Create the area chart
    var ctx = document.getElementById('areaChart').getContext('2d');
    var areaChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    // Function to generate a random number
    function randomNumber() {
        return Math.floor(Math.random() * 100);
    }
});
