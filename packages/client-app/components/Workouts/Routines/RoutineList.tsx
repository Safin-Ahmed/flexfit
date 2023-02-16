import React from 'react';
import DisplayRoutines from './DisplayRoutines';
import RoutineForm from './RoutineForm';

const RoutineList = () => {
  const [isCreate, setIsCreate] = React.useState(false);
  const [routineList, setRoutineList] = React.useState([{}]);
  const [singleRoutine, setSingleRoutine] = React.useState({});

  const liftRoutineData = (data: object) => {
    setRoutineList((prev) => [...prev, data]);
    setSingleRoutine(data);
    console.log({ singleRoutine });
  };
  return (
    <div>
      <button onClick={() => setIsCreate(!isCreate)}>Create Routine</button>
      {isCreate && <RoutineForm liftRoutineData={liftRoutineData} />}
      {
        //@ts-ignore
        singleRoutine.routineTitle && (
          <DisplayRoutines
            //@ts-ignore
            routineList={routineList}
          />
        )
      }
    </div>
  );
};

export default RoutineList;
