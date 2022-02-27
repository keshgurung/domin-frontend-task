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
export const productData = [
  {
    id: 1,
    uid: 'SN0000f43',
    image: 'https://i.imgur.com/EGHGo3i.png',
    type: 'S4 Pro',
    location: 'Site1, Cheddar, UK',
    status: 'Active',
  },
  {
    id: 2,
    uid: 'SN0000g96',
    image: 'https://i.imgur.com/5w7jfqf.png',
    type: 'S6 Pro',
    location: 'Site1, Cheddar, UK',
    status: 'Error',
  },
  {
    id: 3,
    uid: 'SN0000h56',
    image: 'https://i.imgur.com/YgIG0cc.png',
    type: 'Fast',
    location: 'Vehicle1, Cheddar, UK',
    status: 'Active',
  },
]

export const singleProductData = [
  {
    id: 1,
    uid: 'SN0000f43',
    image: 'https://i.imgur.com/EGHGo3i.png',
    type: 'S4 Pro',
    location: 'Site1, Cheddar, UK',
    status: 'Active',
  },
]
