import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import NavBar from "../../features/Nav/NavBar";
import ActivityDashBoard from "../../features/Activities/DashBoard/ActivityDashBoard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handlerSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/activities")
      .then((response) => {
        let activities: IActivity[] = [];
        response.data.forEach((a) => {
          a.date = a.date.split(".")[0];
          activities.push(a);
        });
        setActivities(activities);
      });
  }, []);

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handlerEditActivity = (activity: IActivity) => {
    setActivities([
      ...activities.filter(a => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handlerDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)])
  };

  return (
    <div>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard
          activities={activities}
          selectActivity={handlerSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handlerEditActivity}
          deleteActivity={handlerDeleteActivity}
        />
      </Container>
    </div>
  );
};

export default App;
