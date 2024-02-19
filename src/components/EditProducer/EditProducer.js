
import { Form } from "react-bootstrap";
import { SelectField, BaseField } from "../FormFields/FormFields";
import "./EditProducer.scss";

const producers = [
  {
    producer_id: "1",
    producer_name: "Christian",
    producer_region: "",
    producer_village: "",
    producer_description: "blablabla",
    producer_description2: "blablabla",
    producer_description3: "blablabla",
  },
  {
    producer_id: "2",
    producer_name: "John"
  },
  {
    producer_id: "3",
    producer_name: "Alice"
  }
];

const EditProducer = () => {
  return (
    <Form>
      <SelectField
        formLabel="Select Producer"
        baseOption="Producer"
        options={producers}
        id="producerSelect"
        name="producer"
        valueKey="producer_id"
        labelKey="producer_name"
      />
        <div>
          <BaseField
            formLabel={"Producer's Name"}
            type={"text"}
            placeholder={"Producer's Name"}
            id={"producer_name"}
            name={"producer_name"}
          />
          <BaseField
            formLabel={"Producer's Region"}
            type={"text"}
            placeholder={"Producer's Region"}
            id={"producer_region"}
            name={"producer_region"}
          />
          <BaseField
            formLabel={"Producer's Village"}
            type={"text"}
            placeholder={"Producer's Village"}
            id={"producer_village"}
            name={"producer_village"}
          />
        </div>
    </Form>
  );
};

export default EditProducer;
