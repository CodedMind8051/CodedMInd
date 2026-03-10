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
    <section className="w-full px-4 py-16 sm:py-20 flex justify-center items-center bg-[#050505]">
      <Toaster position="top-center" />

      {/* Premium Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
      >
        {/* Subtle Background Gradient */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neutral-700/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8">
          <div className="space-y-2 sm:space-y-3">
            {/* Premium Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              <span className="text-neutral-100">
                Ready to{" "}
              </span>
              <span className="relative inline-block">
                <span className="text-neutral-100">
                  Collaborate?
                </span>
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-neutral-400/10 blur-xl -z-10" />
              </span>
            </h2>

            {/* Premium Description */}
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm sm:max-w-md mx-auto font-light">
              Have a project in mind or just want to connect?
              <span className="text-neutral-300"> Let's talk.</span>
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                ref={btnTriggerRef}
                className="group relative flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-neutral-100 text-neutral-900 rounded-xl font-medium transition-all hover:bg-neutral-200 active:scale-95 shadow-lg"
              >
                <span className="text-sm sm:text-base">Initiate Chat</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm sm:text-base" />
              </button>
            </DialogTrigger>

            {/* Premium Dialog */}
            <DialogContent className="bg-neutral-900 border-neutral-800/50 text-white w-[95vw] max-w-lg rounded-2xl p-0 overflow-hidden">
              <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8 no-scrollbar">
                <DialogHeader className="mb-6 text-left">
                  <DialogTitle className="text-xl sm:text-2xl font-semibold text-neutral-100">New Message</DialogTitle>
                  <DialogDescription className="text-neutral-400 text-sm">
                    I typically respond within a few hours.
                  </DialogDescription>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Email Address</Label>
                      <Input
                        required
                        name="SenderEmail"
                        className="bg-neutral-800/50 border-neutral-700/50 h-11 sm:h-12 rounded-xl focus:ring-1 ring-neutral-600 text-neutral-100"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Subject</Label>
                      <Input
                        required
                        name="Subject"
                        className="bg-neutral-800/50 border-neutral-700/50 h-11 sm:h-12 rounded-xl focus:ring-1 ring-neutral-600 text-neutral-100"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Message</Label>
                      <Textarea
                        required
                        name="message"
                        className="bg-neutral-800/50 border-neutral-700/50 min-h-[120px] rounded-xl focus:ring-1 ring-neutral-600 resize-none text-neutral-100"
                        placeholder="How can I help you?"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      disabled={isSending}
                      type="submit"
                      className="flex-1 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 h-11 sm:h-12 rounded-xl font-medium transition-all"
                    >
                      {isSending ? <Loader2 className="animate-spin" /> : "Send Email"}
                    </Button>
                  </div>
                </form>
              </div>
            </DialogContent>
          </Dialog>

          {/* Premium Footer Info */}
          <div className="flex flex-col sm:flex-row  justify-center items-center gap-3 sm:gap-8 text-neutral-500 text-xs sm:text-sm pt-4 border-t border-neutral-800/30 w-full">
            <div className="flex items-center gap-2">
              <FiMail className="text-neutral-400" />
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