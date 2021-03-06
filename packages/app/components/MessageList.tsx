import React from "react";
import MessageItem from "./MessageItem";
import { Grid, List, Typography } from "@material-ui/core";
import { messagesActions } from "../actions";
import { Messages } from "../dto";
import { history } from "../utils/history";

const MessageList = ({ messages, uDispatch, isMobile }: any) => {

  return (<List>
    {messages?.length === 0 &&
    <Grid container justifyContent={"center"}>
      <Typography> Pas de Message pour l'instant 🥲 </Typography>
    </Grid>
    }
    {messages?.map((message: Messages) =>
      <MessageItem
        key={message.id}
        message={message}
        button
        onClick={() => {
          !message.isRead &&
          uDispatch(messagesActions.update({
            id: message.id,
            isRead: true,
          }));
          !message.isRead && uDispatch(messagesActions.getAllReceive()) && uDispatch(messagesActions.getAllSender())
          if (isMobile) {
            history.push(`message?messageId=${message.id}`, undefined, { shallow: true });
          } else {
            history.push(`?messageId=${message.id}`, undefined, { shallow: true });

          }
        }}
      />,
    )}
  </List>);
};
export default MessageList;
