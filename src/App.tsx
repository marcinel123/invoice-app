import "./App.scss";
import Box from "@mui/material/Box";
import { Logo } from "./components/logo/Logo";
import sunIcon from "./assets/icon-sun.svg";
import { Avatar } from "./components/avatar/Avatar";

function App() {
  return (
    <div className="app">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          bgcolor: "#1f213a",
          width: "5%",
          minWidth: "103px",
          height: "100%",
        }}
      >
        <Logo />
        <Box
          sx={{
            position: "absolute",
            bottom: "80px",
            minHeight: "80px",
            minWidth: "103px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="sun_Icon" src={sunIcon} />
        </Box>
        <Avatar />
      </Box>
      <Box sx={{ bgcolor: "#141625", width: "95%", height: "100%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        doloremque culpa facere sint, totam repellendus itaque omnis dolore
        voluptatibus beatae tenetur autem ducimus recusandae sapiente ipsum
        eligendi eum perferendis. Ratione. Neque, placeat itaque consequatur cum
        velit odit. Eius cupiditate sequi deleniti repudiandae, ad illo sit quod
        veniam nam expedita quam placeat iure quasi architecto inventore?
        Blanditiis laborum incidunt mollitia eius? Assumenda ipsum eius,
        accusamus aliquam dignissimos, id quia fuga voluptatem consectetur rem
        facilis optio cumque pariatur? Ipsa fugiat fugit, voluptatum aspernatur
        porro commodi ipsum est dolores soluta esse asperiores doloribus! Quas
      </Box>
    </div>
  );
}

export default App;
