import logo from './logo.svg';
import './App.css';
import FuncCardComponent from './components/FuncCardComponent';
import CardClass from './components/CardClass';

function App() {
  return (
    <div className="card">
      <CardClass title={'hi'} />
      <CardClass text={'how are you?'} />
      <CardClass title={'hi'} text={'how are you?'} />

      <FuncCardComponent title={'hi'} />
      <FuncCardComponent text={'how are you?'} />
      <FuncCardComponent title={'hi'} text={'how are you?'} />
    </div>
  );
}

export default App;
