/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('lineChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      datasets: [{
        data: [35,20,30,82,16,60,70],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#8b0000',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()


//circle chart
const canvas = document.getElementById('pieChart');
const cty = canvas.getContext('2d');

//set canvas dimension
canvas.width = 400;
canvas.height = 400;

//Center coordinates
const centerX = canvas.width/2;
const centerY = canvas.height/2;

//Circle Radius
const radius = 180;

//Inner Radius
const innerRadius = 50;

//Data(replaceabl)
const data = [
  {label:'Spam', value:30, color:'red'},
  {label:'Clean', value:50, color:'green'},
  {label:'Phishing', value:20, color:'maroon'},
];

//Draw pieChart
drawPieChart();

function drawPieChart() {
  //Clear canvas
  cty.clearRect(0,0,canvas.width,canvas.height);

  //Draw Data Segment
  let startAngle = 0;
  data.forEach((segment)=> {
    const endAngle = startAngle + (segment.value/100)*2*Math.PI;
      cty.beginPath();
      cty.moveTo(centerY, centerX);
      cty.arc(centerY,centerX,radius,startAngle,endAngle);
      cty.fillStyle = segment.color;
      cty.fill();
      
      //draw label
      
      cty.font = '18px Arial';
      //cty.fontWeight = 'bolder';
      cty.textAlign = 'center';
      cty.textBaseline = 'middle';
      const labelAngle = (startAngle + endAngle)/2;
      const labelX = centerX + radius*0.6*Math.cos(labelAngle);
      const labelY = centerY + radius*0.8*Math.sin(labelAngle);
      //cty.fillStyle = 'white';
      cty.strokeStyle = 'white';
      cty.lineWidth = 2;
      cty.strokeText(segment.label,labelX,labelY);
      
      startAngle = endAngle;
  });

}

//BarChart

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('barChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [ 'Clean', 'Spam', 'Phishing'],
      datasets: [{
        data:  [  16, 60, 70],       
        lineTension: 0,
        backgroundColor: ['green', 'red', 'maroon'],
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
        
      }
    }
  })
})()