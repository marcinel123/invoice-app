import Button from "@mui/material/Button";

interface ButtonProps {
  title: string;
}

export const ButtonComponent = ({ title }: ButtonProps) => {
  return <Button variant="contained">{title}</Button>;
};
