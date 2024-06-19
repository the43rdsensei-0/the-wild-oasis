import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://stfhvyqqawauioxndhki.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Zmh2eXFxYXdhdWlveG5kaGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NTkzMDgsImV4cCI6MjAzNDIzNTMwOH0.Zi6EB8XMRkG964d5zGTZiORts8BxOT-Jd_N5_cCXwzw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;