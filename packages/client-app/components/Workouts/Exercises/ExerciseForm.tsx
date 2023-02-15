import React from 'react';
import DisplayBodyParts from '../BodyParts/DisplayBodyParts';
import ExerciseList from './ExerciseList';
const shortid = require('shortid');
const INIT_DATA = {
  name: '',
  exerciseId: '',
  bodyPartId: '',
  sets: '',
  reps: '',
  time: '',
};

interface ExerciseFormProps {
  formData: (data: object) => void;
  bodyPartValues: {
    id: string;
    bodyPart: string;
  };
}

const ExerciseForm = ({ formData, bodyPartValues }: ExerciseFormProps) => {
  const [formValues, setFormValues] = React.useState({ ...INIT_DATA });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      exerciseId: shortid.generate(),
      bodyPartId: bodyPartValues.id,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formValues });
    formData(formValues);
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
