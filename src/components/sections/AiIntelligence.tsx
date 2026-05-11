"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Send, Sparkles, User, Bot, Loader2 } from "lucide-react";
import { aiContextualWhatsappResponses } from "@/ai/flows/ai-contextual-whatsapp-responses";

export function AiIntelligence() {
  const [query, setQuery] = useState("¿Cuál es el saldo de mi deuda?");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const mockBusinessContext = JSON.stringify({
    customerName: "Juan Perez",
    debtAmount: "$15,200 MXN",
    dueDate: "2024-05-15",
    installmentsRemaining: 3,
    product: "Crédito Automotriz",
    lastPaymentDate: "2024-04-10"
  }, null, 2);

  const handleTest = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const result = await aiContextualWhatsappResponses({
        customerQuery: query,
        businessContext: mockBusinessContext
      });
      setResponse(result.aiResponse);
    } catch (error) {
      console.error(error);
      setResponse("Lo sentimos, ocurrió un error procesando tu solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative" id="ai">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-primary font-bold">Metadata-Driven AI</Badge>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold">Contextual AI Decisions</h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Magic Contact's most powerful feature: The AI uses structured business metadata (JSON) to answer 
                complex customer questions instantly. Debt amounts, dates, specific product rules—the AI 
                knows it all without manual scripting.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Sparkles className="text-accent mb-2" />
                <h4 className="font-bold mb-1">Instant Accuracy</h4>
                <p className="text-sm text-primary-foreground/70">Answers based on real-time database variables.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <BrainCircuit className="text-accent mb-2" />
                <h4 className="font-bold mb-1">Decision Tool</h4>
                <p className="text-sm text-primary-foreground/70">Calculates installments and dates on the fly.</p>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <Card className="bg-white text-foreground border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-secondary/50 border-b">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  AI Logic Sandbox
                </CardTitle>
                <CardDescription>Test how our AI uses client metadata</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Current Business Metadata</label>
                  <pre className="text-[10px] bg-muted p-3 rounded-md font-mono overflow-x-auto text-primary">
                    {mockBusinessContext}
                  </pre>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Customer Query</label>
                  <div className="flex gap-2">
                    <Textarea 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask something about the debt..."
                      className="resize-none"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleTest} 
                  className="w-full gap-2 font-bold" 
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                  Generate AI Response
                </Button>

                {response && (
                  <div className="mt-6 space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/10 text-sm italic">
                        "{response}"
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
