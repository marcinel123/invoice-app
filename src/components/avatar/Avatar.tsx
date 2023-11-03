import avatar from "../../assets/image-avatar.jpg";
import Box from "@mui/material/Box";
import "./Avatar.scss";

export const Avatar = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid white",
        position: "absolute",
        bottom: "0px",
        minHeight: "80px",
        minWidth: "103px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className="img_avatar" src={avatar} />
    </Box>
  );
};
