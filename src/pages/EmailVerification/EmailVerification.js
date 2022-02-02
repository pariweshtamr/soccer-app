import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userEmailVerification } from '../User/UserAction'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'

const EmailVerification = () => {
  const dispatch = useDispatch()
  const params = new URLSearchParams(useLocation().search)
  const pin = params.get('pin')
  const email = params.get('email')

  const { isPending, registerResponse } = useSelector((state) => state.user)

  useEffect(() => {
    //send pin and email to api server
    dispatch(userEmailVerification({ pin, email }))
  }, [dispatch, email, pin])

  return (
    <div className="m-auto py-5" style={{ width: '450px' }}>
      {' '}
      {isPending && <LoadingBox />}
      {registerResponse.message && (
        <MessageBox
          variant={registerResponse.status === 'success' ? 'success' : 'danger'}
        >
          {registerResponse.message}
        </MessageBox>
      )}
      {registerResponse?.message && <Link to="/signin">Sign In Now</Link>}
    </div>
  )
}

export default EmailVerification
