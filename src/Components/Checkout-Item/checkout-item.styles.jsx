import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  margin:5px 0;
  // border-bottom: 1px solid darkgrey;
  padding: 15px 11px;
  font-size: 20px;
  align-items: center;
  color: white;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 15px;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const Name = styled.span`
  width: 23%;
`

export const Quantity = styled.span`
  width: 23%;
  display: flex;
`

export const Arrow = styled.div`
  cursor: pointer;
`
export const Price = styled.span`
  width: 23%;
`
export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`
export const Value = styled.span`
  margin: 0 10px;
`