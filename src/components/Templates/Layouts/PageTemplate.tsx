import { Page, Button, Box, ButtonGroup, Frame } from '@shopify/polaris';
import { LockMajor, CirclePlusMajor } from '@shopify/polaris-icons';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../../context';

const PageTemplate = () => {
  const { isLoggedIn, onLogout } = useAuth();

  return (
    <Frame>
      <Page
        fullWidth
        title="Fake store"
        subtitle="Best fake store online"
        secondaryActions={
          isLoggedIn ? (
            <Box minHeight="100">
              <ButtonGroup>
                <Button icon={LockMajor} onClick={() => onLogout()} primary>
                  Logout
                </Button>
              </ButtonGroup>
            </Box>
          ) : (
            <Box minHeight="100">
              <ButtonGroup>
                <Button icon={LockMajor} onClick={() => (window.location.href = '/login')} primary>
                  Login
                </Button>
                <Button icon={CirclePlusMajor} onClick={() => (window.location.href = '/register')}>
                  Register
                </Button>
              </ButtonGroup>
            </Box>
          )
        }>
        <Outlet />
      </Page>
    </Frame>
  );
};

export default PageTemplate;
