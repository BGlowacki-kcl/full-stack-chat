import { Box, Button, Stack, TextField } from '@mui/material';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const ChatWindow = () => {
  return (
    <Stack
        position= 'relative'
        zIndex= {1}
        direction={'column'}
        width={{lg: "65vw", sm: "70vw"}}
        height={{lg: "57vh", sm: "80vw"}}
        border="2px solid grey"
        className='bg-slate-600/90 shadow-md rounded-xl'
        p={2}
        spacing={4}
      >
        <Box
          className="bg-black  h-32 w-32 rounded-full border-2 border-white flex justify-center items-center"
          position="absolute"
          top={-70}
          left={-70}
          zIndex={2}
        >
          <img
            src="/robo-advisor.png"
            alt="newspaper"
            width={80}
            height={80}  
            className="animate-pulse"
          />
        </Box>
        <Box
          className="bg-black  h-10 w-10 rounded-full border-2 border-white flex justify-center items-center"
          position="absolute"
          top={-60}
          right={-25}
          zIndex={2}
        //   onClick={isLoading ? undefined : restartChat}  // Disable click when loading
        //   sx={{
        //     cursor: isLoading ? 'not-allowed' : 'pointer',  // Change cursor to 'not-allowed' when loading
        //     opacity: isLoading ? 0.5 : 1,  // Reduce opacity when loading
        //   }}
        >
          <FontAwesomeIcon icon={faArrowsRotate} color="white" />
        </Box>
        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {/* {messages.map((message, index) => ( */}
            <Box
            //   key={index}
              display="flex"
            //   justifyContent={
            //     // message.role === 'assistant' ? 'flex-start' : 'flex-end'
            //   }
            >
              <Box
                // bgcolor={
                //   message.role === 'assistant'
                //     ? '#7A1CAC'
                //     : '#EBD3F8'
                // }
                // color={
                //   message.role === 'assistant'
                //     ? 'white'
                //     : 'black'
                // }
                className='opacity-100'
                borderRadius={16}
                p={2}
              >
                {/* {message.content} */}
              </Box>
            </Box>
          {/* ))} */}
          {/* <div ref={messagesEndRef} /> */}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            // onKeyDown={handleKeyPress}
            // disabled={isLoading}
            // sx={{
            //   input: { color: 'white' }, // Text color inside the input
            //   label: { color: 'white' }, // Label color
            //   '.MuiOutlinedInput-root': {
            //     '& fieldset': {
            //       borderColor: 'white', // Border color
            //     },
            //     '&:hover fieldset': {
            //       borderColor: 'white', // Border color on hover
            //     },
            //     '&.Mui-focused fieldset': {
            //       borderColor: 'white', // Border color when focused
            //     },
            //   },
            //   backgroundColor: '#2E073F', // Background color of the input field
            // }}
          />
          <Button
            variant="contained"  
            // onClick={sendMessage}
            // sx={{
            //   backgroundColor: '#2E073F',
            //   '&:hover': {
            //     backgroundColor: '#5a2173', // A slightly darker shade for the hover state
            //   },
            // }}
          >
            {/* {isLoading ? 'Sending...' : 'Send'} */}
          </Button>
        </Stack>
      </Stack>
  )
};

export default ChatWindow;