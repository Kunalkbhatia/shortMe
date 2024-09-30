"use client";
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFolder, IconFolderPlus } from "@tabler/icons-react";

const CreateFolder = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ActionIcon size="lg" bg="#9580ff" onClick={open}>
        <IconFolderPlus />
      </ActionIcon>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title={
          <Group>
            <ThemeIcon variant="transparent" c="black">
              <IconFolder />
            </ThemeIcon>
            <Text size="lg">Create Folder</Text>
          </Group>
        }
      >
        <Stack gap="md">
          <TextInput label="Folder Name" placeholder="Enter Folder Name" />
          <Group justify="flex-end">
            <Button bg="#9580ff" c="white" variant="default">
              Save Folder
            </Button>
            <Button variant="default" onClick={close}>
              Cancel
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default CreateFolder;
