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

const DisplayProfile = ({ setData }) => {
  const classes = useStyles();

  const Data = [
    {
      firstName: "John",
      lastName: "Do",
      Pic: "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2014/02/John-Doe_text.jpg",
      "latitude ": 35.2268,
      longitude: 45.9986,
    },
    {
      firstName: "Jane",
      lastName: "Do",
      Pic: "https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2014/02/John-Doe_text.jpg",
      "latitude ": 35.2268,
      longitude: 45.9986,
    },
  ];

  setData(Data);

  return (
    <div>
      {/*<Card elevation={3}>
      <CardHeader
        className={classes.headerStyle}
        title={'First Name:' + ' John'}
        subheader="Last Name: Do"
      />
      <CardContent className={classes.contentStyle}
      title="John "
      subheader="Do"/>
      <CardContent className={classes.contentStyle}>
          <img src="https://wlxaj1j3fea9rr7r20slpixw-wpengine.netdna-ssl.com/wp-content/uploads/2014/02/John-Doe_text.jpg"
           height="150px" width="150px"/>
        <Typography variant="body1">
        latitude : John <br/>
        : Do 
          </Typography>
      </CardContent>
      <CardHeader/>
    </Card>*/}

      <Card elevation={3}>
        <CardHeader
          className={classes.headerStyle}
          title={"First Name: " + Data.firstName}
          subheader={"Last Name: " + Data.lastName}
        />
        <CardContent
          className={classes.contentStyle}
          title={Data.firstName}
          subheader={Data.lastName}
        />
        <CardContent className={classes.contentStyle}>
          <img src={Data.Pic} height="150px" width="150px" />
          <Typography variant="body1">
            latitude : {Data.latitude} <br />
            longitude : {Data.longitude}
          </Typography>
        </CardContent>
        <CardHeader />
      </Card>
    </div>
  );
};

export default DisplayProfile;
