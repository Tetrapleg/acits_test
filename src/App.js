import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Context } from './components/hooks/context';
import { useState } from 'react';
import { ModalCard } from './components/modalCard/ModalCard';
import { Preloader } from './components/layoutComponent/Preloader';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [modalItem, setModalItem] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <Router >
      <GlobalStyles />
      <Context.Provider value={{
          token,
          setToken,
          modalItem,
          setModalItem,
          isFetching,
          setIsFetching
        }}
      >
        <Header />
        <Main />
        {modalItem && <ModalCard />}
        {isFetching && <Preloader />}
      </Context.Provider>
    </Router>
  );
}

export default App;
