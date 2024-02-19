const { createClient } = require('@supabase/supabase-js');

// Supabase service key and URL from your project's dashboard
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
