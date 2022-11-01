// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["주소 (0.49) ", "서울 (0.18) ", "집 (0.09) ", "이사 (0.02)"],
    datasets: [{
      data: [60, 22, 11, 7],
      backgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBackgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});

// Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["단어 (0.88) ", "오옝 (0.10) ", "아무 (0.01) ", "? (0.01)"],
    datasets: [{
      data: [60, 22, 11, 7],
      backgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBackgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});

