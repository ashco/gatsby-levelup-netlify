import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '24vh')};
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
  /* position: relative; */
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

class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    // console.log(this.props.location.pathname)
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        // console.log(this.wrapper)
        this.wrapper.animate(
          [
            { height: '24vh' }, // beginning
            { height: '70vh' }, // ending
          ],
          {
            // animation properties
            duration: 400,
            fill: 'forwards', // stick at end frame
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1,
          }
        )
      } else {
        this.wrapper.animate(
          [
            { height: '70vh' }, // beginning
            { height: '24vh' }, // ending
          ],
          {
            // animation properties
            duration: 400,
            fill: 'forwards', // stick at end frame
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1,
          }
        )
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      // refs are a way to reference a component
      // sets this.wrapper to dom element
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
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
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
            sizes={data.background.sizes}
          />
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

export default Header
