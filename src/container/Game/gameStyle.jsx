import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    > button {
        width: 8em;
        /* margin: 20px; */
        display: inline-block;
        padding: 10px 20px;
        color: white;
        background-color: #6A5AF9;
        font-size: 16px;
        border: none;
        outline: none;
    }
`;

export const Team = styled.div`
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const TeamX = styled.button`
    width: 150px;
    color: #2cccff;
    background-color: #eee;
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const TeamO = styled.button`
    width: 150px;
    color: #FF6651;
    background-color: #eee;
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`;



export const WinnerGame = styled.div`
    font-size: 20px;
    color: #F62682;
`;

export const ScoreTable = styled.div`
    width: 150px;
    height: 100%;
    /* background-color: #eee; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    color: red;
`;