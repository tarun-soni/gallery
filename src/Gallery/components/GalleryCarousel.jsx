import React, { useReducer } from 'react'
import { useSwipeable } from 'react-swipeable'
import {
  CarouselContainer,
  Wrapper,
  CarouselSlot,
  NextPreviousBtnContainer,
  NextPrevBtn,
  PREV,
  NEXT,
  IconImg
} from './Gallery.elements'
import PrevBtn from '../icons/PrevBtn.svg'
import NextBtn from '../icons/NextBtn.svg'
const initialState = { pos: 0, sliding: false, dir: NEXT }

const GalleryCarousel = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const numItems = React.Children.count(children)

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true
  })

  const getOrder = (index, pos, numItems) => {
    const _current =
      index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos
    return _current
  }

  const slide = (dir) => {
    dispatch({ type: dir, numItems })
    setTimeout(() => {
      dispatch({ type: 'stopSliding' })
    }, 1)
  }

  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {children.map((child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder(index, state.pos, numItems)}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <NextPreviousBtnContainer>
        <NextPrevBtn onClick={() => slide(PREV)}>
          <IconImg src={PrevBtn} alt="prev btn" />
        </NextPrevBtn>
        <NextPrevBtn onClick={() => slide(NEXT)} float="right">
          <IconImg src={NextBtn} alt="next btn" />
        </NextPrevBtn>
      </NextPreviousBtnContainer>
    </div>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1
      }
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
      }
    case 'stopSliding':
      return { ...state, sliding: false }
    default:
      return state
  }
}

export default GalleryCarousel
