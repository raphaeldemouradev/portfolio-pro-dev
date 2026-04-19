import RaphaelImg from '../../assets/img-raphael-dev.png';
import './style.css'

export default function Apresenta() {
    return (
        <div className='section-apresenta'>
            <nav className='nav-apresenta'></nav>

            <section className='container-flex'>
                <div>
                    <img 
                        src={RaphaelImg} 
                        alt="raphael-img" 
                        fetchPriority='high'
                        loading='eager'
                        className='foto-img'
                    />
                </div>
                <div>
                    <h1 className='title-apresenta'>Raphael de Moura</h1>
                    <p className='profissao-name'>Desenvolvedor Front-end</p>
                </div>
            </section>
        </div>
    )
}