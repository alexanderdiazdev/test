import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    grid-area: nav;
    margin-bottom: 30px;
    border-bottom: 1px solid #c6cdd8;
    padding-bottom: 20px;
`
export const ListContainer = styled.div`
    display: flex;
`
export const Item = styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    color: #263446;
    padding: 8px;
    border-radius: 3px;
    transition: .5s;
    &:hover{
        background-color: #2c71f0;
        color: white;
    }
`
