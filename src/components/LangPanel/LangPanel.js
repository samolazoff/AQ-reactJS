import { useDispatch } from 'react-redux';

import {getEngTxt, getRuTxt} from '../../store/slices/langSlice';

import './LangPanel.scss';

const LangPanel = () => {
    const dispatch = useDispatch();
    return (
        <div className="lang-panel">
            <ul className='lang-panel-items flex-r'>
                <li className='lang-panel_item'>
                    <button id='btn-RU' className='btn-lang' onClick={() => dispatch(getRuTxt())}>Рус</button>
                </li>
                <li>
                    <button id='btn-EN' className='btn-lang' onClick={() => dispatch(getEngTxt())}>Eng</button>
                </li>
            </ul>
        </div>
    );
};

export default LangPanel;