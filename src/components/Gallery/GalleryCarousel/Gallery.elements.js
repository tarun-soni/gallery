import styled from 'styled-components/macro'
export const Wrapper = styled.div`
  width: 45rem;
  overflow: hidden;
  padding-bottom: 3rem;

  @media screen and (max-width: 768px) {
    width: 40rem;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
  min-height: 20rem;
  margin-left: -16rem;
  transition: ${(props) => (props.sliding ? 'none' : 'transform 0.5s ease')};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(-44.25%)'
    if (props.dir === PREV) return 'translateX(calc(2 * (-44.25%)))'
    return 'translateX(0%)'
  }};

  @media screen and (max-width: 768px) {
    margin-left: -4rem;
    min-height: 10rem;
    transition: ${(props) => (props.sliding ? 'none' : 'transform 0.5s ease')};
    transform: ${(props) => {
      if (!props.sliding) return 'translateX(-36%)'
      if (props.dir === PREV) return 'translateX(calc(2 * (-36%)))'
      return 'translateX(0%)'
    }};
  }
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

export const NextPrevBtn = styled.div`
  background: #d0dce6;
  font-size: 16px;
  font-weight: 100;
  border: none;
  border-radius: 0.75rem;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    background: #bec8d1;
  }
`
export const IconImg = styled.img`
  margin: 1.25rem 1.5rem 1rem 1.5rem;
  width: 0.75rem;
  border-radius: 19px;
  /* transform: rotate(-180deg); */
`
export const NEXT = 'NEXT'
export const PREV = 'PREV'
