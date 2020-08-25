import styled from 'styled-components';


const HeaderImage = styled.img`
  height: 30px;
  width: auto;

  @media (max-width: 640px) {
    height: 25px;
  }

  @media (max-width: 540px) {
    height: 20px;
  }

  @media (max-width: 480px) {
    height: 15px;
  }

  @media (max-width: 355px) {
    height: 12px;
  }
`

export default HeaderImage;