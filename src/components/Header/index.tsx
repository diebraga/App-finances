import imgLogo from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  openModal: () => void
}

const Header = ({ openModal }: HeaderProps): JSX.Element => {

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="finances"/>
        <button type='button' onClick={openModal}>
          New transaction
        </button>

      </Content>
    </Container>
  );
};

export default Header;
