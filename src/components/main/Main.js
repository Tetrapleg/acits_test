import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Animals } from './animals/Animals';
import { Login } from './login/Login';
import { Today } from './today/Today';
import { Context } from './../hooks/context';

export const Main = () => {
  const { token } = useContext(Context);

    return (
      <Switch >
        <Route exact path="/">
          {token ? <Redirect to="/today" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/today" component={Today}/>
        <Route path="/animals" component={Animals}/>
      </Switch>
    );
}