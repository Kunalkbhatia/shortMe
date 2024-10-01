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
import { useState } from "react";

const CreateLink = () => {
  const [opened, { open, close }] = useDisclosure();
  const [withSlug, toggleSlug] = useToggle();
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [tags, setTags] = useState([]);
  const [analytics, setAnalytics] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      longUrl,
      customSlug: withSlug ? customSlug : null,
      tags,
      analytics,
    };
    console.log("Form Data: ", formData);
    // Submit form logic here
  };

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
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <Group grow>
              <TextInput
                className="w-[100%]"
                placeholder="Enter your long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.currentTarget.value)}
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
                required
              />
              {withSlug === true ? (
                <TextInput
                  placeholder="Custom Slug"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.currentTarget.value)}
                  rightSection={
                    <CloseButton onClick={() => toggleSlug(false)} />
                  }
                />
              ) : null}
            </Group>
            <Group grow>
              <MultiSelect
                placeholder="Select Tags"
                data={["React", "Angular", "Vue", "Svelte"]}
                value={tags}
                onChange={setTags}
              />
              <Select
                placeholder="Want to monitor your analytics?"
                data={["Yes", "No"]}
                value={analytics}
                onChange={setAnalytics}
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
              <Button type="submit" bg="#9580ff">
                Short me now
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};

export default CreateLink;
