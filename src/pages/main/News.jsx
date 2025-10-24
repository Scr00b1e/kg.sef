import React from 'react';
import '../../styles/news.scss';

const News = React.forwardRef(function News(_props, ref) {
    return (
        <div className='news' ref={ref}>
            <div className="news_cover">
                <div className="container">
                    <div className='news_content'>
                        <div className="news_words">
                            <h1 className='news_title'>Новости</h1>
                            <p className='news_text'>Следите за последними объявлениями, дедлайнами и событиями KG.SEF.
                                В нашем <a href="https://www.instagram.com/kyrgyzstansef?igsh=MTQyaTJiMG5nYXhoYQ==" target='_blank'>Instagram</a> вы найдете новости о дедлайнах, мастер-классах, интервью с участниками
                                и специальные мероприятия.</p>
                        </div>
                        <div className="news_links">
                            {/* <div className="news_item">
                                <img src="src/assets/image_1.png" alt="" />
                                <h2>Telegram</h2>
                            </div> */}
                            <div className="news_item">
                                <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/image_2.png?raw=true" alt="" />
                                <h2>Instagram</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default News;