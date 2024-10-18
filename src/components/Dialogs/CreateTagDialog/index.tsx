import { createTag } from "@/actions/tagActions";
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
import { Dispatch, SetStateAction } from "react";

export interface CreateTagProps {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>
}

const CreateTagDialog = ({ isOpen, close}: CreateTagProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Tag</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            const error = await createTag(formData);
            console.log(error);
          }}
          className="space-y-3"
        >
          <Input
            placeholder="Enter tag name"
            name="tagName"
            className="bg-gray-200"
          />
          <DialogFooter>
            <DialogClose>
              <Button
                type="submit"
                className="text-white bg-primaryButton hover:bg-hoverButton"
              >
                Add Tag
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

export default CreateTagDialog;
