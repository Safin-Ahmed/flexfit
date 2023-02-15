import React from 'react';
import BodyPartForm from './BodyPartForm';
import DisplayBodyParts from './DisplayBodyParts';

const BodyPartsList = () => {
  const [isCreate, setIsCreate] = React.useState(false);
  const [bodyPartValues, setBodyPartValues] = React.useState<{}[]>([]);

  const liftBodyPartData = (data: object) => {
    setBodyPartValues((prev) => [...prev, data]);
  };
  return (
    <div>
      <button onClick={() => setIsCreate(!isCreate)}>Chest</button>
      {isCreate && <BodyPartForm liftBodyPartData={liftBodyPartData} />}
      {/* @ts-ignore  */}
      <DisplayBodyParts bodyPartValues={bodyPartValues} />
    </div>
  );
};

export default BodyPartsList;
