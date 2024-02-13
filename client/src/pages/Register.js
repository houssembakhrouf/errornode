import React from 'react'
import{Button, Form , Input} from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register mx-auto'>
      <div className='register-form card p-4'>
        <div className='cardtitle p-2'>
        <h1 className='card-title text-center'>Free Sign Up</h1>
        <p className='parregister text-center text-dark'>Dont' have an account ? Create your <br></br>account , it takes less than a minute</p>
        </div>
       <Form layout='vertical'>
        <Form.Item label='Name' name='name'>
          <Input placeholder='Name' />
        </Form.Item >
        <Form.Item label='Email' name='email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='Password' type='password' />
        </Form.Item>
        <Button className='primary-button'>Sign Up</Button>
        <Link to='/login' className='linke'>CLICK HERE TO LOGIN</Link>
       </Form>     
    </div>
      </div>
  )
}

export default Register
