import React, { useState } from 'react'
import * as Styles from './style'
import { Formik, Form, useField } from 'formik'
import Axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
      <>
        <Styles.Label htmlFor={props.id || props.name}>{label}</Styles.Label>
        <Styles.Input {...field} {...props} />
      </>
    );
  };

const FormLogin = () => {
    const [Info, setInfo] = useState({name: "", nickname: ""})

    const getUser = async() => {
        const res = await Axios.get("https://fedeperin-harry-potter-api.herokuapp.com/db")
        
        let number = Math.floor((Math.random() * (5 - 1 + 1)) + 1)
        console.log(number);

        setInfo({
            name: res.data.personajes[number].personaje,
            nickname: res.data.personajes[number].apodo
        })
    }
    return (
        <Styles.Wrapper>
            <Formik
                initialValues={{
                    name: "",
                    nickname: "",
                }}

                onSubmit={(values) => {
                    getUser()
                }}
            >
                <Form>
                <MyTextInput
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder=""
                    value={ Info.name }
                />
                <MyTextInput
                    label="Nickname"
                    name="nickname"
                    type="text"
                    placeholder=""
                    value={ Info.nickname }
                />
                <Styles.Button type="submit">
                    Enviar
                </Styles.Button>
                </Form>
            </Formik>
        </Styles.Wrapper>
    )
}

export default FormLogin
