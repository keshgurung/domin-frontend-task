import { useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['1 day', '1 week', '1 mo', '3 mo'],
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
}
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  // backgroundColor: '#00aec7',
}

const Info = () => {
  const [buttonColor, setButtonColor] = useState('#a3e4ee')

  const newColor = buttonColor === '#a3e4ee' ? '#ea6686' : '#a3e4ee'
  return (
    <>
      <section className='single-electronics'>
        <div className='title'>
          <p>Integrated electronics</p>
        </div>
        <div className='single-stats'>
          <div className='temp'>
            <button>25.2°C</button>
            <p>Temperature</p>
          </div>
          <div className='hour'>
            <button>03 h 47 min</button>
            <p>Operating hours</p>
          </div>
        </div>
      </section>

      <section className='single-char'>
        <div className='title'>
          <p>Operational characteristics</p>
        </div>
        <div className='char-info'>
          <p>
            <span>Analog input value:</span> 15.7 mA
          </p>
          <p>
            <span>Spool position:</span> 68.4 %
          </p>
          <p>
            <span>Pressure (P):</span> 35.2 bar
          </p>
          <p>
            <span>Flow torque:</span> 520 mNm
          </p>
        </div>
      </section>

      <div className='single-chart'>
        <div className='title'>
          <p>Charts</p>
        </div>
        <div className='line-chart'>
          <div className='check-box'></div>
          <div className='chart'>
            <Line data={data} options={options} />
          </div>
          <div className='time'>
            <button
              onClick={() => {
                setButtonColor(newColor)
              }}
              style={{ backgroundColor: buttonColor }}
            >
              1 day
            </button>
            <button>1 week</button>
            <button>1 mo</button>
            <button>3 mo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
