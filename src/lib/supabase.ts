import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Using demo mode.');
  // Create a mock client for development
  export const supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ error: new Error('Demo mode - authentication disabled') }),
      signUp: () => Promise.resolve({ error: new Error('Demo mode - authentication disabled') }),
      signOut: () => Promise.resolve({ error: null })
    },
    from: () => ({
      insert: () => Promise.resolve({ error: new Error('Demo mode - database disabled') }),
      select: () => Promise.resolve({ data: [], error: null })
    })
  };
} else {
  try {
    new URL(supabaseUrl);
  } catch (error) {
    console.warn(`Invalid Supabase URL format: ${supabaseUrl}. Using demo mode.`);
    // Create a mock client for development
    export const supabase = {
      auth: {
        getSession: () => Promise.resolve({ data: { session: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithPassword: () => Promise.resolve({ error: new Error('Demo mode - authentication disabled') }),
        signUp: () => Promise.resolve({ error: new Error('Demo mode - authentication disabled') }),
        signOut: () => Promise.resolve({ error: null })
      },
      from: () => ({
        insert: () => Promise.resolve({ error: new Error('Demo mode - database disabled') }),
        select: () => Promise.resolve({ data: [], error: null })
      })
    };
  }
}

