import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Link as MuiLink,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MainInput } from "../../components/inputs";
import { Paper } from "../../components/paper";
import { MainButton } from "../../components/buttons";
import { getEmailPattern } from "../../utils/utilsValidations";
import { getPartnerInfo, login } from "../../redux/slices/auth/authSlice";
import { routes } from "../../constants/routesConstants";
import { getPartnerUrl } from "../../utils/utilsGetInfo";
import logoSf from "../../assets/images/logo-sf.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn, user } = useSelector((state) => state.auth);
  const matches = useMediaQuery("(max-width:600px)");
  const { control, handleSubmit } = useForm();
  const partnerUrl = getPartnerUrl(window.location.hostname) || "";
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (dataForm) => {
    const data = {
      email: dataForm.email,
      password: dataForm.password,
    };

    dispatch(login(data));
  };

  useEffect(() => {
    if (!user.token) {
      navigate(routes.dashboard)
    }
  }, [user.token])

  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={3}
      style={{ minHeight: "100vh" }}
    >
      
      <Paper
        sx={{
          padding: matches ? "2rem 1rem" : "3rem 2.1rem",
          maxWidth: matches ? "18rem" : "29rem",
        }}
      >
        <Box
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: matches ? "1rem" : "0.5rem",
        }}
      >
        <img
          src={logoSf}
          alt=""
          style={{
            width: matches ? "6rem" : "8rem",
          }}
        />
      </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          
          <Typography variant="title" align="center">
            Inicia sesión
          </Typography>
        </Box>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="textInput">Correo electrónico</Typography>
              <Controller
                control={control}
                defaultValue=""
                name="email"
                rules={{
                  required: "El email es requerido",
                  pattern: getEmailPattern(),
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error: errorInput },
                }) => (
                  <>
                    <Grid item mt={1}>
                      <MainInput
                        autoComplete="off"
                        error={!!errorInput}
                        fontSize="1.12rem"
                        height={matches ? "3rem" : null}
                        id="email"
                        onChange={onChange}
                        placeholder="Ingresa tu correo electrónico"
                        type="text"
                        value={value}
                        width={matches ? "15rem" : "100%"}
                      />
                    </Grid>
                    <Typography
                      color="error.main"
                      data-testid="error-message-email"
                      variant="caption"
                    >
                      {errorInput?.message}
                    </Typography>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="textInput">Contraseña</Typography>
              <Controller
                control={control}
                defaultValue=""
                name="password"
                rules={{
                  required: "La contraseña es requerida",
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error: errorInput },
                }) => (
                  <>
                    <Grid item mt={1}>
                      <MainInput
                        autoComplete="off"
                        error={!!errorInput}
                        fontSize="1.12rem"
                        height={matches ? "3rem" : null}
                        id="password"
                        onChange={onChange}
                        placeholder="Ingresa tu contraseña"
                        type={showPassword ? "text" : "password"}
                        value={value}
                        width={matches ? "15rem" : "100%"}
                        endAdornment={
                          <IconButton
                            onClick={handleShowPassword}
                            position="start"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        }
                      />
                    </Grid>
                    <Typography
                      color="error.main"
                      data-testid="error-message-password"
                      variant="caption"
                    >
                      {errorInput?.message}
                    </Typography>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <MainButton
                data-testid="button-signUp"
                height={matches ? "2rem" : "3rem"}
                onClick={handleSubmit(onSubmit)}
                width={matches ? "15rem" : "100%"}
              >
                <Typography>Inicia sesión</Typography>
              </MainButton>
            </Grid>
          </Grid>
        </form>
        <Box fontSize="1rem" mt={4}>
          <MuiLink component={Link} to={routes.recoverPassword}>
            ¿Olvidaste tu contraseña?
          </MuiLink>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
