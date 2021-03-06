import React from "react";
import styled from "styled-components";
import { Divider, Grid, ListItem, Typography } from "@material-ui/core";
import { formatDistanceStrict } from "date-fns";
import { MessageIcon } from "./MessageIcon";
import { Messages } from "../dto";
import { fr } from "date-fns/locale";

const Root = styled(Grid)`
  margin: 1em;
`;
export const NameTypography: any = styled(Typography)`
  font-weight: ${({ isread }: any) => isread && "bold"};
  font-size: 18px;
  line-height: 21px;
  margin: 0 10px;
`;
const ContentTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 300px;
  font-size: 14px;
  line-height: 16px;
  color: #777777;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-height: 3.6em;
  margin-top: 1em;
`;


const MessageItem = (props: any) => {
  const {
    isMessage = true,
    receiverUser = { firstName: "ibrahima", lastName: "Dansoko" },
    content = "J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?",
    createdAt = new Date(),
    isRead = false,
  }: Messages = props.message;
  const { firstName, lastName } = receiverUser;
  return (
    <ListItem {...props} divider>
      <Root container direction={"row"}>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs>
            <Grid container alignItems={"center"}>
              <MessageIcon isMessage={isMessage} isRead={isRead}/>
              {(firstName || lastName) &&
              <NameTypography isread={isRead}> {firstName || ""} {lastName || ""} </NameTypography>}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography>{formatDistanceStrict(new Date(), new Date(createdAt), { locale: fr })}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          {content && <ContentTypography>{content}</ContentTypography>}
        </Grid>
        <Divider/>
      </Root>
    </ListItem>
  );
};

export default MessageItem;
