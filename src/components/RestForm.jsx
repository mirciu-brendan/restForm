import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import submit from './submitValidation';


let RestForm = props => {
  const { handleSubmit, dishTypeValue, reset } = props
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h1>Rest Form</h1>
      </div>
      <div>
        <label htmlFor="dishName">Dish name</label>
        <Field name="dishName" component="input" type="text" required/>
      </div>
      <div>
        <label htmlFor="preparation_time">Preparation time</label>
        <Field name="preparation_time" component="input" type="text" placeholder="HH:MM:SS" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$" required/>
      </div>
      <div id="dishType">
        <label>Dish type</label>
        
          <Field id="dishTypeSelect" name="dishType" component="select" value={dishTypeValue} required>
            <option />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        
      </div>
      
      { dishTypeValue=="pizza" && (
      <div>
        <div>
          <label htmlFor="no_of_slices">Number of slices</label>
          <Field name="no_of_slices" component="input" type="number" required/>
        </div>
        <div>
          <label htmlFor="diameter">Diameter</label>
          <Field name="diameter" component="input" type="number" step="0.1" required/>
        </div>
      </div>
      
      )}
      { dishTypeValue=="soup" && (
      <div>
        <label htmlFor="spiciness_scale">Spiciness scale (1-10)</label>
        <Field name="spiciness_scale" component="input" type="number" min="1" max="10" required/>
      </div>
      )}
      { dishTypeValue=="sandwich" && (
      <div>
        <label htmlFor="slices_of_bread">Slices of bread</label>
        <Field name="slices_of_bread" component="input" type="number" required/>
      </div>
      )}
      
      <button type="submit" >
          Submit
        </button>
      <button type="button" onClick={reset}>
          Clear Values
        </button>
    </form>)
}

RestForm = reduxForm({

  form: 'rest_form'
})(RestForm)

const selector = formValueSelector('rest_form') // <-- same as form name
RestForm = connect(state => {
  
  const dishTypeValue = selector(state, 'dishType')
  // or together as a group
  const { dishName, preparation_time } = selector(state, 'dishName', 'preparation_time')
  return {
    dishTypeValue,
    dishName_preparation_time: `${dishName || ''} ${preparation_time || ''}`
  }
})(RestForm)

export default RestForm;