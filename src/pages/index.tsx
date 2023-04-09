import Image from 'next/image';
import {Inter} from 'next/font/google';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  TextField,
  colors,
} from '@mui/material';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <GestionSection />
      <ServicesSection />
      <Container>
        <Divider></Divider>
      </Container>
      <TrustSection />
      <ContactSection />
      <Footer />
    </>
  );
}
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <>
      <Box sx={{backgroundColor: '#010101'}}>
        <Container sx={{py: 8}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{color: '#e2e2e2'}}>
                Nevre DEV Factory
              </Typography>
              <Typography
                variant="body1"
                sx={{color: '#e2e2e2', fontSize: 13, mb: 1, mt: 1}}>
                Empresa de desarrollo de Software
              </Typography>
              <Typography
                variant="body1"
                sx={{color: '#e2e2e2', fontSize: 13, mb: 1}}>
                Soluciones integrales el sistemas digitales
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{color: '#e2e2e2', mb: 1}}>
                Social
              </Typography>
              <Typography
                variant="body1"
                sx={{color: '#e2e2e2', fontSize: 13, mb: 1, cursor: 'pointer'}}
                onClick={() =>
                  window.open('https://instagram.com/nevre.dev', '_blank')
                }>
                <InstagramIcon /> Nevre
              </Typography>
              <Typography
                variant="body1"
                sx={{color: '#e2e2e2', fontSize: 13, mb: 1, cursor: 'pointer'}}
                onClick={() =>
                  window.open('https://wa.me/5493435165717', '_blank')
                }>
                <WhatsAppIcon /> +54 343 5165717
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export const ContactSection = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');

  const sendMessage = () => {
    const string = `Hola! Mi nombre es ${name}, mi email ${email}, y te escribo para presupuestar un proyecto: ${description}`;
    const loc = `https://wa.me/5493435165717?text=${string}`;
    window.open(loc, '_blank');
  };

  return (
    <>
      <Container maxWidth="lg" sx={{pt: 6, pb: 6}}>
        <Typography variant="h3" sx={{textAlign: 'center', color: 'e2e2e2'}}>
          ¿Quiéres cotizar tu proyecto?
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'center', color: 'e2e2e2'}}>
          Contáctanos para saber como podemos ayudarte en desarrollar tu
          proyecto.
        </Typography>
        <Grid container spacing={2} sx={{pt: 3, pb: 3}}>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e: any) => setName(e.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e: any) => setEmail(e.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              label="Cuentanos sobre tu proyecto"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e: any) => setDescription(e.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              onClick={() => sendMessage()}
              variant="outlined"
              disabled={
                name?.length < 2 || description?.length < 10 ? true : false
              }
              sx={{
                borderColor: '#00ff91',
                mt: 0,
                backgroundColor: '#000',
                color: '#00ff91',
                height: 60,
                width: '100%',
              }}>
              <Typography sx={{color: '#111'}}>Enviar</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const TrustSection = () => {
  return (
    <>
      <Box sx={{backgroundColor: '#111'}}>
        <Container maxWidth="lg" sx={{pt: 6, pb: 6}}>
          <Typography variant="h3" sx={{textAlign: 'center', color: 'white'}}>
            Confían en Nosotros
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{mt: 4, textAlign: 'center', justifyContent: 'center'}}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  cursor: 'pointer',
                  border: '1px solid #111',
                  backgroundColor: '#111',
                  p: 2,
                  borderRadius: 5,
                  // minHeight: 400,
                  ':hover': {
                    shadow:
                      '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                    border: '1px solid #e2e2e2',
                    transition: '300ms',
                  },
                }}>
                <CardMedia
                  sx={{height: {xs: 85, md: 155}, objectFit: 'contain'}}
                  image="/LOGO_LEVEL_APP.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{textAlign: 'center', color: 'white'}}>
                    LevelAPP
                  </Typography>
                  <Typography
                    // variant="body2"
                    // color="text.secondary"
                    sx={{textAlign: 'center', color: '#a2a2a2', fontSize: 16}}>
                    Sistema de gestion Multi empresarial.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  cursor: 'pointer',
                  border: '1px solid #111',
                  backgroundColor: '#111',
                  p: 2,
                  borderRadius: 5,
                  // minHeight: 400,
                  ':hover': {
                    shadow:
                      '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                    border: '1px solid #e2e2e2',
                    transition: '300ms',
                  },
                }}>
                <CardMedia
                  sx={{height: {xs: 90, md: 160}, objectFit: 'cover'}}
                  image="/lm-logo.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{textAlign: 'center', color: 'white'}}>
                    LM estudio creativo
                  </Typography>
                  <Typography
                    // variant="body2"
                    // color="text.secondary"
                    sx={{textAlign: 'center', color: '#a2a2a2', fontSize: 16}}>
                    Empresa gráfica. Desarrollo de software de gestión y web
                    corporativa.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  cursor: 'pointer',
                  border: '1px solid #111',
                  backgroundColor: '#111',
                  p: 2,
                  borderRadius: 5,
                  // minHeight: 400,
                  ':hover': {
                    shadow:
                      '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                    border: '1px solid #e2e2e2',
                    transition: '300ms',
                  },
                }}>
                <CardMedia
                  sx={{height: {xs: 115, md: 195}, objectFit: 'contain'}}
                  image="/LOGO_CATITA_BLANCO.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{textAlign: 'center', color: 'white'}}>
                    Catita Baby
                  </Typography>
                  <Typography
                    // variant="body2"
                    // color="text.secondary"
                    sx={{textAlign: 'center', color: '#a2a2a2', fontSize: 16}}>
                    Tienda de ropa infantil. Desarrollo de eCommerce
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export const ServicesSection = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{pt: 6, mb: 6}}>
        <Typography variant="h3" sx={{textAlign: 'center'}}>
          Soluciones tecnológicas
        </Typography>
        <Grid container spacing={2} sx={{mt: 4}}>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                cursor: 'pointer',
                border: '1px solid #fff',
                minHeight: 400,
                ':hover': {
                  shadow:
                    '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                  border: '1px solid #e2e2e2',
                  transition: '300ms',
                },
              }}>
              <CardMedia
                sx={{height: 240}}
                image="/dev-web.avif"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{textAlign: 'center'}}>
                  Diseño y Desarrollo Web
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{textAlign: 'center'}}>
                  Diseños web creativos multidispositivo y autogestionables.
                  Creamos sistemas modernos, flexibles y profesionales pensando
                  siempre en mejorar los índices de su empresa o negocio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                cursor: 'pointer',
                border: '1px solid #fff',
                minHeight: 400,
                ':hover': {
                  shadow:
                    '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                  border: '1px solid #e2e2e2',
                  transition: '300ms',
                },
              }}>
              <CardMedia
                sx={{height: 240}}
                image="/ecommerce.avif"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{textAlign: 'center'}}>
                  eCommerce
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{textAlign: 'center'}}>
                  Creamos diseños atractivos y experiencias memorables para
                  aumentar tus ventas en la web. Un E-Commerce desarrollado a tu
                  medida.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                cursor: 'pointer',
                border: '1px solid #fff',
                minHeight: 400,
                ':hover': {
                  shadow:
                    '0px 2px 2px -4px rgb(0 0 0 / 2%), 0px 2px 7px 2px rgb(0 0 0 / 1%), 0px 5px 12px 4px rgb(0 0 0 / 1%)',
                  border: '1px solid #e2e2e2',
                  transition: '300ms',
                },
              }}>
              <CardMedia
                sx={{height: 240}}
                image="/apps.avif"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{textAlign: 'center'}}>
                  Apps Mobile
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{textAlign: 'center'}}>
                  Creamos Apps para móviles y Web Apps listas para tener tu
                  producto digital en línea.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const GestionSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        minHeight: '30vh',
        color: 'white',
        pb: {xs: 3, md: 6},
        pt: {xs: 3, md: 6},
      }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{px: {xs: 1, md: 5}}}>
            <Typography
              sx={{
                color: 'white',
                fontSize: 30,
                mt: 3,
                fontWeight: '600',
                textAlign: {xs: 'center', md: 'start'},
              }}>
              Necesitas un sistema para tu negocio?
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              En latinoamerica, más del 80% de los
              negocios/emprendimientos/Pymes, aún manejan su negocio a través de
              papel. Esto provoca desorganización y perdida de información. Todo
              es más facil, si puedes gestionar tus clientes, ventas, egresos,
              productos y más, con un sistema diseñado a la medida de tus
              necesidades.
            </Typography>
            <Box
              sx={{
                justifyContent: 'center',
                mt: 2,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#00ff91',
                  mt: 2,
                  color: '#00ff91',
                  height: 60,
                }}>
                <Typography sx={{color: '#00ff91'}}>
                  Quiero mi sistema de Gestión!
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{px: 5}}>
            <Typography
              sx={{
                color: 'white',
                fontSize: 26,
                mt: 3,
                fontWeight: '600',
                textAlign: {xs: 'center', md: 'start'},
              }}>
              Ejemplos de lo que puedes manejar con tu sistema de Gestión
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              - Ventas y Egresos
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              - Clientes y Proveedores
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              - Productos y materiales
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              - Presupuestos
            </Typography>
            <Typography
              sx={{
                color: '#e2e2e2',
                fontSize: 15,
                mt: 1,
                textAlign: {xs: 'center', md: 'start'},
              }}>
              - Y todo lo que necesites!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const HomeSection = () => {
  return (
    <section
      className="hero d-flex flex-column justify-content-center align-items-center"
      id="home"
      style={{
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Box className="bg-overlay"></Box>

      <Box className="">
        <Box className="">
          <Box className="" sx={{mt: -10}}>
            <Box
              className="hero-text mt-5 text-center"
              sx={{
                p: {xs: 2, md: 1},
              }}>
              <Typography
                variant="h3"
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{
                  color: '#fff',
                  zIndex: 999,
                  position: 'relative',
                  fontWeight: '600',
                }}>
                DESARROLLOS A MEDIDA
              </Typography>

              <Typography
                variant="h5"
                // className="text-white"
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{
                  color: '#aaa',
                  fontWeight: '400',
                  zIndex: 999,
                  position: 'relative',
                  maxWidth: {xs: '100%', md: '40vw'},
                  mt: 2,
                }}>
                Sistemas y aplicaciones a medida. Web, extranet, Android y IOS
              </Typography>
              <Box sx={{justifyContent: 'center', mt: 2}}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#00ff91',
                    mt: 2,
                    color: '#00ff91',
                    height: 60,
                  }}>
                  <Typography sx={{color: '#00ff91'}}>
                    Pedir un presupuesto
                  </Typography>
                </Button>
              </Box>

              <Link
                href="#about"
                className="btn custom-btn bordered mt-3"
                data-aos="fade-up"
                data-aos-delay="700">
                learn more
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = [''];

  return (
    <AppBar position="static" sx={{backgroundColor: '#222'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{backgroundColor: '#222'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            NEVRE dev Factory
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            NEVRE dev Factory
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
