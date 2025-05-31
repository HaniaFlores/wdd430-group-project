// src/app/api/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse('Missing credentials', { status: 400 });
    }

    // This is where the logic to connect to the database would go
    // and check if the email already exists. We'll ignore it for now.

    const hashedPassword = await bcrypt.hash(password, 10);

    // Here would go the logic to save the new user in the database
    console.log('Usuario registrado:', { name, email, hashedPassword });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}