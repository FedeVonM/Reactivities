import React, { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/Nav/NavBar";
import ActivityDashBoard from "../../features/Activities/DashBoard/ActivityDashBoard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.initialLoading)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard />
      </Container>
    </div>
  );
};

export default observer(App);
