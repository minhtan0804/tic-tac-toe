import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: ${props => props.className === 'is-X' ? "#2cccff" : "#ff6651"};
`;

