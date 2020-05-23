
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.boxPanel}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}


const edificios = [
  {
    value: 'a',
    label: 'A',
  },
  {
    value: 'b',
    label: 'B',
  },
  {
    value: 'c',
    label: 'C',
  },
  {
    value: 'd',
    label: 'D',
  },
  {
    value: 'e',
    label: 'E',
  },
  {
    value: 'f',
    label: 'F',
  },
  {
    value: 'g',
    label: 'G',
  },
  {
    value: 'h',
    label: 'H',
  },
  {
    value: 'i',
    label: 'I',
  },
  {
    value: 'j',
    label: 'J',
  },
];

const plantas = [
  {
    value: 'alta',
    label: 'Alta',
  },
  {
    value: 'baja',
    label: 'Baja',
  },
];

const datos = {
  "edificio": "f",
  "departamento": "Centro de Computo",
  "planta": "baja",
  "jefe": "Victor Manuel Ayala Lara",
  "horaEntrada": "07:00",
  "horaComida": "15:00",
  "horaSalida": "19:00"
};

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
  }

}));

export default function Lugares() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [edi, setEdi] = React.useState(datos["edificio"]);
  const [plant, setPlant] = React.useState(datos["planta"]);
  const [depa, setDepa] = React.useState(datos["departamento"]);
  const [jefe, setJefe] = React.useState(datos["jefe"]);
  const [horaI, setHoraI] = React.useState(datos["horaEntrada"]);
  const [horaC, setHoraC] = React.useState(datos["horaComida"]);
  const [horaS, setHoraS] = React.useState(datos["horaSalida"]);
  const [acciones, setAcciones] = React.useState(true);

  const handleChangeDepa = (event, newValue) => {
    setDepa(newValue);
  };
  const handleChangeJefe = (event, newValue) => {
    setJefe(newValue);
  };
  const handleChangeHoraI = (event, newValue) => {
    setHoraI(newValue);
  };
  const handleChangeHoraC = (event, newValue) => {
    setHoraC(newValue);
  };
  const handleChangeHoraS = (event, newValue) => {
    setHoraS(newValue);
  };

  const handleChangeSelect1 = (event) => {
    setEdi(event.target.value);
  };
  const handleChangeSelect2 = (event) => {
    setPlant(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleActive = () => {
    setAcciones(!acciones);
    if(!acciones){
      datos["edificio"] = edi;
      datos["departamento"] = depa; 
      datos["planta"] = plant;
      datos["jefe"] = document.getElementById("jefeDepartamento").value;
      datos["horaEntrada"] = document.getElementById("horarioEntrada").value;
      datos["horaComida"] = document.getElementById("horarioComida").value;
      datos["horaSalida"] = document.getElementById("horarioSalida").value;
      console.log(datos);
    }
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
        <Paper square className={classes.paperTabs}>
          <TabPanel value="perfil" index="perfil">
            <Avatar className={classes.avatar}>
              <AccountBoxOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              { datos["departamento"] }
            </Typography>
            <div className={classes.paperTabs}>
              <form className={classes.form} noValidate>
               <TextField
                  variant="outlined"
                  margin="normal"
                  disabled={acciones ? true : false}
                  required
                  select
                  fullWidth
                  value={edi}
                  onChange={handleChangeSelect1}
                  name="edificio"
                  label="Edificio"
                  id="edificio"
                >
                  {edificios.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  disabled={acciones ? true : false}
                  required
                  fullWidth
                  value={ depa }
                  name="departamento"
                  label="Departamento"
                  id="departamento"
                  onChange={handleChangeDepa}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  disabled={acciones ? true : false}
                  select
                  fullWidth
                  value={plant}
                  onChange={handleChangeSelect2}
                  name="nivelPlanta"
                  label="Nivel de Planta"
                  id="nivelPlanta"
                >
                  {plantas.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  disabled={acciones ? true : false}
                  required
                  value={jefe}
                  fullWidth
                  name="jefeDepartamento"
                  label="Jefe de Departamento"
                  id="jefeDepartamento"
                  onChange={handleChangeJefe}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  disabled={acciones ? true : false}
                  value={horaI}
                  required
                  fullWidth
                  name="horarioEntrada"
                  label="Horario de Entrada"
                  id="horarioEntrada"
                  onChange={handleChangeHoraI}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  disabled={acciones ? true : false}
                  value={horaC}
                  name="horarioComida"
                  label="Hora de Comida"
                  id="horarioComida"
                  onChange={handleChangeHoraC}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  disabled={acciones ? true : false}
                  value={horaS}
                  name="horarioSalida"
                  label="Horario de Salida"
                  id="horarioSalida"
                  onChange={handleChangeHoraS}
                />
                {
                    acciones ?     
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      startIcon={<CreateIcon />}
                      onClick={handleActive}
                    >
                      Actualizar
                    </Button>    
                    : 
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={handleActive}
                    >
                      Guardar
                    </Button>    
                }

              </form>
            </div>
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}
