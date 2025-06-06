"use client";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SignInViewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    redirect("/dashboard");
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
          Sign in
        </CardTitle>
        <CardDescription>
          Sign in with your email and password to get started
        </CardDescription>
      </CardHeader>
      <CardContent className=" text-slate-800">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email*"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={error}
          />
          <Input
            label="Password*"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={error}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button variant="link" className="px-0 text-sm">
              Forgot password?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full text-slate-900 font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center text-slate-600">
        <p className="text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href={"/auth/sign-up"}>
            <Button
              variant="link"
              size="icon"
              className="ml-2 px-0 text-sm font-semibold"
            >
              Sign up
            </Button>
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
