export type User = {
  id: number;
  name: string;
  email: string;
  number: string; // Assuming phone number is stored as a string
  role: string;
  password: string; // Consider not including password in the response for security reasons
}

export type UserArray = User[];

// ============================ Old ===========================================

export type Book = {
    id: number;
    title: string;
    author: string;
    publication_year: number;
    genre: string[];
    description: string;
    cover_image: string;
  };

export type BookArray = Book[];