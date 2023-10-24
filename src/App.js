import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then((res) => res.json())
    .then(data => setUsers(data))
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
  }

  return (
    <div className="App">
      <form onClick={handleAddUser}> 
        <input type='text' name='name'/>
        <br/>
        <input type='email' name='email'/>
        <br/>
        <button type='submit'>Add User</button>
      </form>

      <h1>Users {users.length}</h1>
      <div>
        {users.map(user => <p key={user.id}>{user.name} | {user.email}</p>)}
      </div>
    </div>
  );
}

export default App;
