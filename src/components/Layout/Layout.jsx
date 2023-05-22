import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './LayoutStyled.component';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>LOADING....</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
