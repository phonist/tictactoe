import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Game from './Game'
import { Box, Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container maxWidth='sm'>
      <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <Game />
      </Box>
    </Container>
  )
}

export default Home
