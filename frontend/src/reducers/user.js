import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    accessToken: null,
    userId: 0,  // change to null???
    profileMessage: null,
    errorMessage: null,
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setProfileMessage: (state, action) => {
      const { profileMessage } = action.payload;
      console.log(`Profile Message: ${profileMessage}`);
      state.login.profileMessage = profileMessage;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      console.log(`Error Message: ${errorMessage}`);
      state.login.errorMessage = errorMessage;
    },
  },
});

// Thunks
export const login = (name, email, password) => {
  const LOGIN_URL = 'https://home-grown-green.herokuapp.com/sessions';
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json();
        }

        // Not OK
        throw 'Unable to sign in. Please check your username and password are correct';
      })
      .then((json) => {
        // Save the login info
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }));
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const getProfileMessage = () => {
  const USERS_URL = 'https://home-grown-green.herokuapp.com/users';
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;
    // Include userId in the path
    fetch(`${USERS_URL}/${userId}`, {
      method: 'GET',
      // Include the accessToken to get the protected endpoint
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw 'Could not get information. Make sure you are logged in and try again.';
      })
      // SUCCESS: Do something with the information we got back
      .then((json) => {
        dispatch(
          user.actions.setProfileMessage({ profileMessage: JSON.stringify(json) })
        );
      })
      .catch((err) => {
        // const errorMessage = err;
        // dispatch(user.actions.setErrorMessage({ errorMessage }));

        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      }); //401
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setProfileMessage({ profileMessage: null }));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
  };
};
