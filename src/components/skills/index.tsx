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

                    <strong>Linguagens:</strong>
                    <div>
                        <img src="https://img.shields.io/badge/Javascript-grey?style=for-the-badge&logo=javascript" alt="" />
                        
                        <img src="https://img.shields.io/badge/Typescript-grey?style=for-the-badge&logo=typescript" alt="" />

                        <img src="https://img.shields.io/badge/Node.js-grey?style=for-the-badge&logo=node.js" alt="" />

                        <img src="https://img.shields.io/badge/HTML-grey?style=for-the-badge&logo=html5" alt="" />

                        <img src="https://img.shields.io/badge/CSS-grey?style=for-the-badge&logo=css" alt="" />
                    </div>

                    <strong>Bibliotecas/Frameworks:</strong>
                    <div>
                        <img src="https://img.shields.io/badge/React.js-grey?style=for-the-badge&logo=react" alt="" />

                        <img src="https://img.shields.io/badge/Next.js-grey?style=for-the-badge&logo=next.js" alt="" />

                        <img src="https://img.shields.io/badge/Tailwind%20css-grey?style=for-the-badge&logo=tailwindcss" alt="" />

                        <img src="https://img.shields.io/badge/Express-grey?style=for-the-badge&logo=express" alt="" />

                        <img src="https://img.shields.io/badge/Expo-grey?style=for-the-badge&logo=Expo" alt="" />
                    </div>

                    <strong>Deploy:</strong>
                    <div>
                        <img src="https://img.shields.io/badge/Github-grey?style=for-the-badge&logo=github" alt="" />

                        <img src="https://img.shields.io/badge/Vercel-grey?style=for-the-badge&logo=vercel" alt="" />

                        <img src="https://img.shields.io/badge/Netlify-grey?style=for-the-badge&logo=netlify" alt="" />
                    </div>

                    <strong>Ferramentas:</strong>
                    <div>
                        <img src="https://img.shields.io/badge/NPM-grey?style=for-the-badge&logo=npm" alt="" />

                        <img src="https://img.shields.io/badge/Git-grey?style=for-the-badge&logo=git" alt="" />

                        <img src="https://img.shields.io/badge/Vscode-grey?style=for-the-badge&logo=sublime" alt="" />

                        <img src="https://img.shields.io/badge/Vite-grey?style=for-the-badge&logo=vite" alt="" />
                    </div>

                    <strong>Database:</strong>
                    <div>
                        <img src="https://img.shields.io/badge/API%20Rest-grey?style=for-the-badge&logo=" alt="" />

                        <img src="https://img.shields.io/badge/CMS-grey?style=for-the-badge&logo=" alt="" />

                        <img src="https://img.shields.io/badge/Prisma-grey?style=for-the-badge&logo=prisma" alt="" />

                        <img src="https://img.shields.io/badge/Mongo_db-grey?style=for-the-badge&logo=mongodb" alt="" />
                    </div>
                </aside>

                <aside className='design-details'>
                    <h2>Design</h2>
                    <ul>
                        <li><strong>Fundamentos:</strong> Teoria das Cores, Tipografia, Composição e Layout;</li>
                        <li><strong>Web Design:</strong> Mobile First e UI Design;</li>
                        <li><strong>UX Técnico:</strong> Jornada do Usuário, Wireframes e protótipos;</li>
                        <li><strong>Ferramentas:</strong> Figma, GIMP e Canva.</li>
                    </ul>
                </aside>
            </section>
        </div>
    )
}