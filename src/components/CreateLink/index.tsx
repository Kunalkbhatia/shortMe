"use client";
import {
  Button,
  CloseButton,
  Group,
  Modal,
  MultiSelect,
  Select,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useDisclosure, useToggle } from "@mantine/hooks";
import { IconWand } from "@tabler/icons-react";

const CreateLink = () => {
  const [opened, { open, close }] = useDisclosure();
  const [withSlug, toggleSlug] = useToggle();
  return (
    <>
      <Button bg="#9580ff" onClick={open}>
        Create new link
      </Button>
      <Modal
        centered
        opened={opened}
        onClose={close}
        size="xl"
        withCloseButton={false}
        classNames={{
          content: "px-16 py-10",
        }}
      >
        <Stack align="center" gap="xs">
          <Title fw={900}>Shorten Up and Link In!</Title>
          <Text size="md" fw={300} className="text-center text-gray-400">
            Simplify links, boost clicks and share anywhere - effortlessly track
            success with instant URL magic!
          </Text>
        </Stack>
        <Stack gap="md">
          <Group grow>
            <TextInput
              className="w-[100%]"
              placeholder="Enter your long URL"
              classNames={{
                section: "w-36",
              }}
              rightSection={
                withSlug === false ? (
                  <Button
                    variant="transparent"
                    c="gray"
                    onClick={() => toggleSlug(true)}
                  >
                    CUSTOM SLUG
                  </Button>
                ) : null
              }
            />
            {withSlug === true ? (
              <TextInput
                placeholder="Custom Slug"
                rightSection={<CloseButton onClick={() => toggleSlug(false)} />}
              />
            ) : null}
          </Group>
          <Group grow>
            <MultiSelect
              placeholder="Select Tags"
              data={["React", "Angular", "Vue", "Svelte"]}
            />
            <Select
              placeholder="Want to monitor your analytics?"
              data={["Yes", "No"]}
            />
          </Group>
          <Group>
            <Button
              variant="subtle"
              c="#9580ff"
              rightSection={
                <ThemeIcon variant="transparent" size="lg" color="9580ff">
                  <IconWand />
                </ThemeIcon>
              }
            >
              AI Slug
            </Button>
            <Button bg="#9580ff">Short me now</Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default CreateLink;
