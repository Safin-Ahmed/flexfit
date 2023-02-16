import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ workoutData }: any): JSX.Element => {
  // Completed workout
  const completedWorkout = workoutData?.filter((workout: any) => {
    const workoutInfo = workout.attributes;
    return workoutInfo.isCompleted;
  });

  // InCompleted workout
  const inCompletedWorkout = workoutData?.filter((workout: any) => {
    const workoutInfo = workout.attributes;
    return workoutInfo.isCompleted === false;
  });

  const data = {
    labels: ["Total Workouts", "Completed Workout", "InCompleted Workout"],
    datasets: [
      {
        label: "Number of Workouts",
        data: [
          workoutData?.length,
          completedWorkout?.length,
          inCompletedWorkout?.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "#4bb5437a",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "#4bb543",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
