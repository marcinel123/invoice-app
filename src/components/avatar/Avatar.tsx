import avatar from "../../assets/image-avatar.jpg";
import "./Avatar.scss";
import { Avatar as MuiAvatar } from "@mui/material/";

const avatar_styles = {
  borderTop: "1px solid",
  borderColor: "primary.light",
  position: "absolute",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
};

export const Avatar = () => {
  return (
    <MuiAvatar sx={avatar_styles} alt="image of user avatar" src={avatar} />
  );
};
