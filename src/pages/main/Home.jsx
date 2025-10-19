import React from 'react';
import '../../styles/home.scss';

const Home = () => {
    return (
        <div className="container">
            <div className='home'>
                <div className='home_content'>
                    <div className="home_words">
                        <h1 className='home_title'>Кыргызстанская научно-инженерная ярмарка</h1>
                        <p className='home_text'>Ярмарка для выдающихся личностей которые хотят увидеть что то новое</p>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKXhQ_fuOtDiWIXy6YphGiCeumCHQjgi2LkJytsmCzkTI-bw/viewform?usp=header"
                    target='_blank' className='home_link'><button className='home_btn'>Участвовать</button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;