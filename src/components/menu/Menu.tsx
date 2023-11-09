import Box from "@mui/material/Box";
import sunIcon from "../../assets/icon-sun.svg";
import { Logo } from "../logo/Logo";
import { Avatar } from "../avatar/Avatar.tsx";
import { menu_styles } from "../menu/Menu.styles.ts";
import { icon_styles } from "../menu/Menu.styles.ts";

export const Menu = () => {
  return (
    <Box sx={menu_styles}>
      <Logo />
      <Box sx={icon_styles}>
        <img className="sun_Icon" src={sunIcon} alt="icon of the sun" />
      </Box>
      <Avatar />
    </Box>
  );
};
