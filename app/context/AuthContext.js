import React, {createContext, useState} from 'react';

import barAPI from '../api/barAPI';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState();

  const login = async (data) => {
    setIsLoading(true);    
    const {user_name, password} = data;        
     try {
      const data = await barAPI.login({
        user_name, 
        password
      })
      //check response
      setUser(data.user)
      setUserToken(data.authToken);
      setIsLoading(false);
      // navigation.navigate('AppNavigator')
    } catch (error) {
      console.log(error)
    }
    // console.log('sign in response', response)        
}

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setIsLoading(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, user}}>
      {children}
    </AuthContext.Provider>
  )
}