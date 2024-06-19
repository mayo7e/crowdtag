import styled from 'styled-components';

export const StyledDashboardPage = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;

    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
    }
  }
`;
