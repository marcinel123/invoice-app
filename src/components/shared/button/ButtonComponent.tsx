import Button from "@mui/material/Button";

interface ButtonProps {
  title: string;
  styles: object;
  children: React.ReactNode;
  className: string;
}

export const ButtonComponent = ({ title, styles, children }: ButtonProps) => {
  return (
    <Button sx={styles}>
      {children}
      {title}
    </Button>
  );
};
