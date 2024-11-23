import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/seop-cep/images/logo.png";
import gif from "../../pages/seop-cep/images/loadinggif.gif";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
text-sans
text-[#EEDFD3]
text-[20px]
bg-[#61d6b2]
`;

const LoadingImage = tw.img`
w-[1080px]
lg:w-[1080px]
`;

export function Loading() {
  return (
    <LoadingDiv>
      {/* <LoadingImage src={logo} className="mb-[20%]"></LoadingImage> */}
      <LoadingImage src={gif}></LoadingImage>
      {/* <div>carregando</div> */}
    </LoadingDiv>
  );
}
