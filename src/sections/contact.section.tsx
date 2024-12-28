import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex h-svh w-full flex-col items-center justify-center"
    >
      {/* blured circle  */}
      <div className="absolute h-96 w-96 rounded-full bg-myYellow opacity-60 blur-[200px] 2xl:scale-150"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <h2 className="absolute top-20 text-center text-3xl font-bold text-white 2xl:top-28 2xl:scale-150">
        Contact Us
      </h2>

      <p className="absolute top-32 text-white/60 2xl:top-44 2xl:text-2xl">
        We'd love to hear from you!
      </p>

      <div className="absolute top-44 w-96 rounded-lg shadow-lg shadow-black/50  bg-gradient-to-b from-myYellow/20 to-myBottomCardGradient border-myYellow p-6 2xl:scale-150 2xl:top-96">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white/90">Name</Label>
            <Input
              className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white/90">Email</Label>
            <Input
              type="email"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white/90">Message</Label>
            <Textarea
              className="min-h-[120px] border-white/20 bg-white/10 text-white placeholder:text-white/50"
              placeholder="Your message here..."
            />
          </div>

          <Button
            className="w-full transition-all  hover:bg-myYellow bg-myYellow/80 text-myBg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};


