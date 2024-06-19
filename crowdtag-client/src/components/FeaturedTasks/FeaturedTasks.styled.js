import styled from 'styled-components';

export const StyledFeaturedTasks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TaskCard = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  width: 200px;

  h4 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
