"use client";
import { loginUser } from '@/actions/loginUser'
import { handleError } from '@/lib/error'
import { Center, Stack, TextInput, PasswordInput, Button, Divider, ThemeIcon, Group, Text } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <Center className="h-screen">
      <Stack gap="lg" className="w-[30%]">
        <Text className="text-center text-3xl">ShortMe</Text>
        <form action={async(formData) => {
          const error = await loginUser(formData);
          if(error){
            handleError(error)
          }
        }}>
          <TextInput
            label="Email"
            variant="unstyled"  
            name="email"
            withAsterisk
            placeholder="projectmayhem@fc.com"
            radius="md"
            classNames={{
              input: "border-2 border-b-4 border-[#403f4f] bg-[#2d2c3a] p-2",
            }}
          />
          <PasswordInput
            label="Password"
            variant="default"
            name="password"
            placeholder="************"
            radius="md"
            classNames={{
              input: "border-2 border-b-4 border-[#403f4f] bg-[#2d2c3a] p-2",
            }}
          />
          <Button type="submit" fullWidth className="bg-secondary mt-4 hover:bg-[#2d2c3a]">Login</Button>
        </form>
        <Divider my="xs" size="lg" label="or" labelPosition="center" classNames={{
          label: "text-xl"
        }} />
        <Button
          bg="transparent"
          radius="md"
          size="lg"
          leftSection={
            <ThemeIcon variant="transparent">
              <IconBrandGoogle className='text-secondary' />
            </ThemeIcon>
          }
          className="border-2 border-b-4 border-[#403f4f]"
        >
          <Text>Continue with google</Text>
        </Button>
        <Group justify="center">
          <Text>Don&apos;t have an account?</Text>
          <Link href="/sign-up" className="font-bold hover:underline">Sign Up</Link>
        </Group>
      </Stack>
    </Center>
  )
}

export default Login
