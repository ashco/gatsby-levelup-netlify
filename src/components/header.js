import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #a39497;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
`

// doesn't work because Img is multi elements
// const Billboard = styled(Img)`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Img
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
        }}
        sizes={data.background.sizes}
      />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
