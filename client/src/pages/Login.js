import React from 'react'
import{Button, Form , Input} from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='register mx-auto'>
      <div className='register-form card p-4'>
        <div className='cardtitle p-2 mb-2' >
        <h1 className='card-title text-center'> Sign In</h1>
        <p className='parregister text-center text-dark'>Enter your email address and password  <br></br>to access admin panel</p> 
        </div>
       <Form layout='vertical'>
       
        <Form.Item label='Email' name='email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='Password' type='password' />
        </Form.Item>
        <Button className='primary-button'>Login</Button>
        <Link to='/register' className='linke'>CLICK HERE TO REGISTER</Link>

       </Form>     
    </div>
      </div>
  )
}

export default Login
