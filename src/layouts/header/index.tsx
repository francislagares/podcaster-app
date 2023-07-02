import { Link, Outlet } from 'react-router-dom';

import * as Styled from './styles';

const Header = () => {
  return (
    <>
      <Styled.Heading>
        <Link to='/'>Podcaster</Link>
      </Styled.Heading>
      <Outlet />
    </>
  );
};

export default Header;
