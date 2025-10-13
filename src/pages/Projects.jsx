import React from 'react';
import '../styles/projects.scss';

const Projects = () => {
    return (
        <div className='projects'>
            <div className="container">
                <div className="projects_inner">
                    <h1 className='projects_title'>Категории проектов</h1>
                    <p className='projects_subtitle'>Мы приветствуем все проекты, которые соответствуют научной методологии и демонстрируют креативность, оригинальность и навыки решения проблем</p>
                    <div className="ageGroup">
                        <h1>Возрастные группы</h1>
                        <div className="groups">
                            <div className="items">
                                <h1>Младшая группа </h1>
                                <span>(13 - 15 лет)</span>
                                <img src="" alt="" />
                            </div>
                            <div className="items">
                                <h1>Старшая группа</h1>
                                <span>(16 - 18 лет)</span>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;