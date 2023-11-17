
import { createClient } from '@supabase/supabase-js';

const API_URL = 'https://uhsvpntkugxdooqvanlo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc3ZwbnRrdWd4ZG9vcXZhbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMTE0MjQsImV4cCI6MjAxNTc4NzQyNH0.ZATPXfYU_dVIcNUveITPX4wR-E5fHulT72dpcNq0-rw';

const supabase = createClient(API_URL, API_KEY);

export default supabase;
