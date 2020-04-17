import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext, SyntheticEvent } from "react";
import { IActivity } from "../models/activity";
import agent from "../api/agent";

configure({ enforceActions: "always" });

class ActivityStore {
  @observable activitiesRegistry = new Map();
  @observable selectedActivity: IActivity | undefined;
  @observable initialLoading = false;
  @observable editMode = false;
  @observable submitting = false;
  @observable target = "";

  @computed get activitiesByDate() {
    return Array.from(this.activitiesRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  @action
  loadActivities = async () => {
    this.initialLoading = true;
    try {
      const activities = await agent.Activities.list();
      runInAction('Loading activities',() => {
        activities.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          this.activitiesRegistry.set(activity.id, activity);
          this.initialLoading = false;
        });
      });
    } catch (error) {
      runInAction('Loading activities error',() => {
        console.log(error);
        this.initialLoading = false;
      });
    }
  };

  @action createActivity = async (activity: IActivity) => {
    this.submitting = true;
    try {
      await agent.Activities.create(activity).then(() => {
        runInAction('Creating activity',() => {
          this.activitiesRegistry.set(activity.id, activity);
          this.selectedActivity = activity;
          this.submitting = false;
          this.editMode = false;
        });
      });
    } catch (error) {
      runInAction('Creating activity error',() => {
        console.log(error);
        this.submitting = false;
      });
    }
  };

  @action editActivity = async (activity: IActivity) => {
    this.submitting = true;
    try {
      await agent.Activities.update(activity);
      runInAction('Editing activity',() => {
        this.activitiesRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
        this.submitting = false;
        this.editMode = false;
      });
    } catch (error) {
      runInAction('Editing activity error',() => {
        console.log(error);
        this.submitting = false;
      });
    }
  };

  @action deleteActivity = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.selectedActivity = undefined;
    this.editMode = false;
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activitiesRegistry.delete(id);
        this.submitting = false;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.submitting = false;
        this.target = "";
      });
    }
  };

  @action selectActivity = (id: string) => {
    this.editMode = false;
    this.selectedActivity = this.activitiesRegistry.get(id);
    //this.editMode = true;
  };

  @action handleOpenCreateForm = () => {
    this.selectedActivity = undefined;
    this.editMode = true;
  };

  @action setEditMode = (state: boolean) => {
    this.editMode = state;
  };

  @action setSelectedActivity = (activity: IActivity | undefined) => {
    this.selectedActivity = activity;
  };
}

export default createContext(new ActivityStore());
