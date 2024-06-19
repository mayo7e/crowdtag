import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;
