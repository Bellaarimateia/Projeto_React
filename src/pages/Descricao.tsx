import "./Descricao.css";
import isabella from "../assets/isabella.jpg";
import jamerson from "../assets/jamerson.jpg";
import back from "../assets/button-back.png";

function Descricao() {
  return (
    <div className="pagina">

      {/* CARD 1 */}
      <div className="card">
        <img src={isabella} alt="Isabella" className="foto" />

        <h1>Isabella Arimateia</h1>
        <p className="subtitulo">(Analista de Engenharia - Stellantis)</p>

        <h2>Sobre mim</h2>
        <p>
          Sou dedicada, gosto de aprender coisas novas e estou iniciando meus estudos em desenvolvimento web.
        </p>

        <h2>Objetivos</h2>
        <p>
          Aprender React e desenvolver projetos cada vez melhores.
        </p>

        <h2>Formação</h2>
        <p>
            Técnico Montagem Automotiva <br />
            Discente de Engenharia de Software 

        </p>

        <h2>Habilidades</h2>
        <p>
          HTML, CSS e JavaScript (básico)<br />
          React (iniciante)<br />
          Excel aplicado a dados<br />
          Sistemas embarcados <br />
        </p>


      </div>

      {/* CARD 2 */}
      <div className="card">
        <img src={jamerson} alt="Jamerson" className="foto" />

        <h1>Jamerson Oliveira</h1>
        <p className="subtitulo">(Estagiário da Manufatura - Nissan)</p>

        <h2>Sobre mim</h2>
        <p>
          Gosto de tecnologia e trabalhar em equipe, sempre buscando evolução.
        </p>

        <h2>Objetivos</h2>
        <p>
          Aprender React e desenvolver projetos cada vez melhores.
        </p>

        <h2>Formação</h2>
        <p>
            Discente de Engenharia de Software
        </p>

        <h2>Habilidades</h2>
        <p>
           VBA <br />
           EXCEL <br />
           XAML <br />
           C#
        </p>

      </div>

      {/* Button-Back */}

      <img src={back} alt="Voltar" className="botao-voltar" />
    

    </div>


  );
}

export default Descricao;