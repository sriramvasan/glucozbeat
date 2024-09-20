import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';

export async function GET(request: Request, res: NextResponse) {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm');
  const category = searchParams.get('category') ;
  const gi_class = searchParams.get('gi_class');
  const [errorMessage, setErrorMessage] = useState('');

  // If no search term is provided, return a 400 error
  if (!searchTerm && !category) {
    return NextResponse.json({ error: 'Missing search term or category' }, { status: 400 });
  }

  var badTerms = /onload|javascript|onerror|script|alert|eval/i;

  try {
    // Construct the query dynamically based on the provided category and searchTerm
    let query = 'SELECT distinct Foods, Glycemic_Index, Category, GI_class FROM giindex WHERE 1=1';
    let params: any[] = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (searchTerm) {
      if (badTerms.test(searchTerm)) {
        setErrorMessage('We do not currently have that food item available');
      } else {
        const sanitisedSearchTerm = DOMPurify.sanitize(searchTerm);
        query += ' AND Foods LIKE ?';
        params.push(`%${sanitisedSearchTerm}%`);
      }
    }

    if (gi_class){
      query += ' AND gi_class = ?';
      params.push(gi_class)
    }

    // query += ' LIMIT 5'; // Limit results to 5 for better performance

    // Execute the query
    const [rows] = await connection.execute(query, params);

    // Close the database connection
    await connection.end();

    // Return the result as JSON
    return NextResponse.json(rows);

    
     // Return matching rows
  } catch (error) {
    return NextResponse.json({error:'Error fetching data from database'}, {status : 500}) //res.status(500).json({ error: 'Error fetching data from database' });
  }
}
