
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground leading-tight">
                Let's Transform Your <span className="text-primary italic">Operations</span> Together
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with the OPSIX team for a personalized demonstration of Magic Contact 
                and see how our intelligent automation can scale your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-muted-foreground">contact@opsix.solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold">Global Presence</h4>
                  <p className="text-muted-foreground">San Francisco | Mexico City | Madrid</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-none">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-secondary/20 border-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@company.com" required className="bg-secondary/20 border-none h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Company Name</label>
                  <Input placeholder="Company Inc." className="bg-secondary/20 border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Tell us about your needs</label>
                  <Textarea placeholder="How can we help your operational processes?" className="bg-secondary/20 border-none min-h-[150px] resize-none" />
                </div>
                <Button className="w-full h-14 font-bold text-lg gap-2" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  Request a Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
