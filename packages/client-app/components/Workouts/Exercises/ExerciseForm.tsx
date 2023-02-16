import React from 'react';
import { RoutineData } from '../types';
const shortid = require('shortid');
const INIT_DATA = {
  name: '',
  exerciseId: '',
  routineId: '',
  sets: '',
  reps: '',
  time: '',
};

interface ExerciseFormProps {
  formData: (data: object) => void;
  routine: RoutineData;
}

const ExerciseForm = ({ formData, routine }: ExerciseFormProps) => {
  const [formValues, setFormValues] = React.useState({ ...INIT_DATA });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      exerciseId: shortid.generate(),
      routineId: routine.id,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.name && formValues.sets) {
      formData(formValues);
    }
    setFormValues(INIT_DATA);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="sets">Sets: </label>
          <input
            type="text"
            name="sets"
            id="sets"
            value={formValues.sets}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExerciseForm;
