import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav nav nav"
        "contain contain sidebar"
        "footer footer footer"
    ;
    padding: 25px;
    height: 100vh;
`

export const Contain = styled.div`
`