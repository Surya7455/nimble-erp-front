import { useState } from "react";
import { HelpCircle, MessageCircle, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const helpTicketsData = [
  { id: "TKT001", subject: "Fee Payment Issue", status: "Open", priority: "High", date: "2024-03-08", description: "Unable to process online fee payment" },
  { id: "TKT002", subject: "Timetable Conflict", status: "Resolved", priority: "Medium", date: "2024-03-05", description: "Schedule conflict in physics lab" },
  { id: "TKT003", subject: "Library Access", status: "In Progress", priority: "Low", date: "2024-03-03", description: "Unable to access digital library resources" }
];

const HelpDesk = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    subject: "",
    priority: "",
    description: ""
  });

  const handleCreateTicket = () => {
    // Here you would typically submit to backend
    setShowCreateForm(false);
    setNewTicket({ subject: "", priority: "", description: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Help Desk</h1>
            <p className="text-muted-foreground">Get support for your queries and issues</p>
          </div>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Support Ticket</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                value={newTicket.subject}
                onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                placeholder="Enter the issue subject"
              />
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select value={newTicket.priority} onValueChange={(value) => setNewTicket({...newTicket, priority: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                value={newTicket.description}
                onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                placeholder="Describe your issue in detail"
                rows={4}
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleCreateTicket}>Submit Ticket</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Your Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {helpTicketsData.map((ticket, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium">{ticket.subject}</h3>
                      <Badge variant="outline" className="text-xs">#{ticket.id}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{ticket.description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge variant={
                      ticket.status === "Open" ? "destructive" :
                      ticket.status === "In Progress" ? "outline" : "default"
                    }>
                      {ticket.status}
                    </Badge>
                    <Badge variant={
                      ticket.priority === "High" ? "destructive" :
                      ticket.priority === "Medium" ? "outline" : "secondary"
                    }>
                      {ticket.priority}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Created: {ticket.date}</span>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpDesk;