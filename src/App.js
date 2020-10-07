import React from 'react';
import { Navbar } from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList1 from './components/TaskList1';
import TaskContextProvider from './contexts/taskContext';

function App() {
  return (
    <TaskContextProvider>
      <Navbar/>
      <TaskForm/>
      <TaskList1/>
    </TaskContextProvider>
  );
}

export default App;
