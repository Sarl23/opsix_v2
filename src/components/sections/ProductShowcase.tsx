
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Zap, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "motion/react";

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const dashboardImg = PlaceHolderImages.find(img => img.id === "magic-contact-dashboard");

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Advisor Management",
      desc: "Connect and monitor human advisors with ease."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Massive Campaigns",
      desc: "Broadcast messages to thousands of clients instantly."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Responses",
      desc: "Context-aware AI handles repetitive inquiries."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Operations",
      desc: "Role-based access and secure data handling."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white" id="product">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-accent text-accent-foreground rounded-full px-4 animate-in fade-in duration-700">Flagship Product</Badge>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary animate-in fade-in slide-in-from-bottom duration-700 delay-100">Magic Contact</h2>
          <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            An intelligent WhatsApp operations platform that centralizes advisor management, mass messaging, and AI-powered conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            style={{ y, scale }}
            className="lg:col-span-7 relative group animate-in fade-in slide-in-from-left duration-1000 delay-300"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={dashboardImg?.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"}
                alt="Magic Contact Dashboard"
                width={1000}
                height={600}
                className="w-full h-auto"
                data-ai-hint="dashboard interface"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className={`border-none shadow-none bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 animate-in fade-in slide-in-from-right duration-700 delay-${(idx + 4) * 100}`}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary transition-transform group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
