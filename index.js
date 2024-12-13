let yearArray = []
let tempArray = []
async function getYear() {
    const response = await fetch("test.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              yearArray.push(year)
            });
          }

async function getTemp() {
    const response = await fetch("test.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
                const row = elem.split(",");
                const temp = row[1];
                tempArray.push(temp)
            });
            }
    

async function getChart(){
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: yearArray,
        datasets: [{
          label: 'Temperature',
          data: tempArray,
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

    