import React from 'react';
import '../../styles/faqs.scss';

const FAQ = () => {
    const [opened, setOpened] = React.useState(false);

    const onClickOpen = () => {
        setOpened(!opened);
    }

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
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Старшеклассники 13–18 лет</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Сколько стоит участие?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Участие бесплатное</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Где и когда проходит финал?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Финал пройдёт в [город, место] [дата]</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Как выбираются победители?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Финал По оригинальности, научной  методологии и презентации в [город, место] [дата]</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Нужно ли знание английского?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Рекомендуется для будущего участия на ISEF</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Есть ли награды или стипендии?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Будут  специальные награды, а финалисты могут получить шанс поехать на ISEF</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Будут ли сертификаты для участников?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Да, все участники получат электронные  сертификаты</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Можно ли участвовать  командой или только индивидуально?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2> Разрешены  индивидуальные и командные проекты (до 3 участников в команде)</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Какие правила безопасности действуют?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Все проекты должны  соответствовать правилам безопасности SRC и ISEF</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Можно ли подавать проекты онлайн?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Да, регистрация и  подача проектов осуществляются через онлайн-форму</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
                                <img src="src/assets/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="faqs_item">
                            <div className="faqs_text">
                                <h2>Могут ли наставники помогать участникам?</h2>
                            </div>
                            <div className={`faqs_opened ${opened ? '': 'displayNone'}`}>
                                <h2>Да, наставники могут  направлять, но основную работу должны выполнять сами участники</h2>
                            </div>
                            <div className='faqs_accordion' onClick={onClickOpen}>
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