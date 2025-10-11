import React from 'react';
import '../styles/blockOne.scss';

const BlockOne = () => {
    return (
        <div className="container">
            <div className='blockOne'>
                <div className='blockOne_content'>
                    <div className="blockOne_words">
                        <h1 className='blockOne_title'>Вдохновляем новое поколение ученых Кыргызстана</h1>
                        <p className='blockOne_text'>KG.SEF — национальная научно-инженерная ярмарка, где старшеклассники представляют инновационные проекты, развивают научные навыки и готовятся к международным соревнованиям, таким как ISEF.</p>
                    </div>
                    <div className='blockOne_img'>
                        block2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockOne;