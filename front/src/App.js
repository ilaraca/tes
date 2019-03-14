<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
=======
import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import axios from 'axios';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Index from './components/Layout/Index';
import { muscles, exercises } from './components/store';
import Cards from './components/Layout/Cards';
import Content from './components/Layout/Content';
import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises,
      exercise: {}
    };
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((acc, category) => ({
      ...acc,
      [category]: []

    }), {})

    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
      const { muscles } = exercise

      acc[muscles] = [...acc[muscles], exercise]
        
      return acc; 
    }, initExercises )
  );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises. find(ex => ex.id === id),
      editMode: false
    }))

  handleExerciseCreate = exercise => 
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  
  handleExerciseDelete = id => 
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  
  handleExerciseSelectEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises. find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise 
    }))


  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state
    
    return <Fragment>
      <CssBaseline/>
        <Header />
        <Content/> 
        <Cards />

        
        <Index
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
        />

      </Fragment>
      }
>>>>>>> develop
}

export default App;
