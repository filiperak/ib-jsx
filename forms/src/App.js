import './App.css';
import Form from './components/Form';
import Textarea from './components/Textarea';
import Input from './components/input';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Vezba from './components/Vezba';
import EventRegistrationForm from './components/EventRegistrationForm';

function App() {
  return (
    <div className="App">
      {/* <Form/>
      <Textarea/>
      <Input/>
      <Select/>
      <Checkbox/> 
      <Vezba/> */}
      <EventRegistrationForm/>
    </div>
  );
}

export default App;
