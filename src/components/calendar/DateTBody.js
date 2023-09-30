import { React } from 'react';

const DateTBody = ({ previousDays, currentDays, nextDays, handleClick, currentDate }) => {

    return(
        <ol className='days-grid'>
            {previousDays.map((el, index)=>
                <li key={index} className='calendar-day previous-month-day'><span>{el+1}</span></li>
            )}
            {currentDays.map((el, index)=>
                <li key={index} className={`calendar-day ${(new Date().toLocaleString('en-GB', {dateStyle:'medium'}) === new Date(currentDate.getFullYear(), currentDate.getMonth(), el+1).toLocaleString('en-GB', {dateStyle:'medium'}))?('current-date'):('')}`} onClick={(e)=>handleClick(e, el+1)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span>{el+1}</span></li>
            )}
            {nextDays.map((el, index)=>
                <li key={index} className='calendar-day next-month-day'><span>{el+1}</span></li>
            )}
        </ol>
    )
}

export default DateTBody;