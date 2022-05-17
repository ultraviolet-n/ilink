import './App.scss';
import Footer from './components/footer/footer';
import Head from './components/header/header';
import Main from './components/main/main';
import stateslide from "./state/state"


function App() {
  return (
    <div className="wrapper">
        <Head />
        <Main state={stateslide}/>
        <Footer />
    </div>
  );
}

export default App;
