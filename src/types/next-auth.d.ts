import { Role } from '@prisma/client';
import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    role: Role;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      role: Role;
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
  }
}
