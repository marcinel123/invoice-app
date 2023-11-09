import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import icon_plus from "../../assets/icon-plus.svg";
import { SelectComponent } from "../shared/select/SelectComponent";
import { ButtonComponent } from "../shared/button/ButtonComponent";
import { theme } from "../../theme/Theme";

const btnStyles = {
  display: "flex",
  justifyContent: "space-around",
  width: 150,
  height: 50,
  bgcolor: theme.palette.secondary.main,
  color: theme.palette.primary.light,
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25,
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
  fontSize: "0.75rem",
};

export const Header = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 10,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2" sx={{ color: "primary.light" }}>
          Invoices
        </Typography>
        <Typography sx={{ color: "primary.light" }}>
          There are 3 total invoices
        </Typography>
      </Box>
      <Box>
        <SelectComponent
          selectName=""
          data={["Draft", "Pending", "Paid"]}
          label=""
        />
      </Box>
      <ButtonComponent
        className="invoice_btn"
        title="New invoice"
        styles={btnStyles}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "primary.light",
            minHeight: 20,
            minWidth: 20,
            borderRadius: 50,
          }}
        >
          <img className="icon_plus" src={icon_plus} alt="" />
        </Box>
      </ButtonComponent>
    </Container>
  );
};
