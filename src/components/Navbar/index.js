import React from 'react'
import * as Styles from './style'
import { items } from './items'

const Navbar = () => {
    return (
        <Styles.Wrapper>
            <Styles.ListContainer>
                {
                    items.map(({link}) => {
                        return(
                            <Styles.Item to="/" key={link}>{link}</Styles.Item>
                        )
                    })
                }
            </Styles.ListContainer>
        </Styles.Wrapper>
    )
}

export default Navbar