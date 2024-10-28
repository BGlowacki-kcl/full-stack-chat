import React from 'react'
import { Box } from "@mui/material";
import StarbackCanvas from "./../components/Starback";
import UpperBox from "./../components/chat/UpperBox";
import SpacingMiddle from "./../components/chat/SpacingMiddle";
import ChatWindow from "./../components/chat/ChatWindow";

const Chat = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <StarbackCanvas />
      <UpperBox />
      <SpacingMiddle />
      <ChatWindow />

    </Box>
  )
}

export default Chat;