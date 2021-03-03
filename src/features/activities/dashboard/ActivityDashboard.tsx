import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/layout/stores/store";
import ActivityList from "./ActivityList";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activities, loadingInitial } = activityStore;

  useEffect(() => {
    if (activities.size <= 1) loadActivities();
  }, [activities.size, loadActivities]);

  if (loadingInitial) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);
