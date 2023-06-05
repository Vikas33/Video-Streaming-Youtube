import { Provider } from 'react-redux';
import './App.css'
import ButtonList from './components/ButtonList'
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [{
    path: '/',
    element: <MainContainer />

  },
  {
    path: 'watch',
    element: <WatchPage />,
  }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className='bg-slate-50'>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
