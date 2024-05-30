import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/Form/Field'
import FormCheckRadio from '../components/Form/CheckRadio'
import Divider from '../components/Divider'
import Buttons from '../components/Buttons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'

type RegisterForm = {
    name: string,
    email: string,
    password: string,
    remember: boolean,
}

const RegisterPage = () => {
    const router = useRouter()

    const handleSubmit = (formValues: RegisterForm) => {
        router.push('/dashboard')
        console.log('Form values', formValues)
    }

    const initialValues: RegisterForm = {
        name: '',
        email: '',
        password: '',
        remember: true,
    }

    return (
        <>
            <Head>
                <title>{getPageTitle('Login')}</title>
            </Head>

            <SectionFullScreen bg="purplePink">
                <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <FormField label="Name and Surname" help="Please enter your Name and Surname">
                                <Field name="name" />
                            </FormField>

                            <FormField label="E-mail" help="Please enter your email address">
                                <Field name="email" />
                            </FormField>

                            <FormField label="Password" help="Please enter your password">
                                <Field name="password" type="password" />
                            </FormField>

                            <FormCheckRadio type="checkbox" label="Remember">
                                <Field type="checkbox" name="remember" />
                            </FormCheckRadio>

                            <Divider />

                            <Buttons>
                                <Button type="register" label="Sign-up" color="info" />
                                <Button href="/" label="Go back" color="info" outline />
                            </Buttons>
                        </Form>
                    </Formik>
                </CardBox>
            </SectionFullScreen>
        </>
    )
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutGuest>{page}</LayoutGuest>
}

export default RegisterPage
