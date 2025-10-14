import React from 'react';
import '../../styles/sponsors.scss';

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <div className="container">
                <div className='sponsors_content'>
                    <div className="sponsors_words">
                        <h1 className='sponsors_title'>Спонсоры и Партнёры</h1>
                        <p className='sponsors_text'>Благодарим наших партнёров за поддержку науки и инженерии в Кыргызстане. Благодаря  им участники могут исследовать, создавать инновации и представлять свои проекты на  KG.SEF</p>
                    </div>
                    <div className="sponsors_cards">
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                        <div className="sponsors_item">
                            <img src="src/assets/auca.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="src/assets/looper-3.png" alt="" className='sponsors_looper'/>
        </div>
    );
};

export default Sponsors;