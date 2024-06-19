

import styled from 'styled-components';


export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavItem = styled.div`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;

  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  margin-left: 1rem;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
      background-color: ${({ theme }) => theme.colors.background};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  input:checked + span:before {
    transform: translateX(14px);
  }

  &.moon-icon {
    &:before {
      content: "🌙";
      font-size: 14px;
      position: absolute;
      right: 3px;
      top: 3px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const UserName = styled.span`
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
