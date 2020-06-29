import {
  createStore
} from "redux";



const initialState = {
  count: 0
};

function reducer(state = {}, action) {
  switch (action.type) {
    case "UP":
      return {
        ...state, count: state.count + 1
      };
    case "DOWN":
      return {
        ...state, count: state.count - 1
      };
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  initialState,
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const mapStateToProps = (state) => ({
  count: state.count,
});

export const mapDispatchToProps = (dispatch) => ({
  up: () => dispatch({
    type: "UP"
  }),
  down: () => dispatch({
    type: "DOWN"
  }),
});