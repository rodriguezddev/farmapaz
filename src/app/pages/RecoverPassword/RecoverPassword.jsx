import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Link as MuiLink,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { getEmailPattern } from "../../utils/utilsValidations";
import { MainInput } from "../../components/inputs";
import { Paper } from "../../components/paper";
import { MainButton } from "../../components/buttons";
import { recoverPassword } from "../../redux/slices/auth/authSlice";
import { getPartnerUrl } from "../../utils/utilsGetInfo";
import { routes } from "../../constants/routesConstants";
import logoSf from "../../assets/images/logo-sf.png";

const RecoverPassword = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:600px)");
  const { control, handleSubmit } = useForm();
  const partnerUrl = getPartnerUrl(window.location.hostname) || "";

  const onSubmit = (formData) => {
    const data = {
      email: formData.email,
      partner_code: partnerUrl.toUpperCase(),
    };

    dispatch(recoverPassword(data));
  };

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
          padding: matches ? "2rem 1rem" : "5rem 2.1rem",
          maxWidth: matches ? "18rem" : "34.1rem",
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
          mb={2}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: matches ? "1rem" : "0.5rem",
          }}
        >
          <Typography variant="title">Enviar contraseña</Typography>
        </Box>
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
            <MainButton
              data-testid="button-signUp"
              height={matches ? "3rem" : "4.1rem"}
              onClick={handleSubmit(onSubmit)}
              width={matches ? "15rem" : "100%"}
            >
              <Typography p={4}>Enviar</Typography>
            </MainButton>
            <Box fontSize="1rem" mt={4}>
              <MuiLink component={Link} to={routes.login}>
                Inicia sesión
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RecoverPassword;
