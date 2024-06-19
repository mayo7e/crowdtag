import styled from 'styled-components';

export const StyledHomePage = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1, h2, h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  hr {
    margin: 40px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 10px;

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.25em;
    }

    h3 {
      font-size: 1em;
    }

    a {
      font-size: 0.9em;
      padding: 8px 16px;
    }
  }
`;
