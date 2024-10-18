"use client";

import { Check, Tags } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Tag } from "@prisma/client";

export interface SelectTagsProps {
  tags: Tag[];
  selectedTags: Tag[];
  onTagChange: React.Dispatch<React.SetStateAction<Tag[]>>
}

export function SelectTags({tags, selectedTags, onTagChange}: SelectTagsProps) {
  const [open, setOpen] = useState(false);

  const handleTagchange = (tag: string) => {
    const checkedTag = tags.find((ele) => ele.name === tag);
    const selected = selectedTags.some((ele) => ele.name === checkedTag?.name);
    if (selected) {
      onTagChange((prev) => {
        return prev.filter((ele) => ele.name !== tag);
      });
    } else {
      if(checkedTag){
        onTagChange((prev) => {
          return [...prev, checkedTag];
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="text-white bg-primaryButton hover:bg-hoverButton"
        >
          Select Tags
          <Tags className="ml-2 h-4 w-4 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag.id}
                  value={tag.name}
                  onSelect={(currentValue) => {
                    console.log(currentValue);
                    handleTagchange(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedTags.some((ele) => ele.name === tag.name)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {tag.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <div className="flex flex-wrap gap-2">
        {
            selectedTags.map((tag) => (
                <Badge key={tag.id} className="w-fit px-5">{tag.name}</Badge>
            ))
        }
    </div>
    </div>
  );
}
