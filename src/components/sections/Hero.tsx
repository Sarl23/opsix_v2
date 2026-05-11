
"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroImage = PlaceHolderImages.find(img => img.id === "hero-tech");

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden" id="about">
      {/* Decorative Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-accent rounded-full translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 opacity-10 blur-3xl bg-primary rounded-full -translate-x-1/2 translate-y-1/2" 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity }} className="space-y-8">
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium animate-in fade-in slide-in-from-top duration-700">
              Operational Process Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-[1.1] text-foreground animate-in fade-in slide-in-from-left duration-700 delay-100">
              Intelligent <span className="text-primary italic">eXcellence</span> in Automation.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200">
              OPSIX transforms business operations through AI agents, data-driven workflows, and cross-platform solutions. 
              <span className="block mt-4 font-semibold text-primary">Automation, intelligence, and operational excellence.</span>
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Button size="lg" className="rounded-full gap-2 px-8 shadow-lg hover:shadow-primary/40 transition-all hover:scale-105">
                Explore Magic Contact <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2 hover:bg-secondary/50">
                <Play className="w-4 h-4 fill-current" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 grayscale opacity-60 animate-in fade-in duration-1000 delay-700">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trusted by leaders:</span>
              <div className="flex gap-4 font-headline text-lg font-bold">
                <span>TECHCORP</span>
                <span>DATASTREAM</span>
                <span>FLOWSTATE</span>
              </div>
            </div>
          </motion.div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white animate-float">
              <Image
                src={heroImage?.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"}
                alt={heroImage?.description || "Hero"}
                width={600}
                height={500}
                className="object-cover"
                data-ai-hint="technology automation"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-[200px] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-1000">
              <div className="text-3xl font-bold text-primary font-headline">99.9%</div>
              <p className="text-xs text-muted-foreground font-medium">Uptime for intelligent operations and AI responses.</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-xl shadow-xl border border-white/20 animate-in slide-in-from-top-10 fade-in duration-1000 delay-1200">
              <div className="flex items-center gap-2 text-white font-bold">
                <ChevronRight className="w-5 h-5" />
                <span>Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
