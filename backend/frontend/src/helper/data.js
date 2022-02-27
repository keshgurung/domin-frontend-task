export const data = {
  labels: ['', '', '', ''],
  datasets: [
    {
      label: 'Spool position',
      data: [12, 19, 0, 5, 2, 3],
      borderWidth: 1,
    },
    {
      label: 'Temperature',
      data: [4, 0, 15, 6, 11, 4],
      borderWidth: 1,
    },
    {
      label: 'Pressure',
      data: [9, 13, 4, 0, 5, 13],
      borderWidth: 1,
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    backgroundColor: '#00aec7',
    options: {
      plugins: {
        legend: {
          labels: {},
        },
      },
    },
  },
}
