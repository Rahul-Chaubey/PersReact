import { createStore } from "redux";
import Person from "./Person";

//creating InitialState
const initialstate = {
  personList: [],
  courseList: [],
};

//Creting Reducer
const Reducer = (state = initialstate, action) => {
  const { type, payload } = action;
  const personListCopy = [...state.personList];
  const courseListCopy = [...state.courseList];

  switch (type) {
    case "PERSON_ADD":
      const id = payload.id ? payload.id : state.personList.length + 1;
      personListCopy.push({ ...payload, id });
      return {
        ...state,
        personList: personListCopy,
      };

    case "COURSE_ADD":
      courseListCopy.push(payload);
      return {
        ...state,
        courseList: courseListCopy,
      };

    case "PERSON_UPDATE":
      let objectToBeUpdatedIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdatedIndex] = {
        ...personListCopy[objectToBeUpdatedIndex],
        ...payload,
      };
      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_DELETE":
      personListCopy.splice(payload, 1);
      alert("Deleted");
      return {
        ...state,
        personList: personListCopy,
      };

    case "COURSE_DELETE":
      courseListCopy.splice(payload, 1);
      alert("Deleted");
      return {
        ...state,
        courseList: courseListCopy,
      };
    default:
      return state;
  }
};

//Now creting store
const store = createStore(Reducer);

//exporting store
export default store;
