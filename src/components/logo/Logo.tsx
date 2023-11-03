import Box from "@mui/material/Box";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

export const Logo = () => {
  return (
    <Box
      sx={{
        bgcolor: "#7C5DFA",
        width: 1,
        height: "4rem",
        minHeight: "103px",
        minWidth: "103px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <img className="img_logo" src={logo} />
      <Box
        sx={{
          bgcolor: "#9277FF",
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
