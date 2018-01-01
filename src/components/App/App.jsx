import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";

import { Switch, Route } from "react-router-dom";
import Arm from "../Arm/Arm";

const App = () => (
    <MuiThemeProvider>
        <div className="sidebar">
            <List className="sidebar_content">
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
        </div>
        <Switch>
            <Route path="/orders" component={Arm} />
        </Switch>
    </MuiThemeProvider>
);

export default App;
