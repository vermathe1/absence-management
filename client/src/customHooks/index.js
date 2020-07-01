import axios from 'axios';
import React, { useCallback, useEffect, useReducer } from 'react';
import { format } from 'date-fns';

const API_URL = `http://localhost:3000`;

const reducerfunction = (state, action) => {
  switch (action.type) {
    case 'TotalList': {
      return {
        TotalList: action.payload
      };
    }
    case 'Vacation': {
      return { ...state, 
        [action.type]: state.TotalList.filter(info => info.type === 'vacation')
      };
    }
    case 'Sickness': {
      return { ...state,
        [action.type]: state.TotalList.filter(info => info.type === 'sickness')
      };
    }
    default: {
      return state;
    }
  }
};

export const useActiveTab = (activeTab, dateCheckbox, startDate, endDate) => {
  const [tableInfo, dispatch] = useReducer(reducerfunction, {});
  const formatedStartdate = format(startDate, 'yyyy-MM-dd');
  const formatedEnddate = format(endDate, 'yyyy-MM-dd');
  useEffect(() => {
    let url;
    if (dateCheckbox) {
      url = `${API_URL}/?startDate=${formatedStartdate}&endDate=${formatedEnddate}`;
    } else {
      url = `${API_URL}/getLeavesList`;
    }

    if (activeTab === 'TotalList') {
      axios
        .get(url)
        .then(response =>
          dispatch({ type: 'TotalList', payload: response.data })
        );
    } else {
      dispatch({ type: activeTab });
    }
  }, [activeTab, dateCheckbox, startDate, endDate]);

  return tableInfo[activeTab];
};
