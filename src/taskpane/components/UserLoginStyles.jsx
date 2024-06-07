import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  usernameInputContainer: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    marginTop: "10px",
  },
  heading: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "160%", // or "35px"
    color: "#000000",
    marginBottom: "20px", // Adjust as needed
  },
  userProfileButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "214px",
    height: "38px",
    background: "#BD302B",
    borderRadius: "32px",
    marginBottom: "30px", // Adjust as needed
  },
  userProfileButtonInner: {
    fontFamily: "'Roboto', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "160%",
    color: "#FFFFFF",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    margin: 0,
  },
  rec: {
    position: "relative",
    width: "50%",
    height: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 1px 4.6px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px", // Adjust as needed
  },
  inputContainerInput: {
    width: "100%", // Make the input field take the full width of the container
    border: "none",
    borderBottom: "0.87px solid #C1C5C8", // Style to make it appear as a line
    borderRadius: 0, // Remove border radius
    fontSize: "16px",
    outline: "none", // Remove default outline
    padding: "5px 0", // Remove padding to eliminate gap
    marginBottom: "10px", // Adjust as needed
    boxSizing: "border-box", // Include padding and border in the element's total width and height
  },
  inputHelperText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "12px",
    color: "#63666A",
  },
  buttonfButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "113px",
    height: "31px",
    background: "#0081C5",
    borderRadius: "32px",
    color: "white", // Set text color to white
    fontFamily: "'Roboto', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "160%",
    border: "none",
    cursor: "pointer",
  },
});
