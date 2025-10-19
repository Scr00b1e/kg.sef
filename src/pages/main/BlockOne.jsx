import React from 'react';
import '../../styles/blockOne.scss';

const BlockOne = () => {
    return (
        <div className="container">
            <div className='blockOne'>
                <div className='blockOne_content'>
                    <div className="blockOne_words">
                        <div className="blockOne_info">
                            <h1 className='blockOne_title'>Вдохновляем новое поколение ученых Кыргызстана</h1>
                            <p className='blockOne_text'>KG.SEF — национальная научно-инженерная ярмарка, где старшеклассники представляют инновационные проекты, развивают научные навыки и готовятся к международным соревнованиям, таким как ISEF.</p>
                        </div>
                        <div className="blockOne_numbers">
                            <div className="blockOne_numberOne">
                                <h1>1800</h1>
                                <p>Ярмарок по всему миру</p>
                            </div>
                            <div className="blockOne_numberOne">
                                <h1>175 000</h1>
                                <p>Участников участвующих в ярмарке</p>
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKXhQ_fuOtDiWIXy6YphGiCeumCHQjgi2LkJytsmCzkTI-bw/viewform?usp=header"
                    target='_blank' className='home_link'><button className='blockOne_button'>Участвовать</button></a>
                    </div>
                    <div className='blockOne_img'>
                        <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/students.png?raw=true" alt="" />
                    </div>
                </div>
                <div className='blockOne_middle'>
                    <p>Мы продвигаем науку и инженерное дело
                        в Кыргызстане, вдохновляя школьников раскрывать свой потенциал</p>
                </div>
                <div className="blockOne_footer">
                    <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/lady.png?raw=true" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlockOne;