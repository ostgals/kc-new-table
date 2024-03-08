import { styled } from '@material-ui/core'

const StoryContainer = styled('div')({
  border: '2px solid lightgrey',
  padding: 16,
  display: 'grid',
  gridTemplateRows: 'auto auto',
  gap: 16,
  '& > h3': { margin: 0 },
  '& > :nth-child(2)': { display: 'grid', maxHeight: 400 },
})

const Story = ({ title, children, className }) => {
  return (
    <StoryContainer className={className}>
      <h3>{title}</h3>
      <div>{children}</div>
    </StoryContainer>
  )
}

export default Story
