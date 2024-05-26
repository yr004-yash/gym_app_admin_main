import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo-full.png'

const LockScreen = () => {
  const Nav = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault()
    Nav('/dashboard');
  }
  return (
    <div className='authincation'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-6'>
            <div className='authincation-content'>
              <div className='row no-gutters'>
                <div className='col-xl-12'>
                  <div className='auth-form'>
                    <div className='text-center mb-3'>
                      <Link to='/'>
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className='text-center mb-4 text-white '>
                      Account Locked
                    </h4>
                    <form action='' onSubmit={(e) => submitHandler(e)}>
                      <div className='form-group'>
                        <label className='text-white'>
                          <strong>Password</strong>
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          defaultValue='Password'
                          name='password'
                        />
                      </div>
                      <div className='text-center'>
                        <input
                          type='submit'
                          value='Unlock'
                          className='btn bg-white text-primary btn-block'
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LockScreen
