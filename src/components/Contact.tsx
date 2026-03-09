import { motion } from 'framer-motion';
import { FiSend, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { CheckCircle, Loader2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";
// @ts-ignore
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

export default function Contact({ Btn }: { Btn: any }) {
  const btnTriggerRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    btnTriggerRef.current?.click();
  }, [Btn]);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_KEY;
    const pubKey = import.meta.env.VITE_EMAIL_PUBKEY;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, {
        publicKey: pubKey,
      });
      toast.success("Message Sent Successfully", {
        icon: <CheckCircle className="text-green-500" />,
      });
      formRef.current?.reset();
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full px-4 py-20 flex justify-center items-center">
      <Toaster position="top-center" />

      {/* Main Card: Responsive width from 100% to max-w-2xl */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-2xl bg-[#0d0d0f] border border-white/10 p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
      >
        {/* Background Decorative Blur */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="space-y-2.5 sm:space-y-3">
            {/* Slim Professional Heading - Responsive */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Ready to{" "}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                  Collaborate?
                </span>
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-cyan-400/15 blur-lg -z-10" />
              </span>
            </h2>

            {/* Slim Professional Description */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm sm:max-w-md mx-auto">
              Have a project in mind or just want to connect?
              <span className="text-zinc-300"> Let's talk.</span>
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                ref={btnTriggerRef}
                className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold transition-all hover:bg-cyan-400 active:scale-95 shadow-lg shadow-white/5"
              >
                <span>Initiate Chat</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </DialogTrigger>

            {/* Dialog: Adjusted for mobile visibility and scrolling */}
            <DialogContent className="bg-[#0a0a0b] border-white/10 text-white w-[95vw] max-w-lg rounded-3xl p-0 overflow-hidden">
              <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8 no-scrollbar">
                <DialogHeader className="mb-6 text-left">
                  <DialogTitle className="text-2xl font-bold">New Message</DialogTitle>
                  <DialogDescription className="text-zinc-500">
                    I typically respond within a few hours.
                  </DialogDescription>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Address</Label>
                      <Input
                        required
                        name="SenderEmail"
                        className="bg-zinc-900/50 border-white/5 h-12 rounded-xl focus:ring-1 ring-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Subject</Label>
                      <Input
                        required
                        name="Subject"
                        className="bg-zinc-900/50 border-white/5 h-12 rounded-xl focus:ring-1 ring-cyan-500"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</Label>
                      <Textarea
                        required
                        name="message"
                        className="bg-zinc-900/50 border-white/5 min-h-[120px] rounded-xl focus:ring-1 ring-cyan-500 resize-none"
                        placeholder="How can I help you?"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      disabled={isSending}
                      type="submit"
                      className="flex-1 bg-white text-black hover:bg-cyan-400 h-12 rounded-xl font-bold"
                    >
                      {isSending ? <Loader2 className="animate-spin" /> : "Send Email"}
                    </Button>
                  </div>
                </form>
              </div>
            </DialogContent>
          </Dialog>

          {/* Footer Info: Stacks on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-zinc-500 text-xs md:text-sm pt-4">
            <div className="flex items-center gap-2">
              <FiMail className="text-cyan-500" />
              <span>Shahzadekhan296@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <SiWhatsapp className="text-[#25D366]" />
              <span>+91 9709379515</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}