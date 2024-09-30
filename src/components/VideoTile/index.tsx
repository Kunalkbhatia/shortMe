import { Button, Text, ThemeIcon } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import React from 'react'

const   VideoTile = () => {
  return (
    <div className="col-span-1 flex justify-around items-center rounded-lg bg-gradient-to-r from-[#292929] to-secondary">
          <Text c="white" size="md" component="span" >
            Begin Your CutMe Short Experience! Elevate Your URLs effortlessly
          </Text>
          <Button
            bg="white"
            c="black"
            leftSection={
              <ThemeIcon bg="#9580ff" size="xs">
                <IconPlus />
              </ThemeIcon>
            }
          >
            Watch Demo
          </Button>
        </div>
  )
}

export default VideoTile
