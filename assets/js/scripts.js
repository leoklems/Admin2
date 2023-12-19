const menuBtn = document.getElementById('menuBtn');
const bars = document.querySelectorAll('fa-bars');
var sideNav = document.querySelectorAll('.side_nav_section');
document.getElementById('menuBtn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('side_nav').classList.toggle("side_nav_mobile");
    var bars = document.getElementById('n_icon');

    if (bars.classList.contains('fa-bars')) {
        bars.classList.replace('fa-bars', 'fa-times');
        bars.style.color = 'white';
    }else {
        bars.classList.replace('fa-times', 'fa-bars');
        bars.style.color = 'black';
    }
    
});

document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for charts
    var salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [50, 60, 45, 80, 75, 90],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
        }]
    };

    var productDistributionData = {
        labels: ['Electronics', 'Clothing', 'Home', 'Toys'],
        datasets: [{
            data: [30, 20, 15, 35],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        }]
    };

    
    // Product Distribution Chart
    // var productDistributionCtx = document.getElementById('bar_items_char_t').getContext('2d');
    // var productDistributionChart = new Chart(productDistributionCtx, {
    //     type: 'bar',
    //     data: productDistributionData,
    //     options: {
    //         responsive: false,
    //         maintainAspectRatio: false,
    //     }
    // });

    
    // notification
    // JavaScript to handle notifications
let notificationBadge = document.getElementById('notificationBadge');
let notificationCount = 0;

function showNotification() {
    notificationCount++;
    updateBadge();
}

function updateBadge() {
    if (notificationCount > 0) {
        notificationBadge.style.display = 'grid';
        notificationBadge.innerText = notificationCount > 9 ? '9+' : notificationCount.toString();
    } else {
        notificationBadge.style.display = 'none';
    }
}

// Example: Call showNotification() when a new notification arrives
// For demonstration purposes, simulate a new notification after 3 seconds
setTimeout(() => {
    showNotification();
}, 3000);



});
