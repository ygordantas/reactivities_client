import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../../app/layout/stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const activity = activityStore.selectedActivity;
  if (!activity) return null;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => activityStore.handleFormOpen(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={activityStore.cancelSelectActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default observer(ActivityDetails);
