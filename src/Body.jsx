import { useEffect, useState } from 'react'

const Body = ({ api }) => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await api.search.getPhotos({
          query: 'dog',
          orientation: 'landscape'
        })
        setPhotosResponse(res)

        console.log('res :>> ', res)
      } catch (error) {
        console.log('error in fetch', error)
      }
    }
    fetchPhotos()
  }, [api])

  if (data === null) {
    return <div>Loading...</div>
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  }
  return (
    <div className="feed">
      <ul className="columnUl">
        {data.response.results.map((photo) => (
          <li key={photo.id} className="li">
            <PhotoComp photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Body

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo

  return (
    <>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </>
  )
}
