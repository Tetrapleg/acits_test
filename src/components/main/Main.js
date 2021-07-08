import { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Animals } from './animals/Animals';
import { Login } from './login/Login';
import { Today } from './today/Today';
import { Context } from './../hooks/context';

export const Main = () => {
  // const auth = useContext(Context);
  const { token } = useContext(Context);
  
  if(!token) return (<>
    <Login />
  </>);

  return (
    <Switch >
      <Route path="/today" component={Today}/>
      <Route path="/animals" component={Animals}/>
    </Switch>
  );
}