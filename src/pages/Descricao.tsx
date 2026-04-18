import "./Descricao.css";
import { Link } from "react-router";
import isabella from "../assets/isabella.jpg";
import jamerson from "../assets/jamerson.jpg";

export function Descricao() {
  return (
    <div className="descricao-page">
      <div className="descricao-topo">
        <Link to="/" className="voltar-link">
          ← Voltar
        </Link>
      </div>

      <div className="titulo-area">
        <h1>Conheça Nossa Equipe!</h1>
        <p>
          Desenvolvedores em formação, apaixonados por tecnologia e inovação.
        </p>
      </div>

      <div className="pagina">
        <div className="card">
          <img src={isabella} alt="Isabella" className="foto" />

          <h1>Isabella Arimateia</h1>
          <p className="subtitulo">(Analista de Engenharia - Stellantis)</p>

          <h2>Sobre mim</h2>
          <p>
            Sou dedicada, gosto de aprender coisas novas e estou iniciando meus
            estudos em desenvolvimento web.
          </p>

          <h2>Objetivos</h2>
          <p>Aprender React e desenvolver projetos cada vez melhores.</p>

          <h2>Formação</h2>
          <p>
            Técnico Montagem Automotiva <br />
            Discente de Engenharia de Software
          </p>

          <h2>Habilidades</h2>
          <p>
            HTML, CSS e JavaScript (básico) <br />
            React (iniciante) <br />
            Excel aplicado a dados <br />
            Sistemas embarcados
          </p>
        </div>

        <div className="card">
          <img src={jamerson} alt="Jamerson" className="foto" />

          <h1>Jamerson Oliveira</h1>
          <p className="subtitulo">(Estagiário da Manufatura - Nissan)</p>

          <h2>Sobre mim</h2>
          <p>
            Gosto de tecnologia e trabalhar em equipe, sempre buscando evolução.
          </p>

          <h2>Objetivos</h2>
          <p>Aprender React e desenvolver projetos cada vez melhores.</p>

          <h2>Formação</h2>
          <p>Discente de Engenharia de Software</p>

          <h2>Habilidades</h2>
          <p>
            VBA <br />
            Excel <br />
            XAML <br />
            C#
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descricao;