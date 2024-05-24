import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VITE_SPLITWISE_CONSUMER_KEY,VITE_SPLITWISE_CONSUMER_SECRET,VITE_SPLITWISE_REDIRECT_URI } from '../../../api';
const Home = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const fetchUserProfile = async (accessToken) => {
      try {
        const userResponse = await axios.get(
          'https://secure.splitwise.com/api/v3.0/get_current_user',
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const person = userResponse.data?.user;
        if (person) {
          setProfile(person);
          console.log('Data received successfully');
        } else {
          throw new Error('Invalid token or failed to retrieve user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    const handleToken = async () => {
      const storedToken = localStorage.getItem('access_token');

      if (!code && !storedToken) {
        console.log('Authorization code not found and no stored token');
        setError('Authorization code not found');
        setLoading(false);
        return;
      }

      if (storedToken) {
        console.log('Using stored access token');
        fetchUserProfile(storedToken);
        return;
      }

      if (code) {
        try {
          const tokenResponse = await axios.post(
            'https://secure.splitwise.com/oauth/token',
            {
              client_id: VITE_SPLITWISE_CONSUMER_KEY,
              client_secret: VITE_SPLITWISE_CONSUMER_SECRET,
              redirect_uri: VITE_SPLITWISE_REDIRECT_URI,
              grant_type: 'authorization_code',
              code: code,
            }
          );

          const access_token = tokenResponse.data?.access_token;

          if (!access_token) {
            throw new Error('No access token received');
          }

          localStorage.setItem('access_token', access_token);
          fetchUserProfile(access_token);
        } catch (error) {
          console.error('Error fetching access token:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
          }
          setError('Error fetching access token');
          setLoading(false);
        }
      }
    };

    handleToken();
  }, []);

  if (loading) {
    return <div className="App"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="App"><p>{error}</p></div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home Page</h1>
        {profile ? (
          <div>
            <h2>Welcome to Finvo, {profile.first_name}</h2>
            {profile.picture && profile.picture.large && (
              <img src={profile.picture.large} alt={`${profile.first_name}'s profile`} />
            )}
          </div>
        ) : (
          <p>Failed to load profile. Please check your access token.</p>
        )}
      </header>
    </div>
  );
};

export default Home;
