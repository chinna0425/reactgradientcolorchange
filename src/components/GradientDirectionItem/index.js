import {GradientButton, GradientListItems} from './styledComponents'

const GradientDirectionItemSet = props => {
  const {eachItem, onChangePosition, isActive} = props
  const opac = isActive ? '0.5' : '1'
  const {directionId, value, displayText} = eachItem
  const changeThePosition = () => {
    onChangePosition(value)
  }
  return (
    <GradientListItems>
      <GradientButton type="button" eachProp={opac} onClick={changeThePosition}>
        {displayText}
      </GradientButton>
    </GradientListItems>
  )
}
export default GradientDirectionItemSet
