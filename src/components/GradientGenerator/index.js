import {Component} from 'react'
import {
  GradientDivContainer,
  GradientHeadingTitle,
  GradientParagraph,
  GradientDirectionContainer,
  GradientInput1,
  GenerateButton,
  GradientInputDivContainer,
  GradientLabelAndInput,
  GradientLabel,
} from './styledComponents'
import GradientDirectionItemSet from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    postionType: 'top',
    backgroundData: {color3: '#8ae323', color4: '#014f7b', position1: 'top'},
  }

  onChangePosition = value => {
    this.setState({postionType: value})
  }

  onInput1Color = event => {
    this.setState({color1: event.target.value})
  }

  onInput2Color = event => {
    this.setState({color2: event.target.value})
  }

  onSubmitGenerate = () => {
    this.setState(prev => ({
      backgroundData: {
        color3: prev.color1,
        color4: prev.color2,
        position1: prev.postionType,
      },
    }))
  }

  render() {
    const {color1, color2, postionType, backgroundData} = this.state
    return (
      <GradientDivContainer
        eachSet={backgroundData}
        data-testid="gradientGenerator"
      >
        <GradientHeadingTitle>
          Generate a CSS Color Gradient
        </GradientHeadingTitle>
        <GradientParagraph>Choose Direction</GradientParagraph>
        <GradientDirectionContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItemSet
              eachItem={eachItem}
              key={eachItem.value}
              onChangePosition={this.onChangePosition}
              isActive={eachItem.value !== postionType}
            />
          ))}
        </GradientDirectionContainer>
        <GradientParagraph>Pick the Colors</GradientParagraph>
        <GradientInputDivContainer>
          <GradientLabelAndInput>
            <GradientLabel>{color1}</GradientLabel>
            <br />
            <GradientInput1
              type="color"
              onChange={this.onInput1Color}
              value={color1}
            />
          </GradientLabelAndInput>
          <br />
          <GradientLabelAndInput>
            <GradientLabel>{color2}</GradientLabel>
            <br />
            <GradientInput1
              type="color"
              value={color2}
              onChange={this.onInput2Color}
            />
          </GradientLabelAndInput>
        </GradientInputDivContainer>
        <br />
        <GenerateButton type="button" onClick={this.onSubmitGenerate}>
          Generate
        </GenerateButton>
      </GradientDivContainer>
    )
  }
}
export default GradientGenerator
