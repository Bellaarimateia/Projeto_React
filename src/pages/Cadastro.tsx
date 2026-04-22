import { useState } from "react";
import { Link } from "react-router";
import "./Cadastro.css";

type Usuario = {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cidade: string;
  observacoes: string;
};

export function Cadastro() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cidade: "",
    observacoes: "",
  });

  const [jsonGerado, setJsonGerado] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  function finalizarCadastro(e: React.FormEvent) {
    e.preventDefault();

    const objetoJson = {
      ...usuario,
    };

    const jsonFormatado = JSON.stringify(objetoJson, null, 2);

    setJsonGerado(jsonFormatado);

    console.log("JSON gerado do usuário:");
    console.log(objetoJson);
  }

  return (
    <div className="cadastro-page">
      <div className="topo-acoes">
        <Link to="/" className="voltar-link">
          ← Voltar
        </Link>
      </div>

      <div className="cadastro-conteudo">
        <h1 className="titulo-pagina">Realize o seu Cadastro!</h1>

        <div className="cadastro-card">
          <p className="subtitulo">
            Preencha os dados abaixo para concluir o cadastro.
          </p>

          <form onSubmit={finalizarCadastro} className="cadastro-form">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={usuario.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone (opcional)</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={usuario.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={usuario.dataNascimento}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Digite sua cidade"
                value={usuario.cidade}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="observacoes">Outros dados relevantes</label>
              <textarea
                id="observacoes"
                name="observacoes"
                placeholder="Informe algo importante sobre o usuário"
                value={usuario.observacoes}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <button type="submit" className="salvar-btn">
              Finalizar Cadastro
            </button>
          </form>
        </div>

        {jsonGerado && (
          <div className="json-card">
            <h3>JSON Gerado</h3>
            <pre>{jsonGerado}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cadastro;