import React from 'react';
import './index.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik ({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form', values);
    },
    validate: values => {
      let errors = {};
      if(!values.username) errors.username = 'Field required';
      if(!values.email) errors.email = 'Required';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input username="username" type="text" onChange={formik.handleChange}
        value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange}
        value={formik.values.emailField}/>
         {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange}
        value={formik.values.pswField}/>
         {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button type="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
