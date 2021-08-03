

//Header Alert Notifications and Dropdown Menu

const bellNotification = document.querySelector('.bell');
const dropdown = document.querySelector('.dropdown-content');

bellNotification.addEventListener('click', function() {
    dropdown.style.display = 'flex';
});

window.addEventListener('mouseup', function(event) {
    let DropdownClose = document.querySelector('.dropdown-content');
    if(event.target != DropdownClose) {
      DropdownClose.style.display = "none";
    }
});


// Alert Banner

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
`<div class="alert-banner">
    <p class="alert-text"><strong>Alert: </strong>You have <strong>3</strong> messages!</p>
    <p class="alert-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
        alertBanner.style.display = "none"
    }
});


// Line Graph with Clickable Link Variables

const trafficCanvas = document.getElementById('trafficChart');

const hourly = document.getElementById('hourlyLink');
const daily = document.querySelector('#dailyLink');
const weekly = document.getElementById('weeklyLink');
const monthly= document.getElementById('monthlyLink');

const trafficHourData = [10, 5, 8, 5, 10, 15, 20, 30, 35, 20, 15, 5];
const trafficHourLabels = ['0-2','3-4','5-6','7-8','9-10','11-12','13-14','15-16','17-18','19-20','21-22','23-24'];

const trafficDayData = [100, 30, 50, 90, 40, 60, 80];
const trafficDayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const trafficWeekData = [0, 500, 1200, 900, 1500, 2000, 1400, 2100, 2300, 1900, 1300];
const trafficWeekLabels = ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'];

const trafficMonthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'];
const trafficMonthData = [3000, 4500, 2345, 1254, 2430, 5450, 6100, 5600, 5000, 4600, 4000, 2040];

const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        borderWidth: 1
    }]
};


const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
 




// Event Listeners for Nav Links

hourly.addEventListener('click', function(event) {
    event.preventDefault();
    daily.classList.remove('active');
    hourly.classList.add('active');
    weekly.classList.remove('active');
    monthly.classList.remove('active');
    trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
    trafficChart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"]
    trafficChart.update();
});

daily.addEventListener('click', function(event) {
    event.preventDefault();
    daily.classList.add('active');
    hourly.classList.remove('active');
    weekly.classList.remove('active');
    monthly.classList.remove('active');
    trafficChart.data.datasets[0].data = [0, 150, 1300, 900, 300, 230, 900];
    trafficChart.data.labels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    trafficChart.update();
});

weekly.addEventListener('click', function(event) {
    event.preventDefault();
    daily.classList.remove('active');
    hourly.classList.remove('active');
    weekly.classList.add('active');
    monthly.classList.remove('active');
    trafficChart.data.datasets[0].data = [0, 500, 1200, 900, 1500, 2000, 1400, 2100, 2300, 1900, 1300];
    trafficChart.data.labels = ["Week 1", "Week 2", "Week 3", "Week4", "Week 5", "Week 6", "Week 7"]
    trafficChart.update();
});

monthly.addEventListener('click', function(event) {
    event.preventDefault();
    daily.classList.remove('active');
    hourly.classList.remove('active');
    weekly.classList.remove('active');
    monthly.classList.add('active');
    trafficChart.data.datasets[0].data = [3000, 4500, 2345, 1254, 2430, 5450, 6100, 5600, 5000, 4600, 4000, 2040];
    trafficChart.data.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec']
    trafficChart.update();
});

// Bar Graph 

const dailyCanvas = document.getElementById('dailyChart');

let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7377BF',
        borderWidth: 1
       
    }]
};

let dailyOptions = {
    scales: {
        yAxes: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Doughnut Chart

const mobileCanvas = document.getElementById('mobileRoundChart');

const mobileData = {
    labels: ['Phone', 'Tablet', 'Desktop'],
    datasets: [{
        label: '# of Users',
        data: [1500, 600, 800],
        borderWidth: 0,
        backgroundColor: [
            '#74b1bf',
            '#b1c98f',
            '#7377bf'
        ],
        bordercolor:[
            '#74b1bf',
            '#b1c98f',
            '#7377bf'
        ]
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            lebels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message User

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out the message field before sending");
    } else {
        alert(`Message succesfully sent to: ${user.value}`)
    }
});


// Local Storage- Save

const togglebtn1 = document.getElementById('tog1');
const togglebtn2 = document.getElementById('tog2');
const timezone = document.getElementById('timezone');
const settings = document.getElementById('settings');

function saveSelected() {
    localStorage.setItem('tog1', togglebtn1.checked);
    localStorage.setItem('tog2', togglebtn2.checked);
    localStorage.setItem('timezone', timezone.selectedIndex);
};

// Save & Cancel 

settings.addEventListener('click', e => {
    if (e.target.id === 'save') {
        saveSelected();
    } else if (e.target.id === 'cancel') {
        localStorage.clear();
        togglebtn1.checked = false;
        togglebtn2.checked = false;
        timezone.selectedIndex = [0];
    }
});

//Check locakstorage on load

function loadSelected() {
    let checked1 = JSON.parse(localStorage.getItem('tog1'));
    let checked2 = JSON.parse(localStorage.getItem('tog2'));
    let getTimezone = JSON.parse(localStorage.getItem('timezone'));
    if (checked1) {
        togglebtn1.checked = checked1;
    } if (checked2) {
        togglebtn2.checked = checked2;
    } if (getTimezone) {
        timezone.selectedIndex = getTimezone;
    }
}

loadSelected();