"use client";

import { Fragment } from "react";
import Person from "@mui/icons-material/Person";
// Local CUSTOM COMPONENT
import UserInfo from "../user-info";
import UserAnalytics from "../user-analytics";
import DashboardHeader from "../../dashboard-header";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ============================================================
type Props = { user: User };
// ============================================================

export default function ProfilePageView({ user }: Props) {
  return (
    <div style={{marginBottom:"30%"}}>
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Person}
        title="Profile"
        buttonText="Edit Profile"
        href={`/profile/${user.id}`}
      />



      <UserAnalytics user={user} />


      <UserInfo user={user} />


    </Fragment>
    </div>
  );
}
