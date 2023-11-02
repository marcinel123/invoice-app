import "./Input.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField variant="filled" />
    </>

    // <label className="label" htmlFor={label}>
    //   {label}
    //   <input id={label} placeholder={label} />
    // </label>
  );
};
