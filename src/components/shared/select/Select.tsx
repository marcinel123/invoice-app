import "./Select.scss";
import arrow from "../../../assets/icon-arrow-down.svg";

export interface SelectProps {
  selectName: string;
  data: string[];
}

const Select = ({ selectName, data }: SelectProps) => {
  return (
    <div className="select">
      <label>{selectName}</label>
      <div>
        <span>{data[0]}</span>
        <button>
          <img src={arrow} />
        </button>
        <ul>{data?.map((singleData) => <li>{singleData}</li>)}</ul>
      </div>
    </div>
  );
};

export default Select;
