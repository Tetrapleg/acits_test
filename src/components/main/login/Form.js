import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    marginTop: theme.spacing(1),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    padding: "5px 20px 15px",
    borderRadius: "5px"
  },
}));

export const Form = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};