import logo from './logo.svg';
import './App.css';
import Die from './die';
import './die.css';

function App() {
  return (
    <div className='App'>
      <Die face='five' />
      <Die face='six' />
      <Die face='four' />
      <Die face='three' />
    </div>
  );
}

export default App;
