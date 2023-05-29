import styled from "styled-components";
import bgdesktop from '../assets/images/illustration-sign-up-desktop.svg';
import bgmobile from '../assets/images/illustration-sign-up-mobile.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`
export const Styledneswletter = styled(Hstackflexi)`
    width: 880px;
    height: 590px;
    border-radius: 40px;
    padding: 25px;
    background-color: var(--neutral-4);
    box-shadow: 0 10px 20px 1px rgba(0,0,0,0.25);
    @media screen and (max-width: 1025px) {
        width:85%;
        margin: 20px;
    }
    @media screen and (max-width: 600px) {
        width: fit-content;
        height: 100%;
        border-radius: 0;
        padding: 0;
        margin:0;
        box-shadow: none;
    }
`
export const Leftsider = styled(Vstack)`
    width: 450px;
    height: 100%;
    color: var(--neutral-1);
    padding: 0 40px;
    h1{
        font-size: 3.3em;
        font-weight: var(--bold);
        margin: 70px 0 20px 0;
    }
    h4{
        margin: 0 25px 0 0;
    }
    p{
        font-size: 1em;
        font-weight: var(--regular);
        margin:0 0 25px 0;
    }
    li{
        list-style: none;
        font-size: 1em;
        position: relative;
        font-weight: var(--regular);
        padding: 0 0 0 35px;
        margin: 0 0 12px 0;
    }
    li::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url('${require('../assets/images/icon-list.svg').default}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    label{
        font-size: .8em;
        font-weight: var(--bold);
        margin: 30px 0 10px 0;
    }
    input{
        width: 82%;
        height: 54px;
        border-radius: 8px;
        border: 1px solid var(--neutral-3);
        padding: 0 22px;
        font-size: 1em;
        font-weight: var(--regular);
        margin: 0 0 25px 0;
        &:focus{
            outline: none;
        }
    }
    button{
        width: 94%;
        height: 55px;
        font-size: 1em;
        font-weight: var(--bold);
        border-radius: 8px;
        border: none;
        color: var(--neutral-4);
        background-color: var(--neutral-1);
        margin: 0 0 20px 0;
        &:hover{
            cursor: pointer;
            background-color: var(--primary);
        }
        &:active{
            transform: scale(0.98);
        }
    }
    .aligner{
        align-items: center;
        justify-content: space-between;
    }
    @media screen and (max-width: 1025px) {
        padding: 0;
    }
    @media screen and (max-width: 600px) {
        width: fit-content;
        height: auto;
        padding:0 25px;
        h1{
            font-size: 2.7em;
            margin: 40px 0 20px 0;
        }
        h4{
            margin: 0;
        }
        p{
            font-size: .95em;
            margin:0 0 25px 0;
        }
        label{
            margin: 30px 0 10px 0;
        }
        input{
            width: auto;
            height: 50px;
            font-size: .9em;
            margin: 0 0 25px 0;
        }
        button{
            width: 100%;
            font-size: .9em;
            margin: 0 0 20px 0;
        }
    }
`
export const Rightsider = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${bgdesktop});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 600px) {
        width:100%;
        min-height: 290px;
        border-radius: 0 0 20px 20px;
        background-image: url(${bgmobile});
        background-size: cover;
    }
`
export const Styledthank = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 380px;
    height: 420px;
    border-radius: 40px;
    padding: 50px 60px 40px;
    color: var(--neutral-1);
    background-color: var(--neutral-4);
    box-shadow: 0 10px 20px 1px rgba(0,0,0,0.35);
    h1{
        font-size: 3.3em;
        font-weight: var(--bold);
        line-height: 1;
        margin: 15px 0 20px 0;
    }
    p{
        font-size: 1em;
        font-weight: var(--regular);
        line-height: 1.5;
        margin:0 0 35px 0;
    }
    button{
        width: 100%;
        height: 55px;
        font-size: 1em;
        font-weight: var(--bold);
        border-radius: 8px;
        border: none;
        color: var(--neutral-4);
        background-color: var(--neutral-1);
        margin: 0 0 20px 0;
        &:hover{
            cursor: pointer;
            background-color: var(--primary);
        }
        &:active{
            transform: scale(0.98);
        }
    }
    @media screen and (max-width: 1025px) {
        margin: 20px auto;
    }
    @media screen and (max-width: 600px) {
        width: fit-content;
        height: auto;
        border-radius: 0;
        padding: 50px 25px 40px;
        margin:70px 0 20px;
        box-shadow: none;
        h1{
            font-size: 2.7em;
            margin: 15px 0 20px 0;
        }
        p{
            font-size: .95em;
            margin:0 0 35px 0;
        }
        button{
            width: 100%;
            font-size: 1em;
            margin: 60% 0 20px 0;
        }
    }
`
export const Checkmark = styled.img`
    width: 65px;
    height: auto;
    margin: 0 0 20px 0;
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Cool-gray);
    margin: 0 auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    a{
        color: var(--primary);
    }
    p{
        font-size: .8rem;
        color: var(--neutral-3);
    }
`