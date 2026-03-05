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
                        <li><strong>Cloud & Deploy:</strong> Github Pages, Netlifly e Vercel;</li>
                        <li><strong>Ferramentas:</strong> npm, Git, GitHub e VITE.</li>
                    </ul>
                </aside>

                <aside className='design-details'>
                    <h2>Design</h2>
                    <ul>
                        <li><strong>Web Design:</strong></li>
                        <li><strong>UX Técnico:</strong></li>
                        <li><strong>Fundamentos:</strong></li>
                        <li><strong>Ferramentas:</strong></li>
                    </ul>
                </aside>
            </section>
        </div>
    )
}