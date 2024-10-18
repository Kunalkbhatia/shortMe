import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectFolder = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-gray-200">
        <SelectValue placeholder="Folders" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Folder 1</SelectItem>
        <SelectItem value="dark">Folder 2</SelectItem>
        <SelectItem value="system">Folder 3</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectFolder;
