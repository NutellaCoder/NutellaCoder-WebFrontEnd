import * as Actions from "../actions";

const initialState = {
  index:1,
  cards: [1],
};

const SectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_CARD_DATA: {
      return {
        ...state.cards,
        cards: action.card,
      };
    }
    
    default: {
      return state;
    }
  }
};

export default SectionReducer;
