import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Game from './Game'

const Home: NextPage = () => {
  return (
    <div>
      <Game />
    </div>
  )
}

export default Home
