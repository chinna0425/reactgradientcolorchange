import styled from 'styled-components'

export const GradientListItems = styled.li`
  list-style-type: none;
`
export const GradientButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  margin: 15px;
  padding: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  opacity: ${prev => prev.eachProp};
`
