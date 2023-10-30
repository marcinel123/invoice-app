import "./Select.scss";

export interface SelectProps {
  selectName: string;
  data: string[];
}

const Select = ({ selectName, data }: SelectProps) => {
  return (
    <div className="select">
      <label>{selectName}</label>
      <div>
        <span></span>
        <ul>
          {data.map((singleData) => (
            <li>{singleData}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
