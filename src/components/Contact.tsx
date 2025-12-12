// import { SiGmail, SiWhatsapp } from "react-icons/si"
import { FiSend } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"

function Contact() {
  return (
    <div className="text-white w-[40%] justify-center ContactMain max-[950px]:w-[80%] border flex flex-col gap-4 items-center  p-6 border-amber-50 rounded-lg">
      <p className="font-bold text-xl text-[#828282]">
        Hey, you scrolled this far, let’s talk.
      </p>


      <Dialog>
        <DialogTrigger asChild>
          <button className=" Talk h-9 font-bold flex items-center w-44 justify-center bg-[#2f2f2f]">
            <div className="TalkText flex gap-3 items-center justify-center ml-6.5 ">
              <h1></h1>
              <FiSend className="icon font-bold " />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


    </div>
  )
}

export default Contact
