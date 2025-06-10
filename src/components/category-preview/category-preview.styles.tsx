import styled from 'styled-components'
export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`
export const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin: 20px auto;
    align-items: center;
  }
`
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
`
