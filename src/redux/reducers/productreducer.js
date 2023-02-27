import { actiontypes } from "../constants/actiontype"



const initialstate={
    countryname:null,
    countrylist:[],
    teamname:null,
    teamlist:[],
    SelectedPlayer: []

}
export const productReducer =(state=initialstate,{type,payload})=>{
    switch(type){
        case actiontypes.SET_COUNTRY_NAME:
            return {...state,countryname:payload}
     
        case actiontypes.SET_COUNTRY_LIST:
            return {...state,countrylist:payload}
     
        case actiontypes.SET_TEAM__NAME:
            return {...state,teamname:payload}
     
        case actiontypes.SET_TEAM_LIST:
            return {...state,teamlist:payload}
            
        case actiontypes.SET_SELECTED_PLAYERS:
                return {...state,SelectedPlayer:payload}
        default:
            return state
    }
}