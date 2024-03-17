import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './NewsMini.scss';

const NewsMini = () => {
    const titleBlock = useSelector((state) => state.lang.text.pages.news.title);
    const text = useSelector((state) => state.lang.text.pages.news.newsMini);
    return (
        <aside className='app-news-mini'>
            <h2 className="title-block">
                {titleBlock}
            </h2>
            <div className="app-news-mini-wrap flex-c">
                {
                    text.map((elm, idx) => (
                        <Link className="news-mini-item flex-c" id={`news-id-${elm.id}`} key={idx} to={`/news:${elm.id}`}>
                            <h3 className="news-mini-item__data">{elm.data}</h3>
                            <span className="news-mini-item__title">{elm.title}</span>
                        </Link>
                    ))
                }
            </div>
        </aside>
    );
};

export default NewsMini;