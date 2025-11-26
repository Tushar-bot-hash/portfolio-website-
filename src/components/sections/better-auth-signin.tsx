// components/better-auth-signin.tsx - SEPARATE FILE
"use client";

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { signIn } from '@/lib/auth-client';

export function BetterAuthSignIn() {
  const handleSignIn = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <Button 
        onClick={handleSignIn} 
        variant="outline" 
        size="lg" 
        className="gap-2"
      >
        <Github className="h-5 w-5" />
        Sign in with GitHub
      </Button>
      <span className="text-xs text-muted-foreground">Powered by Better Auth</span>
    </div>
  );
}