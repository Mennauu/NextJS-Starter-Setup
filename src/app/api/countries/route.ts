import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const loadCountries = async () => {
  try {
    const countriesFilePath = path.join(process.cwd(), 'src/data', 'countries.json')
    const data = await fs.readFile(countriesFilePath, 'utf8')

    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading countries:', error)
    throw error
  }
}

export async function GET() {
  try {
    const countries = await loadCountries()
    return NextResponse.json(countries, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load countries' }, { status: 500 })
  }
}
