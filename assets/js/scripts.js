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

    // Sales Chart
    var salesCtx = document.getElementById('bar_sales_chart').getContext('2d');
    var salesChart = new Chart(salesCtx, {
        type: 'line',
        data: salesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    var eSalesCtx = document.getElementById('eatery_sales_chart').getContext('2d');
    var eSalesChart = new Chart(eSalesCtx, {
        type: 'line',
        data: salesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Product Distribution Chart
    var productDistributionCtx = document.getElementById('bar_items_char_t').getContext('2d');
    var productDistributionChart = new Chart(productDistributionCtx, {
        type: 'bar',
        data: productDistributionData,
        options: {
            responsive: false,
            maintainAspectRatio: false,
        }
    });

    
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
        notificationBadge.style.display = 'block';
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
