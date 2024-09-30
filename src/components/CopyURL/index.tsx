"use client"
import { CopyButton, Tooltip, ActionIcon, rem } from '@mantine/core'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import React from 'react'

const CopyURL = () => {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
    {({ copied, copy }) => (
      <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
          {copied ? (
            <IconCheck style={{ width: rem(16) }} />
          ) : (
            <IconCopy style={{ width: rem(16) }} />
          )}
        </ActionIcon>
      </Tooltip>
    )}
  </CopyButton>
  )
}

export default CopyURL

