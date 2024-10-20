"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tag } from "@prisma/client";
import { Edit, Tag as Tagicon, Trash } from "lucide-react";
import { useState } from "react";
import CreateTagDialog from "../Dialogs/CreateTagDialog";
import DeleteTagDialog from "../Dialogs/DeleteTagDialog";
import EditTagDialog from "../Dialogs/EditTagDialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function ManageTags({ tags }: { tags: Tag[] }) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isCreateTagOpen, setIsCreateTagOpen] = useState<boolean>(false);
  const [isEditTagOpen, setIsEditTagOpen] = useState<boolean>(false);
  const [isDeleteTagOpen, setIsDeleteTagOpen] = useState<boolean>(false);
  const [tagToEdit, setTagToEdit] = useState<Tag>();

  const handleTagchange = (tag: Tag) => {
    const selected = selectedTags.some((ele) => ele.id === tag.id);
    if (selected) {
      setSelectedTags((prev) => {
        return prev.filter((ele) => ele.id !== tag.id);
      });
    } else {
      setSelectedTags((prev) => {
        return [...prev, tag];
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className="bg-primaryButton hover:bg-hoverButton p-1 rounded-sm text-white text-center md:p-2">
          <div className="hidden md:block">Manage Tags</div>
          <Tagicon className="md:hidden w-5"/>
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Search Tags"
              className="focus-within:outline-none bg-gray-200"
            />
            <Button
              onClick={() => setIsCreateTagOpen(true)}
              className="text-white bg-primaryButton hover:bg-hoverButton"
            >
              Create new tag
            </Button>
          </div>
          <DropdownMenuSeparator />
          {tags.map((tag) => (
            <DropdownMenuCheckboxItem
              key={tag.id}
              className="flex justify-between"
              checked={selectedTags.some((ele) => ele.id === tag.id)}
              onCheckedChange={() => {
                handleTagchange(tag);
              }}
            >
              <div>{tag.name}</div>
              <div className="flex gap-2">
                <Edit
                  className="h-4 w-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsEditTagOpen(true);
                    setTagToEdit(tag);
                  }}
                />
                <Trash
                  className="h-4 w-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsDeleteTagOpen(true);
                    setTagToEdit(tag);
                  }}
                />
              </div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <CreateTagDialog isOpen={isCreateTagOpen} close={setIsCreateTagOpen} />
      {tagToEdit ? (
        <EditTagDialog
          isOpen={isEditTagOpen}
          close={setIsEditTagOpen}
          tag={tagToEdit}
        />
      ) : null}

      {tagToEdit ? (
        <DeleteTagDialog
          isOpen={isDeleteTagOpen}
          close={setIsDeleteTagOpen}
          tag={tagToEdit}
        />
      ) : null}
    </>
  );
}
