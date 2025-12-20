import { AuthForm } from "@/components/auth-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-[350px] flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
