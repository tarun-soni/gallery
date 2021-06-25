import axios from 'axios'
import React from 'react'
import {
  UserInfoFooter,
  UserImg,
  UserNameDiv,
  UserName,
  DownloadIcon
} from './CardFooter.elements'

const CardFooter = ({ likes, user_img, name, download_link }) => {
  const download = async (e) => {
    e.preventDefault()
    let _res = ''
    axios
      .get(download_link, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      })
      .then((r) => {
        _res = r.data.url
      })
      .then(() => {
        fetch(_res, {
          method: 'GET',
          headers: {}
        })
          .then((res) => {
            res.arrayBuffer().then(function (buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]))
              const link = document.createElement('a')
              link.href = url
              link.setAttribute('download', 'image.png') //or any other extension
              document.body.appendChild(link)
              link.click()
            })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log('err :>> ', err)
      })
  }
  return (
    <UserInfoFooter>
      <UserImg src={user_img} alt="user-img" />

      <UserNameDiv>
        <UserName>
          <strong>{name}</strong>
        </UserName>
        <UserName> {likes} likes recieved</UserName>
      </UserNameDiv>
      <a
        // href={`${download_link}/?client_id=${process.env.REACT_APP_ACCESS_KEY}`}
        href={download_link}
        target="_blank"
        rel="noreferrer"
        download
        onClick={(e) => download(e)}
      >
        <DownloadIcon src="https://img.icons8.com/pastel-glyph/64/ffffff/download--v1.png" />
      </a>
    </UserInfoFooter>
  )
}

export default CardFooter
