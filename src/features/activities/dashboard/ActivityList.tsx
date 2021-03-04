import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/layout/stores/store";
import ActivityListItem from "./ActivityListItem";

function ActivityList() {
  const { activityStore } = useStore();

  return (
    <>
      {activityStore.goupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((act) => (
            <ActivityListItem key={act.id} activity={act} />
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default observer(ActivityList);
