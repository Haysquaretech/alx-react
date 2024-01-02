import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

function App () {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
