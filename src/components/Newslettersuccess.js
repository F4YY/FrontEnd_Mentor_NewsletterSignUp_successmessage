import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Hstack, Leftsider, Rightsider, Styledneswletter, Vstack } from './styled/newsletter.styled';
import { Thanksubscribe } from './Thanksubscribe';

export const Newslettersuccess = () => {
    const [submit, setSubmit] = React.useState(false);
    const submitHandler = () => {
        setSubmit(!submit);
    }
    const dismissHandler = () => {
        setSubmit(!submit);
        formik.values.email = '';
    }
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('valid email required')
                .required('email is required'),
        }),
        onSubmit: values => {
            submitHandler();
        },
    });
  return (
    <>
        {!submit ? (
        <Styledneswletter>
            <Leftsider>
                <h1>Stay updated!</h1>
                <p>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <form onSubmit={formik.handleSubmit}>
                    <Vstack>
                        <Hstack className='aligner'>
                            <label htmlFor="email">Email address</label>
                            <label>
                                {formik.touched.email && formik.errors.email &&
                                (<h4 style={{color: "var(--Tomato)"}}>{formik.errors.email}</h4>)}
                            </label>
                        </Hstack>
                        <input
                            type="text"
                            placeholder="email@company.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            name="email"
                            id="email"
                            style={formik.errors.email && formik.touched.email && {
                                color: "var(--Tomato)",
                                borderColor: "var(--Tomato)",
                                borderWidth: '2px',
                                backgroundColor: "hsl(4, 100%, 67%, .2)",
                               }}
                        />
                    </Vstack>
                    <button type="submit">Subscribe to monthly newsletter</button>
                </form>
            </Leftsider>
            <Rightsider/>
        </Styledneswletter>) : (
            <Thanksubscribe
                submit={submit}
                submitHandler={submitHandler}
                dismissHandler={dismissHandler}
                value={formik.values.email}
            />)
        }
    </>
  )
}
