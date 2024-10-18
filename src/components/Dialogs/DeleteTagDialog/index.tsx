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
      <DialogContent>
        <DialogHeader>Are you sure you want to delete this tag</DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button
              onClick={() => DeleteTag(tag)}
              className="text-white bg-primaryButton hover:bg-hoverButton"
            >
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTagDialog;
