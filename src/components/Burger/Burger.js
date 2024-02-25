import { useDispatch, useSelector } from 'react-redux';

import './Burger.scss';
import { changeClasses } from '../../store/slices/burgerSlice';

const Burger = () => {

    const burgerClasses = useSelector((state) => state.burger.burgerClasses)
    const dispatch = useDispatch();

    return (
        <div 
            className={burgerClasses.join(' ')} 
            onClick={() => dispatch(changeClasses())}
        >
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
    );
};

export default Burger;