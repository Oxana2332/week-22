// chartJS
const data = {
    datasets: [{
        label: 'Juice',
        data: [
            {x:'2021-05-28', y: 100},
            {x:'2021-08-10', y: 100},
            {x:'2022-02-22', y: 189},
            {x:'2022-07-04', y: 140},
        ],
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
        'rgba(255, 26, 104, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Soda',
        data: [
            {x:'2021-08-16', y: 92},
            {x:'2021-10-16', y: 70},
            {x:'2021-10-25', y: 70},
            {x:'2021-11-05', y: 65},
            {x:'2021-11-24', y: 92},
            {x:'2021-11-30', y: 92},
            {x:'2022-01-15', y: 100},
            {x:'2022-01-29', y: 72},
            {x:'2022-02-11', y: 87},
            {x:'2022-02-19', y: 103},
            {x:'2022-03-04', y: 76},
            {x:'2022-04-23', y: 110},
            {x:'2022-05-24', y: 126},
            {x:'2022-06-16', y: 126},
        ],
        backgroundColor: [
        'rgba(154, 205, 50, 0.2)',
        ],
        borderColor: [
        'rgba(154, 205, 50, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Salad',
        data: [
            {x:'2021-05-28', y: 52},
            {x:'2021-08-31', y: 54},
            {x:'2021-09-07', y: 46},
            {x:'2021-10-02', y: 54},
            {x:'2022-02-19', y: 58},
            {x:'2022-06-03', y: 61},
            {x:'2022-06-15', y: 68},
        ],
        backgroundColor: [
        'rgba(0, 128, 0, 0.2)',
        ],
        borderColor: [
        'rgba(0, 128, 0, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Date fruits',
        data: [
            {x:'2022-03-16', y: 70},
            {x:'2022-05-12', y: 100},
            {x:'2022-06-30', y: 100},
        ],
        backgroundColor: [
        'rgba(128, 128, 0, 0.2)',
        ],
        borderColor: [
        'rgba(128, 128, 0, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Eggs',
        data: [
            {x:'2022-01-13', y: 115},
            {x:'2022-05-05', y: 114},
            {x:'2022-07-04', y: 124},
        ],
        backgroundColor: [
        'rgba(255, 215, 0, 0.2)',
        ],
        borderColor: [
        'rgba(255, 215, 0, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Corn sticks',
        data: [
            {x:'2022-01-27', y: 40},
            {x:'2022-03-16', y: 55},
            {x:'2022-05-12', y: 55},
            {x:'2022-07-04', y: 93},
        ],
        backgroundColor: [
        'rgba(127, 255, 212, 0.2)',
        ],
        borderColor: [
        'rgba(127, 255, 212, 1)',
        ],
        borderWidth: 1
    },{
        label: 'Bread',
        data: [
            {x:'2021-12-21', y: 30},
            {x:'2022-01-08', y: 30},
            {x:'2022-01-13', y: 30},
            {x:'2022-01-25', y: 30},
            {x:'2022-03-16', y: 33},
            {x:'2022-05-05', y: 33},
            {x:'2022-07-04', y: 33},
        ],
        backgroundColor: [
        'rgba(255, 69, 0, 0.2)',
        ],
        borderColor: [
        'rgba(255, 69, 0, 1)',
        ],
        borderWidth: 1
    },{
        label: 'RUB to USD(data of the Central Bank of the Russian Federation)',
        data: [
            {x:'2021-05-28', y: 73},
            {x:'2021-06-15', y: 71},
            {x:'2021-06-28', y: 72},
            {x:'2021-07-14', y: 74},
            {x:'2021-07-28', y: 73},
            {x:'2021-08-16', y: 73},
            {x:'2021-08-27', y: 73},
            {x:'2021-09-14', y: 72},
            {x:'2021-09-28', y: 72},
            {x:'2021-10-14', y: 71},
            {x:'2021-10-28', y: 70},
            {x:'2021-11-14', y: 71},
            {x:'2021-11-29', y: 74},
            {x:'2021-12-14', y: 73},
            {x:'2021-12-28', y: 73},
            {x:'2022-01-14', y: 75},
            {x:'2022-01-28', y: 77},
            {x:'2022-02-14', y: 76},
            {x:'2022-02-28', y: 93},
            {x:'2022-03-14', y: 115},
            {x:'2022-04-25', y: 73},
            {x:'2022-05-13', y: 63},
            {x:'2022-05-27', y: 66},
            {x:'2022-06-14', y: 57},
            {x:'2022-06-28', y: 52},
            {x:'2022-07-08', y: 61},
        ],
        backgroundColor: [
        'rgba(255, 0, 0)',
        ],
        borderColor: [
        'rgba(255, 0, 0)',
        ],
        borderWidth: 3
    }]
    };

    const config = {
    type: 'line',
    data,
    options: {
        scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day'
            },
            min: '2021-05-28',
            max: '2022-07-04',
        },
        y: {
            beginAtZero: true
        }
        }
    }
    };

    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );
    
//momentjs
const moment = require('moment');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById('today').innerText =`Now: ${date}`;

//multiple.js
var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#273463, #8B4256)'
});
multiple.update();