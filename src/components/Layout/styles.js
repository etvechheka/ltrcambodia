import styled from "styled-components";


export const NavigationBar = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
`;
export const MainNavigation = styled(NavigationBar)`
    max-width: 100%;
    width: 90%;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
`;
export const BrandLogo = styled.img`
    max-width: 120px;
`;

export const MainBrand = styled.a`
    display: block;
`;

export const FooterWrapper = styled.footer`
  background: #080808;
  position: relative;
  z-index: 1;
  padding-top:6rem;
  padding-bottom: 6rem;
`;
export const Row = styled.div`
   display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: start;
`;

export const Column = styled.div`
    display: flex;
    width: 100%;

`
export const FirstSection = styled.div`
    
`;