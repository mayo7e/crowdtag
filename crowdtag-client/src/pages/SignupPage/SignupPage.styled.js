import styled from 'styled-components';

export const StyledSignupPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }

  label {
    font-size: 1em;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
    font-size: 1em;
  }

  button {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  p {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;

    form {
      width: 100%;
    }
  }
`;
