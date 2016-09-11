/* eslint-disable */

import React from 'react';

const LoginForm = ({ errors }) => (
  <form action='/cockpit/login' method='post'>
    {errors && <h5 className="errors">An error occurs. Check your credentials</h5>}
    <label htmlFor='username'>Username</label>
    <input id='username' type='text' name='username' placeholder='Enter username' />
    <label htmlFor='password'>Password</label>
    <input id='password' type='password' name='password' placeholder='Enter password' />
    <input type='submit' value='Submit' />
  </form>
);

module.exports = LoginForm;
