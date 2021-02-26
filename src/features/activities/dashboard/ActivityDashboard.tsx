import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/layout/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "./form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedAct: Activity | undefined;
  selectHandler: (id: string) => void;
  cancelSelectHandler: () => void;
  showForm: boolean;
  closeForm: () => void;
  openForm: (id: string) => void;
  handleFormSubmit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
  activities,
  selectedAct,
  selectHandler,
  cancelSelectHandler,
  showForm,
  closeForm,
  openForm,
  handleFormSubmit,
  deleteActivity,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          select={selectHandler}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedAct && !showForm && (
          <ActivityDetails
            activity={selectedAct}
            cancelSelected={cancelSelectHandler}
            openForm={openForm}
          />
        )}
        {showForm && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedAct}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
