import { Library as LibraryIcon, Search, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const libraryBooksData = [
  { title: "Advanced Physics", author: "Dr. Richard", issueDate: "2024-02-20", dueDate: "2024-03-20", status: "Issued" },
  { title: "Mathematics Olympiad", author: "Prof. Kumar", issueDate: "2024-02-15", dueDate: "2024-03-15", status: "Overdue" },
  { title: "Chemistry Practical", author: "Dr. Singh", issueDate: "2024-03-01", dueDate: "2024-03-31", status: "Issued" },
  { title: "Computer Science Fundamentals", author: "Mr. Wilson", issueDate: "2024-02-25", dueDate: "2024-03-25", status: "Issued" }
];

const availableBooksData = [
  { title: "Advanced Calculus", author: "Dr. Smith", category: "Mathematics", available: true },
  { title: "Quantum Physics", author: "Prof. Johnson", category: "Physics", available: true },
  { title: "Organic Chemistry", author: "Dr. Brown", category: "Chemistry", available: false },
  { title: "Data Structures", author: "Mr. Davis", category: "Computer Science", available: true },
  { title: "English Literature", author: "Ms. Wilson", category: "English", available: true }
];

const Library = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <LibraryIcon className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Library Portal</h1>
          <p className="text-muted-foreground">Manage your library books and browse catalog</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Borrowed Books</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {libraryBooksData.map((book, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">Author: {book.author}</p>
                  <p className="text-sm text-muted-foreground">Issued: {book.issueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Due: {book.dueDate}</p>
                  <Badge variant={book.status === "Overdue" ? "destructive" : "default"}>
                    {book.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browse Library Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search books..." className="flex-1" />
              <Button>
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {availableBooksData.map((book, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">Author: {book.author}</p>
                  <p className="text-sm text-muted-foreground">Category: {book.category}</p>
                </div>
                <div className="text-right">
                  <Badge variant={book.available ? "default" : "secondary"}>
                    {book.available ? "Available" : "Not Available"}
                  </Badge>
                  {book.available && (
                    <Button size="sm" className="ml-2">
                      <Book className="w-4 h-4 mr-1" />
                      Request
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Library;