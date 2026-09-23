"use client";
import { useRouter } from "next/navigation";
import { deleteUser} from "@/lib/actions";
import {AlertDialog, Button} from "@heroui/react";
import { MdDelete } from "react-icons/md";
export function DeleteBtn({el}) {
    const router = useRouter();

    const handleDlt = async(id)=>{
         await deleteUser(id);
         window.location.reload();
    }
  return (
    <AlertDialog>
      <Button variant="danger"> <MdDelete/> Remove User</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong> {el.name} </strong> and all of their account data. This action cannot be undone
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>{handleDlt(el._id)}} slot="close" variant="danger">
                Remove User
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}