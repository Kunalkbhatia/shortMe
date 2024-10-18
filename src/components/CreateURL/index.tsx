"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SelectTags } from "../SelectTags";
import { Tag } from "@prisma/client";

export interface CreateURLProps {
  tags: Tag[];
}

const CreateURL = ({ tags }: CreateURLProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-primaryButton hover:bg-hoverButton p-2 rounded-sm text-white">
          Create new Link
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">
            Shorten Up and Link In!
          </DialogTitle>
          <DialogDescription className="text-center">
            Simplify links, boost clicks and share anywhere - effortlessly track
            success with instant URL magic!
          </DialogDescription>
        </DialogHeader>
        <form action={async(formData: FormData) => {
          const error = await shortUrl(formData, selectedTags);
        }}>
          <div className="space-y-4">
            <Input
              placeholder="Enter your Long URL"
              name="longURL"
              className="col-span-2 bg-gray-200 focus-within:outline-none"
            />

            <div className="grid grid-cols-3 gap-2">
              <Input
                placeholder="Custom Slug"
                name="slug"
                className="col-span-2 bg-gray-200 focus-within:outline-none"
              />
              <Button className="col-span-1 bg-primaryButton hover:bg-hoverButton">
                AI Slug
              </Button>
            </div>
            <div>
              <SelectTags
                tags={tags}
                selectedTags={selectedTags}
                onTagChange={setSelectedTags}
              />
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            <Button type="submit" className="bg-primaryButton hover:bg-hoverButton">
              Short me
            </Button>
            <Button variant="destructive">Cancel</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateURL;
