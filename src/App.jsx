import "./App.css";

import { andy } from "./data/personagens/andy";
import { mrBig } from "./data/personagens/big";
import { billy } from "./data/personagens/billy";
import { chunli } from "./data/personagens/chunli";
import { cr7 } from "./data/personagens/cr7";
import { gato } from "./data/personagens/gato";
import { geese } from "./data/personagens/geese";
import { hokutomaru } from "./data/personagens/hokutomaru";
import { hotaru } from "./data/personagens/hotaru";
import { jenet } from "./data/personagens/jenet";
import { joe } from "./data/personagens/joe";
import { kain } from "./data/personagens/kain";
import { ken } from "./data/personagens/ken";
import { kevin } from "./data/personagens/kevin";
import { donghwan } from "./data/personagens/kimdong";
import { jaehoon } from "./data/personagens/kimjae";
import { krauser } from "./data/personagens/krauser";
import { mai } from "./data/personagens/mai";
import { marco } from "./data/personagens/marco";
import { mary } from "./data/personagens/mary";
import { mr } from "./data/personagens/mr";
import { preecha } from "./data/personagens/preecha";
import { rock } from "./data/personagens/rock";
import { salvatore } from "./data/personagens/salvatore";
import { terry } from "./data/personagens/terry";
import { tizoc } from "./data/personagens/tizoc";
import { vox } from "./data/personagens/vox";

import imgAndy from "./assets/andy.png";
import imgBig from "./assets/big.png";
import imgBilly from "./assets/billy.png";
import imgChunli from "./assets/chunli.png";
import imgCr7 from "./assets/cr7.png";
import imgGato from "./assets/gato.png";
import imgGeese from "./assets/geese.png";
import imgHokutomaru from "./assets/hokutomaru.png";
import imgHotaru from "./assets/hotaru.png";
import imgJenet from "./assets/jenet.png";
import imgJoe from "./assets/joe.png";
import imgKain from "./assets/kain.png";
import imgKen from "./assets/ken.png";
import imgKevin from "./assets/kevin.png";
import imgKimdong from "./assets/kimdong.png";
import imgKimjae from "./assets/kimjae.png";
import imgKrauser from "./assets/krauser.png";
import imgMai from "./assets/mai.png";
import imgMarco from "./assets/marco.png";
import imgMary from "./assets/mary.png";
import imgPreecha from "./assets/preecha.png";
import imgRock from "./assets/rock.png";
import imgSalvatore from "./assets/salvatore.png";
import imgTerry from "./assets/terry.png";
import imgTizoc from "./assets/tizoc.png";
import imgVox from "./assets/vox.png";

const personagens = [
  { ...andy, imagem: imgAndy },
  { ...mrBig, imagem: imgBig },
  { ...billy, imagem: imgBilly },
  { ...chunli, imagem: imgChunli },
  { ...cr7, imagem: imgCr7 },
  { ...gato, imagem: imgGato },
  { ...geese, imagem: imgGeese },
  { ...hokutomaru, imagem: imgHokutomaru },
  { ...hotaru, imagem: imgHotaru },
  { ...jenet, imagem: imgJenet },
  { ...joe, imagem: imgJoe },
  { ...kain, imagem: imgKain },
  { ...ken, imagem: imgKen },
  { ...kevin, imagem: imgKevin },
  { ...donghwan, imagem: imgKimdong },
  { ...jaehoon, imagem: imgKimjae },
  { ...krauser, imagem: imgKrauser },
  { ...mai, imagem: imgMai },
  { ...marco, imagem: imgMarco },
  { ...mary, imagem: imgMary },
  { ...mr, imagem: null },
  { ...preecha, imagem: imgPreecha },
  { ...rock, imagem: imgRock },
  { ...salvatore, imagem: imgSalvatore },
  { ...terry, imagem: imgTerry },
  { ...tizoc, imagem: imgTizoc },
  { ...vox, imagem: imgVox },
];

function App() {
  return (
    <div className="pagina-inicial">
      <header className="cabecalho">
        <h1>Fatal Fury Frame Data</h1>
        <p>Escolha um personagem</p>
      </header>

      <section className="grade-personagens">
        {personagens.map((personagem) => (
          <div
            key={personagem.id}
            className="cartao-personagem"
          >
            <div className="imagem-personagem">
              <img
                src={personagem.imagem}
                alt={personagem.nome}
              />
            </div>

            <div className="informacoes-personagem">
              <h2>{personagem.nome}</h2>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;