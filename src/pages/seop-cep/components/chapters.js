import * as styles from "./chapters.style";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoinsper from "../images/logoinsper.svg";
import scroll from "../images/scroll.gif";
import figura1 from "../images/Figura 7.png";
import figura2 from "../images/Figura 13.png";

// DESKTOP IMAGENS
import card7 from "../images/card7.png";
import card7b from "../images/card7b.png";
import card10 from "../images/card10.gif";
import card11a from "../images/card11a.gif";
import card11b from "../images/card11b.gif";
import card12 from "../images/card12.png";
import card13 from "../images/card13.gif";
import card17 from "../images/card17.png";
import card18 from "../images/card18.png";
import card19 from "../images/card19.png";
import card20 from "../images/card20.png";
import card21 from "../images/card21.png";

// MOBILE IMAGENS
import card7_mobile from "../images/card7_mobile.png";
import card7b_mobile from "../images/card7b_mobile.png";
import card10_mobile from "../images/card10_mobile.gif";
import card11a_mobile from "../images/card11a_mobile.gif";
import card11b_mobile from "../images/card11b_mobile.gif";
import card12_mobile from "../images/card12_mobile.png";
import card13_mobile from "../images/card13_mobile.gif";
import card17_mobile from "../images/card17_mobile.png";
import card18_mobile from "../images/card18_mobile.png";
import card19_mobile from "../images/card19.png";
import card20_mobile from "../images/card20_mobile.png";
import card21_mobile from "../images/card21_mobile.png";

// TODO: REMOVE
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export function Capa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.chapRef}>
      {" "}
      <img
        src={logoinsper}
        className=" selection:bg-[#ef4444] selection:text-white lg:mt-[7%] mt-[32px] w-[180px] h-auto lg:w-[200px] lg:h-auto mx-auto"
      ></img>{" "}
      <styles.CapaAutor>
        <styles.Title>
          Verticalização gera adensamento populacional?
          <br />
          Como a Plano Diretor pode estimular uma cidade mais compacta
        </styles.Title>
        <styles.Subtitle>
          Trabalho de Gustavo Theil, orientado por Adriano Borges Costa.
        </styles.Subtitle>
        <styles.Scroll>
          {/* <styles.AuthorText>
            Desenvolvido por{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            <br />e{" "}
            <a
              className="font-bold underline"
              href="http://www.rio.rj.gov.br/web/seop"
              target="_blank"
              rel="noreferrer"
            >
              Secretaria Municipal de Ordem Pública
            </a>{" "}
          </styles.AuthorText>{" "} */}
          <img
            src={scroll}
            className="lg:mb-[50px] w-[16px] h-auto lg:w-[50px] lg:h-auto opacity-0"
          ></img>{" "}
        </styles.Scroll>
      </styles.CapaAutor>
    </styles.CapaDiv>
  );
}

export function MapaCapitulo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.ContainerCard1>
          <styles.NewsTitle>Introdução</styles.NewsTitle>
          <styles.TextCard1>
            2024.<br />
            São Paulo, SP.<br />
            11.451.999 de habitantes.<br />
            4.996.529 de domicílios existentes.
            <br /> <br />
            São Paulo é a cidade mais populosa do Hemisfério Sul, cuja região metropolitana 
            ultrapassa 20 milhões de habitantes. 
            <br /> <br />
            Atualmente, os mecanismos que regulam o crescimento da cidade são definidos pelo Plano 
            Diretor Estratégico (PDE), estabelecido em 2014 e revisado em 2023. Entre os 17 objetivos 
            que este plano estabelece, ao menos nove estão relacionados a estratégias de adensamento 
            urbano. Um princípio central do PDE é direcionar o adensamento para áreas com melhor 
            infraestrutura urbana, especialmente no entorno do transporte público de média e alta 
            capacidade, tais como corredores de ônibus e estações de metrô e trem.
            <br /> <br />
            A seguir exploramos quais dos parâmetros construtivos regulados e incentivados pelo PDE 
            são de fato capazes de estimular o adensamento urbano, quando desejado.
          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaZero(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterGenericDiv1>
  );
}

export function MapaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
            O adensamento proposto pelo PDE busca otimizar o uso da infraestrutura urbana já 
            existente na cidade. Ao incentivar que mais moradias e empregos estejam localizados 
            próximos às infraestruturas de transporte público, estimula-se modos de deslocamento 
            mais sustentáveis e maior acesso às oportunidades que as cidades oferecem. <br /><br />
            O mapa ao lado, produzido com dados do Censo 2022, mostra a <styles.Textred>Densidade Populacional</styles.Textred> de várias
            regiões da cidade. A unidade escolhida é a de habitantes por hectare. A área de um hectare 
            equivale a área de um quadrado de 100m de lado, ou seja, muito próxima do tamanho médio de
            um quarteirão da cidade. Dessa maneira, propomos uma leitura de 
            dados mais próxima da sua experiência urbana. E então, quantas pessoas moram na sua quadra?
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaMaisum(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
        Áreas densamente povoadas concentram oportunidades de emprego, comércio e serviços, o que gera 
        <styles.Textred>economias de aglomeração</styles.Textred>, aumentando sua eficiência e sua 
        produtividade. Em geral, regiões centrais concentram infraestrutura, oportunidades e pessoas.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          As áreas de maior <styles.Textred>densidade populacional</styles.Textred> de São Paulo não 
          se limitam à sua zona central, mas <styles.Textred>se espalham por diversas regiões da 
          cidade</styles.Textred>, por diferentes motivos. É interessante notar a densidade populacional
          nas favelas de <styles.Textred>Paraisópolis</styles.Textred> (como ilustrado no mapa) 
          e Heliópolis, que acabam por ser as áreas mais densas da cidade.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaDois_helio(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Nos casos de Paraisópolis e <styles.Textred>Heliópolis</styles.Textred> (como ilustrado 
          no mapa), as altas densidades urbanas não se devem a incentivos do planejamento urbano, 
          mas ao crescimento desordenado de áreas informais impulsionado por décadas de urbanização 
          acelerada e pela ausência de políticas habitacionais inclusivas. Esse processo gera desafios 
          significativos para a mobilidade e a qualidade de vida de seus habitantes.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Cerca de metade dos domicílios paulistanos identificados no Censo 2022 não estão no Cadastro 
          Imobiliário Fiscal da prefeitura, revelando a grande informalidade habitacional existente em 
          São Paulo, na qual os parâmetros de regulação urbana discutidos aqui possuem pouca ou nenhuma
          incidência. As regiões que apresentam maior informalidade são favelas, lotes irregulares e 
          ocupações em regiões de risco. <br /><br />
          O mapa ao lado mostra a distribuição da população da cidade em pontos. Cada ponto
          representa mil habitantes vivendo próximos a região indicada. Em pontos vermelhos,
          temos a população que vive em habitações fora do cadastro legal de imóveis da cidade e em 
          pontos cinzas, a população que reside em imóveis legalizados pela prefeitura. <br /><br />
          E então, consegue encontrar algum padrão nessa distribuição?
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaQuatro(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Considerando as áreas mais consolidadas da cidade, como é possível estimular o aumento da 
          densidade em regiões com melhor infraestrutura urbana? O PDE define os Eixos de Estruturação 
          da Transformação Urbana (EETU), que são quadras próximas ao transporte público de média e alta 
          capacidade (corredores de ônibus e estações de metrô e trem) , onde se busca incentivar 
          maior densidade populacional.
        </styles.TextCard>
        {/*<img
        src={figura1}
        className=" selection:bg-[#ef4444] selection:text-white lg:mt-[7%] mt-[32px] w-[180px] h-auto lg:w-[250px] lg:h-auto mx-auto"
        ></img>{""}*/}
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepCapitulo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Até 2023, a definição dos Eixos considerou as quadras localizadas em uma faixa de 150 
          metros de cada lado dos corredores de ônibus e em um raio de 400 metros ao redor das 
          estações de metrô e trem.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_1"}
        src={isMobile ? card7_mobile : card7}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
        style={{opacity:0}}
      ></img>
    </div>
  );
}

export function CepCapitulo2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Com a revisão do PDE, os Eixos passaram a abranger quadras situadas em uma faixa de 400 
          metros de cada lado dos corredores de ônibus e em um raio de 700 metros ao redor das estações 
          de metrô e trem.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_2"}
        src={isMobile ? card7b_mobile : card7b}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepBlank1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv10
        ref={props.chapRef}
        id={props.id}
      ></styles.ChapterGenericDiv10>
    </>
  );
}

export function MapaCinco(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Nos Eixos, o objetivo seria permitir e estimular um maior <styles.Textred>adensamento 
          populacional</styles.Textred>, ou seja, aumentar a quantidade de pessoas vivendo numa mesma 
          área. Lembra-se lá do começo quando falamos de habitantes por hectare (ou quarteirão)?! É isso
          mesmo, o objetivo é aumentar a quantidade de moradores que vivem numa mesma quadra.
          Vejamos agora quais são os três instrumentos regulatórios definidos pelo PDE para incentivar 
          e viabilizar o adensamento populacional.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepCapitulo3a(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          O primeiro deles é o <styles.Textred>Coeficiente de Aproveitamento (CA)</styles.Textred>, que determina quantas vezes a área 
          do lote pode ser construída em novos empreendimentos imobiliários. Se o CA for igual a 4, por 
          exemplo, isso significa que, se a nova construção ocupar o lote inteiro, podem ser construídos 
          4 andares.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepCapitulo3b(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          No entanto, se a nova construção ocupar apenas metade do lote, é possível que o edifício 
          alcance até 8 andares.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_3a"}
        src={isMobile ? card11a_mobile : card11a}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"cep_image_3b"}
        src={isMobile ? card11b_mobile : card11b}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Um <styles.Textred>CA</styles.Textred> de 0,1, como acontece em áreas de preservação ambiental, implica que se pode construir 
          até 10% da área do terreno. Portanto, para construir dois andares, a área ocupada não pode 
          exceder 5% da área do terreno.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_4"}
        src={isMobile ? card12_mobile : card12}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepBlank2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv10
        ref={props.chapRef}
        id={props.id}
      ></styles.ChapterGenericDiv10>
    </>
  );
}

export function MapaSeis(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Assim, o CA, ou Coeficiente de Aproveitamento, define a Densidade Construtiva das novas 
          edificações em um terreno, em uma quadra ou em uma região. <br /><br />
          No mapa ao lado, você pode verificar a atual densidade construtiva da cidade, ou seja,
          qual o Coeficiente de Aproveitamento real aplicado.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepCapitulo5(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          O segundo instrumento é a definição de <styles.Textred>Cota Parte Máxima</styles.Textred>. Ela é cota de terreno por unidade 
          habitacional e determina o número mínimo de unidades habitacionais que devem ser feitas em 
          novas edificações, dado o tamanho do terreno a ser incorporado. Em uma região de 
          <styles.Textred>Cota Parte Máxima</styles.Textred> igual a 20m2, um terreno de 1.000m2 deve 
          conter ao menos 50 unidades habitacionais nas novas edificações.<br/><br/>
          A <styles.Textred>Cota Parte Máxima</styles.Textred> define a <styles.Textred>Densidade Habitacional</styles.Textred> das novas edificações em um terreno, em 
          uma quadra ou em uma região.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages5(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_5"}
        src={isMobile ? card10_mobile : card10}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo6(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          O terceiro instrumento é o <styles.Textred>Gabarito</styles.Textred>, que é a altura máxima 
          dos edifícios. <br/><br/>
          <styles.Textred>Gabarito</styles.Textred> define a <styles.Textred>Verticalização
          </styles.Textred> das novas edificações em um terreno, em uma quadra ou em uma região.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages6(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_6"}
        src={isMobile ? card13_mobile : card13}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo6b(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Em áreas que se quer criar <styles.Textred>Densidade Populacional</styles.Textred>, o PDE pode definir tais instrumentos para 
          gerar maior <styles.Textred>Densidade Construtiva</styles.Textred>, <styles.Textred>Densidade Habitacional</styles.Textred> e <styles.Textred>Verticalização</styles.Textred>. Já em miolos de 
          bairros, ou regiões de preservação histórica ou ambiental, o oposto pode ser feito, 
          desestimulando ou não permitindo maiores densidades populacionais.<br/><br/>
          Afinal, quais parâmetros construtivos são mais relevantes para definir a <styles.Textred>Densidade Populacional</styles.Textred> 
          de uma região? <styles.Textred>Verticalização</styles.Textred> está necessariamente associada a uma maior densidade?
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepBlank3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv10
        ref={props.chapRef}
        id={props.id}
      ></styles.ChapterGenericDiv10>
    </>
  );
}

export function MapaSete(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
        Gustavo Theil, aluno do Insper, e Adriano Borges Costa, professor e pesquisador do Insper 
        Cidades, investigaram quais desses fatores melhor determinam <styles.Textred>Densidade Populacional</styles.Textred> e, por 
        tanto, deveriam ser privilegiados no PDE em regiões em que se busca adensamento populacional.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepCapitulo7(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          A pesquisa concluiu que, nas regiões que o PDE exerce influência, ou seja, regiões sem grande 
          informalidade habitacional, a <styles.Textred>Densidade Habitacional</styles.Textred>, estimulada pela <styles.Textred>Cota Parte Máxima</styles.Textred>, foi a 
          característica construtiva mais relevante para definir a <styles.Textred>Densidade Populacional</styles.Textred>.
        </styles.TextCard>
        <img
        src={figura2}
        className=" selection:bg-[#ef4444] selection:text-white lg:mt-[7%] mt-[32px] w-[180px] h-auto lg:w-[500px] lg:h-auto mx-auto"
        ></img>{""}
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages7(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_7"}
        src={isMobile ? card18_mobile : card18}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo8(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Este resultado é muito relevante, visto que a regulação sobre a <styles.Textred>Cota Parte Máxima</styles.Textred> vigora 
          apenas nas regiões dos <styles.Textred>Eixos</styles.Textred>, nos quais a cota parte máxima é de 20m².
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages8(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_8"}
        src={isMobile ? card19_mobile : card19}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo9(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          A <styles.Textred>Densidade Construtiva</styles.Textred>, estimulada pelo <styles.Textred>Coeficiente de Aproveitamento</styles.Textred>, também apresentou 
          grande relevância para explicar <styles.Textred>Densidade Populacional</styles.Textred>.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages9(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_9"}
        src={isMobile ? card20_mobile : card20}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo10(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Já a <styles.Textred>Verticalização</styles.Textred>, quando não acompanhada de maior <styles.Textred>Densidade Habitacional e Construtiva</styles.Textred>, 
          não determina a <styles.Textred>Densidade Populacional</styles.Textred> de uma região. Ou seja, prédios altos, mas que ocupam 
          apenas uma área pequena do terreno e possuem apartamentos grandes, não promovem o adensamento 
          populacional desejado pelo PDE para regiões com melhor infraestrutura.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages10(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_10"}
        src={isMobile ? card21_mobile : card21}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepCapitulo11(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          No entanto, sem <styles.Textred>Verticalização</styles.Textred> também não é possível gerar 
          <styles.Textred>Densidade Habitacional e Construtiva</styles.Textred>. <br/><br/>
          A questão central, então, é: qual é o modelo ideal de <styles.Textred>Verticalização
          </styles.Textred> para promover <styles.Textred>Densidade Populacional</styles.Textred>? <br/><br/>
          A evidência trazida pela pesquisa aponta que o PDE deve estimular, nos Eixos, a construção de 
          edifícios com poucos recuos, que ocupam a maior parte do terreno e que possuem apartamentos 
          pequenos, de forma a gerar <styles.Textred>Verticalização com adensamento Habitacional e Construtivo</styles.Textred>.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function CepImages11(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_11"}
        src={isMobile ? card21_mobile : card21}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CapituloFinal(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.ContainerCard1>
          <styles.NewsTitle>Conclusão</styles.NewsTitle>
          <styles.TextCard1>
            Dessa forma, para o bem ou para o mal, caso a prefeitura consiga regulamentar os padrões 
            construtivos, ela será capaz de definir a densidade em cada parte da cidade. Este poder não 
            vem desacompanhado de perigos, caso seja mal administrado. Caso a demanda nas regiões 
            centrais esteja sendo reprimida pela regulação, é possível que ela esteja causando um 
            espraiamento urbano, resultado que o próprio plano diretor almeja combater.<br/><br/>

            Por fim, cerca de metade das moradias da cidade se encontram em situação de informalidade 
            e, portanto, a regulação não surte efeito direto nelas. Para fins de planejamento urbano, 
            este é um problema grave e suas raízes devem ser investigadas. Uma hipótese que está em 
            linha com os pontos trazidos anteriormente, se refere à possibilidade da demanda reprimida 
            e preços elevados gerarem incentivos para a formação de um mercado de moradia informal. <br/><br/>

            Esta história é o resultado do trabalho de Iniciação Científica de Gustavo Theil, 
            intitulado: “Para o bem ou para o mal: análise da capacidade que o governo tem de controlar 
            a densidade habitacional”. Para acessar a pesquisa completa acesse o link.
          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Creditos(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.ContainerCardCreditos>
          <styles.NewsTitle1>Equipe</styles.NewsTitle1>
          <styles.TextCard1>
            <b>Autor:</b> Gustavo Theil <br />
            <b>Orientador:</b> Adriano Borges <br /><br />
            <b>Coordenador Executivo:</b> Maurício Bouskela <br />
            <b>Roteirista:</b> Caio Jacintho <br />
            <b>Designer:</b> Pedro Meneghel <br />
            <b>Desenvolvimento:</b> Renan Rodrigues <br />
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px] ">
            Metodologia
          </styles.NewsTitle1>
          <styles.TextCard1>
            Para chegar no resultado apresentado por esta pesquisa, foram aplicados dois modelos: Random Forest e Regressão Linear. 
            O Random Forest foi utilizado para capturar relações mais complexas e não lineares entre as variáveis, identificando a 
            importância de fatores como cota-parte e coeficiente de aproveitamento (CA) na densidade populacional. Já a Regressão 
            Linear mediu de forma mais simples o impacto direto das variáveis construtivas, evidenciando a correlação entre CA e 
            adensamento.
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
            Publicação
          </styles.NewsTitle1>
          <styles.TextCard1>
          <a
            className="font-bold underline"
            href="http://www.insper.edu.br"
            target="_blank"
            rel="noreferrer"
          >
            <br />“Para o bem ou para o mal: análise da capacidade que o governo tem de controlar a densidade habitacional”<br />
          </a>
            Gustavo Theil <br /><br />
            Iniciação Científica <br />
            Insper Instituto de Ensino e Pesquisa <br />
            Ciências Econômicas <br />
            2024
          </styles.TextCard1>
        </styles.ContainerCardCreditos>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
  );
}

export function Fim(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <a href={"https://www.dados.rio/"}>
        <img src={logoed} className="w-44 lg:w-56"></img>
      </a>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
