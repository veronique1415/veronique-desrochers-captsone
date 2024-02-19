import { FormGroup, FormLabel, FormControl, FormSelect } from "react-bootstrap";
import "./FormFields.scss";

export const BaseField = ({formLabel, type, placeholder, id, name}) => {
  return (
    <FormGroup className="base-form__group">
    <FormLabel className="base-form__label" htmlFor={`#${id}`}>
      {formLabel}
      <FormControl type={type} placeholder={placeholder}  id={id} name={name} className="base-form__input"/>
      <FormControl.Feedback />
    </FormLabel>
  </FormGroup>
  )
};

export const SelectField = ({baseOption, options, labelKey, valueKey, id, name}) => {
    return (
      <FormGroup className="base-form__group">
        <FormSelect aria-label="Default select example" id={id} name={name}>
            <option>Select a {baseOption}</option>
            {options.map((option) => (
            <option key={option[valueKey]} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </FormSelect>
    </FormGroup>
    )
  };