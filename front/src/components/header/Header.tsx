import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import userStore from '../../strore/userStore';
import { AppBar, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { StyledHeaderContainer } from './Header.styles';

const Header: FC = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const homePage = () => {
    navigate('/');
  };

  const profilePage = () => {
    navigate('/profile');
  };

  const onClick = () => {
    let state;

    const path = location.pathname;

    if (path !== '/signUp' && path !== '/login') {
      state = path;
    } else {
      state = location.state;
    }

    if (path === '/login') {
      navigate('/signUp', { state });
    } else {
      navigate('/login', { state });
    }
  };

  return (
    <AppBar className="header" position='relative'>
      <StyledHeaderContainer className="padding-container">
        <Button
          variant='text'
          onClick={homePage}
          className="header-logo"
          color="inherit"
        >
          home
        </Button>
        <div className="input-container">
          <span className="header__title">Catalog</span>
        </div>
        {userStore.email
          ? (
            <div className="auth-container">
              <Button
                variant='text'
                color='inherit'
                onClick={profilePage}
              >
                Profile
              </Button>
              {`hello ${userStore.firstName ? userStore.firstName : userStore.email}`}
            </div>
          )
          : (
            <div className="auth-container">
              <Button
                variant='text'
                color='inherit'
                className="header-auth"
                onClick={onClick}
              >
                Log In / Sing Up
              </Button>
            </div>
          )}
      </StyledHeaderContainer>
    </AppBar>
  );
});

export default Header;