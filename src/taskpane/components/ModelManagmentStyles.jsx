import { makeStyles } from "@fluentui/react-components";

export const useStyles2 = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px",
  },
  logo: {
    width: "200px",
    height: "auto",
    marginBottom: "20px",
  },
  heading: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "160%",
    color: "#000000",
    marginBottom: "40px",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  backIcon: {
    width: "24px",
    height: "24px",
  },
  buttonsContainer: {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "400px",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    width: "150px",
    height: "150px",
    padding: "20px",
    color: "#000000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "160%",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "1px solid #E0E0E0",
    boxShadow: "0px 1px 4.6px rgba(0, 0, 0, 0.15)",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  icon: {
    marginBottom: "10px",
    width: "40px",
    height: "40px",
  },
  fontText: {
    marginTop: "10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "160%",
  },
});