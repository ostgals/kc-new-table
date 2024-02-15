import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const CellButton = ({
  icon,
  color = 'primary',
  disabled,
  onClick,
  className,
  ...props
}) => {
  const classes = useStyles(props)
  return (
    <IconButton
      size="small"
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
    },
    icon: {},
  },
  { name: 'CellButton' }
)

export default CellButton
