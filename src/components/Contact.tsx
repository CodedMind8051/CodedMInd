import { SiGmail,SiWhatsapp  } from "react-icons/si"

function Contact() {
  return (
    <div className="text-white w-[40%] max-[950px]:w-[80%] border flex flex-col gap-4 items-center justify-center p-6 border-amber-50 rounded-lg">
      <p className="font-bold text-sm text-[#828282]">
        Hey, you scrolled this far, let’s talk.
      </p>

      <div className="flex gap-4 mt-2">

        {/* WhatsApp */}
        <a
          href="https://wa.me/919709379515?text=Hello%20I%20need%20help
"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-black px-4 py-2 rounded-md font-medium hover:scale-105 transition"
        >
          <SiWhatsapp className="text-black" />
          WhatsApp
        </a>

        {/* Email */}
        <a
          href="mailto:shahzadekhan296@gmail.com"
          className="flex items-center gap-2 bg-[#1e1e1e] text-white px-4 py-2 rounded-md border border-gray-600 font-medium hover:scale-105 transition"
        >
          <SiGmail />
          Email
        </a>

      </div>
    </div>
  )
}

export default Contact
