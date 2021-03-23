import styled, { css } from 'styled-components'

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: normal;

  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

  &:disabled {
    background: #eee;
    color: #666;
  }
`
export { Button }
