import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${MEDIA_QUERIES.mobile} {
    margin-bottom: 10px;
  }
`
export const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;

  ${MEDIA_QUERIES.mobile} {
    margin: 20px auto;
    align-items: center;
  }
`
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  ${MEDIA_QUERIES.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
`
