import "./Input.scss";

export interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <label className="label" htmlFor={label}>
      {label}
      <input id={label} placeholder={label} />
    </label>
  );
};
