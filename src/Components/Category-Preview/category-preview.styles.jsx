import { Link } from "react-router-dom"
import styled from "styled-components"

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  // color: white;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    column-gap: 0;
  }
`
