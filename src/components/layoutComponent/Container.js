import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
`;

export const Container = ({ children, ...props }) => (
  <ContainerWrapper >
    {children}
  </ContainerWrapper>
)