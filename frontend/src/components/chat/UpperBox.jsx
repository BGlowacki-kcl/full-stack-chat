import { Button, Stack, Typography } from "@mui/material";

const UpperBox = () => {
  return (
    <Stack
        zIndex={1}
        position="relative"
        className='font-serif top-5 rounded-lg border border-black w-3/5 space-y-4'
      >
        <Typography
          className='text-center font-bold'
          color="#EBD3F8"
          sx={{
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
          }}
        >
          Newsify AI
        </Typography>
        <Typography
          className='text-center'
          color="#EBD3F8"
          fontSize={{lg: '1.5rem', sm: '1.0rem'}}
          lineHeight={{lg: '2rem', sm: '1rem'}}
        >
          The only news source you will ever need! Ask me whatever you want. With fresh articles and long-term knowledge, you will not find a question that can make me confused!
        </Typography>
        <Button >Fetch news</Button>
      </Stack>
  )
};

export default UpperBox;