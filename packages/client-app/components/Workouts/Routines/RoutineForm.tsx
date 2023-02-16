import React from 'react';
const shortid = require('shortid');

const RoutineData = {
  id: '',
  routineTitle: '',
};

interface FormData {
  id: string;
  routineTitle: string;
}

interface RoutineFormProps {
  liftRoutineData: (data: object) => void;
}

const RoutineForm = ({ liftRoutineData }: RoutineFormProps) => {
  const [routineFormValue, setRoutineFormValue] = React.useState<FormData>({
    ...RoutineData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoutineFormValue((prev) => ({
      ...prev,
      id: shortid.generate(),
      routineTitle: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (routineFormValue.routineTitle) {
      liftRoutineData(routineFormValue);
    }

    setRoutineFormValue(RoutineData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chest">Routine Title: </label>
          <input
            type="text"
            name="chest"
            id="chest"
            value={routineFormValue.routineTitle}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoutineForm;
