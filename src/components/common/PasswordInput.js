import { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`

// Attrs is a function that returns an object
const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false)

  function toggleHandler() {
    setShowPassword((s) => !s)
  }

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={toggleHandler}>
          {showPassword ? 'hide' : 'show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div> {showPassword ? props.value : ''}</div>
    </>
  )
}
