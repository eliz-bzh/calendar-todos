import { React } from 'react';
import { months } from '../../constants';

const DateHeader = ({ date, previousMonth, nextMonth }) =>{

    return(
        <div className='header'>
            <button onClick={()=>previousMonth()}>-</button>
            <span className='month-name'>{months[date.getMonth()]}, {date.getFullYear()}</span>
            <button onClick={()=>nextMonth()}>+</button>
        </div>
    )
}

export default DateHeader;