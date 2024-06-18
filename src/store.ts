import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './state/countries.slice';
import peopleReducer from './state/summary.slice';
import heardFromReducer from './state/heard-from.slice';
import grandReducer from './state/grandstate.slice';
import prevParticipationReducer from './state/prevParticipation.slice';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    people: peopleReducer,
    heardFrom: heardFromReducer,
    grandState: grandReducer,
    prevParticipation: prevParticipationReducer
  }
})

