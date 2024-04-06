import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './state/countries.slice';
import peopleReducer from './state/people.slice';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    people: peopleReducer
  }
})

