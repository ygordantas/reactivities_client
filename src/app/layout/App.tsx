import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "./models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivitie, setSelectedActivities] = useState<
    Activity | undefined
  >(undefined);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:44372/api/Activities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivities(activities.find((a) => a.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivities(undefined);
    if (showForm) handleCloseForm();
  }

  function handleCreateOrEditActivity(activity: Activity) {
    if (activity.id) {
      // axios
      //   .put<void>(`https://localhost:44372/api/Activities/${activity.id}`)
      //   .then((_) => {
      //     closeForm();
      //     setActivity(initialState);
      //   });
      const updatedActivities: Activity[] = [...activities];
      const indexToUpdate = updatedActivities.findIndex(
        (a) => a.id === activity.id
      );
      updatedActivities.splice(indexToUpdate, 1, activity);
      setActivities(updatedActivities);
    } else {
      // axios.post<void>("https://localhost:44372/api/Activities").then((_) => {
      //   closeForm();
      //   setActivity(initialState);
      // });

      const updatedActivities: Activity[] = [
        ...activities,
        { ...activity, id: uuid() },
      ];
      setActivities(updatedActivities);
    }
    handleCloseForm();
    setSelectedActivities(activity);
  }

  function handleShowForm(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    if (!showForm) setShowForm(true);
  }

  function handleCloseForm() {
    if (showForm) setShowForm(false);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((a) => a.id !== id)]);
  }
  return (
    <>
      <NavBar
        showForm={handleShowForm}
        cancelSelected={setSelectedActivities}
        isFormOpen={showForm}
      />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectHandler={handleSelectActivity}
          cancelSelectHandler={handleCancelSelectActivity}
          selectedAct={selectedActivitie}
          showForm={showForm}
          closeForm={handleCloseForm}
          openForm={handleShowForm}
          handleFormSubmit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
