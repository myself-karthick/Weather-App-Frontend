import temp_max from '../assets/icons/max_temperature.png';
import temp_min from '../assets/icons/min_temperature.png';
import humidity from '../assets/icons/humidity.png';
import pressure from '../assets/icons/pressure.png';

const Info = ({ data }) => {

  return (
    <div className="info">
      <div className="box">
        <div className='box__data'>
          <img src={temp_min} alt='temp_min' width={25} height={25} /><p>{data.temp_min + '°' + data.type}</p>
        </div>
        <div className='box__name'>
          <p>min temp</p>
        </div>
      </div>
      <div className="box">
        <div className='box__data'>
          <img src={temp_max} alt='temp_max' width={25} height={25} /><p>{data.temp_max + '°' + data.type}</p>
        </div>
        <div className='box__name'>
          <p>max temp</p>
        </div>
      </div>
      <div className="box">
        <div className='box__data'>
          <img src={humidity} alt='humidity' width={25} height={25} /><p>{data.humidity+' %'}</p>
        </div>
        <div className='box__name'>
          <p>humidity</p>
        </div>
      </div>
      <div className="box">
        <div className='box__data'>
          <img src={pressure} alt='pressure' width={25} height={25} /><p>{data.pressure+' hPa'}</p>
        </div>
        <div className='box__name'>
          <p>pressure</p>
        </div>
      </div>
    </div>
  )
}

export default Info