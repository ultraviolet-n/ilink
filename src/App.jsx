import './App.scss';
import Footer from './components/footer/footer';
import Head from './components/header/header';
import Main from './components/main/main';


function App() {
  return (
    <div className="wrapper">
        <Head />
        <Main/>
        <Footer />
    </div>
  );
}

export default App;
