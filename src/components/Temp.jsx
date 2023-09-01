import Info from './Info';

const Temp = ({ data, date, toggleType }) => {
    let Days = ['Sun', 'Mon', 'Tues',
        'Wed', 'Thurs', 'Fri', 'Sat'];

    let Months = ['Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];

    const displayDate = Months[date.getMonth()] + ' ' + date.getDate() + ' ' + Days[date.getDay()] + ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');

    const handleClick = () => {
        if(data.type === 'C'){
            toggleType('C')
        }
        else {
            toggleType('F')
        }
    }

    return (
        <div className="temperature">
            <div className='temp__desc'>
                <div className="city__desc">
                    <div className='city'>
                        <p>{data.city}</p>
                    </div>
                    <div className="time">
                        {displayDate}
                    </div>
                </div>
                <div className='temperature__container'>
                    <div className='temperature__display'>
                        <h1 className='temp__value' onClick={handleClick}>
                            {data?.temp}°{data.type}
                        </h1>
                    </div>
                    <div className='weather__display'>
                        <div className='weather__image'>
                            <img className='weather__logo' src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`} alt="weather" width={60} height={60} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='temperature__description'>
                <p>
                {data.description}
                </p>
            </div>
            <Info data={data} />
        </div>
    )
}

export default Temp