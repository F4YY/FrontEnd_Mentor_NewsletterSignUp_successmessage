import styled from 'styled-components';

export const Container = styled.div`
    //Primary:
    --Tomato: hsl(4, 100%, 67%);
    //Neutral:
    --Dark-Slate-Grey: hsl(234, 29%, 20%);
    --Charcoal-Grey: hsl(235, 18%, 26%);
    --Grey: hsl(231, 7%, 60%);
    --White: hsl(0, 0%, 100%);
    * {
        margin: 0;
    }
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    --regular: 400;
    --bold: 700;
    --primary: var(--Tomato);
    --neutral-1: var(--Dark-Slate-Grey);
    --neutral-2: var(--Charcoal-Grey);
    --neutral-3: var(--Grey);
    --neutral-4: var(--White);
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--neutral-1);
    @media screen and (max-width: 600px) {
        justify-content: flex-start;
        background-color: var(--neutral-4);
    }
`