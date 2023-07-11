import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthInput from '../../components/input/AuthInput';
import { AuthType } from '../../types/userTypes';
import { errorDataObjectType } from '../../types/errorDataObjectTypes';
import userApi from '../../api/userAuth';
import { observer } from 'mobx-react-lite';
import userStore from '../../strore/userStore';
import { AxiosError } from 'axios';
import { StyledCard, StyledForm } from './auth.styles';
import { Button } from '@mui/material';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
});

const SignUp: FC = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmitHandler = async (data: AuthType) => {
    try {
      const email = data.email;
      const password = data.password;

      const user = await userApi.registration({ email, password });

      userStore.setUser(user);

      if (location.state) {
        navigate(location.state);
      } else {
        navigate('/');
      }
    } catch (error) {
      const err = error as AxiosError;

      const data = err.response?.data as errorDataObjectType;
      const message = data.message;

      if (message.includes('password')) {
        setError('password', {
          type: 'server',
          message: message,
        });
        return;
      }

      if (message.includes('email')) {
        setError('email', {
          type: 'server',
          message: message,
        });
        return;
      }
    }
  };

  return (
    <StyledCard className="sign-in">
      <StyledForm className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Sign up</h1>

        <div className="input-container">
          <AuthInput
            labelText={errors.email?.message ? errors.email?.message : 'Enter your email'}
            type="text"
            inputRef={register('email').ref}
            name={register('email').name}
            onChange={register('email').onChange}
            onBlur={register('email').onBlur}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
        </div>

        <div className="input-container">
          <AuthInput
            labelText={errors.password?.message ? errors.password?.message : 'Enter your password'}
            type="password"
            inputRef={register('password').ref}
            name={register('password').name}
            onChange={register('password').onChange}
            onBlur={register('password').onBlur}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
        </div>

        <Button variant="outlined" type='submit' className='auth-submit'>
          submit
        </Button>
      </StyledForm>
    </StyledCard>
  );
});

export default SignUp;