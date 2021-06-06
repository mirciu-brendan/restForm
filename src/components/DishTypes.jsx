import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let RestForm = props => {
  const { handleSubmit, dishTypeValue } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dishName">Dish name</label>
        <Field name="dishName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="preparation_time">Preparation time</label>
        <Field name="preparation_time" component="input" type="text" placeholder="HH:MM:SS" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$" />
      </div>
      <div>
        <label>Dish type</label>
        <div>
          <Field name="dishType" component="select">
            <option />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        </div>
      </div>
      {dishTypeValue && (
        <aaaa/>
      )}
      
      <button type="submit">Submit</button>
    </form>)
}

RestForm = reduxForm({

  form: 'Restaurant form'
})(RestForm)

export default RestForm;