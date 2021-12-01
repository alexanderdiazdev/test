import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import * as Styled from './style'

const Theme = ({children}) => {
    return (
        <Styled.Wrapper>
            <Header />
            <Navbar />
            <Styled.Contain>
                {children}
            </Styled.Contain>
            <Sidebar />
            <Footer />
        </Styled.Wrapper>
    )
}

export default Theme
