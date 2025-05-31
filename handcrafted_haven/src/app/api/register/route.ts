// src/app/api/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse('Missing credentials', { status: 400 });
    }

    // Aquí iría la lógica para conectar a la base de datos
    // y verificar si el email ya existe. Por ahora, lo omitimos.

    const hashedPassword = await bcrypt.hash(password, 10);

    // Aquí iría la lógica para guardar el nuevo usuario en la base de datos
    console.log('Usuario registrado:', { name, email, hashedPassword });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}