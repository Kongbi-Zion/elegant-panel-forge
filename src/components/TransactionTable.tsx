import React, { useState, useEffect } from "react";
import { Eye, Filter, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const transactions = [
  // Recent transactions - Today
  { id: "TX-10024501", amount: 1500.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456789012", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024502", amount: 228.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-05", status: "Cancelled", servedBy: "Michael Chen", rrn: "123456789013", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024503", amount: 3800.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-05", status: "Declined", servedBy: "Sarah Johnson", rrn: "123456789014", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024504", amount: 228.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "David Williams", rrn: "123456789015", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024505", amount: 450.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "Emily Davis", rrn: "123456789016", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024506", amount: 320.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-03-05", status: "Cancelled", servedBy: "James Wilson", rrn: "123456789017", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024507", amount: 850.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456789018", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024508", amount: 228.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-05", status: "Declined", servedBy: "Michael Chen", rrn: "123456789019", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024509", amount: 4200.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "Emily Davis", rrn: "123456789020", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024510", amount: 228.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-05", status: "Approved", servedBy: "David Williams", rrn: "123456789016", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // Yesterday
  { id: "TX-10024491", amount: 1200.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456789001", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024492", amount: 528.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "Michael Chen", rrn: "123456789002", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024493", amount: 2800.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456789003", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024494", amount: 328.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-04", status: "Declined", servedBy: "David Williams", rrn: "123456789004", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024495", amount: 550.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "Emily Davis", rrn: "123456789005", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024496", amount: 420.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "James Wilson", rrn: "123456789006", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024497", amount: 950.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456789007", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024498", amount: 328.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-04", status: "Cancelled", servedBy: "Michael Chen", rrn: "123456789008", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024499", amount: 4600.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-04", status: "Declined", servedBy: "Emily Davis", rrn: "123456789009", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024500", amount: 328.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-04", status: "Approved", servedBy: "David Williams", rrn: "123456789010", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // March 3rd
  { id: "TX-10024481", amount: 1800.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788991", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024482", amount: 628.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "Michael Chen", rrn: "123456788992", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024483", amount: 3200.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788993", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024484", amount: 428.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "David Williams", rrn: "123456788994", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024485", amount: 650.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-03-03", status: "Cancelled", servedBy: "Emily Davis", rrn: "123456788995", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024486", amount: 520.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "James Wilson", rrn: "123456788996", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024487", amount: 1050.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-03", status: "Declined", servedBy: "Sarah Johnson", rrn: "123456788997", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024488", amount: 428.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "Michael Chen", rrn: "123456788998", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024489", amount: 5000.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "Emily Davis", rrn: "123456788999", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024490", amount: 428.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-03", status: "Approved", servedBy: "David Williams", rrn: "123456789000", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // March 2nd
  { id: "TX-10024471", amount: 2100.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788981", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024472", amount: 728.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Michael Chen", rrn: "123456788982", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024473", amount: 3600.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788983", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024474", amount: 528.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "David Williams", rrn: "123456788984", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024475", amount: 750.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Emily Davis", rrn: "123456788985", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024476", amount: 620.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-03-02", status: "Declined", servedBy: "James Wilson", rrn: "123456788986", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024477", amount: 1150.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788987", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024478", amount: 528.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "Michael Chen", rrn: "123456788988", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024479", amount: 5400.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-02", status: "Cancelled", servedBy: "Emily Davis", rrn: "123456788989", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024480", amount: 528.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-02", status: "Approved", servedBy: "David Williams", rrn: "123456788990", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // March 1st
  { id: "TX-10024461", amount: 2400.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788971", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024462", amount: 828.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Michael Chen", rrn: "123456788972", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024463", amount: 4000.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788973", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024464", amount: 628.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "David Williams", rrn: "123456788974", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024465", amount: 850.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Emily Davis", rrn: "123456788975", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024466", amount: 720.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "James Wilson", rrn: "123456788976", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024467", amount: 1250.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-03-01", status: "Declined", servedBy: "Sarah Johnson", rrn: "123456788977", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024468", amount: 628.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Michael Chen", rrn: "123456788978", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024469", amount: 5800.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-03-01", status: "Approved", servedBy: "Emily Davis", rrn: "123456788979", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024470", amount: 628.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-03-01", status: "Cancelled", servedBy: "David Williams", rrn: "123456788980", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // February 28th
  { id: "TX-10024451", amount: 2700.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788961", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024452", amount: 928.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Michael Chen", rrn: "123456788962", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024453", amount: 4400.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788963", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024454", amount: 728.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "David Williams", rrn: "123456788964", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024455", amount: 950.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Emily Davis", rrn: "123456788965", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024456", amount: 820.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "James Wilson", rrn: "123456788966", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024457", amount: 1350.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788967", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024458", amount: 728.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-28", status: "Declined", servedBy: "Michael Chen", rrn: "123456788968", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024459", amount: 6200.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "Emily Davis", rrn: "123456788969", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024460", amount: 728.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-28", status: "Approved", servedBy: "David Williams", rrn: "123456788970", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // February 27th
  { id: "TX-10024441", amount: 3000.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788951", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024442", amount: 1028.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Michael Chen", rrn: "123456788952", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024443", amount: 4800.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-27", status: "Declined", servedBy: "Sarah Johnson", rrn: "123456788953", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024444", amount: 828.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "David Williams", rrn: "123456788954", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024445", amount: 1050.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Emily Davis", rrn: "123456788955", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024446", amount: 920.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "James Wilson", rrn: "123456788956", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024447", amount: 1450.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788957", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024448", amount: 828.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Michael Chen", rrn: "123456788958", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024449", amount: 6600.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-27", status: "Approved", servedBy: "Emily Davis", rrn: "123456788959", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024450", amount: 828.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-27", status: "Cancelled", servedBy: "David Williams", rrn: "123456788960", terminalId: "T-004", center: "Cape Town Service Center" },
  
  // February 26th
  { id: "TX-10024431", amount: 3300.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788941", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024432", amount: 1128.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Michael Chen", rrn: "123456788942", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024433", amount: 5200.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788943", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024434", amount: 928.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "David Williams", rrn: "123456788944", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024435", amount: 1150.0, service: "Duplicate Learner's License", cardType: "Credit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Emily Davis", rrn: "123456788945", terminalId: "T-004", center: "Cape Town Service Center" },
  { id: "TX-10024436", amount: 1020.0, service: "Learner's License", cardType: "Debit Card", transactionDate: "2025-02-26", status: "Declined", servedBy: "James Wilson", rrn: "123456788946", terminalId: "T-005", center: "Durban Service Outlet" },
  { id: "TX-10024437", amount: 1550.0, service: "Traffic Infringement", cardType: "Credit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Sarah Johnson", rrn: "123456788947", terminalId: "T-001", center: "RTIA Head Office" },
  { id: "TX-10024438", amount: 928.0, service: "Installment Payments", cardType: "Debit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "Michael Chen", rrn: "123456788948", terminalId: "T-002", center: "Pretoria Service Center" },
  { id: "TX-10024439", amount: 7000.0, service: "Motor Vehicle License", cardType: "Credit Card", transactionDate: "2025-02-26", status: "Cancelled", servedBy: "Emily Davis", rrn: "123456788949", terminalId: "T-003", center: "Johannesburg Branch" },
  { id: "TX-10024440", amount: 928.0, service: "Driver's License Renewal", cardType: "Debit Card", transactionDate: "2025-02-26", status: "Approved", servedBy: "David Williams", rrn: "123456788950", terminalId: "T-004", center: "Cape Town Service Center" },
];

const statusColors: Record<string, string> = {
  Approved: "bg-success/10 text-success",
  Declined: "bg-destructive/10 text-destructive",
  Cancelled: "bg-[hsl(var(--card-orange))]/10 text-[hsl(var(--card-orange))]",
};

const TransactionTable = ({ 
  selectedService, 
  selectedStatus, 
  selectedCardType, 
  selectedCenter, 
  dateRange 
}: {
  selectedService?: string;
  selectedStatus?: string;
  selectedCardType?: string;
  selectedCenter?: string;
  dateRange?: { start: string; end: string };
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const itemsPerPage = 10;
  
  // Use local search term
  const searchTerm = localSearchTerm;
  
  // Apply filters to transactions
  const filteredTransactions = transactions.filter((transaction) => {
    // Search filter - search across multiple fields
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesId = transaction.id.toLowerCase().includes(searchLower);
      const matchesService = transaction.service.toLowerCase().includes(searchLower);
      const matchesStatus = transaction.status.toLowerCase().includes(searchLower);
      const matchesCenter = transaction.center.toLowerCase().includes(searchLower);
      const matchesAmount = transaction.amount.toString().includes(searchLower);
      const matchesServedBy = transaction.servedBy.toLowerCase().includes(searchLower);
      
      if (!matchesId && !matchesService && !matchesStatus && !matchesCenter && !matchesAmount && !matchesServedBy) {
        return false;
      }
    }
    
    // Service filter
    if (selectedService && transaction.service !== selectedService) {
      return false;
    }
    
    // Status filter
    if (selectedStatus && transaction.status !== selectedStatus) {
      return false;
    }
    
    // Card type filter
    if (selectedCardType && transaction.cardType !== selectedCardType) {
      return false;
    }
    
    // Center filter
    if (selectedCenter && transaction.center !== selectedCenter) {
      return false;
    }
    
    // Date range filter
    if (dateRange?.start || dateRange?.end) {
      const transactionDate = new Date(transaction.transactionDate);
      const startDate = dateRange.start ? new Date(dateRange.start) : null;
      const endDate = dateRange.end ? new Date(dateRange.end) : null;
      
      if (startDate && transactionDate < startDate) {
        return false;
      }
      if (endDate && transactionDate > endDate) {
        return false;
      }
    }
    
    return true;
  });
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [localSearchTerm, selectedService, selectedStatus, selectedCardType, selectedCenter, dateRange]);
  
  // Calculate pagination based on filtered data
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h2 className="text-lg font-semibold text-card-foreground">
          Transaction History ({filteredTransactions.length})
        </h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search transactions by ID, service, amount..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="w-64 pl-9"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["Amount", "Service", "Card Type", "Transaction Date", "Status", "Served By", "RRN", "Terminal ID", "Service Outlet"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {currentTransactions.map((tx) => (
              <tr
                key={tx.id}
                className="group border-b border-border last:border-0 hover:bg-[hsl(var(--sidebar-accent))] transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-card-foreground group-hover:text-white">
                  {formatCurrency(tx.amount)}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.service}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.cardType}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.transactionDate}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${statusColors[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.servedBy}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.rrn}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.terminalId}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.center}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-border px-6 py-4">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredTransactions.length)} of {filteredTransactions.length} results
        </p>
        <div className="flex items-center gap-1">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {getPageNumbers().map((p) => (
            <Button
              key={p}
              variant={p === currentPage ? "default" : "outline"}
              size="sm"
              className="w-9"
              onClick={() => handlePageChange(p)}
            >
              {p}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
