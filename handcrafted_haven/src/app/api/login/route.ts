// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new NextResponse(JSON.stringify({ message: 'Missing credentials' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simulation in BD
    const user = {
      email: 'test@test.com', //  User created in BD
      password: '$2b$10$R4dYgmRu7t4L03KX8HyEhObrE1L3GBzxQcr/0EcUkNJaj4iqJJ/Ji', // Un hash de prueba
      name: 'Test User',
    };

    if (!user || user.email !== email) {
      return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Usuario logueado:', user.email);
    return NextResponse.json({ message: 'Logged in successfully', user: { email: user.email, name: user.name } }, { status: 200 });

  } catch (error) {
    console.error('Error logging in:', error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}