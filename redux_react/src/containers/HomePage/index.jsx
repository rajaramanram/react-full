import react from 'react';
import {createSelector} from 'reselect';
import { makeSelectUsers } from '../../selectors';


const stateSelector = createSelector(makeSelectUsers,(users)=>{
    users
})
export default function HomePage(props){
    return <div><h1>homepage</h1></div>
}