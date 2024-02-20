import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const CellButton = ({
  icon,
  color = 'primary',
  disabled,
  onClick,
  className,
  classes: classesProp,
}) => {
  const classes = useStyles({ classes: classesProp })
  return (
    <IconButton
      color={color}
      disabled={disabled}
      onClick={onClick}
      className={clsx(classes.root, className)}
    >
      <FontAwesomeIcon icon={icon} className={classes.icon} />
    </IconButton>
  )
}

const useStyles = makeStyles(
  {
    root: {
      padding: 0,
      width: 40,
      height: 40,
      fontSize: 20,
    },
    icon: {
      fontSize: 'inherit',
    },
  },
  { name: 'CellButton' }
)

export default CellButton
