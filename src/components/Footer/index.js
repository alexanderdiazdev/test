import React from 'react'
import * as Styles from './style'
import Logo from '../../assets/logo.svg'
import { items } from './items'

const Footer = () => {
    return (
        <Styles.Wrapper>
            <Styles.Logo>
                <img src={ Logo } alt="Logo" />
            </Styles.Logo>
            <Styles.Info>
                {
                    items.map(({link}) => {
                        return(
                            <Styles.Item to="/" key={link}>{link}</Styles.Item>
                        )
                    })
                }
            </Styles.Info>
        </Styles.Wrapper>
    )
}

export default Footer
