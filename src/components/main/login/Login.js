import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container } from '../../layoutComponent/Container';
import { Button, FormHelperText } from '@material-ui/core';
import { Form } from './Form';
import { Input } from './Input';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Context } from './../../hooks/context';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

const schema = yup.object().shape({
  login: yup
   .string()
   .required("Поле, обязательное для заполнения"),
  password: yup
   .string()
   .required("Поле, обязательное для заполнения"),
});

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "15px",
  },
}));

export const Login = () => {
  const styles = useStyles();
  const { setToken, setIsFetching } = useContext(Context);
  const [reqestError, setReqestError] = useState(false);

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setReqestError(false);
    setIsFetching(true);
    axios.post("https://acits-test-back.herokuapp.com/api/login", { 
      login: data.login,
      password: data.password })
    .then(res => {
      setToken(res.data.accessToken);
      localStorage.setItem('token', res.data.accessToken);
      return <Redirect to="/today"/>;
    }) 
    .catch(error => {
      console.warn(error);
      setReqestError(true);
      setIsFetching(false);
    });
  };

  return (
    <Container>
      <h1 >Авторизация</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("login")}
          id="login"
          type="text"
          label="Логин"
          name="login"
          required
          error={!!errors.login}
          helperText={errors?.login?.message}
        />
        <Input
          {...register("password")}
          id="password"
          type="text"
          label="Пароль"
          name="password"
          required
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        {reqestError && <FormHelperText
          error
        >Имя пользователя или пароль введены не верно</FormHelperText>}
        <Button
          variant="contained"
          color="primary"
          className={styles.root}
          type="submit"
        >
          Отправить
        </Button>
      </Form>
    </Container>
)};