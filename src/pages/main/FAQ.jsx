import React from 'react';
import '../../styles/faqs.scss';

const FAQ = () => {
    const faqItems = [
        // { question: "Кто может участвовать?", answer: "Старшеклассники 13–18 лет" },
        { question: "Сколько стоит участие?", answer: "Участие бесплатное" },
        { question: "Где и когда проходит финал?", answer: "Финал пройдёт в [город, место] [дата]" },
        { question: "Как выбираются победители?", answer: "Финал По оригинальности, научной  методологии и презентации в [город, место] [дата]" },
        { question: "Нужно ли знание английского?", answer: "Рекомендуется для будущего участия на ISEF" },
        { question: "Есть ли награды или стипендии?", answer: "Будут  специальные награды, а финалисты могут получить шанс поехать на ISEF" },
        { question: "Будут ли сертификаты для участников?", answer: "Да, все участники получат электронные  сертификаты" },
        { question: "Можно ли участвовать  командой или только индивидуально?", answer: "Разрешены  индивидуальные и командные проекты (до 3 участников в команде)" },
        { question: "Какие правила безопасности действуют?", answer: "Все проекты должны  соответствовать правилам безопасности SRC и ISEF" },
        { question: "Можно ли подавать проекты онлайн?", answer: "Да, регистрация и  подача проектов осуществляются через онлайн-форму" },
        { question: "Могут ли наставники помогать участникам?", answer: "Да, наставники могут  направлять, но основную работу должны выполнять сами участники" },
    ];

    const [opened, setOpened] = React.useState(() => new Array(faqItems.length).fill(false));
    const onClickOpen = (index) => {
        setOpened(prev => {
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState
        });
    }

    return (
        <div className='faqs'>
            <div className="container">
                <div className='faqs_content'>
                    <h1 className='faqs_title'>Часто задаваемые вопросы</h1>
                    <div className="faqs_cards">
                        {faqItems.map((item, index) => (
                            <div className="faqs_item" key={index}>
                                <div className="faqs_text">
                                    <h2>{item.question}</h2>
                                </div>
                                <div className={`faqs_opened ${opened[index] ? '' : 'displayNone'}`}>
                                    <h2>{item.answer}</h2>
                                </div>
                                <div className='faqs_accordion' onClick={() => onClickOpen(index)}>
                                    <img src="https://raw.githubusercontent.com/Scr00b1e/kg.sef/54677de17c7ba5bf5c44aa62df10bd0aa84c8d50/src/assets/arrow.svg" alt="" className={`faqs_arrow ${opened[index] ? '' : 'is-open'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/40.png?raw=true" alt="" className='faqs_1' />
            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/40.png?raw=true" alt="" className='faqs_2' />
        </div>
    );
};

export default FAQ;