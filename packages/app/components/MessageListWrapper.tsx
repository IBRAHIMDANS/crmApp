import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tab, Tabs } from "@material-ui/core";
import { messagesActions } from "../actions";
import { TabPanelProps } from "@material-ui/lab";
import MessageList from "./MessageList";
import styled from "styled-components";
import {  } from "../pages/register";

function TabPanel(props: TabPanelProps | any) {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

const MessageListWrapper = ({isMobile=false}) => {
  const uDispatch = useDispatch();
  const messagesSender = useSelector(({ messagesSender }: any) => messagesSender?.messages);
  const messagesReceive = useSelector(({ messagesReceive }: any) => messagesReceive?.messages);
  const [tabValues, setTabValues] = useState<number>(0);
  useEffect(() => {
    uDispatch(messagesActions.getAllReceive());
    uDispatch(messagesActions.getAllSender());
  }, []);
  return (
    <React.Fragment>
      <Tabs
        value={tabValues}
        indicatorColor="primary"
        textColor="primary"
        style={{width:"100%"}}
        onChange={(_, newValues) => setTabValues(newValues)}
        variant="fullWidth"
      >
        <Tab label="Message Reçu"/>
        <Tab label="Message Envoyé"/>
      </Tabs>
      <TabPanel value={tabValues} index={0}>
        <MessageList isMobile={isMobile} messages={messagesReceive} uDispatch={uDispatch}/>
      </TabPanel>
      <TabPanel value={tabValues} index={1}>
        <MessageList isMobile={isMobile} messages={messagesSender} uDispatch={uDispatch}/>
      </TabPanel>

    </React.Fragment>
  );
};

export default MessageListWrapper;
