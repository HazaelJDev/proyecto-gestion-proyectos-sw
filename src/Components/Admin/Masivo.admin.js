import React from "react";
import ReactFileReader from 'react-file-reader';
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
  }

}));

export default function Masivo() {
  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
      setArchivo(true);
    }
    reader.readAsText(files[0]);
  }

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [archivo, setArchivo] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
                Administrador
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
              <Link href="http://localhost:3000/admin/home">
                <MenuItem onClick={handleClose}>Inicio</MenuItem>
              </Link>
              <Link href="http://localhost:3000/admin/login">
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
            <Link href="http://localhost:3000/admin/home" className={classes.link}>
              <Typography component="h1" variant="h5">
                Administrador
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
              href="http://localhost:3000/admin/login"
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
        <Hidden only="xs">
          <Grid 
            container
            component={Paper}
            elevation={6}
            square
            className={classes.card}
          >
            <Typography component="h1" variant="h3">
              Creación de Cuentas Masivamente
            </Typography>
            {
              archivo ?
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                className='btn'
              >
                Crear usuarios
              </Button> 
              :
              <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                <Button 
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='btn'
                >
                  Subir Archivo
                </Button>
              </ReactFileReader>
            }
          </Grid>
        </Hidden>
        <Hidden only={['sm','md','lg','xl']}>
          <Grid 
            container
            component={Paper}
            elevation={6}
            square
            className={classes.cardMovil}
          > 
            <Typography component="h1" variant="h4">
              Creación de Cuentas Masivamente
            </Typography>
            {
              archivo ?
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                className='btn'
              >
                Crear usuarios
              </Button> 
              : 
              <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                className='btn'
              >
                Subir Archivo
              </Button>
            </ReactFileReader>
          }
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}
