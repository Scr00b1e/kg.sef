import React from 'react';
import '../styles/projects.scss';

const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects_inner">
                <h1 className='projects_title'>Категории проектов</h1>
                <p className='projects_subtitle'>Мы приветствуем все проекты, которые соответствуют научной методологии и демонстрируют креативность, оригинальность и навыки решения проблем</p>
                <div className="ageGroup">
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
                </div>
                <img src="src/assets/Vector.png" alt="" className='img' />
                <div className="majors">
                    <h1>Основные направления</h1>
                    <span>STEM</span>
                    <div className="groups">
                        <div className="items">
                            <h1>Наука</h1>
                            <img src="src/assets/scientist.png" alt="" />
                        </div>
                        <div className="items">
                            <h1>Технология</h1>
                            <img src="src/assets/coder.png" alt="" />
                        </div>
                        <div className="items">
                            <h1>Инженерия</h1>
                            <img src="src/assets/engineer.png" alt="" />
                        </div>
                        <div className="items">
                            <h1>Математика</h1>
                            <img src="src/assets/mather.png" alt="" />
                        </div>
                    </div>
                    <p>Остальные направления</p>
                    <div className="groups">
                        <div className="subitems">
                            <h1>Экология и социальные науки</h1>
                            <img src="src/assets/eco.png" alt="" />
                        </div>
                        <div className="subitems">
                            <h1>Междисциплинарные проекты</h1>
                            <img src="src/assets/field2.png" alt="" />
                        </div>
                        <div className="subitems">
                            <h1>Инновационные и креативные
                                исследования</h1>
                            <img src="src/assets/field3.png" alt="" />
                        </div>
                    </div>
                    <img src="src/assets/Topology-1.png" alt="" className="topology1" />
                    <img src="src/assets/Topology-2.png" alt="" className="topology2" />
                    <img src="src/assets/Topology-3.png" alt="" className="topology3" />
                </div>
                <img src="src/assets/Vector.png" alt="" className='img' />
                <div className="awards">
                    <h1 className='awards_title'>Специальные награды</h1>
                    <div className="awards_inner">
                        <div className="awards_container">
                            <div className="item">
                                <h1>Лучшая девушка-учёный</h1>
                                <img src="src/assets/girl.png" alt="" />
                            </div>
                            <div className="item">
                                <h1>Лучший проект по устойчивому развитию</h1>
                                <img src="src/assets/graph.png" alt="" />
                            </div>
                            <div className="item">
                                <h1>Самый инновационный проект</h1>
                                <img src="src/assets/idea.png" alt="" />
                            </div>
                        </div>
                        <p className="awards_subtitle">И много других наград</p>
                    </div>
                </div>
                <div className="projects_info">
                    <span>
                        Мы приветствуем все проекты, которые соответствуют научной методологии и демонстрируют креативность, оригинальность и навыки решения проблем.
                    </span>
                </div>
            </div>
            <img src="src/assets/frame1.png" alt="" className="frame1" />
            <img src="src/assets/frame2.png" alt="" className="frame2" />
        </div>
    );
};

export default Projects;