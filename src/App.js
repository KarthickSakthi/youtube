import logo from './logo.svg';
import './App.css';
import { Head } from './components/Head';
import { Body } from './components/Body';
import { Provider } from 'react-redux';
import appStore from './store/appstore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/youtube",
    element:<Body/>,
    children:[
      {
      path:"/youtube",
      element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
