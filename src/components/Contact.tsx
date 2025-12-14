// import { SiGmail, SiWhatsapp } from "react-icons/si"
import { FiSend } from "react-icons/fi";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button"
import { toast } from "sonner"
import { Toaster } from "../components/ui/sonner"
function Contact() {
  return (
    <div className="text-white w-[40%] justify-center ContactMain max-[950px]:w-[80%] max-[750px]:w-[100%] border flex flex-col gap-4 items-center  p-6 border-amber-50 rounded-lg">
      <p className="font-bold text-xl text-[#828282]">
        Hey, you scrolled this far, let’s talk.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <button className=" mt-2.5 Talk h-9 font-bold flex items-center w-44 justify-center bg-[#2f2f2f]">
            <div className="TalkText flex gap-3 items-center justify-center ml-6.5 ">
              <h1></h1>
              <FiSend className="icon font-bold " />
            </div>
          </button>
        </DialogTrigger>
        <DialogOverlay className="fixed  bg-black/40 backdrop-blur-md inset-0" />
        <DialogContent className=" text-white bg-[#0a0a0a] rounded-2xl">
          <DialogHeader className=" text-white">

            <DialogTitle className=" text-white text-xl ">Start a Conversation</DialogTitle>
            <DialogDescription className=" text-white">
              Have a project in mind, a problem to solve, or an opportunity to discuss? I’m always open to meaningful conversations.
            </DialogDescription>

          </DialogHeader>
          <div className="">
            <Label htmlFor="Subject" className="text-xl py-1.5 font-bold">Subject:</Label>
            <Input className="font-bold " placeholder="What’s this about?" id="Subject" />
            <Label htmlFor="Msg" className="text-xl py-1.5 font-bold">Message:</Label>
            <Textarea placeholder="Type your message here." className="h-33 font-bold" id="Msg" />
          </div>
          <DialogFooter>
            <Button onClick={() => {
              toast("Message Sent Successfully", {
                icon: <CheckCircle className="text-green-500" />,
              })
            }} className="bg-[#e5e5e5] text-black"><SiGmail className="text-[#dc4e42]" /> Email</Button>
            <Button
              onClick={() => {
                toast("Message Sent Successfully", {
                  icon: <CheckCircle className="text-green-500" />,
                })
              }}
              className="bg-[#e5e5e5] text-black" ><SiWhatsapp className="text-[#25d366]" /> Whatsapp</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="font-semibold  text-sm flex flex-col relative bottom-0 top-10 items-center mb-3 " >
        <p className="text-[#828282]">Email: Shahzadekhan296@gmail.com</p>
        <p className="text-[#828282]">Whatsapp: 9709379515</p>
      </div>
      <Toaster />

    </div>
  )
}

export default Contact
