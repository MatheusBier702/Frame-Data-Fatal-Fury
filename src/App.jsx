import { useMemo, useState } from "react";
import { dadosFrame } from "./data/frameData";
import "./App.css";



  return (
    <main className="app">
      <header className="barra-topo">
        <div>
          <p className="texto-pequeno">Fatal Fury: City of the Wolves</p>
          <h1>Frame Data</h1>
        </div>

        <div className="patch">Patch {dadosFrame.patch}</div>
      </header>

      <section className="layout">
        <aside className="menu-personagens">
          <h2>Personagens</h2>

          <div className="lista-personagens">
            {dadosFrame.personagens.map((personagem) => (
              <button
                key={personagem.id}
                className={
                  personagem.id === personagemSelecionadoId
                    ? "botao-personagem ativo"
                    : "botao-personagem"
                }
                onClick={() => {
                  setPersonagemSelecionadoId(personagem.id);
                  setBusca("");
                  setCategoria("Todas");
                }}
              >
                <span>{personagem.nome}</span>
                <small>{personagem.estilo}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="conteudo">
          <div className="cabecalho-personagem">
            <div>
              <p className="texto-pequeno">Personagem</p>
              <h2>{personagemSelecionado?.nome}</h2>
            </div>

            <div className="ferramentas">
              <input
                type="text"
                placeholder="Buscar golpe ou comando..."
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
              />

              <select
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              >
                {categorias.map((item) => (
                  <option key={item} value={item}>
                    {item === "Todas" ? "Todas categorias" : item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="area-tabela">
            <table>
              <thead>
                <tr>
                  <th>Golpe</th>
                  <th>Comando</th>
                  <th>Tipo</th>
                  <th>Startup</th>
                  <th>Active</th>
                  <th>Recovery</th>
                  <th>Hit</th>
                  <th>Block</th>
                  <th>Observacoes</th>
                </tr>
              </thead>

              <tbody>
                {golpesFiltrados.map((golpe) => (
                  <tr key={`${personagemSelecionado.id}-${golpe.nome}`}>
                    <td className="nome-golpe">{golpe.nome}</td>
                    <td>{golpe.comando}</td>
                    <td>{golpe.categoria}</td>
                    <td>{golpe.startup}</td>
                    <td>{golpe.active}</td>
                    <td>{golpe.recovery}</td>
                    <td className={verClasseVantagem(golpe.vantagemHit)}>
                      {golpe.vantagemHit}
                    </td>
                    <td className={verClasseVantagem(golpe.vantagemBlock)}>
                      {golpe.vantagemBlock}
                    </td>
                    <td>{golpe.observacoes}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {golpesFiltrados.length === 0 && (
              <p className="mensagem-vazia">Nenhum golpe encontrado.</p>
            )}
          </div>
        </section>
      </section>
    </main>
  );


function verClasseVantagem(valor) {
  if (typeof valor !== "string") return "";

  if (valor.startsWith("+")) return "positivo";

  if (valor.startsWith("-")) {
    const numero = Number(valor);

    if (numero <= -10) return "muito-negativo";

    return "negativo";
  }

  return "";
}

export default App;