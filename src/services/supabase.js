import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ydltfforautdvpauyudx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkbHRmZm9yYXV0ZHZwYXV5dWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NTM2NDYsImV4cCI6MjAxNTIyOTY0Nn0.rcJUxgy7XmlPXJBVfijrCt9k4oThAre3jfzMFUl9CWA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
