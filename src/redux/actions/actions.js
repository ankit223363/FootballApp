import { actiontypes } from "../constants/actiontype"
export const setCountryName=(name)=>{
    return {
        type: actiontypes.SET_COUNTRY_NAME,
        payload: name
    }
}
export const setCountryList=(nameList)=>{
    return {
        type: actiontypes.SET_COUNTRY_LIST,
        payload: nameList
    }
}
export const setTeamName=(teamname)=>{
    return {
        type: actiontypes.SET_TEAM__NAME,
        payload: teamname
    }
}
export const setTeamList=(teamlist)=>{
    return {
        type: actiontypes.SET_TEAM_LIST,
        payload: teamlist
    }
}
export const setPlayerList=(nameList)=>{
    return {
        type: actiontypes.SET_SELECTED_PLAYERS,
        payload: nameList
    }
}