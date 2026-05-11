
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  Users, 
  Lock, 
  QrCode, 
  LayoutDashboard, 
  Send, 
  Database, 
  BrainCircuit, 
  PlayCircle, 
  FileText, 
  HandMetal, 
  Rocket 
} from "lucide-react";

export function Features() {
  const capabilities = [
    {
      title: "Intelligent WhatsApp Operations",
      desc: "Manage all communication from a centralized web platform.",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Advisor Account Management",
      desc: "Register advisors and upload data via Excel simply.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Secure Role-Based Access",
      desc: "Enterprise-grade security with controlled user access.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "WhatsApp QR Sync",
      desc: "Instant dynamic QR pairing for advisor accounts.",
      icon: <QrCode className="w-5 h-5" />
    },
    {
      title: "Real-Time Monitoring",
      desc: "Track connected accounts, active chats, and KPIs.",
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      title: "Massive Campaign Broadcasting",
      desc: "Execute and track mass sending tasks efficiently.",
      icon: <Send className="w-5 h-5" />
    },
    {
      title: "Client Database Upload",
      desc: "Rich client profiles with metadata support.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "AI Contextual Responses",
      desc: "Metadata-driven AI answers specific business questions.",
      icon: <BrainCircuit className="w-5 h-5" />
    },
    {
      title: "Campaign Task Control",
      desc: "Pause, stop, or resume campaigns in real-time.",
      icon: <PlayCircle className="w-5 h-5" />
    },
    {
      title: "Historical Audit",
      desc: "Full record of every interaction and campaign result.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Human + AI Hybrid",
      desc: "AI handles the bulk, humans step in for nuances.",
      icon: <HandMetal className="w-5 h-5" />
    },
    {
      title: "Operational Versatility",
      desc: "Sales, collections, or service – one platform fits all.",
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24" id="capabilities">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-headline font-bold text-foreground">Robust Operational Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to automate your customer contact center and scale your business outreach.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors mb-2">
                  {cap.icon}
                </div>
                <CardTitle className="text-lg font-headline font-bold leading-tight">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
