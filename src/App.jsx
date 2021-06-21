import { createApi } from 'unsplash-js'

import Body from './Body'
import landscape_1 from './assets/landscape_1.jpg'
import landscape_2 from './assets/landscape_2.jpg'
import portrait_1 from './assets/portrait_1.jpg'
import portrait_2 from './assets/portrait_2.jpg'
import GlobalStyles from './GlobalStyles'
import Gallery from './Gallery/Gallery'
function App() {
  const api = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY
  })

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem'
        }}
      >
        <Gallery images={[landscape_1, landscape_2, portrait_1, portrait_2]} />
      </div>
    </>
  )
}

export default App
