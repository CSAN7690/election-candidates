import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import List from './components/List'

function App() {

  return (
    <>
      <div className='App'>
        <Card
          title='Card Title'
          imgUrl=''
          body='Lorem'
        />
      </div>
    </>
  )
}

export default App
