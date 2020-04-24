import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/Nav/NavBar";
import ActivityDashBoard from "../../features/Activities/DashBoard/ActivityDashBoard";
import { observer } from "mobx-react-lite";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import HomePage from "../../features/home/homePage";
import ActivityForm from "../../features/Activities/Form/ActivityForm";
import ActivityDetails from "../../features/Activities/Details/ActivityDetails";
import PedidoPrueba from "../../features/Activities/Details/PedidoPrueba";
import NotFound from "./NotFound";
import { ToastContainer } from "react-toastify";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/activities" component={ActivityDashBoard} />
                <Route
                  exact
                  path="/activities/:id"
                  component={ActivityDetails}
                />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route exact path="/pedidos" component={PedidoPrueba} />
                
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
