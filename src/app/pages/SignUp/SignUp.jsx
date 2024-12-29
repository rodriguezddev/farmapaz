import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { MainInput } from "../../components/inputs";
import { MainButton } from "../../components/buttons";
import {
  getEmailPattern,
  getPasswordPattern,
} from "../../utils/utilsValidations";
import { Paper } from "../../components/paper";
import theme from "../../themes/theme";
import CheckComplete from "../../assets/icons/CheckComplete";
import CheckBorder from "../../assets/icons/CheckBorder";
import { signup } from "../../redux/slices/auth/authSlice";
import { routes } from "../../constants/routesConstants";
import logoSf from "../../assets/images/logo-sf.png";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:600px)");
  const { control, handleSubmit, watch } = useForm();
  const { user } = useSelector((state) => state.auth);
  const checked = true;
  const termsValue = watch("terms", true);
  const password = watch("password", "");

  const onSubmit = (dataForm) => {
    const data = {
      email: dataForm.email,
      name: dataForm.name,
      lastname: dataForm.lastName,
      second_lastname: dataForm.secondLastName,
      password: dataForm.password,
      partner_name: dataForm.organization,
    };

    dispatch(signup(data));
  };

  useEffect(() => {
    if (user.token) {
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
          padding: "3rem 2.1rem",
          maxWidth: matches ? "18rem" : "50rem",
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
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1.5rem",
          }}
        >
          <Typography variant="title">Comienza tu registro</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="textInput">Nombre</Typography>
            <Controller
              control={control}
              defaultValue=""
              name="firstName"
              rules={{
                required: "El nombre es requerido",
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
                      height={matches ? "2rem" : "3rem"}
                      id="name"
                      onChange={onChange}
                      placeholder="Ingresa tu nombre"
                      type="text"
                      value={value}
                      width={matches ? "15rem" : "100%"}
                    />
                  </Grid>
                  <Typography
                    color="error.main"
                    data-testid="error-message-name"
                    variant="caption"
                  >
                    {errorInput?.message}
                  </Typography>
                </>
              )}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="textInput">Apellido</Typography>
            <Controller
              control={control}
              defaultValue=""
              name="lastName"
              rules={{
                required: "El apellido es requerido",
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
                      id="lastName"
                      placeholder="Ingresa tu apellido"
                      onChange={onChange}
                      type="text"
                      value={value}
                      width={matches ? "15rem" : "100%"}
                    />
                  </Grid>
                  <Typography
                    color="error.main"
                    data-testid="error-message-lastName"
                    variant="caption"
                  >
                    {errorInput?.message}
                  </Typography>
                </>
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="textInput">Teléfono</Typography>
            <Controller
              control={control}
              defaultValue=""
              name="phoneNumber"
              rules={{
                required: "La organización es requerida",
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
                      id="organization"
                      onChange={onChange}
                      placeholder="Ingresa la organización"
                      type="text"
                      value={value}
                      width={matches ? "15rem" : "100%"}
                    />
                  </Grid>
                  <Typography
                    color="error.main"
                    data-testid="error-message-organization"
                    variant="caption"
                  >
                    {errorInput?.message}
                  </Typography>
                </>
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="textInput">Correo</Typography>
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
          <Grid item md={4} xs={12}>
            <Typography variant="textInput">Contraseña</Typography>
            <Controller
              control={control}
              defaultValue=""
              name="password"
              rules={{
                required: "La contraseña es requerida",
                pattern: getPasswordPattern(),
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
                      type="password"
                      value={value}
                      width={matches ? "15rem" : "100%"}
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
          <Grid item md={4} xs={12}>
            <Typography variant="textInput">Confirmar Contraseña</Typography>
            <Controller
              control={control}
              defaultValue=""
              name="confirmPassword"
              rules={{
                required: "La confirmación de la contraseña es requerida",
                pattern: getPasswordPattern(),
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
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
                      id="confirmPassword"
                      onChange={onChange}
                      placeholder="Confirma tu contraseña"
                      type="password"
                      value={value}
                      width={matches ? "15rem" : "100%"}
                    />
                  </Grid>
                  <Typography
                    color="error.main"
                    data-testid="error-message-confirm-password"
                    variant="caption"
                  >
                    {errorInput?.message}
                  </Typography>
                </>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue={checked}
              name="terms"
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  value={value}
                  onChange={onChange}
                  sx={{
                    my: 3,
                    "& .MuiSvgIcon-root": {
                      fontSize: matches ? "1.25rem" : "1.75rem",
                      fill: theme.palette.primary.main,
                    },
                  }}
                  control={
                    <Checkbox
                      checkedIcon={<CheckComplete />}
                      defaultChecked={checked}
                      icon={<CheckBorder />}
                      onChange={onChange}
                    />
                  }
                  label={
                    <Typography fontSize={matches ? ".8rem" : "1rem"}>
                      Acepto los Términos y Condiciones y Aviso de Privacidad
                    </Typography>
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <MainButton
              data-testid="button-signUp"
              disabled={!termsValue}
              height={matches ? "2rem" : "3rem"}
              onClick={handleSubmit(onSubmit)}
              width={matches ? "15rem" : "100%"}
            >
              <Typography>Crear cuenta</Typography>
            </MainButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
