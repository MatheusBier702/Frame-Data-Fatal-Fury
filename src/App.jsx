import { useState } from "react";
import "./App.css";

import { andy } from "./data/personagens/andy";
//import { big } from "./data/personagens/big";
import { billy } from "./data/personagens/billy";
import { chunli } from "./data/personagens/chunli";
import { cr7 } from "./data/personagens/cr7";
import { gato } from "./data/personagens/gato";
//import { geese } from "./data/personagens/geese";
//import { hokutomaru } from "./data/personagens/hokutomaru";
//import { hotaru } from "./data/personagens/hotaru";
import { jenet } from "./data/personagens/jenet";
//import { joe } from "./data/personagens/joe";
//import { kain } from "./data/personagens/kain";
//import { ken } from "./data/personagens/ken";
//import { kevin } from "./data/personagens/kevin";
//import { kimdong } from "./data/personagens/kimdong";
//import { kimjae } from "./data/personagens/kimjae";
//import { krauser } from "./data/personagens/krauser";
//import { mai } from "./data/personagens/mai";
//import { marco } from "./data/personagens/marco";
import { mary } from "./data/personagens/mary";
//import { mr } from "./data/personagens/mr";
//import { preecha } from "./data/personagens/preecha";
//import { rock } from "./data/personagens/rock";
//import { salvatore } from "./data/personagens/salvatore";
//import { terry } from "./data/personagens/terry";
//import { tizoc } from "./data/personagens/tizoc";
//import { vox } from "./data/personagens/vox";

const personagens = [
  andy,
  //big,
  billy,
  chunli,
  cr7,
  gato,
  //geese,
  //hokutomaru,
  //hotaru,
  jenet,
  //joe,
  //kain,
  //ken,
  //kevin,
  //kimdong,
  //kimjae,
  //krauser,
  //mai,
  //marco,
  mary,
  //mr,
  //preecha,
  //rock,
  //salvatore,
  //terry,
  //tizoc,
  //vox,
];

function App() {
  const [personagemId, setPersonagemId] = useState(
    personagens[0].id
  );

  const personagem = personagens.find(
    (p) => p.id === personagemId
  );

  return (
    <div>
      <h1>Frame Data Fatal Fury</h1>

      <select
        value={personagemId}
        onChange={(e) => setPersonagemId(e.target.value)}
      >
        {personagens.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nome}
          </option>
        ))}
      </select>

      <h2>{personagem.nome}</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Golpe</th>
            <th>Comando</th>
            <th>Startup</th>
            <th>Active</th>
            <th>Recovery</th>
            <th>Hit</th>
            <th>Block</th>
          </tr>
        </thead>

        <tbody>
          {personagem.golpes.map((golpe) => (
            <tr key={golpe.nome}>
              <td>{golpe.nome}</td>
              <td>{golpe.comando}</td>
              <td>{golpe.startup}</td>
              <td>{golpe.active}</td>
              <td>{golpe.recovery}</td>
              <td>{golpe.vantagemHit}</td>
              <td>{golpe.vantagemBlock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;