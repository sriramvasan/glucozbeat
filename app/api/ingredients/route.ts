import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request: Request) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const { searchParams } = new URL(request.url);
  const foodName = searchParams.get('foodName') || '';

  try {
    const [rows] = await connection.execute(
      'SELECT DISTINCT Foods FROM ingredients WHERE Foods LIKE ?',
      [`%${foodName}%`]
    );
    await connection.end();
    return NextResponse.json(rows);
  } catch (error) {
    await connection.end();
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}
