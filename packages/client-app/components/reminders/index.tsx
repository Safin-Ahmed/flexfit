import Popup from "@components/Shared/Popup";
import { Typography } from "@mui/material";
import React from "react";

const Reminders = () => {
  return (
    <div>
      <Popup>
        <Typography>This is the list of Reminders</Typography>
      </Popup>
    </div>
  );
};

export default Reminders;
