import './style.css'

export default function Skills() {
    return (
        <div className="section-skills">
            <div>
                <h1 className='title-skill'>Habilidades</h1>
            </div>

            <section className='container-skill'>
                <aside className='front-details'>
                    <h2>Front-end</h2>
                    <ul>
                        <li><strong>Linguagens:</strong> Javascript, Typescript, Node.js, HTML5 e CSS3;</li>
                        <li><strong>Bibliotecas/Frameworks:</strong> Tailwind css, Next.js, React.js, Expo e Express;</li>
                        <li><strong>Dados e API:</strong> Consumo de APIs REST, Integração com CMS (Headless);</li>
                        <li><strong>Libs:</strong> (SSG, SSR, ISR, SPA);</li>
                        <li><strong>Deploy:</strong> Github Pages, Netlifly e Vercel;</li>
                        <li><strong>Ferramentas:</strong> npm, Git, GitHub, VITE e VScode.</li>
                    </ul>
                </aside>

                <aside className='design-details'>
                    <h2>Design</h2>
                    <ul>
                        <li><strong>Fundamentos:</strong> Teoria das Cores, Tipografia, Composição e Hierarquia Visual;</li>
                        <li><strong>Web Design:</strong> Mobile First, Desenvolvimento Responsivo e UI Design;</li>
                        <li><strong>UX Técnico:</strong> Jornada do Usuário, Wireframes e protótipos;</li>
                        <li><strong>Ferramentas:</strong> Figma, GIMP e Canva.</li>
                    </ul>
                </aside>
            </section>
        </div>
    )
}