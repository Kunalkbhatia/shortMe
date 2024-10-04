import { Group, Text } from "@mantine/core";
import Link from "next/link";
import   LogoutButton from "../Logout";

const Header = () => {
  return (
    <Group justify="space-around" className="px-10 pt-4">
      <Text className="text-4xl">Short Me</Text>
        <Link href="sign-up">Sign In</Link>
        <LogoutButton/>
    </Group>
  );
};

export default Header;
