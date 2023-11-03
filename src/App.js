import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const user = {name, email};
    console.log(user);
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    event.target.reset();
  }

  return (
    <div className="App">

      <form onSubmit={handleAddUser}>
        <input type='text' name='name' placeholder='Name'></input>
        <br />
        <input type='email' name='email' placeholder='Email' ></input>
        <br />
        <button type='submit'>Add user</button>
      </form>

      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
