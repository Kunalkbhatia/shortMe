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
import { shortURL, shortURLBySlug } from "@/actions/urlActions";
import { Link2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export interface CreateURLProps {
  tags: Tag[];
}

const CreateURL = ({ tags }: CreateURLProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [monitoring, setMonitoring] = useState<boolean>(true);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-primaryButton hover:bg-hoverButton p-1 rounded-sm text-white text-center md:p-2">
          <div className="hidden md:block">Create a Link</div>
          <Link2 className="md:hidden w-5" />
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
        <form
          action={async (formData: FormData) => {
            const name = formData.get("name") as string | undefined;
            const longURL = formData.get("longURL") as string | undefined;
            const slug = formData.get("slug") as string | undefined;

            if (name === undefined || name.length === 0)
              return alert("Please Enter a Name");
            // Check if longURL is undefined or an empty string
            if (longURL === undefined || longURL.length === 0) {
              return alert("Please Enter Long URL");
            }

            if (typeof slug === "string" && slug.length > 0) {
              const error = await shortURLBySlug(formData, selectedTags, monitoring);
              if (error) alert(error);
            } else {
              const error = await shortURL(formData, selectedTags, monitoring);
              if (error) alert(error);
            }
          }}
        >
          <div className="space-y-4">
            <Input
              placeholder="Enter a Name"
              name="name"
              className="col-span-2 bg-gray-200 focus-within:outline-none"
            />
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
            <div className="grid grid-cols-2 gap-4">
              <SelectTags
                tags={tags}
                selectedTags={selectedTags}
                onTagChange={setSelectedTags}
              />
              <Select onValueChange={(value) => {
                setMonitoring(JSON.parse(value));
              }}>
                <SelectTrigger className="bg-gray-200 ">
                  <SelectValue placeholder="Want to monitor your URL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes (recommended)</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            <Button
              type="submit"
              className="bg-primaryButton hover:bg-hoverButton"
            >
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
