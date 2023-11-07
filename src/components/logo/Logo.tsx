import Box from "@mui/material/Box";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

export const Logo = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        width: 1,
        minHeight: "6.4375rem",
        minWidth: "6.4375rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <img className="img_logo" src={logo} alt="logo icon" />
      <Box
        sx={{
          bgcolor: "secondary.main",
          width: 1,
          height: "50%",
          position: "absolute",
          borderTopLeftRadius: 15,
          borderBottomRightRadius: 15,
          top: 52,
        }}
      ></Box>
    </Box>
  );
};
