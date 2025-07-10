import { Library as LibraryIcon, Plus, Search, Filter, Book, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0-06-112008-4", category: "Literature", status: "Available", copies: 5 },
  { id: 2, title: "1984", author: "George Orwell", isbn: "978-0-452-28423-4", category: "Dystopian Fiction", status: "Borrowed", copies: 3 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0-7432-7356-5", category: "Literature", status: "Available", copies: 4 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0-14-143951-8", category: "Romance", status: "Available", copies: 6 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "978-0-316-76948-0", category: "Literature", status: "Borrowed", copies: 2 },
];

const borrowedBooks = [
  { id: 1, title: "1984", student: "Emma Wilson", class: "12-A", borrowDate: "Nov 28, 2024", dueDate: "Dec 12, 2024", status: "Active" },
  { id: 2, title: "The Catcher in the Rye", student: "James Smith", class: "11-B", borrowDate: "Nov 25, 2024", dueDate: "Dec 9, 2024", status: "Overdue" },
  { id: 3, title: "Lord of the Flies", student: "Sofia Rodriguez", class: "10-A", borrowDate: "Dec 1, 2024", dueDate: "Dec 15, 2024", status: "Active" },
];

const Library = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LibraryIcon className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Library Management</h1>
            <p className="text-muted-foreground">Manage books, borrowing, and library resources</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Book</span>
        </Button>
      </div>

      {/* Library Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Book className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">2,547</p>
                <p className="text-sm text-muted-foreground">Total Books</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-metric-positive" />
              <div>
                <p className="text-2xl font-bold">148</p>
                <p className="text-sm text-muted-foreground">Books Borrowed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <LibraryIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">2,399</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search books..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Books Catalog */}
        <Card>
          <CardHeader>
            <CardTitle>Books Catalog</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {books.map((book) => (
                <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">by {book.author}</p>
                      <p className="text-xs text-muted-foreground">{book.category} • {book.copies} copies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={book.status === "Available" ? "default" : "secondary"}>
                      {book.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Borrowed Books */}
        <Card>
          <CardHeader>
            <CardTitle>Currently Borrowed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {borrowedBooks.map((record) => (
                <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{record.title}</h3>
                      <p className="text-sm text-muted-foreground">{record.student} • {record.class}</p>
                      <p className="text-xs text-muted-foreground">Due: {record.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={record.status === "Overdue" ? "destructive" : "default"}>
                      {record.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Library;