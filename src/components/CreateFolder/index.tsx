import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FolderPlus } from "lucide-react";
import { Button } from "../ui/button";

const CreateFolder = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-1 rounded-sm text-primaryButton hover:text-hoverButton" >
          <FolderPlus/>
        </div>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Create Folder</DialogTitle>
          <DialogDescription>
            Create a new folder to organize your URL efficiently
          </DialogDescription>
        </DialogHeader>
            <Input
              placeholder="Create your folder"
              className="bg-gray-200"
            />
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" className="bg-primaryButton hover:bg-hoverButton">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFolder;
