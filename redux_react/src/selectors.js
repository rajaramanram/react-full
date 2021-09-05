import {createSelector} from 'reselect'; 

const homePageState = (state) => state.homepage;
export const makeSelectUsers = createSelector(homePageState, homepage=>homepage.users);