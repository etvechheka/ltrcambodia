import styled from 'styled-components'

export const ServiceWrapper = styled.div`
    position: relative;

`;
export const ServiceHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const InnerServiceTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const ServiceHeadTitle = styled.h1`
  font-size: 46px;
  font-weight: bold;
  font-family: "Outfit", sans-serif;
  margin: 0;
  padding-top: 30px;
`;

export const ServiceTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  color: #505050;
`;

export const RightPortion = styled.div`
    display: inline-block;
`;

export const ReadLink = styled.a`
    font-size: 16px;
    font-family: 'Outfit', sans-serif;
     padding: 12px 15px;
    border: 1px solid #3434;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(163, 3, 37, 1);
      color: white;
    }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: start;
  padding: 40px 0;
`;
export const ServiceCard = styled.article`
  background: #9490;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(20,30,40,0.06);
  transition: transform .18s ease, box-shadow .18s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
   &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ReadIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: auto;
`;