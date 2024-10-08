import { Group, Stack, Text, ThemeIcon } from "@mantine/core";

export interface InfoCardProps {
  title: string;
  count: number;
  Icon: JSX.Element
}

const InfoCard = ({ title, count, Icon }: InfoCardProps) => {
  return (

    <Group justify="space-between" className="border-2 border-b-4 border-[#403f4f] rounded-lg p-6">
      <Stack>
        <Text>{title}</Text>
        <Text>{count}</Text>
      </Stack>
      <ThemeIcon variant="transparent" radius="lg" size="xl">
        {Icon}
      </ThemeIcon>
    </Group>

  );
};

export default InfoCard;
