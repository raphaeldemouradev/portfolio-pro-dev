import './style.css'

export default function Contato() {
    return (
        <div className="section-contato">
            <div>
                <h1 className="title-contato">Contato</h1>
            </div>

            <section>
                <form action="server.js" method="post" autoComplete="on">
                    <div>
                        <input type="text" name="nome" id="inome" placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <input type="email" name="email" id="iemail" placeholder="Digite seu e-mail" />
                    </div>
                    <div>
                        <textarea name="msg" id="imsg" rows={5} maxLength={500} placeholder="Digite sua mensagem"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar" id="submit" />
                    </div>
                </form>

                <div className="midias-sociais">
                    <a href="https://www.linkedin.com/in/raphael-moura-dev/" target='_blank'>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/raphaeldemouradev" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}