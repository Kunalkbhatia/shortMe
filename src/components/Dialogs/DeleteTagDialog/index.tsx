import { Tag } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { DeleteTag } from "@/actions/tagActions";

export interface DeleteTagProps {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  tag: Tag;
}

const DeleteTagDialog = ({ isOpen, close, tag }: DeleteTagProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-[350px] md:max-w-[425px] rounded-sm">
        <DialogHeader>
          <div className="flex justify-start items-center gap-1">
          <div>Are you sure you want to delete</div>
          <div className="w-fit px-2 bg-primaryButton text-white rounded-lg">{tag.name}</div>
          </div>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-end gap-2">
          <DialogClose>
            <Button
              onClick={() => DeleteTag(tag)}
              className="text-white bg-primaryButton hover:bg-hoverButton outline-none"
            >
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button type="button" variant="destructive">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTagDialog;
