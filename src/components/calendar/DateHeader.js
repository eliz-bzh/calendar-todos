import { React } from 'react';
import { months } from '../../constants';

const DateHeader = ({ date, previousMonth, nextMonth }) =>{

    return(
        <div className='header'>
            <button className='btn btn-outline-secondary' onClick={()=>previousMonth()}><i class="bi bi-arrow-left"/></button>
            <span className='month-name'>{months[date.getMonth()]}, {date.getFullYear()}</span>
            <button className='btn btn-outline-secondary' onClick={()=>nextMonth()}><i class="bi bi-arrow-right"/></button>
        </div>
    )
}

export default DateHeader;