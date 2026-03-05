import movieLogo from '../assets/movie-logo.png';
import wether from '../assets/weather.png';

export interface Projeto {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const projetos: Projeto[] = [
  {
    id: "1",
    image: movieLogo,
    title: "Catalogo de Filmes",
    description: "Catalogo de Filmes, feito com React e JavaScript com API integrada.",
    link: "https://catalogo-logtv.netlify.app/",
  },
  {
    id: "2",
    image: wether,
    title: "Previsão do Tempo",
    description: "",
    link: ""
  }
];
