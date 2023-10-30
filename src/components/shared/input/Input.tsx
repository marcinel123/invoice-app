import "./Input.scss";

export interface InputProps {
  labelTitle: string;
}

export const Input = ({ labelTitle }: InputProps) => {
  return (
    <label className="label" htmlFor={labelTitle}>
      {labelTitle}
      <input id={labelTitle} placeholder={labelTitle} />
    </label>
  );
};
