import React from 'react';
import { Login } from './components/Login/Login';
import { useSelector } from 'react-redux';
import { IState } from './types/actions';
import { Dashboard } from './components/Dashboard/Dashboard';


const App: React.FC = () => {
  const isConnected = useSelector((state: IState) => state.user.isConnected);
  return !isConnected ? <Login />: <Dashboard />;
}

export default App;
