import { useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { data } from '../helper/data'

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
            <Line data={data} options={data.options} />
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
