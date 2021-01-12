import React, { useState, useEffect, useContext} from 'react';
import { UserContext } from '../libs/contextLib'
import { API } from 'aws-amplify';

import ProfileForm from '../components/Form/Profile/ProfileForm';

const Profile = () => {
  const [user] = useContext(UserContext);
  const [fetchedUser, setFetchedUser] = useState({})

  const handleProfileChange = e => {
    e.preventDefault();
    console.log(`Event object: ${e}`); };

  useEffect(() => {
    API
      .get('users', `/users/${user}`, {})
      .then(res => {
        setFetchedUser(res.user)
      })
      .catch(e => alert(`Error fetching user object: ${e}`))

  }, [user]);

    return (
        <div>
            <ProfileForm 
              user={fetchedUser} 
              handleSubmit={handleProfileChange}
            />
        </div>
    )
};

export default Profile;
