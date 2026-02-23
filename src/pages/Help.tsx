import { useState } from "react";
import { LogOut, Search, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, FileText, Video, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address and follow the instructions sent to your inbox."
  },
  {
    question: "How do I process a refund?",
    answer: "Navigate to the Transactions page, find the transaction you want to refund, click on the transaction details, and select 'Process Refund'. Enter the refund amount and reason, then confirm."
  },
  {
    question: "What should I do if a transaction fails?",
    answer: "If a transaction fails, check your internet connection first. If the issue persists, verify the payment details and try again. For recurring issues, contact technical support immediately."
  },
  {
    question: "How do I generate reports?",
    answer: "Go to the Reports section from the Dashboard. Select your date range, transaction type, and center. Click 'Generate Report' to download or view the report."
  },
  {
    question: "Can I change my assigned center?",
    answer: "Center assignments are managed by administrators. Contact your supervisor or admin to request a center change."
  },
];

const supportChannels = [
  { icon: Phone, title: "Phone Support", value: "+27 11 123 4567", description: "Available Mon-Fri 8am-5pm" },
  { icon: Mail, title: "Email Support", value: "support@rtia.co.za", description: "Response within 24 hours" },
  { icon: MessageCircle, title: "Live Chat", value: "Start Chat", description: "Available 24/7" },
];

const resources = [
  { icon: FileText, title: "User Manual", description: "Complete guide to using the system" },
  { icon: Video, title: "Video Tutorials", description: "Step-by-step video instructions" },
  { icon: Headphones, title: "Training Sessions", description: "Book a training session" },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border bg-card px-8 py-4">
          <div></div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-card-foreground">Thato Lebeya</p>
              <p className="text-xs text-muted-foreground">thatol@intellergy.co.za</p>
            </div>
            <Avatar className="h-9 w-9 bg-primary text-primary-foreground">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                AT
              </AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Help Desk</h1>
            <p className="text-muted-foreground">Find answers and get support</p>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="w-full pl-12 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Support Channels */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Contact Support</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {supportChannels.map((channel) => (
                <div key={channel.title} className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-sidebar-accent flex items-center justify-center">
                      <channel.icon className="h-5 w-5 text-sidebar-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-card-foreground">{channel.title}</h3>
                  </div>
                  <p className="text-lg font-medium text-primary">{channel.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Resources</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <div key={resource.title} className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground">{resource.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>

                    {/* FAQs */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <span className="font-medium text-card-foreground">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No results found for your search.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Help;
