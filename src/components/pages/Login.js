import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 1rem;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`

let timeout

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)

  function handleInputChange(e) {
    e.persist()
    setFormFields((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    timeout = setTimeout(() => setLoading(false), 2000)
  }

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              name='username'
              placeholder='Username'
              onChange={handleInputChange}
              value={formFields.username}
              type='text'
            />
            <PasswordInput
              name='password'
              onChange={handleInputChange}
              value={formFields.password}
            />
          </>
        )}
        <Button type='submit' disabled={loading}>
          {loading ? 'loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  )
}
