import search from "../widgets/components/search";
import normalizedData from '../Schemas/index';
import { fromJS } from 'immutable';
import {SEARCH_ENTITIES} from '../actions-types/index';

const initialState =
    fromJS({

        entities: normalizedData.entities,
        categories: normalizedData.result.categories
        ,
        search: ''

    });

function data(state = initialState, action) {

    switch (action.type) {
        case SEARCH_ENTITIES: {
            const query = action.payload.query.toLowerCase()
            return state.set('search', action.payload.query);
            /*     state.data.categories.forEach(element => {
                     console.log(element.playlist)
                     let a = element.playlist.filter(element2 => {
                         let author_ = element2.author.toLowerCase();
                         console.log(author_);
                         console.log(query);
                         let condition = author_.includes(query);
                         console.log(condition)
                         return condition
 
 
 
                     });
 
 
 
                     result = a;
                 });
     return {
                 ...state,
 
                 search: result
 
             }*/
        }

        default:
            return state
    }

}

export default data