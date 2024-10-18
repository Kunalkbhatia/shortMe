
import { Tag } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { updateTag } from "@/actions/tagActions";

export interface EditTagProps {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  tag: Tag;
}

const EditTagDialog = ({ isOpen, close, tag }: EditTagProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit the tag</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-2"
          action={async (formData: FormData) => {
            await updateTag(formData, tag);
          }}
        >
          <Input
            defaultValue={tag.name}
            name="tagName"
            className="bg-gray-200"
          />
          <DialogFooter>
            <DialogClose>
              <Button
                type="submit"
                className="text-white bg-primaryButton hover:bg-hoverButton"
              >
                Update
              </Button>
            </DialogClose>
            <DialogClose>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTagDialog;
