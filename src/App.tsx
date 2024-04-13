
import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { IItem } from './components/Card/type';


function App() {

  const [list, setList] = useState<IItem[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (value) {
      const data = {
        name: value,
        id: list.length + 1
      }
      const concated = list.concat(data)
      await localStorage.setItem('items', JSON.stringify(concated));
      setList(concated);
    }

    setValue('');
  }

  const showList = async () => {
    const items = await localStorage.getItem('items');
    if (items !== null) {
      const parsed = JSON.parse(items)
      setList(parsed);
    }
  }

  useEffect(() => {
    showList()
  }, []);

  return (
    <div className="App">

      <ul>
        {list.map(item => (
          <Card item={item} />
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <Input type="text" value={value} onChange={handleChange} />
        <Button />
      </form>

    </div>
  );
}

export default App;
