import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  title: string;
  styles: object;
  children: React.ReactNode;
  className: string;
}

export const Button = ({ title, styles, children }: ButtonProps) => {
  return (
    <MuiButton sx={styles}>
      {children}
      {title}
    </MuiButton>
  );
};
