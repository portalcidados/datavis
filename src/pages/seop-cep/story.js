// Mandatory
import { useEffect, useState, useRef } from "react";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import './style.css';
import backgroundImage from './images/norte.svg';
import metroTremImage from './images/metro_trem.png';
import corredorOnibusImage from './images/corredores.png';
import pontovermelho from './images/pontovermelho.png';
import pontocinza from './images/pontocinza.png';

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "react-device-detect";

function legenda_1(tipo) {
  const legenda = document.getElementById('legenda');
  legenda.innerHTML = '';

  let intervalos;
  let unidade;
  let titulo_texto;

  // Definir intervalos, cores e unidade com base no argumento 'tipo'
  if (tipo === 1) {
    intervalos = [
      { intervalo: "0.0 - 42.4", cor: "#D1F1EA" },
      { intervalo: "42.4 - 87.0", cor: "#ABE6D6" },
      { intervalo: "87.0 - 119.1", cor: "#86DCC1" },
      { intervalo: "119.1 - 147.8", cor: "#81D9BE" },
      { intervalo: "147.8 - 179.8", cor: "#7ED6BA" },
      { intervalo: "179.8 - 222.6", cor: "#7BD2B7" },
      { intervalo: "222.6 - 287.3", cor: "#62BB9F" },
      { intervalo: "287.3 - 395.7", cor: "#48A286" },
      { intervalo: "395.7 - 612.7", cor: "#2D896D" },
      { intervalo: ">= 612.7", cor: "#1D7A5D" }
    ];
    unidade = 'Habitantes/Hectare';
    titulo_texto = 'Densidade Populacional';
  } else if (tipo === 3) {
    // Substituindo as cores dos intervalos do tipo 3 pelas cores do tipo 1
    intervalos = [
      { intervalo: "0.00 - 0.15", cor: "#D1F1EA" },
      { intervalo: "0.15 - 0.28", cor: "#ABE6D6" },
      { intervalo: "0.28 - 0.36", cor: "#86DCC1" },
      { intervalo: "0.36 - 0.44", cor: "#81D9BE" },
      { intervalo: "0.44 - 0.52", cor: "#7ED6BA" },
      { intervalo: "0.52 - 0.67", cor: "#7BD2B7" },
      { intervalo: "0.67 - 1.15", cor: "#62BB9F" },
      { intervalo: "1.15 - 2.23", cor: "#48A286" },
      { intervalo: "2.23 - 3.90", cor: "#2D896D" },
      { intervalo: "> 3.90", cor: "#1D7A5D" }
    ];
    unidade = 'M² construído/M² terreno';
    titulo_texto = 'Densidade Construtiva';
  }

  // Criar o título da legenda
  const titulo = document.createElement('h3');
  titulo.textContent = titulo_texto;
  legenda.appendChild(titulo);

  // Adicionar a unidade de medida
  const unidadeElemento = document.createElement('p');
  unidadeElemento.textContent = unidade;
  unidadeElemento.style.fontSize = '12px';
  unidadeElemento.style.fontStyle = 'italic';
  unidadeElemento.style.marginTop = '0';
  legenda.appendChild(unidadeElemento);

  // Criar a lista de intervalos
  const lista = document.createElement('ul');

  intervalos.forEach(function (item) {
    const li = document.createElement('li');

    // Criar o quadrado de cor
    const spanCor = document.createElement('span');
    spanCor.classList.add('cor');
    spanCor.style.backgroundColor = item.cor;

    // Criar o texto do intervalo
    const spanIntervalo = document.createElement('span');
    spanIntervalo.classList.add('intervalo');
    spanIntervalo.textContent = item.intervalo;

    // Adicionar a cor e o intervalo no item da lista
    li.appendChild(spanCor);
    li.appendChild(spanIntervalo);

    // Adicionar o item à lista
    lista.appendChild(li);
  });

  // Adicionar a lista à div da legenda
  legenda.appendChild(lista);
};

function legenda_2(tipo) {
  const legenda = document.getElementById('legenda');
  legenda.innerHTML = '';

  // Criar o título da legenda com base no argumento tipo
  const titulo = document.createElement('h3');
  if (tipo === 4) {
    titulo.textContent = 'População em áreas sem registro do IPTU';  // Novo título
  } else {
    titulo.textContent = 'Zonas de Estruturação Urbana';  // Título original
  }
  legenda.appendChild(titulo);

  // Criar a lista de elementos para a legenda
  const lista = document.createElement('ul');

  // Legenda para EETU ou Favelas e Loteamentos Irregulares
  const liEETU = document.createElement('li');
  const spanCorEETU = document.createElement('span');
  spanCorEETU.classList.add('cor');
  spanCorEETU.style.backgroundColor = '#61D6B2'; // Cor da EETU (sempre mantém)
  spanCorEETU.style.width = '20px';  // Definir o tamanho
  spanCorEETU.style.height = '20px'; // Definir o tamanho
  spanCorEETU.style.backgroundSize = 'cover'; // Garantir que a cor ocupe todo o quadrado
  const spanEETU = document.createElement('span');
  spanEETU.classList.add('intervalo');
  if (tipo === 4) {
    spanEETU.textContent = 'Favelas e Loteamentos irregulares';  // Novo nome da legenda
  } else {
    spanEETU.textContent = 'EETU';  // Nome original
  }
  liEETU.appendChild(spanCorEETU);
  liEETU.appendChild(spanEETU);
  lista.appendChild(liEETU);

  // Legenda para População em Situação Irregular (ponto vermelho)
  const liPontoVermelho = document.createElement('li');
  const spanCorPontoVermelho = document.createElement('span');
  spanCorPontoVermelho.classList.add('cor');
  spanCorPontoVermelho.style.backgroundImage = tipo === 4 ? `url(${pontovermelho})` : `url(${metroTremImage})`; // Alterar a imagem para ponto vermelho se tipo for 4
  spanCorPontoVermelho.style.width = '20px';  // Definir o tamanho
  spanCorPontoVermelho.style.height = '20px'; // Definir o tamanho
  spanCorPontoVermelho.style.backgroundSize = 'cover'; // Garantir que a imagem ocupe todo o quadrado
  spanCorPontoVermelho.style.backgroundPosition = 'center'; // Posicionar a imagem no centro
  const spanPontoVermelho = document.createElement('span');
  spanPontoVermelho.classList.add('intervalo');
  spanPontoVermelho.textContent = tipo === 4 ? 'Pessoas fora do cadasatro IPTU' : 'Metro / Trem';  // Nome da legenda
  liPontoVermelho.appendChild(spanCorPontoVermelho);
  liPontoVermelho.appendChild(spanPontoVermelho);
  lista.appendChild(liPontoVermelho);

  // Legenda para População em Situação Regularizada (ponto cinza)
  const liPontoCinza = document.createElement('li');
  const spanCorPontoCinza = document.createElement('span');
  spanCorPontoCinza.classList.add('cor');
  spanCorPontoCinza.style.backgroundImage = tipo === 4 ? `url(${pontocinza})` : `url(${corredorOnibusImage})`; // Alterar a imagem para ponto cinza se tipo for 4
  spanCorPontoCinza.style.width = '20px';  // Definir o tamanho
  spanCorPontoCinza.style.height = '20px'; // Definir o tamanho
  spanCorPontoCinza.style.backgroundSize = 'cover'; // Garantir que a imagem ocupe todo o quadrado
  spanCorPontoCinza.style.backgroundPosition = 'center'; // Posicionar a imagem no centro
  const spanPontoCinza = document.createElement('span');
  spanPontoCinza.classList.add('intervalo');
  spanPontoCinza.textContent = tipo === 4 ? 'Pessoas dentro do cadastro IPTU' : 'Corredor de Ônibus';  // Nome da legenda
  liPontoCinza.appendChild(spanCorPontoCinza);
  liPontoCinza.appendChild(spanPontoCinza);
  lista.appendChild(liPontoCinza);

  // Adicionar a lista à div da legenda
  legenda.appendChild(lista);
}

function goto(location, camadas, mapa) {
  let viewState = isMobile
  ? {
    center: [location.mobile.center.lat, location.mobile.center.lon],
    zoom: location.mobile.zoom,
    duration: location.mobile.duration,
  }
  : {
    center: [location.desktop.center.lat, location.desktop.center.lon],
    zoom: location.desktop.zoom,
    duration: location.desktop.duration,
  };
  if (!viewState.duration) {
    viewState.duration = 4;
  }
  mapa.eachLayer(function(layer) {
    if ( !camadas.includes(layer.options.layers) ) {
      mapa.removeLayer(layer);
    } else if (layer.options.layers == "portal_dados:Corpos D'água") {
      mapa.removeLayer(layer);
    } else {
      camadas = camadas.filter(item => item !== layer.options.layers);
    }
  });
  if (camadas.length >= 1) {
    camadas.forEach(camada => {
      L.tileLayer.wms('https://geoserver.datascience.insper.edu.br/geoserver/ows?', {
        layers: camada,
        format: 'image/png',
        transparent: true,
        singleTile: true,
        tileSize: 1980,
      }).addTo(mapa);
    });
  }
  mapa.flyTo(viewState.center, viewState.zoom, {duration: viewState.duration});
}

gsap.registerPlugin(ScrollTrigger);

export default function SubsidioSPPO() {
  const mapRef = useRef(null);
  const mapa = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapa.current = new L.map(mapRef.current).setView([-23.5505, -46.6333], 14);
      mapa.current.dragging.disable();
      mapa.current.touchZoom.disable();
      mapa.current.scrollWheelZoom.disable();
      mapa.current.doubleClickZoom.disable();
      mapa.current.boxZoom.disable();
      mapa.current.keyboard.disable();
      mapa.current.attributionControl.remove();
      mapa.current.zoomControl.remove();
      var norte = document.createElement("div");
      norte.id = "norte";
      norte.style.backgroundImage =  `url(${backgroundImage})`;
      mapRef.current.appendChild(norte);
      var legenda = document.createElement('div');
      legenda.id = "legenda";
      mapRef.current.appendChild(legenda);
      var escala = L.control.scale({ position: 'bottomright' }).addTo(mapa.current);
      escala.getContainer().className += ' custom-scale';
      const wmsUrl = 'https://geoserver.datascience.insper.edu.br/geoserver/ows?';
      L.tileLayer.wms(wmsUrl, {
        layers: 'portal_dados:municipios_sp',
        format: 'image/png',
        transparent: true,
        singleTile: true,
        tileSize: 1980,
      }).addTo(mapa.current);
      L.tileLayer.wms(wmsUrl, {
        layers: 'portal_dados:densidade_demografica_sp',
        format: 'image/png',
        transparent: true,
        singleTile: true,
      }).addTo(mapa.current);
    }
  }, []);

  const [location, setLocation] = useState(chapterMap.Capa().location);
  const [layers, setLayers] = useState(chapterMap.Capa().layers);
  // console.log("ChapterLayers", layers);

  const [chartProgress, setChartProgress] = useState(0);

  const setPosition = (position) => {
    const desktopPosition = position.desktop ? position.desktop : position;
    const mobilePosition = position.mobile ? position.mobile : position;

    setLocation({
      ...location,
      desktop: {
        ...desktopPosition,
      },
      mobile: {
        ...mobilePosition,
      },
    });
  };

  const [chapterNumberMap, setChapterNumberMap] = useState("capa");
  //console.log(mapRef);
  useEffect(() => {
    document.title = "Portal Cidados";
  }, []);
  useEffect(() => {
    //console.log(mapa.current.getCenter());
    switch (chapterNumberMap) {
      case "capa":
        goto(chapterMap.Capa().location, chapterMap.Capa().layers, mapa.current)
        break;
      case "mapa_zero":
        goto(chapterMap.IntroMapa().location, chapterMap.IntroMapa().layers, mapa.current);
        legenda_1(1);
        break;
      case "mapa_um":
        goto(chapterMap.IntroMapa_rigth().location, chapterMap.IntroMapa_rigth().layers, mapa.current)
        legenda_1(1);
        break;
      case "mapa_mais_um":
        goto(chapterMap.IntroMapa_rigth_zoom().location, chapterMap.IntroMapa_rigth_zoom().layers, mapa.current)
        legenda_1(1);
        break;
      case "mapa_dois":
        goto(chapterMap.Mapa_dois().location, chapterMap.Mapa_dois().layers, mapa.current)
        legenda_1(1);
        break;
      case "mapa_dois_helio":
        goto(chapterMap.Mapa_dois_helio().location, chapterMap.Mapa_dois_helio().layers, mapa.current)
        legenda_1(1);
        break;
      case "mapa_tres":
        goto(chapterMap.Mapa_tres().location, chapterMap.Mapa_tres().layers, mapa.current)
        legenda_2(4);
        break;
      case "mapa_quatro":
        goto(chapterMap.Mapa_quatro().location, chapterMap.Mapa_quatro().layers, mapa.current)
        legenda_2(2);
        break;
      case "cep_capitulo":
        goto(chapterMap.Mapa_quatro_zoom().location, chapterMap.Mapa_quatro_zoom().layers, mapa.current)
        legenda_2(2);
        break;
      case "mapa_cinco":
        goto(chapterMap.Mapa_cinco().location, chapterMap.Mapa_cinco().layers, mapa.current);
        legenda_2(2);
        break;
      case "mapa_seis":
        goto(chapterMap.Mapa_seis().location, chapterMap.Mapa_seis().layers, mapa.current)
        legenda_1(3);
        break;
      case "mapa_sete":
        goto(chapterMap.Mapa_sete().location, chapterMap.Mapa_sete().layers, mapa.current)
        legenda_1(1);
        break;
      case "mapa_oito":
        goto(chapterMap.Mapa_seis().location, chapterMap.Mapa_seis().layers, mapa.current)
        legenda_1(3);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    // gsap.defaults({ ease: "none" });

    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: false,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });
    ScrollTrigger.create({
      trigger: "#capa",
      onToggle: () => {
        setChapterNumberMap("capa");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_capitulo",
      onToggle: () => {
        setChapterNumberMap("mapa_capitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_zero",
      onToggle: () => {
        setChapterNumberMap("mapa_zero");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_um",
      onToggle: () => {
        setChapterNumberMap("mapa_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_mais_um",
      onToggle: () => {
        setChapterNumberMap("mapa_mais_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_dois",
      onToggle: () => {
        setChapterNumberMap("mapa_dois");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_dois_helio",
      onToggle: () => {
        setChapterNumberMap("mapa_dois_helio");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_tres",
      onToggle: () => {
        setChapterNumberMap("mapa_tres");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_quatro",
      onToggle: () => {
        setChapterNumberMap("mapa_quatro");
      },
    });

    const tl_mapa_cinco = gsap.timeline();
    tl_mapa_cinco
    .from("#cep_image_1, #cep_image_2", { opacity: 1, stagger: 0.2 })
    .to("#cep_image_1, #cep_image_2", { opacity: 0, stagger: 0.2 });
    ScrollTrigger.create({
      animation: tl_mapa_cinco,
      trigger: "#cep_blank1",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#mapa_cinco",
      start: "top bottom", 
      end: "bottom bottom", 
      onToggle: () => {
        setChapterNumberMap("mapa_cinco");
      },
    });

    const tl_mapa_seis = gsap.timeline();
    tl_mapa_seis
    .from("#cep_image_3a, #cep_image_3b, #cep_image_4", { opacity: 1, stagger: 0.2 })
    .to("#cep_image_3a, #cep_image_3b, #cep_image_4", { opacity: 0, stagger: 0.2 });
    ScrollTrigger.create({
      animation: tl_mapa_seis,
      trigger: "#cep_blank2",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#mapa_seis",
      onToggle: () => {
        setChapterNumberMap("mapa_seis");
      },
    });

    const tl_mapa_sete = gsap.timeline();
    tl_mapa_sete
    .from("#cep_image_5, #cep_image_6", { opacity: 1, stagger: 0.2 })
    .to("#cep_image_5, #cep_image_6", { opacity: 0, stagger: 0.2 });
    ScrollTrigger.create({
      animation: tl_mapa_sete,
      trigger: "#cep_blank3",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#mapa_sete",
      onToggle: () => {
        setChapterNumberMap("mapa_sete");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_oito",
      onToggle: () => {
        setChapterNumberMap("mapa_oito");
      },
    });

    const tl_cep_capitulo = gsap.timeline();
    tl_cep_capitulo
      .from("#cep_image_1", { opacity: 0 })
      .to("#cep_image_1", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo,
      trigger: "#cep_capitulo",
      start: "top center", 
      end: "bottom center", 
      scrub: true,
      onToggle: () => {
        setChapterNumberMap("cep_capitulo");
      },
    });

    const tl_cep_capitulo2 = gsap.timeline();
    tl_cep_capitulo2
      .set("#cep_image_2", { opacity: 0 })
      .to("#cep_image_2", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo2,
      trigger: "#cep_capitulo2",
      start: "top center", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_tres = gsap.timeline();
    tl_cep_tres
      .set("#cep_image_3a", { opacity: 0 })
      .to("#cep_image_3a", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_tres,
      trigger: "#cep_capitulo3a",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_tresb = gsap.timeline();
    tl_cep_tresb
      .set("#cep_image_3b", { opacity: 0 })
      .to("#cep_image_3b", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_tresb,
      trigger: "#cep_capitulo3b",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo4 = gsap.timeline();
    tl_cep_capitulo4
      .set("#cep_image_4", { opacity: 0 })
      .to("#cep_image_4", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo4,
      trigger: "#cep_capitulo4",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo5 = gsap.timeline();
    tl_cep_capitulo5
      .set("#cep_image_5", { opacity: 0 })
      .to("#cep_image_5", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo5,
      trigger: "#cep_capitulo5",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo6 = gsap.timeline();
    tl_cep_capitulo6
      .set("#cep_image_6", { opacity: 0 })
      .to("#cep_image_6", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo6,
      trigger: "#cep_capitulo6",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo7 = gsap.timeline();
    tl_cep_capitulo7
      .set("#cep_image_7", { opacity: 0 })
      .to("#cep_image_7", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo7,
      trigger: "#cep_capitulo7",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo8 = gsap.timeline();
    tl_cep_capitulo8
      .set("#cep_image_8", { opacity: 0 })
      .to("#cep_image_8", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo8,
      trigger: "#cep_capitulo8",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo9 = gsap.timeline();
    tl_cep_capitulo9
      .set("#cep_image_9", { opacity: 0 })
      .to("#cep_image_9", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo9,
      trigger: "#cep_capitulo9",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo10 = gsap.timeline();
    tl_cep_capitulo10
      .set("#cep_image_10", { opacity: 0 })
      .to("#cep_image_10", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo10,
      trigger: "#cep_capitulo10",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_cep_capitulo11 = gsap.timeline();
    tl_cep_capitulo11
      .set("#cep_image_11", { opacity: 0 })
      .to("#cep_image_11", { opacity: 1 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo11,
      trigger: "#cep_capitulo11",
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: true, 
    });

    const tl_vigilancia_capitulo = gsap.timeline();
    tl_vigilancia_capitulo
      .set("#vigilancia_image_1", { opacity: 0 })
      .to("#vigilancia_image_1", { opacity: 0, duration: 30 })
      .to("#vigilancia_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_vigilancia_capitulo,
      trigger: "#vigilancia_capitulo",
    });

    const tl_resultados_capitulo = gsap.timeline();
    tl_resultados_capitulo.set("#acolhimento_image_3", { opacity: 0 });

    ScrollTrigger.create({
      trigger: "#resultados",
    });

    ScrollTrigger.create({
      trigger: "#video",
    });

    ScrollTrigger.create({
      trigger: "#creditos",
    });
  }, []);

  return (
    <>
    <div ref={mapRef} style={{ height: '100%', width: '100%', position: 'fixed', zIndex: '-1000' }}></div>
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.MapaCapitulo id={"mapa_capitulo"} />
      <chapterDiv.MapaZero id={"mapa_zero"} />
      <chapterDiv.MapaUm id={"mapa_um"} />
      <chapterDiv.MapaMaisum id={"mapa_mais_um"} />
      <chapterDiv.MapaDois id={"mapa_dois"} />
      <chapterDiv.MapaDois_helio id={"mapa_dois_helio"} />
      <chapterDiv.MapaTres id={"mapa_tres"} />
      <chapterDiv.MapaQuatro id={"mapa_quatro"} />
      <chapterDiv.CepCapitulo id={"cep_capitulo"} />
      <chapterDiv.CepImages id={"cep_images"} />
      <chapterDiv.CepCapitulo2 id={"cep_capitulo2"} />
      <chapterDiv.CepImages2 id={"cep_images2"} />
      <chapterDiv.CepBlank1 id={"cep_blank1"} />
      <chapterDiv.MapaCinco id={"mapa_cinco"} />
      <chapterDiv.CepCapitulo3a id={"cep_capitulo3a"} />
      <chapterDiv.CepCapitulo3b id={"cep_capitulo3b"} />
      <chapterDiv.CepImages3 id={"cep_images3"} />
      <chapterDiv.CepCapitulo4 id={"cep_capitulo4"} />
      <chapterDiv.CepImages4 id={"cep_images4"} />
      <chapterDiv.CepBlank2 id={"cep_blank2"} />
      <chapterDiv.MapaSeis id={"mapa_seis"} />
      <chapterDiv.CepCapitulo5 id={"cep_capitulo5"} />
      <chapterDiv.CepImages5 id={"cep_images5"} />
      <chapterDiv.CepCapitulo6 id={"cep_capitulo6"} />
      <chapterDiv.CepImages6 id={"cep_images6"} />
      <chapterDiv.CepCapitulo6b id={"cep_capitulo6b"} />
      <chapterDiv.CepBlank3 id={"cep_blank3"} />
      <chapterDiv.MapaSete id={"mapa_sete"} />
      <chapterDiv.CepCapitulo7 id={"cep_capitulo7"} />
      <chapterDiv.CepImages7 id={"cep_images7"} />
      <chapterDiv.CepCapitulo8 id={"cep_capitulo8"} />
      <chapterDiv.CepImages8 id={"cep_images8"} />
      <chapterDiv.CepCapitulo9 id={"cep_capitulo9"} />
      <chapterDiv.CepImages9 id={"cep_images9"} />
      <chapterDiv.CepCapitulo10 id={"cep_capitulo10"} />
      <chapterDiv.CepImages10 id={"cep_images10"} />
      <chapterDiv.CepCapitulo11 id={"cep_capitulo11"} />
      <chapterDiv.CepImages11 id={"cep_images11"} />
      <chapterDiv.CapituloFinal id={"vigilancia_capitulo"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}