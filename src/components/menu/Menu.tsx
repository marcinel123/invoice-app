import Box from "@mui/material/Box";
import sunIcon from "../../assets/icon-sun.svg";
import { Logo } from "../logo/Logo";
import { Avatar } from "../avatar/Avatar";

export const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        bgcolor: "primary.main",
        width: "5%",
        minWidth: "6.4375rem",
        height: "100%",
      }}
    >
      <Logo />
      <Box
        sx={{
          position: "absolute",
          bottom: "5rem",
          minHeight: "5rem",
          minWidth: "6.4375rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="sun_Icon" src={sunIcon} alt="icon of the sun" />
      </Box>
      <Avatar />
    </Box>
  );
};
