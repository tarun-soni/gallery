import styled from 'styled-components/macro'
export const Wrapper = styled.div`
  width: 45rem;
  overflow: hidden;
  padding-bottom: 3rem;
`

export const CarouselContainer = styled.div`
  display: flex;
  min-height: 20rem;
  margin-left: -16rem;
  transition: ${(props) => (props.sliding ? 'none' : 'transform 0.75s ease')};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(-44.25%)'
    if (props.dir === PREV) return 'translateX(calc(2 * (-44.25%)))'
    return 'translateX(0%)'
  }};
`

export const CarouselSlot = styled.div`
  display: flex;
  padding: 1em 2em;
  order: ${(props) => props.order};
`

export const NextPreviousBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const NextPrevBtn = styled.button`
  font-size: 16px;
  font-weight: 100;
  padding: 1rem;
  background-color: red;
`
export const NEXT = 'NEXT'
export const PREV = 'PREV'
