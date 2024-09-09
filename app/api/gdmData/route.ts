// app/api/gdmData/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    const [gdmData] = await connection.execute('SELECT * FROM GDM_treatments;');

    const [gdmByAgeData] = await connection.execute('SELECT * FROM GDM_by_age;')

    await connection.end(); // Close the connection

    return NextResponse.json({gdmData, gdmByAgeData}); // Respond with the rows in JSON format
  } catch (error) {
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}
