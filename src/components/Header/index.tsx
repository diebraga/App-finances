import imgLogo from '../../assets/logo.svg'
import { Container, Content } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="finances"/>
        <button type='button'>
          New transaction
        </button>

      </Content>
    </Container>
  );
};

export default Header;
