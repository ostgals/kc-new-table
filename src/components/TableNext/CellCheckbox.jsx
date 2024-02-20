import { Checkbox, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const CellCheckbox = ({
  checked,
  onChange,
  indeterminate,
  disabled,
  color = 'primary',
  classes: classesProp,
  className,
}) => {
  const classes = useStyles({ classes: classesProp })

  return (
    <Checkbox
      color={color}
      checked={checked}
      onChange={onChange}
      indeterminate={indeterminate}
      disabled={disabled}
      className={clsx(classes.root, className)}
    />
  )
}

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: 0,
      width: 40,
      height: 40,
      fontSize: 20,

      '& .MuiSvgIcon-root': { fontSize: 'inherit' },

      '&.MuiCheckbox-indeterminate:not(.MuiCheckbox-checked)': {
        '&.MuiCheckbox-colorPrimary': { color: theme.palette.primary.main },
        '&.MuiCheckbox-colorSecondary': { color: theme.palette.secondary.main },
      },
    },
  }),
  { name: 'CellCheckbox' }
)

export default CellCheckbox
