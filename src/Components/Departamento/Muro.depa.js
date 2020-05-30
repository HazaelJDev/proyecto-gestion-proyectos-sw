
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountBoxOutlined from "@material-ui/icons/AccountBoxOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Store from '@material-ui/icons/Store';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  nav: {
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.info.dark,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  navMovil: {
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.info.dark,
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "20vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperMovil:{
    margin: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  avatarMovil: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  card: {
    backgroundImage: 'url(https://res.cloudinary.com/hazadev01/image/upload/v1589909792/login_xybgwj.png)',
    maxWidth: 550,
    height: 500,   
    margin: theme.spacing(2, 1),
    padding: theme.spacing(2,2),
    color: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

  },
  cardMovil: {
    backgroundImage: 'url(https://res.cloudinary.com/hazadev01/image/upload/v1589909792/login_xybgwj.png)',
    backgroundPositionY: -50,
    backgroundPositionX: 0,
    maxWidth: 300,
    height: 400,   
    margin: theme.spacing(2, 1),
    padding: theme.spacing(2,2),
    color: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  normalText: {
    color: theme.palette.text.primary,
  },
  link:{
    textDecoration: "none",
    color: "#fff",
  },
  paperTabs:{
    width: "100%",
  },
  botones:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  botonesMovil:{
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  botonesUD:{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "strech",
  },
  boxPanel:{
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  newPost: {
    width: "100%",
    height: "15rem",
    backgroundColor: "",
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "strech",
  },
  newPostBotones: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "strech",
  },
  postsContainer: {
    width: "100%",
  }

}));

const publicaciones = [
  {
    titulo: "Entrega de credenciales nuevo ingreso 2020",
    cuerpo: "La entrega de credenciales para alumnos de nuevo ingreso sera el día 20 de Septiembre en un horario de 9:00 a.m. a 16:00 p.m.",
    imagenes: [],
    fecha: "20201028 09:25:16"
  },
  {
    titulo: "Reposicion de credenciales",
    cuerpo: "Para los alumnos de 2° semestre en adelante, el tramite de reposicion de credencial vuelve a la normalidad apartir de la primera semana de Octubre",
    imagenes: [],
    fecha: "20201028 16:54:31"
  },
];

export default function Lugares() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [titulo, setTitulo] = React.useState('');
  const [cuerpo, setCuerpo] = React.useState('');
  const [publi, setPubli] = React.useState(publicaciones);


  const handleChange = (event) => {
    setCuerpo(event.target.value);
  };  
  
  const handleChange2 = (event) => {
    setTitulo(event.target.value);
  };  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const getFecha = () => {
    let f = new Date();
    let fecha = `${f.getDate()}/${f.getMonth()+1}/${f.getFullYear()} ${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`;
    return fecha;
  }

  //moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss");
  
  const addNewPost = () => {
    publicaciones.push({
      titulo,
      cuerpo,
      imagenes: [],
      fecha: getFecha()
    });
    setPubli(publi);
    setTitulo("");
    setCuerpo("");
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden only={['sm','md','lg','xl']}>
        <Grid
          container
          xs={12}
          className={classes.navMovil}
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <div className={classes.paperMovil}>
            <Typography component="h1" variant="h5">
              ConoceTec
            </Typography>
            <Typography component="h1" variant="body2">
                Departamento
            </Typography>
          </div>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Avatar className={classes.avatarMovil}>
                <MenuIcon />
              </Avatar>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link href="#">
                <MenuItem onClick={handleClose}>Cambiar contraseña</MenuItem>
              </Link>
              <Link href="http://localhost:3000/departamento/home">
                <MenuItem onClick={handleClose}>Inicio</MenuItem>
              </Link>
              <Link href="http://localhost:3000/departamento/login">
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
              </Link>
            </Menu>
          </div>
        </Grid>
      </Hidden>
      <Hidden only="xs">
        <Grid
          container
          xs={false}
          sm={4}
          md={2}
          className={classes.nav}
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountBoxOutlined />
            </Avatar>
            <Link href="http://localhost:3000/departamento/home" className={classes.link}>
              <Typography component="h1" variant="h5">
                Departamento
              </Typography>
            </Link>
          </div>
          <Grid item xs className={classes.paper}>
            <Link
              href="#"
              variant="body1"
              align="center"
              className={classes.normalText}
            >
              Cambiar contraseña
            </Link>
          </Grid>
          <Grid item xs className={classes.paper}>
            <Link
              href="http://localhost:3000/departamento/login"
              variant="body1"
              align="center"
              className={classes.normalText}
            >
              Cerrar Sesión
            </Link>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        xs={12}
        sm={8}
        md={10}
        component={Paper}
        elevation={1}
        square
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <form className={classes.newPost}>
          <Input value={titulo} placeholder="Titulo" onChange={handleChange2} inputProps={{ 'aria-label': 'description' }} />
          <TextField
            id="outlined-multiline-flexible"
            label="Cuerpo de la publicación"
            multiline
            rowsMax={4}
            value={cuerpo}
            placeholder="Cuerpo de la publicación"
            onChange={handleChange}
            variant="outlined"
          />
          <div className={classes.newPostBotones}>
            <Button color="primary">
              <AddPhotoAlternateIcon />
            </Button>

            <Button color="primary" onClick={addNewPost} disabled={titulo !== "" && cuerpo !== "" ? false : true} >
              <CreateIcon />
            </Button>
          </div>
        </form>
        <div className={classes.postsContainer}>
          <ul>
            {
              
            }
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}
