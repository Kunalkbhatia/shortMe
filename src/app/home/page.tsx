import CreateFolder from "@/components/CreateFolder";
import CreateLink from "@/components/CreateLink";
import InfoCard from "@/components/InfoCard";
import SelectFolder from "@/components/SelectFolder";
import SortBy from "@/components/SortBy";
import URL from "@/components/URL";
import VideoTile from "@/components/VideoTile";
import { Group, Stack, TextInput, ThemeIcon } from "@mantine/core";
import { IconHandClick, IconLink, IconSearch } from "@tabler/icons-react";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 p-10">
        <VideoTile />
        <div className="grid grid-flow-col gap-5">
          <InfoCard
            title="Total Links Created"
            count={1}
            Icon={<IconLink className="w-[70%] h-[70%]" />}
          />
          <InfoCard
            title="Total clicks"
            count={1}
            Icon={<IconHandClick className="w-[70%] h-[70%]" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 px-10">
        <TextInput
          placeholder="Search bu long URL"
          variant="filled"
          leftSection={
            <ThemeIcon variant="transparent" color="gray">
              <IconSearch/>
            </ThemeIcon>
          }
          className="w-[60%] font-bold"
        />
        <Group justify="flex-end">
          <CreateFolder />
          <SelectFolder />
          <SortBy />
          <CreateLink />
        </Group>
      </div>

      <Stack className="pt-5 px-36 gap-3">
        <URL />
        <URL />
        <URL />
        <URL />
      </Stack>
    </>
  );
};

export default page;
