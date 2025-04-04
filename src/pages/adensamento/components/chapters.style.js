// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.png";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
  /* filter: blur(8px); */
`;

export const CapaDiv = tw(CapaDivSC)`
  h-[80vh] w-full lg:h-[96vh]
  flex flex-col
  justify-between  items-left
  lg:pl-[10%]
  lg:pr-[10%]
  pl-[10%]
  pr-[10%]
`;

export const CapaAutor = tw.div`
  flex flex-col
  justify-start items-left
  mt-[24px] 
  font-sans
  text-sm text-center text-[#ef4444]
  lg:leading-[150%]
  selection:bg-[#ef4444] selection:text-white
  `;

export const Scroll = tw.div`
  flex lg:flex-row flex-col 
  lg:justify-between lg:items-center
  `;

export const Title = tw.div`
  font-inter font-bold  
  text-[25px] text-left text-[#3F3F3F]
  leading-[44px]
  lg:text-[33px]
  lg:leading-[48px]
  selection:bg-[#3F3F3F] 
  selection:text-white
  mx-auto
  text-center
  `;

export const Subtitle = tw.div`
  font-inter
  font-normal
  text-[16px] text-left text-[#414042]
  lg:text-[16px]
  lg:leading-[26px]
  lg:mb-[88px]
  mb-[98px]
  mt-[8px]
  selection:bg-[#2BA680] 
  selection:text-white
  mx-auto
  text-center
`;

export const AuthorText = tw.div`
  font-inter
  text-sm text-left text-[#ef4444]
  mt-[40px]
  mb-[80px]
  lg:leading-[150%]
  selection:bg-[#ef4444] selection:text-white
 `;

export const Credito = tw.div`
  mb-7
  lg:mb-7
  font-inter
  text-sm text-left text-white
  lg:text-sm
  lg:text-left
  
`;

export const IntroTitle = tw.div`
  font-bold  font-inter
  text-3xl text-left text-white
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-inter
  text-lg text-justify text-white 
  leading-normal 
  opacity-100
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-auto min-h-[100vh]
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  p-[10%]
  bg-[#2BA680]
  text-white
  -z-10 
  `;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-[100vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  p-[10%]
  -z-10 
  `;

export const ChapterGenericDiv2 = tw.div`
flex
w-full h-[100vh] 
items-center
justify-center
lg:justify-start
lg:p-[10%]
-z-10 
bg-white
`;

export const ChapterGenericDiv3 = tw.div`
flex
w-full h-[100vh] 
items-center
justify-center
bg-white
`;

export const ChapterGenericDiv10 = tw.div`
flex
w-full h-[33vh] 
items-center
justify-left
p-[34px]
lg:p-[10%]
`;
// lg:justify-between
// lg:pl-[10%]

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-[120vh] lg:h-[120vh] 
  items-center
  justify-left
  lg:justify-start
  lg:p-[10%]
  bg-[#1E1E1E]
  text-white
  p-[10%]
  -z-10 
  `;

export const IntroDiv = tw.div`
  w-full h-screen
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
`;

export const ContainerCard = tw.div`
  flex flex-col
  justify-between items-center 
  bg-[#2BA680]
`;

export const ContainerCard1 = tw.div`
  flex flex-col
  items-left 
  backdrop-blur-sm
  bg-[#2BA680]
  max-w-xs
  lg:max-w-[40%]
`;

export const ContainerCard2 = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
  bg-black/75
  max-w-xs
  lg:max-w-3xl
`;

export const ContainerCard3 = tw.div`
  backdrop-blur-[20px]
  bg-[#ffffff75]
  max-w-xs
  p-[34px]
  lg:p-[48px]
  lg:max-w-lg
`;

export const ContainerCard4 = tw.div`
  backdrop-blur-sm
  bg-white
  max-w-xs
  lg:max-w-lg
`;

export const ContainerCard5 = tw.div`
  flex space-x-4
  items-center
  backdrop-blur-[20px]
  bg-[#ffffff75]
  p-[34px]
  lg:p-[48px]
  lg:max-w-[700px]
`;

export const ContainerCardCreditos = tw.div`
  flex flex-col
  items-left 
  bg-[#1E1E1E]
  max-w-xs
  lg:max-w-[100%]
`;

const TextCardSC = styled.div`
  color: #000000;
`;

export const NewsTitle = tw.div`
  text-white
  underline
  font-inter
  font-semibold
  max-w-[400px]
  text-[24px]
  mb-[24px]
  selection:bg-white selection:text-[#2BA680]
`;

export const NewsTitle1 = tw.div`
  text-white
  underline
  font-inter
  font-semibold
  max-w-[400px]
  text-[24px]
  mb-[4px]
  selection:bg-white selection:text-[#2BA680]
`;

export const NewsTitle2 = tw.div`
  text-white
  font-inter
  underline
  font-semibold
  max-w-[400px]
  text-[18px]
  mb-[4px]
  selection:bg-white selection:text-[#ef4444]
`;

export const NewsTitle3 = tw.div`
  text-[#3ACC9F]
  underline
  font-inter
  font-semibold
  max-w-[400px]
  text-[24px]
  mb-[24px]
  selection:bg-[#3ACC9F]
  selection:text-white
`;

export const TextCard = tw.div`
  font-inter  
  text-[16px]
  text-left
  lg:leading-[150%]
  text-black
  selection:bg-[#3ACC9F]
  selection:text-white
`;

export const TextCard1 = tw.div`
  font-inter  
  text-[16px]
  font-light
  lg:leading-[150%]
  text-left
  lg:leading-7
  text-white
  selection:bg-white
  selection:text-[#2BA680]
`;

const TextredSC = styled.div`
  background: #ffffff00;
`;

export const Textred = tw(TextredSC)`
  text-[#000000]
  inline
  lg:px-1
  px-1
  box-decoration-clone
  font-bold
`;

const TextsalmaoSC = styled.div`
  background: #ea9f9f;
`;

export const Textsalmao = tw(TextsalmaoSC)`
  text-white
  inline
  lg:px-1
  px-1
  box-decoration-clone
`;

const TextwhiteSC = styled.div`
  background: #ffffff;
`;

export const Textwhite = tw(TextwhiteSC)`
  text-red-500
  inline
`;

export const Textunderline = tw.div`
  text-white
  inline
  underline underline-offset-4
  decoration-4
`;
