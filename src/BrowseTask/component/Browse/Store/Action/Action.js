import * as ActionTypes from './ActionType';

export const initialize = (dataArray) => {
  return {
    type: ActionTypes.INITIALIZE,
    dataArray
  };
};

export const select = (index) => {
  return {
    type: ActionTypes.SELECT,
    index
  };
};

