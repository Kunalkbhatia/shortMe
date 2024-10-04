"use client"
import { Button } from '@mantine/core'
import React from 'react'

const LogoutButton = () => {
  return (
    <Button onClick={() => alert("logged out")}>Logout</Button>
  )
}

export default LogoutButton
