import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Profile from './components/Profile';

const App = () => {
    return ( 
        <div className='app-wrapper'>
           <Header/>
           <MainNav/>
            <Profile/>
        </div>
    );
}


export default App;