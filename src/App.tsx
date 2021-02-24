import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List, Header } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44372/api/Activities").then(res =>{
      setActivities(res.data)
    })
  }, [])

  return (
    <div className="">
      <Header as="h2" icon='users' content="Reactivities" />
        <List>
          {activities.map((act: any) => (
            <List.Item key={act.id}>{act.description}</List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
