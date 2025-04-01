import tw from "tailwind-styled-components";
import gif from "../../pages/saudesp/images/loadinggif.gif";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-left
text-sans
text-[#EEDFD3]
text-[20px]
bg-[#2BA680]
`;

const LoadingImage = tw.img`
w-[1080px]
lg:w-[1080px]
`;

export function Loading_saudesp() {
  return (
    <LoadingDiv>
      {/* <LoadingImage src={logo} className="mb-[20%]"></LoadingImage> */}
      <LoadingImage src={gif}></LoadingImage>
      {/* <div>carregando</div> */}
    </LoadingDiv>
  );
}
