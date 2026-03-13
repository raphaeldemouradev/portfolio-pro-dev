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
    title: "Catalogo de Filmes.",
    description: "Aplicação desenvolvida em React que consome dados em tempo real via API (TMDB).",
    link: "https://catalogo-logtv.netlify.app/",
  },
  {
    id: "2",
    image: wether,
    title: "Previsão do Tempo",
    description: "Criado com JavaScript, está integrado com a API OpenWeather para fornecer dados em tempo real e previsão completa para 5 dias.",
    link: ""
  }
];
