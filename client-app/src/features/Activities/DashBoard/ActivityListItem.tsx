import React from "react";
import {
  Item,
  Button,
  Segment,
  SegmentGroup,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";
import { format } from "date-fns";

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  return (
    <SegmentGroup>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src="/assets/user.png" />
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>Hosted by</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> { format(activity.date,'h:mm a')}
        <Icon name="marker" /> {activity.city}, {activity.venue}
      </Segment>
      <Segment secondary>Attendees will go here...</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </SegmentGroup>
  );
};

export default ActivityListItem;
