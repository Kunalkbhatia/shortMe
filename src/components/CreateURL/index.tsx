"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Tag } from "@prisma/client";
import { DialogClose } from "@radix-ui/react-dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import CreateURLForm from "../Forms/URL";

export interface CreateURLProps {
  tags: Tag[];
}

const CreateURL = ({ tags }: CreateURLProps) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  if (isMobile === false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="bg-primaryButton hover:bg-hoverButton p-2 rounded-sm text-white text-center">
            Create a Link
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-3xl">
              Shorten Up and Link In!
            </DialogTitle>
            <DialogDescription className="text-center">
              Simplify links, boost clicks and share anywhere - effortlessly
              track success with instant URL magic!
            </DialogDescription>
          </DialogHeader>
          <CreateURLForm tags={tags} setOpen={setOpen} />
          <DialogFooter>
            <DialogClose>
              <Button type="button" variant="destructive">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
      <div className="bg-primaryButton hover:bg-hoverButton p-2 rounded-sm text-white text-center">
            Create a Link
          </div>
      </DrawerTrigger>
      <DrawerContent className="p-5">
        <DrawerHeader className="text-center text-3xl">
          <DrawerTitle>Shorten Up and Link In!</DrawerTitle>
          <DrawerDescription className="text-center">
          Simplify links, boost clicks and share anywhere - effortlessly
          track success with instant URL magic!
          </DrawerDescription>
        </DrawerHeader>
        <CreateURLForm tags={tags} setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
          <Button type="button" variant="destructive">
                Cancel
              </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
};

export default CreateURL;
