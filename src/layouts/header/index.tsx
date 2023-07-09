import { Link, Outlet } from 'react-router-dom';

import Loader from '@/components/loader';
import { useLoadingContext } from '@/contexts/loading';

import * as Styled from './styles';

const Header = () => {
  const { isLoading } = useLoadingContext();

  return (
    <>
      <Styled.Heading>
        <Link to='/'>Podcaster</Link>
        {isLoading && <Loader />}
      </Styled.Heading>
      <Outlet />
    </>
  );
};

export default Header;
