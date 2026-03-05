import Apresenta from "./components/apresenta"
import Contato from "./components/contato"
import Projetos from "./components/projetos"
import Skills from "./components/skills"


function App() {
  return (
    <div>
        <Apresenta />
        <Projetos />
        <Skills />
        <Contato />
        <footer>
          <p>© 2026 Raphael.Dev - Todos os direitos reservados.</p>
    </footer>
    </div>
  )
}

export default App
