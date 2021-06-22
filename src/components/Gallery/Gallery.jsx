import React from 'react'
import styled from 'styled-components/macro'
import ShuffleIcon from '../../assets/icons/shuffle.svg'
import CardFooter from './CardFooter/CardFooter'
import GalleryCarousel from './GalleryCarousel/GalleryCarousel'

const Gallery = ({
  imagesData = [],
  onShuffleClick,
  loading,
  query,
  setQuery
}) => {
  return (
    <div style={{ background: '#F5F8FB' }}>
      <Header>
        <h1 style={{ margin: '1rem' }}>
          <strong>Gallery</strong>
        </h1>

        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />

        <ShuffleBtn onClick={() => onShuffleClick()}>
          <h3>Shuffle</h3>
          <img
            style={{ height: '1.15rem', marginLeft: '0.5rem' }}
            src={ShuffleIcon}
            alt="shuffle-icon"
          />
        </ShuffleBtn>
      </Header>

      <div style={{ margin: '4rem' }}>
        {loading && <h2>Loading..</h2>}

        <GalleryCarousel>
          {imagesData.map((img, index) => (
            <Item key={index} img={img.urls.regular}>
              <ItemImg />
              <CardFooter
                name={img.user.name}
                user_img={img.user.profile_image.small}
                likes={img.likes}
              />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(220deg, #f2f2f2, #8bb8bea3 100%);
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  background: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ItemImg = styled.div`
  height: inherit;
  /*width: 18rem;
  display: flex;
  align-items: center; */
`

export const SearchInput = styled.input`
  padding: 0.25rem 1rem;
  background: #bec8d1;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 1rem;
  color: white;
`

export default Gallery
