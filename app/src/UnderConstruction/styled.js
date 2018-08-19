import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
`;

export const FlexWrap = FlexDiv.extend`
    flex-wrap: wrap;
`;

export const SBAC = FlexWrap.extend`
    justify-content: space-between;
    align-items: center;
`;

export const FlexCol = FlexDiv.extend`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    &:after {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.3;
    }
`;

export const NotifyDiv = styled.div`
    width: 500px;
    max-width: calc(100% - 10px);
    position: relative;
    background-color: transparent;
    height: 50px;
    border: 2px solid #000;
    border-radius: 25px;
`;

export const Input = styled.input`
    height: 100%;
    padding: 0 38px 0 38px;
    font-family: Poppins-Regular;
    font-size: 15px;
    line-height: 1.2;
    width: 100%;
    background: transparent;
`;

export const NotifyBtn = styled.button`
    border: 2px solid #000;
    border-radius: 25px;
    padding: 0 20px;
    margin: 0px 5px 0px 5px;
    min-width: 160px;
    height: 50px;
    font-family: Poppins-Regular;
    font-size: 15px;
    line-height: 1.2
`;