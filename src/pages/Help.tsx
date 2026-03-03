import { useState } from "react";
import { LogOut, Search, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, FileText, Video, Headphones, Ticket, HelpCircle, Clock, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";

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
];

const resources = [
  { icon: FileText, title: "User Manual", description: "Complete guide to using the system" },
  { icon: Video, title: "Video Tutorials", description: "Step-by-step video instructions" },
  { icon: Headphones, title: "Training Sessions", description: "Book a training session" },
];

const initialTickets = [
  {
    id: "TK-001",
    title: "Traffic fine payment failed",
    description: "Unable to complete payment for traffic infringement",
    status: "open",
    priority: "high",
    created: "2024-03-15T10:30:00",
    assignedTo: "John Doe",
    category: "Traffic Infringement"
  },
  {
    id: "TK-002", 
    title: "Installment payment arrangement issue",
    description: "Customer unable to set up installment plan for large fine",
    status: "in-progress",
    priority: "medium",
    created: "2024-03-14T14:20:00",
    assignedTo: "Jane Smith",
    category: "Installment Payments"
  },
  {
    id: "TK-003",
    title: "Account access locked",
    description: "User needs password reset for account access",
    status: "resolved",
    priority: "low",
    created: "2024-03-13T09:15:00",
    assignedTo: "Mike Johnson",
    category: "Account Access"
  },
  {
    id: "TK-004",
    title: "Card payment declined",
    description: "Credit card transactions failing at terminal",
    status: "open",
    priority: "high",
    created: "2024-03-15T11:45:00",
    assignedTo: "Sarah Wilson",
    category: "Card Issues"
  },
  {
    id: "TK-005",
    title: "Driver's license renewal system error",
    description: "System not processing license renewal applications",
    status: "in-progress",
    priority: "medium",
    created: "2024-03-12T16:30:00",
    assignedTo: "Tom Brown",
    category: "Driver's License Renewal"
  }
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [tickets, setTickets] = useState(initialTickets);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    category: "Traffic Infringement",
    priority: "medium",
    assignedTo: ""
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateTicket = () => {
    if (!newTicket.title.trim() || !newTicket.description.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const ticket = {
      id: `TK-${String(tickets.length + 1).padStart(3, '0')}`,
      title: newTicket.title,
      description: newTicket.description,
      status: "open",
      priority: newTicket.priority,
      created: new Date().toISOString(),
      assignedTo: "Unassigned",
      category: newTicket.category
    };

    setTickets([ticket, ...tickets]);
    setNewTicket({
      title: "",
      description: "",
      category: "Traffic Infringement",
      priority: "medium",
      assignedTo: ""
    });
    setShowNewTicketModal(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setNewTicket(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getTicketStats = () => {
    const open = tickets.filter(t => t.status === "open").length;
    const inProgress = tickets.filter(t => t.status === "in-progress").length;
    const resolved = tickets.filter(t => t.status === "resolved").length;
    return { open, inProgress, resolved, total: tickets.length };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "in-progress": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "resolved": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "medium": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "low": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed left-0 top-0 h-full z-50">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-60">
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card px-8 py-4">
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

          {/* Tabs */}
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "dashboard"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Dashboard
                </div>
              </button>
              <button
                onClick={() => setActiveTab("tickets")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "tickets"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Tickets
                </div>
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
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

              {/* Services */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4">Our Services</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Traffic Infringement</h3>
                    <p className="text-sm text-muted-foreground">Pay and manage traffic fines and infringements</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Installment Payments</h3>
                    <p className="text-sm text-muted-foreground">Arrange and manage installment payment plans</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Motor Vehicle License</h3>
                    <p className="text-sm text-muted-foreground">Renew and manage motor vehicle licenses</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Driver's License Renewal</h3>
                    <p className="text-sm text-muted-foreground">Renew your driver's license quickly and easily</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Duplicate Learner's License</h3>
                    <p className="text-sm text-muted-foreground">Request duplicate learner's licenses</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 hover:bg-secondary/50 transition-colors">
                    <h3 className="font-semibold text-card-foreground mb-2">Learner's License</h3>
                    <p className="text-sm text-muted-foreground">Apply for new learner's licenses</p>
                  </div>
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
            </div>
          )}

          {activeTab === "tickets" && (
            <div className="space-y-6">
              {/* Tickets Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Support Tickets</h2>
                  <p className="text-sm text-muted-foreground">Manage and track support requests</p>
                </div>
                <Button 
                  onClick={() => setShowNewTicketModal(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Ticket className="h-4 w-4 mr-2" />
                  New Ticket
                </Button>
              </div>

              {/* Tickets Stats */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{getTicketStats().open}</p>
                      <p className="text-xs text-muted-foreground">Open Tickets</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{getTicketStats().inProgress}</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{getTicketStats().resolved}</p>
                      <p className="text-xs text-muted-foreground">Resolved</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Ticket className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{getTicketStats().total}</p>
                      <p className="text-xs text-muted-foreground">Total Tickets</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tickets Table */}
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Ticket ID</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Title</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Priority</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Assigned To</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-foreground">Created</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {tickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-4">
                            <span className="font-mono text-sm font-medium text-primary">{ticket.id}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-foreground">{ticket.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{ticket.description}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-muted-foreground">{ticket.category}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                              {ticket.status.replace('-', ' ')}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm text-muted-foreground">{ticket.assignedTo}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-muted-foreground">{formatDate(ticket.created)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* New Ticket Modal */}
      {showNewTicketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowNewTicketModal(false)} />
          <div className="relative bg-card rounded-xl border border-border shadow-lg w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Create New Ticket</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNewTicketModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronUp className="h-4 w-4 rotate-45" />
              </Button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Title *</label>
                <Input
                  placeholder="Brief description of issue"
                  value={newTicket.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Description *</label>
                <textarea
                  placeholder="Detailed description of issue"
                  value={newTicket.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full min-h-[100px] p-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <select
                    value={newTicket.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Traffic Infringement">Traffic Infringement</option>
                    <option value="Installment Payments">Installment Payments</option>
                    <option value="Motor Vehicle License">Motor Vehicle License</option>
                    <option value="Driver's License Renewal">Driver's License Renewal</option>
                    <option value="Duplicate Learner's License">Duplicate Learner's License</option>
                    <option value="Learner's License">Learner's License</option>
                    <option value="Payment Processing">Payment Processing</option>
                    <option value="Card Issues">Card Issues</option>
                    <option value="Terminal/Equipment">Terminal/Equipment</option>
                    <option value="Service Outlet">Service Outlet</option>
                    <option value="Account Access">Account Access</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Priority</label>
                  <select
                    value={newTicket.priority}
                    onChange={(e) => handleInputChange('priority', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

         
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setShowNewTicketModal(false)}
                className="border-border text-foreground hover:bg-secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateTicket}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Create Ticket
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
