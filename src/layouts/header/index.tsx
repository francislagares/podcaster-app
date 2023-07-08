import { Link, Outlet } from 'react-router-dom';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <>
      <Styled.Heading>
        <Link to='/'>Podcaster</Link>
        {children}
      </Styled.Heading>
      <Outlet />
    </>
  );
};

export default Header;
