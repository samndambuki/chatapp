import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jwsfxqyjmxysrmxdkdio.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3c2Z4cXlqbXh5c3JteGRrZGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MjMzMTksImV4cCI6MjA1MzA5OTMxOX0.mPrZLXJ2RAgcd5Qrrm-IPMRXzvVaWMMHQXZXQw2JYp0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
