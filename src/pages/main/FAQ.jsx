import React from 'react';
import '../../styles/faqs.scss';

const FAQ = () => {
    return (
        <div className='faqs'>
            <div className="container">
                <div className='faqs_content'>
                    <h1 className='faqs_title'>Часто задаваемые вопросы</h1>
                    <div className="faqs_cards">
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Кто может участвовать?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Сколько стоит участие?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Где и когда проходит финал?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Как выбираются победители?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Нужно ли знание английского?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Есть ли награды или стипендии?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Будут ли сертификаты для участников?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Можно ли участвовать  командой или только индивидуально?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Какие правила безопасности действуют?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Можно ли подавать проекты онлайн?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Могут ли наставники помогать участникам?</h2>
                            </div>
                            <div className='faqs_accordion'>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="src/assets/40.png" alt="" className='faqs_1' />
            <img src="src/assets/40.png" alt="" className='faqs_2' />
        </div>
    );
};

export default FAQ;