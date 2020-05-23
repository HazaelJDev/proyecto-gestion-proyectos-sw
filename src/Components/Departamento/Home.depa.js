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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
    maxWidth: 350,
    margin: theme.spacing(2, 1),
  },
  normalText: {
    color: theme.palette.text.primary,
  },
}));

export default function HomeDepa() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden only={['sm','lg','xl']}>
        <Grid
          container
          xs={12}
          className={classes.nav}
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
            <Typography component="h1" variant="h5">
              Departamento
            </Typography>
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
        elevation={6}
        square
        direction="row"
        justify="space-around"
        alignItems="center"
      >
      <Link href="http://localhost:3000/departamento/perfil">
        <Card className={classes.card} elevation={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="350"
              image="/perfil.png"
              title="Perfil"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Perfil
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ve los datos del departamento y modificalos, 
                siempre y cuando sea necesario cambiar algo de esos valores.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      <Link href="http://localhost:3000/departamento/muro">
        <Card className={classes.card} elevation={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="350"
              image="/muro.png"
              title="Muro"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Muro
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ver, Crear, Modificar y Eliminar publicaciónes en el muro virtual del departamento.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      <Link href="http://localhost:3000/departamento/lugares">
        <Card className={classes.card} elevation={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="350"
              image="/lugar2.png"
              title="Gestión de Lugares"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lugares
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ver la información de los Lugares dentro del Tecnologíco.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
