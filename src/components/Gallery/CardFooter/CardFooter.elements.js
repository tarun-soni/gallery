import styled from 'styled-components/macro'

export const UserInfoFooter = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #cfd1d2;
  display: flex;
  /* justify-content: space-evenly; */
  width: 100%;
  align-items: center;
  border-radius: 1rem;
  height: 8rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgb(37 37 37 / 54%),
    #000000e0
  );

  @media screen and (max-width: 768px) {
  }
`
export const UserImg = styled.img`
  border-radius: 50%;
  height: 2rem;
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    height: 0.75rem;
  }
`
export const UserNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 1px;
`
export const UserName = styled.span`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`

export const DownloadIcon = styled.img`
  width: 2rem;
  margin: 0 1rem 0 3rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 1.5rem;
    margin: 0 1rem 0 1.5rem;
  }
`
