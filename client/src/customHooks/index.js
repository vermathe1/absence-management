import axios from "axios";
import React,{ useCallback, useEffect, useReducer } from "react"

const reducerfunction = ( state, action ) => {
  switch(action.type){
    case "TotalList" : {
      return {
        TotalList : action.payload
      }
    }
    case "Vacation" : {
      console.log(state)
      return Object.assign({},state,{[action.type]:state.TotalList.filter(info => info.type === "vacation")})
    }
    case "Sickness" : {
      return Object.assign({},state,{[action.type]:state.TotalList.filter(info => info.type === "sickness")})
    }
    default : {
      return state;
    }
  }
}

export const useActiveTab = ( activeTab ) => {
  const [ tableInfo, dispatch ] = useReducer(reducerfunction,{});
    useEffect(() => {
      if(activeTab === 'TotalList'){
        axios
        .get(`http://localhost:3000/getLeavesList`)
        .then((response) => dispatch({type:'TotalList', payload : response.data})
        );
      }else{
        dispatch( {type:activeTab})
      }
    },[activeTab]);

    return tableInfo[activeTab]
}