import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../../utils/breakpoints'
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  height: auto;
  ${MEDIA_QUERIES.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
`
export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 20px;
  text-align: center;
`
