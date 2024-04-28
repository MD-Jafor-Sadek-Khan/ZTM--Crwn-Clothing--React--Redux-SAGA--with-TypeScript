import styled from "styled-components"

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  img {
    width: 28%;
  }
  filter: brightness(1);
  
  transition: transform 0.3s ease;

  &:hover {
    // opacity: 0.8;
    // box-shadow: -3px 3px 0 rgba(255, 255, 255);
    transform: scaleX(1.05) scaleY(1.08) translateX(5px);
    font-weight: 700;
    font-size: 120%;
  }
`
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

export const Name = styled.span`
  font-size: 16px;
`
