import heroImg from "../../assets/image.png";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-1 xl:min-h-[600px] ">
      <div className="flex items-center justify-center py-12 ">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <a href={`https://secure.splitwise.com/oauth/authorize?response_type=code&client_id=SNlyhuTSCKQ1gkYZnmn67jTAzx1JeOimNafpwU7a`} >
            <Button type="submit" className="w-full hover:bg-green-700">
              Login
            </Button>
            </a>
            
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm cursor-pointer">
            Don&apos;t have an account?{" "}
            <a onClick={()=>navigate("/signin")} className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

