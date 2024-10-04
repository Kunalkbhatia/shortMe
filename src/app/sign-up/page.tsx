"use client";
import { createUser } from "@/actions/createUser";
import {
  Button,
  Center,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignIn = () => {
  const handleError = (error: string) => {
    console.log(error);
    notifications.show({
      message: error,
      position: "top-center",
    });
  };

  return (
    <Center className="h-screen">
      <Stack gap="lg" className="w-[30%]">
        <Text className="text-center text-3xl">ShortMe</Text>
        <form
          action={async (formData) => {
            const error = await createUser(formData);
            if (error) {
              handleError(error);
            } else redirect("/login");
          }}
        >
          {/* TODO: disable style change when autocomplete */}
          <TextInput
            variant="unstyled"
            label="Username"
            name="username"
            withAsterisk
            placeholder="durdenTylor"
            radius="md"
            classNames={{
              input: "border-2 border-b-4 border-[#403f4f] bg-[#2d2c3a] p-2",
            }}
          />
          <TextInput
            label="Email"
            name="email"
            variant="unstyled"
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
          <Button
            type="submit"
            fullWidth
            className="bg-secondary mt-4 hover:bg-[#2d2c3a]"
          >
            Sign Up
          </Button>
        </form>
        <Divider
          my="xs"
          size="lg"
          label="or"
          labelPosition="center"
          classNames={{
            label: "text-xl",
          }}
        />
        <Button
          bg="transparent"
          radius="md"
          size="lg"
          leftSection={
            <ThemeIcon variant="transparent">
              <IconBrandGoogle />
            </ThemeIcon>
          }
          className="border-2 border-b-4 border-[#403f4f]"
        >
          <Text>Continue with google</Text>
        </Button>
        <Group justify="center">
          <Text>Already have an account?</Text>
          <Link href="/login" className="font-bold hover:underline">
            Login
          </Link>
        </Group>
      </Stack>
    </Center>
  );
};

export default SignIn;
