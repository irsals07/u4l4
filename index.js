async function fetchData() {
  const response = await fetch("population.csv"); 
  const data = await response.text(); 
  const rows = data.split("\n").slice(1);

  const xValues = []; 
  const yValues = []; 
  rows.forEach((row) => {
      const columns = row.split(","); 
      const xValue = columns[1]; 
      const yValue = parseFloat(columns[2]) ; 
      xValues.push(xValue);
      yValues.push(yValue);
      
  });

  return { xValues, yValues };
}

async function plotChart() {
  const { xValues, yValues } = await fetchData();

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
      type: "bar", 
      data: {
          labels: xValues, 
          datasets: [
              {
                  label: "Homeless Population",
                  data: yValues, 
                  borderColor: "rgba(75, 192, 192, 1)", 
                  backgroundColor: "rgba(75, 192, 192, 0.2)", 
                  borderWidth: 2, 
                  pointRadius: 4, // Size of data points
              },
          ],
      },
      options: {
          responsive: true,
          title: {
              display: true,
              text: "Homelessness rate over the years", // Chart title
              fontSize: 18, 
              fontColor: "#333", 
          },
          scales: {
              xAxes: [
                  {
                      scaleLabel: {
                          display: true,
                          labelString: "Year", // X-axis label
                      },
                  },
              ],
              yAxes: [
                  {
                      scaleLabel: {
                          display: true,
                          labelString: "Temperature (°C)",
                      },
                  },
              ],
          },
      },
  });
}

plotChart(); 