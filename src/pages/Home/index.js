import React from 'react'
import Theme from '../../components/Theme'
import * as Styles from './styles'
import { benefits } from './items'

const Home = () => {
    return (
        <Theme>
            <Styles.Wrapper>
                <Styles.H2>
                    Beneficios para su negocio
                </Styles.H2>
                <Styles.BenefitsContainer>
                    {
                        benefits.map(({text}) => {
                            return(
                                <Styles.Benefit key={text}>{text}</Styles.Benefit>
                            )
                        })
                    }
                </Styles.BenefitsContainer>
                <Styles.Image>
                    <img src="https://loremflickr.com/400/200" alt="" />
                </Styles.Image>
            </Styles.Wrapper>
        </Theme>
    )
}

export default Home
