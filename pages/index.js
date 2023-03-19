import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Paper } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    axios.get("data/manifest.json").then((response) => console.log(response.data))
  }, [])
  
  return (
    <>
    <Paper elevation={0} sx={{}}  className="roundness" > 

      Harshit

    </Paper>
    </>
  )
}
