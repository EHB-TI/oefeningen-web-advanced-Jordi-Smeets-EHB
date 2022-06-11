import Chart from 'chart.js/auto'
import { result } from 'lodash';

getData();
async function getData() {
    let response = await fetch('data.json');
    let data = await response.json();
    return data;

}

getData().then( 
    result => buildChart(result),
    error => console.log(error)
)


function buildChart(data){



    //data klaarzetten
    let labelValues = [];
    let hypeValues = [];



    data.courses.forEach(course => {
        labelValues.push(course.name);
        hypeValues.push(course.hype);
    });
    
    //Build chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelValues,
            datasets: [{
                label: '# of Votes',
                data: hypeValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

