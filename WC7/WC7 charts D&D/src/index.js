import Chart from 'chart.js/auto'

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

    let allLevels = [0,0,0,0,0,0,0,0,0];
    let lvlLabels= [];

    for (let index = 1; index < 10; index++) {
        lvlLabels[index-1]= `Level ${index}`;
        
    }

    data.forEach(element => {
        let level = parseInt(element.level)
        
        if(level)
        {
            
            if (level < 10 && level > 0)
            {
                allLevels[level-1]+=1;
            }
        }

    });


    //Build chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lvlLabels,
            datasets: [{
                label: 'Hoeveelheid spreuken',
                data: allLevels,
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

