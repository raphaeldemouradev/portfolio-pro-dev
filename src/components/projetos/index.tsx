import { projetos } from '../../database';
import './style.css'

export default function Projetos() {
    return (
        <div className='section-projetos'>
            <div>
                <h1 className='title-projetos'>Projetos</h1>
            </div>

            <section className='container-grade'>
                
                <aside className='row-line'>
                    <div className='grade-one'>
                        {projetos.slice(0, 3).map((item) => (
                            <div className='box' key={item.id}>
                                <div className="head-quadro">
                                    <img className="banner" src={item.image} alt="img-movie" />
                                </div>
                                <div className='category'>
                                    <p>{item.title}</p>
                                </div>
                                <div className="description-area">
                                    <p className="descricao-projeto">{item.description}</p>
                                </div>
                                <div className='btn-area'>
                                    <button className="button-projeto">
                                        <a href={item.link} target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                <aside className='row-line'>
                    <div className='grade-two'>
                        {projetos.slice(3, 6).map((item) => (
                            <div className='box' key={item.id}>
                                <div className="head-quadro">
                                    <img className="banner" src={item.image} alt="img-movie" />
                                </div>
                                <div className='category'>
                                    <p>{item.title}</p>
                                </div>
                                <div className="description-area">
                                    <p className="descricao-projeto">{item.description}</p>
                                </div>
                                <div className='btn-area'>
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