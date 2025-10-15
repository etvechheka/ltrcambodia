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