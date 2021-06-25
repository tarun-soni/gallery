import { createApi } from 'unsplash-js'

import GlobalStyles from './GlobalStyles'
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery/Gallery'
import styled from 'styled-components/macro'
function App() {
  const api = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY
  })

  const keywords = ['cat', 'dog', 'lion', 'city', 'car', 'parrot']
  const [data, setPhotosResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState(
    keywords[Math.floor(Math.random() * keywords.length)]
  )

  const onShuffleClick = () => {
    const _query = keywords[Math.floor(Math.random() * keywords.length)]
    if (_query === query) onShuffleClick()
    setQuery(_query)
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true)
      try {
        const res = await api.search.getPhotos({
          query: query,
          orientation: 'landscape'
        })

        setPhotosResponse(res)

        setLoading(false)
      } catch (error) {
        console.log('error in fetch', error)
        setLoading(false)
      }
    }
    fetchPhotos()

    // eslint-disable-next-line
  }, [query])

  if (data?.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  }

  return (
    <>
      <GlobalStyles />
      <GlobalWrapper>
        <Gallery
          imagesData={data?.response?.results.slice(0, 5)}
          onShuffleClick={onShuffleClick}
          loading={loading}
          setQuery={setQuery}
          query={query}
        />
      </GlobalWrapper>
    </>
  )
}

const GlobalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`
export default App
