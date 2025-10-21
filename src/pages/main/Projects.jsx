import React from 'react';
import '../../styles/projects.scss';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className="projects_inner">
                <h1 className='projects_title'>Категории проектов</h1>
                <p className='projects_subtitle'>Мы приветствуем все проекты, которые соответствуют научной методологии и демонстрируют креативность, оригинальность и навыки решения проблем</p>
                {/* <div className="ageGroup">
                    <h1 className='ageGroup_title'>Возрастные группы</h1>
                    <div className="groups">
                        <div className="items">
                            <h1>Младшая группа </h1>
                            <span>(13 - 15 лет)</span>
                            <img src="src/assets/student.png" alt="" />
                        </div>
                        <div className="items">
                            <h1>Старшая группа</h1>
                            <span>(16 - 18 лет)</span>
                            <img src="src/assets/man.png" alt="" />
                        </div>
                    </div>
                </div> */}
                {/* <img src="src/assets/Vector.png" alt="" className='img' /> */}
                <div className="majors">
                    <h1>Основные направления</h1>
                    <span>STEM</span>
                    <div className="groups">
                        <div className="items">
                            <h1>Наука</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/scientist.png?raw=true" alt="" />
                        </div>
                        <div className="items">
                            <h1>Технология</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/coder.png?raw=true" alt="" />
                        </div>
                        <div className="items">
                            <h1>Инженерия</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/engineer.png?raw=true" alt="" />
                        </div>
                        <div className="items">
                            <h1>Математика</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/mather.png?raw=true" alt="" />
                        </div>
                    </div>
                    <p>Остальные направления</p>
                    <div className="groups">
                        <div className="subitems">
                            <h1>Экология и социальные науки</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/eco.png?raw=true" alt="" />
                        </div>
                        <div className="subitems">
                            <h1>Междисциплинарные проекты</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/field2.png?raw=true" alt="" />
                        </div>
                        <div className="subitems">
                            <h1>Инновационные и креативные
                                исследования</h1>
                            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/field3.png?raw=true" alt="" />
                        </div>
                    </div>
                    {/* <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/Topology-1.png?raw=true" alt="" className="topology1" /> */}
                    <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/Topology-2.png?raw=true" alt="" className="topology2" />
                    <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/Topology-3.png?raw=true" alt="" className="topology3" />
                </div>
                <img src="src/assets/Vector.png" alt="" className='img' />
                <div className="awards">
                    <h1 className='awards_title'>🏆 Награды и признание</h1>
                    <div className="awards_inner">
                        <div className="awards_container">
                            <div className="item">
                                <h1>🥇 1 место — Главный победитель Национальной научной ярмарки 2025</h1>
                                <p>Присуждается за проект, отличающийся выдающейся научной глубиной, оригинальностью и практическим значением.</p>
                            </div>
                            <div className="item">
                                <h1>🥈 2 место — Награда за выдающееся исследование</h1>
                                <p>Вручается за работу, демонстрирующую продуманную методологию, креативность и высокий уровень анализа.</p>
                            </div>
                            <div className="item">
                                <h1>🥉 3 место — Награда за инновации и креативность</h1>
                                <p>Отмечает проект или команду, проявившую оригинальный подход и яркую научную презентацию.</p>
                            </div>
                            <div className="item">
                                <h1>Сертификаты участников</h1>
                                <p>Все участники получат официальный сертификат об участии, подтверждающий их вклад в развитие науки, технологий и инноваций в Кыргызстане.</p>
                            </div>
                            <div className="item">
                                <h1>Публикации и признание</h1>
                                <p>Проекты победителей будут опубликованы на официальном сайте KG-SEF и представлены в нашем Instagram-аккаунте, чтобы вдохновлять новое поколение исследователей по всей стране.</p>
                            </div>
                        </div>
                        {/* <p className="awards_subtitle">И много других наград</p> */}
                    </div>
                </div>
                <div className="projects_info">
                    <span>
                        Мы приветствуем все проекты, которые соответствуют научной методологии и демонстрируют креативность, оригинальность и навыки решения проблем.
                    </span>
                </div>
            </div>
            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/frame1.png?raw=true" alt="" className="frame1" />
            <img src="https://github.com/Scr00b1e/kg.sef/blob/master/src/assets/frame2.png?raw=true" alt="" className="frame2" />
        </div>
    );
};

export default Projects;