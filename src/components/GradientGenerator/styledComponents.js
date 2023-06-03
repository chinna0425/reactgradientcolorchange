import styled from 'styled-components'

export const GradientDivContainer = styled.div`
  background-image: linear-gradient(
    to ${prev => prev.eachSet.position1},
    ${prev => prev.eachSet.color3},
    ${prev => prev.eachSet.color4}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  padding-top: 5px;
`

export const GradientHeadingTitle = styled.h1`
  color: #ffffff;
  font-size: 38px;
  font-weight: 600;
  font-family: 'Roboto';
  text-align: center;
`

export const GradientParagraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`

export const GradientDirectionContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
`
export const GradientInputDivContainer = styled.div`
  display: flex;
`
export const GradientLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`
export const GradientLabel = styled.p`
  margin-bottom: 2px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const GradientInput1 = styled.input`
  background-color: transparent;
  border-width: 0px;
  height: 45px;
  width: 90px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
`
export const GenerateButton = styled.button`
  border-radius: 8px;
  border-width: 0px;
  background-color: #00c9b7;
  padding: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
