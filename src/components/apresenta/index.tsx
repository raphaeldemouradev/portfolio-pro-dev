import RaphaelImg from '../../assets/img-raphael-dev.png';
import './style.css'

export default function Apresenta() {
    return (
        <div className='section-apresenta'>
            <nav></nav>

            <section>
                <div>
                    <img src={RaphaelImg} alt="img-raphael" className='foto-img'/>
                </div>
                <div>
                    <h1>Raphael de Moura</h1>
                    <p>Desenvolvedor Front-end</p>
                </div>
            </section>
        </div>
    )
}