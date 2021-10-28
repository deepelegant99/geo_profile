import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  contentStyle: {
    textAlign: "center",
  },
  headerStyle: {
    textAlign: "center",
    backgroundColor: "#9e9e9e",
  },
});

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={3}>
        <CardHeader />
        <CardContent className={classes.contentStyle}>
          <Typography variant="body1"></Typography>
        </CardContent>
      </Card>
      Profile Page
    </div>
  );
};

export default ProfilePage;
