
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, HeartHandshake, BellRing, ClipboardCheck, Wallet } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Debt Collections",
      icon: <Wallet className="w-8 h-8 text-primary" />,
      benefits: ["Automated reminders", "Metadata-driven payment links", "Negotiation AI"]
    },
    {
      title: "Sales Campaigns",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      benefits: ["Mass broadcasts", "Lead classification", "Instant qualification"]
    },
    {
      title: "Customer Support",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      benefits: ["Hybrid human-AI model", "Shared inbox", "Quick resolution"]
    },
    {
      title: "Product Notifications",
      icon: <BellRing className="w-8 h-8 text-primary" />,
      benefits: ["Delivery tracking", "Direct engagement", "Contextual info"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/20" id="use-cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline font-bold">Operational Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Magic Contact by OPSIX fits into your existing workflows to drive efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, idx) => (
            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-primary/5 rounded-2xl w-fit">
                  {c.icon}
                </div>
                <h3 className="text-xl font-headline font-bold">{c.title}</h3>
                <ul className="space-y-3">
                  {c.benefits.map((b, bidx) => (
                    <li key={bidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent rounded-full text-white">
              <ClipboardCheck />
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl">Ready to automate your operations?</h4>
              <p className="text-muted-foreground">Join 100+ companies optimizing their processes with OPSIX.</p>
            </div>
          </div>
          <Badge variant="outline" className="text-lg py-2 px-6 border-primary text-primary">Schedule a Demo Today</Badge>
        </div>
      </div>
    </section>
  );
}
