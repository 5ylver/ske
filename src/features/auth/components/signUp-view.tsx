"use client";
import { useState } from "react";
import Link from "next/link";

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

export default function SignUpViewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold tracking-tight text-primary">
          Create account
        </CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            error={error}
          />

          <Input
            label="Email"
            id="username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={error}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            id="password-confirm"
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="flex items-center space-x-2 text-slate-800">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Button variant="link" className="px-0 text-sm h-auto">
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button variant="link" className="px-0 text-sm h-auto">
                Privacy Policy
              </Button>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full text-slate-900 font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center text-slate-600">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={"/auth/sign-in"}>
            <Button variant="link" className="px-0 text-sm font-semibold">
              Sign in
            </Button>
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
