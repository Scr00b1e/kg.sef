import React from 'react';
import '../../styles/sponsors.scss';

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <div className="container">
                <div className='sponsors_content'>
                    <div className="sponsors_words">
                        <h1 className='sponsors_title'>Новости</h1>
                        <p className='sponsors_text'>Следите за последними объявлениями, дедлайнами и событиями KG.SEF. 
В нашем Instagram и Telegram вы найдете новости о дедлайнах, мастер-классах, интервью с участниками
и специальные мероприятия.</p>
                    </div>
                    <div className="sponsors_links">
                        <div className="sponsors_item">
                            <h2>Telegram</h2>
                        </div>
                        <div className="sponsors_item">
                            <h2>Instagram</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;