import avatar from "../../assets/image-avatar.jpg";
import Box from "@mui/material/Box";
import "./Avatar.scss";

export const Avatar = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "primary.light",
        position: "absolute",
        bottom: "0",
        minHeight: "5rem",
        minWidth: "6.4375rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className="img_avatar" src={avatar} alt="image of user avatar" />
    </Box>
  );
};
