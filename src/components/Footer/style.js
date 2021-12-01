import Styled from "styled-components";
import { NavLink } from 'react-router-dom'


export const Wrapper = Styled.div`
    display: flex;
    grid-area: footer;
    background-color: #263446;
    padding: 20px;
`
export const Logo = Styled.div`
    width: 20px;
    img{
        max-width: 100%;
    }
`

export const Info = Styled.div`
`

export const ListContainer = Styled.div`
    display: flex;
`
export const Item = Styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    color: #c6cdd8;
    padding: 8px;
    border-radius: 3px;
    transition: .5s;
    font-size: 13px;
    &:hover{
        color: #747d89;
    }
`