import Box from "@mui/material/Box";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

const logo_styles = {
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
};

const logo_styles2 = {
  bgcolor: "secondary.main",
  width: 1,
  height: "50%",
  position: "absolute",
  borderTopLeftRadius: 15,
  borderBottomRightRadius: 15,
  top: 52,
};

export const Logo = () => {
  return (
    <Box sx={logo_styles}>
      <img className="img_logo" src={logo} alt="logo icon" />
      <Box sx={logo_styles2}></Box>
    </Box>
  );
};
