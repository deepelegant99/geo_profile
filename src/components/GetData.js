import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles({
  contentStyle: {
    textAlign: "center",
  },
  headerStyle: {
    textAlign: "center",
    backgroundColor: "#9e9e9e",
  },
});

const GetData = ({ setData }) => {
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

  return <></>;
    
};

export default GetData;
