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
import School from '@material-ui/icons/School';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
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


const sexo = [
  {
    value: 'h',
    label: 'Hombre',
  },
  {
    value: 'm',
    label: 'Mujer',
  },
];

const estados = [
  {
    value: 'true',
    label: 'Activo',
  },
  {
    value: 'false',
    label: 'Inactivo',
  },
];

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

export default function Cuentas() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('student');
  const [sex, setSex] = React.useState('h');
  const [estado, setEstado] = React.useState('true');
  const [acciones, setAcciones] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSelect1 = (event) => {
    setSex(event.target.value);
  };
  const handleChangeSelect2 = (event) => {
    setEstado(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleSearch = () => {
    setAcciones(true);
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
        <Paper square className={classes.paperTabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab value="student" icon={<School />} label="Alumnos"/>
            <Tab value="department" icon={<Store />} label="Departamentos"/>
          </Tabs>
          <TabPanel value={value} index="student">
            <div className={classes.paperTabs}>
              <Hidden only="xs">
                <div className={classes.botones}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                  {
                    acciones ?
                      <div className={classes.botonesUD}>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<CreateIcon />}
                        >
                          Actualizar
                        </Button>
                        
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                        >
                          Eliminar
                        </Button>

                      </div> : null
                  
                  }
                </div>
              </Hidden>
              <Hidden only={['sm','md','lg','xl']}>
                <div className={classes.botonesMovil}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                  {
                    acciones ?
                      <div className={classes.botonesUD}>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<CreateIcon />}
                        >
                          Actualizar
                        </Button>
                        
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                        >
                          Eliminar
                        </Button>

                      </div> : null
                  
                  }
                </div>
              </Hidden>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="numControl"
                  label="Número de Control"
                  name="numControl"
                  autoComplete="numControl"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="nombre"
                  label="Nombre(s)"
                  type="nombre"
                  id="nombre"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="paterno"
                  label="Apellido Paterno"
                  type="paterno"
                  id="paterno"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="materno"
                  label="Apellido Materno"
                  type="materno"
                  id="materno"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="carrera"
                  label="Carrera"
                  type="carrera"
                  id="carrera"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  select
                  fullWidth
                  value={sex}
                  onChange={handleChangeSelect1}
                  name="sexo"
                  label="Sexo"
                  id="sexo"
                >
                  {sexo.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  select
                  fullWidth
                  value={estado}
                  onChange={handleChangeSelect2}
                  name="estado"
                  label="Estado"
                  id="estado"
                >
                  {estados.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Crear
                </Button>
              </form>
            </div>
          </TabPanel>
          <TabPanel value={value} index="department">
          <div className={classes.paperTabs}>
              <Hidden only="xs">
                <div className={classes.botones}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                  {
                    acciones ?
                      <div className={classes.botonesUD}>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<CreateIcon />}
                        >
                          Actualizar
                        </Button>
                        
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                        >
                          Eliminar
                        </Button>

                      </div> : null
                  
                  }
                </div>
              </Hidden>
              <Hidden only={['sm','md','lg','xl']}>
                <div className={classes.botonesMovil}>
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                  {
                    acciones ?
                      <div className={classes.botonesUD}>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<CreateIcon />}
                        >
                          Actualizar
                        </Button>
                        
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                        >
                          Eliminar
                        </Button>

                      </div> : null
                  
                  }
                </div>
              </Hidden>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="nombre"
                  label="Nombre del Departamento"
                  id="nombre"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Crear
                </Button>
              </form>
            </div>
          </TabPanel>

        </Paper>
      </Grid>
    </Grid>
  );
}
