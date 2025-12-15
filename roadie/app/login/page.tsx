import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0d10] via-[#12151a] to-[#0b0d10]">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            ROADIE
          </h1>
          <p className="text-muted-foreground mt-2">Cadastre-se</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
