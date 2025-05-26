import SignInViewPage from "@/features/auth/components/signIn-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Sign In",
  description: "Sign In page.",
};

export default async function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <SignInViewPage />
      </div>
    </div>
  );
}
