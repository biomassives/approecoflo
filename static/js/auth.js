// static/js/auth.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = '{{ getenv "SUPABASE_URL" }}';
const supabaseKey = '{{ getenv "SUPABASE_ANON_KEY" }}';
const supabase = createClient(supabaseUrl, supabaseKey);

// Check authentication status and user role
async function checkAuthStatus() {
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    // User is logged in
    console.log('User is logged in:', user);

    const userRole = user.metadata.role; // Get the role from metadata

    if (userRole === 'admin') {
      // Show admin-specific options (e.g., in the navigation bar)
      // Example: document.getElementById('new-video-button').style.display = 'block';
      console.log('User is an admin');
    } else {
      // Show user-specific options
      console.log('User is a regular user');
    }
  } else {
    // User is not logged in
    console.log('User is not logged in');
    // Show sign-in/sign-up options in the navigation bar
    // Example: document.getElementById('signin-link').style.display = 'block';
  }
}

// Sign-in function
async function signIn(email, password, rememberMe) {
  try {
    const { error, session } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error('Error signing in:', error);
      // Handle and display the error to the user (e.g., using an alert or inline error message)
      return { error }; // Return the error for more specific error handling in the form
    } else {
      if (rememberMe) {
        // Calculate expiry time (e.g., 1 month from now)
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        await supabase.auth.setSession(session.access_token, session.refresh_token, {
          expires_at: Math.floor(expiryDate.getTime() / 1000)
        });
      }
      console.log('Sign-in successful!');
      checkAuthStatus(); 
      return {}; // Indicate sign-in success
    }
  } catch (error) {
    console.error('Unexpected error during sign-in:', error);
    return { error }; // Return the error
  }
}
// Sign-out function
async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      // Sign-out successful, update UI (e.g., redirect to home page)
      console.log('Sign-out successful!');
      checkAuthStatus(); // Update the UI based on the user's authentication status
    }
  } catch (error) {
    console.error('Unexpected error during sign-out:', error);
    // Handle unexpected errors
  }
}

// Call checkAuthStatus() on page load to initialize the UI
checkAuthStatus();

// Export the functions you want to use in other parts of your site
export { checkAuthStatus, signIn, signOut };
