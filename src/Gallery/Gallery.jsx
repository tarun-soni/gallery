import React from 'react'
import styled from 'styled-components/macro'
import GalleryCarousel from './components/GalleryCarousel'
import ShuffleIcon from './icons/shuffle.svg'
const Gallery = ({ images = [] }) => {
  return (
    <div style={{ background: '#F5F8FB' }}>
      <Header>
        <h1 style={{ margin: '1rem' }}>
          <strong>Gallery</strong>
        </h1>

        <ShuffleBtn>
          <h3>Shuffle</h3>
          <img
            style={{ height: '1.15rem', marginLeft: '0.5rem' }}
            src={ShuffleIcon}
            alt="shuffle-icon"
          />
        </ShuffleBtn>
      </Header>

      <div style={{ margin: '4rem' }}>
        <GalleryCarousel>
          {images.map((img, index) => (
            <Item key={index}>
              <ItemImg img={img} />
            </Item>
          ))}
        </GalleryCarousel>
      </div>
    </div>
  )
}

const Header = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #126a85;
`
const ShuffleBtn = styled.div`
  margin: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d0dce6;
  color: #126a85;
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background: #bec8d1;
  }
`

export const Item = styled.div`
  text-align: center;
  height: 20rem;

  background-size: contain;
  width: 20rem;
  object-fit: contain;
  background-repeat: no-repeat;

  margin-right: 10px;
  transition: transform 300ms;
  /* border: 13px solid blue; */
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemImg = styled.div`
  height: inherit;
  width: 25rem;
  background-size: contain;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0.75em 0.75em 1em);
`

export default Gallery
