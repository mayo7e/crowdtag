import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { ProfileContainer } from './Profile.styled';

const Profile = () => {
  const { user,  isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  if (isAuthenticated) {
    return <div>Loa ...</div>;
  }

  return (
(   isAuthenticated &&
      <ProfileContainer>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </ProfileContainer>)
    
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>loading</div>,
}) ;
