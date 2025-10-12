import React from 'react';
import '../styles/blockOne.scss';

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
                        <button className='blockOne_button'>Учавствовать</button>
                    </div>
                    <div className='blockOne_img'>
                        <img src="src/assets/students.png" alt="" />
                    </div>
                </div>
                <div className='blockOne_middle'>
                    <p>Мы продвигаем науку и инженерное дело
                        в Кыргызстане, вдохновляя школьников раскрывать свой потенциал</p>
                </div>
                <div className="blockOne_footer">
                    <img src="src/assets/lady.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlockOne;