import { ThemeProvider, makeStyles } from '@material-ui/core'
import Story from './components/Story'
import CheckboxAndButton from './stories/CheckboxAndButton'
import ColumnsAsChildren from './stories/ColumnsAsChildren'
import ColumnsAsProp from './stories/ColumnsAsProp'
import InteractiveCells from './stories/InteractiveCells'
import StyleSeparateCells from './stories/StyleSeparateCells'
import WithStyles from './stories/WithStyles'
import { theme } from './theme'

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grid}>
        <Story title="Passing columns as children">
          <ColumnsAsChildren />
        </Story>
        <Story title="Passing columns as prop">
          <ColumnsAsProp />
        </Story>
        <Story title="Restyling table with withStyles">
          <WithStyles />
        </Story>
        <Story title="Feel&look like in old CardsTable">
          <CheckboxAndButton />
        </Story>
        <Story title="Restyle cell elements with Column.classes">
          <StyleSeparateCells />
        </Story>
        <Story title="Interactive cell & Restyle separate rows">
          <InteractiveCells />
        </Story>
      </div>
    </ThemeProvider>
  )
}

const useStyles = makeStyles({
  grid: {
    padding: '2em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2em',
    fontFamily: 'Roboto',
  },
  fullWidth: {
    gridColumn: '1 / -1',
  },
})

export default App
