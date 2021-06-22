import { createApi } from 'unsplash-js'

import GlobalStyles from './GlobalStyles'
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery/Gallery'
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
      console.log('query :>> ', query)
      setLoading(true)
      try {
        const res = await api.search.getPhotos({
          query: query,
          orientation: 'landscape'
        })

        console.log('res :>> ', res)
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '3rem'
        }}
      >
        <Gallery
          imagesData={data?.response?.results.slice(0, 5)}
          onShuffleClick={onShuffleClick}
          loading={loading}
          setQuery={setQuery}
          query={query}
        />
      </div>
    </>
  )
}

export default App
