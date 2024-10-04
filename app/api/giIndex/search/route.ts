import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

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

  // If no search term is provided, return a 400 error
  if (!searchTerm && !category) {
    return NextResponse.json({ error: 'Missing search term or category' }, { status: 400 });
  }

  var badTerms = /onload|javascript|onerror|script|alert|eval/i;
  var sanitisedSearchTerm;

  try {
    // Construct the query dynamically based on the provided category and searchTerm
    // let query = 'SELECT DISTINCT Foods, Glycemic_Index, Category, GI_class FROM giindex WHERE 1=1';
    let query = 'SELECT DISTINCT Foods, Glycemic_Index, Category, GI_class FROM giindex WHERE Foods IN (SELECT DISTINCT Foods from giindex)';
    let params: any[] = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (searchTerm) {
      if (badTerms.test(searchTerm)) {
        return NextResponse.json({error:'We do not currently have that food item'}, {status : 400});
      } else {
        // sanitisedSearchTerm = DOMPurify.sanitize(searchTerm);
        query += ' AND Foods LIKE ?';
        params.push(`%${searchTerm}%`);
      }
    }

    if (gi_class){
      query += ' AND gi_class = ?';
      params.push(gi_class)
    }

    query += ' ORDER BY Glycemic_Index ASC';

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
