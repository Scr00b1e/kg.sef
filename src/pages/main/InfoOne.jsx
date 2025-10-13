import React from 'react';
import '../../styles/infoOne.scss';

const InfoOne = () => {
    return (
        <div className='infoOne'>
            <div className="infoOne_content">
                <div className="container">
                    <div className="infoOne_inner">
                        <h1 className='infoOne_title'>Информация о нас</h1>
                        <div className="infoOne_cards">
                            <div className="infoOne_item">
                                <div className="infoOne_words">
                                    <img src="src/assets/neurology.png" alt="" />
                                    <h3>Стратегия 2025–2027</h3>
                                </div>
                                <p>KG.SEF стремится стать ведущей национальной научной ярмаркой
                                    и отправить первую делегацию на ISEF к 2027 году
                                </p>
                            </div>
                            <div className="infoOne_item">
                                <div className="infoOne_words">
                                    <img src="src/assets/biotech.png" alt="" />
                                    <h3>Научный комитет </h3>
                                </div>
                                <p>SRC обеспечивает соответствие всех проектов этическим, безопасным
                                    и правилам ISEF
                                </p>
                            </div>
                            <div className="infoOne_item">
                                <div className="infoOne_words">
                                    <img src="src/assets/text_compare.png" alt="" />
                                    <h3>История</h3>
                                </div>
                                <p>KG.SEF был создан, чтобы дать кыргызским школьникам возможность участвовать
                                    в международных научных конкурсах,
                                    так как Кыргызстан пока не представлен
                                    на ISEF
                                </p>
                            </div>
                            <div className="infoOne_item">
                                <div className="infoOne_words">
                                    <img src="src/assets/handshake.png" alt="" />
                                    <h3>Команда</h3>
                                </div>
                                <p>Наша команда состоит из увлечённых педагогов, специалистов в области STEM
                                    и волонтёров, поддерживающих молодых ученых
                                </p>
                            </div>
                            <div className="infoOne_item">
                                <div className="infoOne_words">
                                    <img src="src/assets/location_searching.png" alt="" />
                                    <h3>Цели</h3>
                                </div>
                                <p>Вдохновлять школьников к науке
                                    и инженерии, готовить к соревнованиям, развивать критическое мышление
                                    и креативность.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoOne;