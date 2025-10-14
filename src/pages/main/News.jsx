import React from 'react';
import '../../styles/news.scss';

const News = () => {
    return (
        <div className='news'>
            <div className="news_cover">
                <div className="container">
                    <div className='news_content'>
                        <div className="news_words">
                            <h1 className='news_title'>Новости</h1>
                            <p className='news_text'>Следите за последними объявлениями, дедлайнами и событиями KG.SEF. 
В нашем Instagram и Telegram вы найдете новости о дедлайнах, мастер-классах, интервью с участниками
и специальные мероприятия.</p>
                        </div>
                        <div className="news_links">
                            <div className="news_item">
                                <img src="src/assets/telegram.png" alt="" />
                                <h2>Telegram</h2>
                            </div>
                            <div className="news_item">
                                <img src="src/assets/telegram.png" alt="" />
                                <h2>Instagram</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;