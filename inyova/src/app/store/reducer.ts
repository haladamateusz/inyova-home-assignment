import { createReducer, on } from "@ngrx/store";
import * as Actions from './actions';

export const initialState = {
  form: {},
}

export const FeatureKey = 'form'

export const reducer = createReducer(
  initialState,
  on(Actions.updateData,
    (state, props) => {
      localStorage.setItem('form', JSON.stringify(props));
      return {
        form: Object.assign({}, props)
      }
    }
  ),
  on(Actions.loadData,
    (state, props) => ({ form: Object.assign({}, props) })
  )
)
