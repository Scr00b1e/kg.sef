import React from 'react';
import '../styles/home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_content'>
                <div className="home_words">
                    <h1 className='home_title'>Кыргызстанская научно-инженерная ярмарка</h1>
                    <p className='home_text'>Ярмарка для выдающихся личностей которые хотят увидеть что то новое</p>
                </div>
                <button className='home_btn'>Участвовать</button>
            </div>
        </div>
    );
};

export default Home;