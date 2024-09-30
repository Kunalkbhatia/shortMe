"use client";
import {
  ActionIcon,
  Anchor,
  Avatar,
  darken,
  Divider,
  Group,
  lighten,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChartBar,
  IconDotsVertical,
  IconQrcode,
} from "@tabler/icons-react";
import CopyURL from "../CopyURL";

const URL = () => {
  return (
    <Group justify="space-between" className="border-2 border-b-4 border-[#403f4f] rounded-lg" >
      <Group>
        <Avatar radius="xl" />
          <Stack gap="xs">
            <Group>
              <Text>https://cme.sh/kbkb</Text>
              <CopyURL />
            </Group>
            <Anchor href="https://mantine.dev/" target="_blank">
              https://www.youtube.com/watch?v=qz4SVagPStg
            </Anchor>
          </Stack>
      </Group>

      <Group>
        <Group
          bg={lighten("#9580ff", 0.5)}
          className="py-1 px-3 gap-2 rounded-lg"
        >
          <Text c={darken("#9580ff", 0.5)}>2</Text>
          <ActionIcon
            size="sm"
            variant="transparent"
            color={darken("#9580ff", 0.5)}
          >
            <IconChartBar />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" />
        <ActionIcon variant="transparent" color={darken("#9580ff", 0.5)}>
          <IconQrcode />
        </ActionIcon>
        <Menu>
          <Menu.Target>
            <ActionIcon variant="transparent" color={darken("#9580ff", 0.5)}>
              <IconDotsVertical />
            </ActionIcon>
          </Menu.Target>
        </Menu>
      </Group>
    </Group>
  );
};

export default URL;
