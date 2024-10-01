import { Avatar, Group, Text } from "@mantine/core";

const Header = () => {
  return (
    <Group justify="space-around" className="px-10 pt-4">
      <Text className="text-4xl">Short Me</Text>
        <Avatar radius="xl" />
    </Group>
  );
};

export default Header;
