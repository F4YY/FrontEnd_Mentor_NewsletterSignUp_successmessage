import React from 'react';
import { Checkmark, Styledthank } from './styled/newsletter.styled';
import { Newslettersuccess } from './Newslettersuccess';

export const Thanksubscribe = (props) => {
  return (
    <>
    {props.submit ? (
        <Styledthank>
            <Checkmark
                src={require('./assets/images/icon-list.svg').default}
                alt="checkmark"
            />
            <h1>
                Thanks for subscribing!
            </h1>
            <p>
                A confirmation email has been sent to <b>admin@faydgalgona.com</b>.
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={props.submitHandler}>Dismiss message</button>
        </Styledthank>) :
        (<Newslettersuccess/>)
    }
    </>
    );
}
