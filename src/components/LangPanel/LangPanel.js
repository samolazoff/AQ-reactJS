import './LangPanel.scss';

const LangPanel = () => {
    return (
        <div className="lang-panel">
            <ul className='lang-panel-items flex-r'>
                <li className='lang-panel_item'>
                    <button id='btn-RU' className='btn-lang' >Рус</button>
                </li>
                <li>
                    <button id='btn-EN' className='btn-lang' >Eng</button>
                </li>
            </ul>
        </div>
    );
};

export default LangPanel;