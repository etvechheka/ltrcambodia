import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  
`;

export const ProductWrapper = styled.div`
  position: relative;
  padding: 25px 0;
`;

export const Dividen = styled.div`
  padding-top: 300px;
  background-color: #f42a2a;
  position: relative;
  z-index: -1;
`;

export const ProductHeading = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  align-items:center;
`;

export const ProductHeadTitle = styled.h1`
  font-size: 46px;
  font-weight: bold;
  font-family: "Outfit",sans-serif;
  margin: 0;
  padding-top: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: -248px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;  
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  max-height: 500px;
  &:before {
      content: '';
      position: absolute;
      width: 100%;
      height:100%;
      z-index:1;
      background: #110f0fff;
      background: linear-gradient(0deg, rgba(28, 26, 26, 1) 0%, rgba(36, 36, 36, 0) 100%);
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  background-color: #f2f2f2;
  transition: transform 0.3s ease-out;
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:hover {
      ${ProductImage} {
        transform: scale(1.2);
      }
  }
`;

export const ProductInfo = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  position: absolute;
  bottom: 10%;
  z-index:2;
`;

export const ProductTitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  color: #dc0e0eff;
  margin: 0;
  text-transform: uppercase;
  font-family:'Outfit', sans-serif;
`;

export const ProductPrice = styled.span`
  color: #007bff;
  font-size: 15px;
  font-weight: 500;
  font-family:'Outfit', sans-serif;
`;

export const ProductDesc = styled.p`
  font-size: 14px;
  color: #fefefeff;
  margin: 0;
  line-height: 1.4;
`;
