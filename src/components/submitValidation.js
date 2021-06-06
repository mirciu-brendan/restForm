import React from 'react';
import axios from 'axios';

function submit(values) {
    axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', values)
    .then(response => {console.log(response)})
    .catch(err => {console.log(err)})
  };
  
  export default submit;