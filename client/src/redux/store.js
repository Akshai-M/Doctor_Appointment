
import { alertsSlice } from '../redux/alertsSlice'
import { userSlice } from './userSlice'

export const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user: userSlice.reducer
})



export default store