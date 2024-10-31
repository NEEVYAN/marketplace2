"use client";

import { Fragment } from "react";
// Local CUSTOM COMPONENTS
import MessageForm from "../message-form";
import ConversationCard from "../conversation-card";
import DashboardHeader from "../../dashboard-header";
// CUSTOM ICON COMPONENT
import CustomerService from "icons/CustomerService";
// CUSTOM DATA MODEL
import Ticket from "models/Ticket.model";

// ==========================================================
type Props = { ticket: Ticket };
// ==========================================================

export default function TicketDetailsPageView({ ticket }: Props) {
  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        title="Support Ticket"
        Icon={CustomerService}
        href="/support-tickets"
        buttonText="Back to Tickets"
      />

      {/* CONVERSATION LIST */}
      {ticket.conversation.map((item, ind) => (
        <ConversationCard message={item} key={ind} />
      ))}

      {/* FORM AREA */}
      <MessageForm />
    </Fragment>
  );
}
