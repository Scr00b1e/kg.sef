import React from 'react';
import '../styles/blockOne.scss';

const BlockOne = () => {
    return (
        <div className="container">
            <div className='blockOne'>
                <div className='blockOne_content'>
                    <div className="blockOne_words">
                        <h1 className='blockOne_title'>Кыргызстанская научно-инженерная ярмарка</h1>
                        <p className='blockOne_text'>Ярмарка для выдающихся личностей которые хотят увидеть что то новое</p>
                    </div>
                    <button className='blockOne_btn'>Участвовать</button>
                </div>
            </div>
        </div>
    );
};

export default BlockOne;