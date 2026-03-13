import './style.css'

import { projetos } from '../../database';

export default function Projetos() {
    return (
        <div className='section-projetos'>
            <div>
                <h1 className='title-projeto'>Projetos</h1>
            </div>

            <section className='container-grade'>
                <aside>
                    <div className='grade-one'>
                        {projetos.slice(0, 3).map((item) => (
                            <div className='box' key={item.id}>
                                <div className="head-quadro">
                                    <img className="banner" src={item.image} alt="img-movie" />
                                </div>
                                <div className="body-quadro">
                                    <p>{item.title}</p>
                                    <p className="descricao-projeto">{item.description}</p>
                                </div>
                                <div className='div-button'>
                                    <button className="button-projeto">
                                        <a href={item.link} target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                <aside>
                    <div className='grade-two'>
                        {projetos.slice(3, 6).map((item) => (
                            <div className='box' key={item.id}>
                                <div className="head-quadro">
                                    <img className="banner" src={item.image} alt="img-movie" />
                                </div>
                                <div className="body-quadro">
                                    <p className="descricao-projeto">{item.description}</p>
                                </div>
                                <div>
                                    <button className="button-projeto">
                                        <a href={item.link} target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </section>
        </div>
    )
}