import React from 'react';
const shortid = require('shortid');

const INIT_BODY_DATA = {
  id: '',
  bodyPart: '',
};

interface BodyPartFormProps {
  liftBodyPartData: (data: object) => void;
}

const BodyPartForm = ({ liftBodyPartData }: BodyPartFormProps) => {
  const [bodyPartFormValue, setBodyPartFormValue] = React.useState({
    ...INIT_BODY_DATA,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBodyPartFormValue((prev) => ({
      ...prev,
      id: shortid.generate(),
      bodyPart: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log({ bodyPartFormValue });

    liftBodyPartData(bodyPartFormValue);
    setBodyPartFormValue(INIT_BODY_DATA);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chest">Type Chest: </label>
          <input
            type="text"
            name="chest"
            id="chest"
            value={bodyPartFormValue.bodyPart}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Select</button>
      </form>
    </div>
  );
};

export default BodyPartForm;
