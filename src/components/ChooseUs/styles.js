import styled from "styled-components";

export const MainWrapper = styled.div`
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
`;

export const HeadTitle  = styled.h1`
  font-size: 46px;
  font-weight: bold;
  font-family: "Outfit",sans-serif;
  margin: 0;
  padding-top: 0;
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: start;
  padding: 40px 0;
`;

export const ArticleCard = styled.article`
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  border: 2px solid #d00a0a;

`;

export const ArticleTitle = styled.h1`
  font-family: 'Outfit',sans-serif;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  padding: 0 !important;
  margin-bottom: 10px;

`;

export const ArticleContent = styled.span`
  font-family: 'Outfit',sans-serif;
  font-size: 16px;
  color: #505050;
  text-align: center;
`;

export const FigureImage = styled.figure`
   display: flex;
   justify-content: center;
   
`;

