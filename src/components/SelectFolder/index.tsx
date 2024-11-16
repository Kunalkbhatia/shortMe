import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

const SelectOrder = () => {
  return (
    <Select>
      <SelectTrigger className="text-md">
        <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4"/>
        <SelectValue placeholder="Ordering"/>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light" >Date Added</SelectItem>
        <SelectItem value="dark">Number of Clicks</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectOrder;
