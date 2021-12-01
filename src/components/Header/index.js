import React from 'react'
import * as Styles from './style'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <Styles.Wrapper>
            <Styles.Logo>
                <img src={ Logo } alt="Logo" />
            </Styles.Logo>
            <Styles.Title>Estrategia digital para su negocio</Styles.Title>
        </Styles.Wrapper>
    )
}

export default Header
