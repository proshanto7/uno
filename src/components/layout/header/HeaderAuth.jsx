"use client";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderAuth = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("login"); // "login" | "register" | "forgot-email"
  const [resetLinkSent, setResetLinkSent] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setView("login"); // reset to login next time it opens
          setResetLinkSent(false);
        }
      }}
    >
      <SheetTrigger className="inline-flex cursor-pointer border-0 bg-transparent p-0">
        <UserRound className="h-5 w-5 text-white" />
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="flex-row items-center justify-between space-y-0 border-b border-border px-6 py-4">
          <SheetTitle className="text-xs font-semibold tracking-widest text-primary-text">
            {view === "login" && "LOGIN"}
            {view === "register" && "CREATE AN ACCOUNT"}
            {view === "forgot-email" && "RESET PASSWORD"}
          </SheetTitle>
          <SheetClose className="cursor-pointer rounded-sm text-primary-text opacity-70 transition-opacity hover:opacity-100">
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        {view === "login" && (
          <form className="flex flex-1 flex-col gap-5 px-6 py-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="login-username" className="sr-only">
                Username or email address
              </Label>
              <Input
                id="login-username"
                type="text"
                placeholder="Username or email address *"
                className="rounded-none border-border py-5 text-secondary-text placeholder:text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="login-password"
                className="text-xs text-primary-text"
              >
                Password *
              </Label>
              <Input
                id="login-password"
                type="password"
                className="rounded-none border-border py-5 text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember-me"
                  className="cursor-pointer rounded-none border-border data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="remember-me"
                  className="cursor-pointer text-xs text-secondary-text"
                >
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                onClick={() => setView("forgot-email")}
                className="cursor-pointer text-xs text-secondary-text underline-offset-2 hover:text-secondary hover:underline"
              >
                Lost password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer rounded-none bg-primary-text py-6 text-sm tracking-widest text-primary-foreground hover:bg-primary-text/90"
            >
              LOG IN
            </Button>

            <p className="text-center text-xs text-secondary-text">
              No account yet?{" "}
              <button
                type="button"
                onClick={() => setView("register")}
                className="cursor-pointer text-primary-text underline underline-offset-2 hover:text-secondary"
              >
                Create Account
              </button>
            </p>
          </form>
        )}

        {view === "register" && (
          <form className="flex flex-1 flex-col gap-5 px-6 py-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="reg-username" className="sr-only">
                Username
              </Label>
              <Input
                id="reg-username"
                type="text"
                placeholder="Username"
                className="rounded-none border-border py-5 text-secondary-text placeholder:text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="reg-email" className="sr-only">
                Email address
              </Label>
              <Input
                id="reg-email"
                type="email"
                placeholder="Email address *"
                className="rounded-none border-border py-5 text-secondary-text placeholder:text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="reg-password"
                className="text-xs text-primary-text"
              >
                Password *
              </Label>
              <Input
                id="reg-password"
                type="password"
                className="rounded-none border-border py-5 text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
              />
            </div>

            <p className="text-xs leading-relaxed text-secondary-text">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our{" "}
              <a
                href="#"
                className="text-primary-text underline underline-offset-2 hover:text-secondary"
              >
                privacy policy
              </a>
              .
            </p>

            <Button
              type="submit"
              className="w-full cursor-pointer rounded-none bg-primary-text py-6 text-sm tracking-widest text-primary-foreground hover:bg-primary-text/90"
            >
              REGISTER
            </Button>

            <p className="text-center text-xs text-secondary-text">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="cursor-pointer text-primary-text underline underline-offset-2 hover:text-secondary"
              >
                Log in
              </button>
            </p>
          </form>
        )}

        {view === "forgot-email" && (
          <div className="flex flex-1 flex-col px-6 py-6">
            {resetLinkSent ? (
              <div className="flex flex-1 flex-col gap-5">
                <p className="text-xs leading-relaxed text-secondary-text">
                  If an account exists for that email, we've sent a link to
                  reset your password. Check your inbox (and spam folder).
                </p>
                <p className="text-center text-xs text-secondary-text">
                  <button
                    type="button"
                    onClick={() => {
                      setView("login");
                      setResetLinkSent(false);
                    }}
                    className="cursor-pointer text-primary-text underline underline-offset-2 hover:text-secondary"
                  >
                    Back to login
                  </button>
                </p>
              </div>
            ) : (
              <form
                className="flex flex-1 flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: call API to email the user a password-reset link
                  setResetLinkSent(true);
                }}
              >
                <p className="text-xs leading-relaxed text-secondary-text">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="forgot-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="forgot-email"
                    type="email"
                    required
                    placeholder="Email address *"
                    className="rounded-none border-border py-5 text-secondary-text placeholder:text-secondary-text focus-visible:border-secondary focus-visible:ring-secondary/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer rounded-none bg-primary-text py-6 text-sm tracking-widest text-primary-foreground hover:bg-primary-text/90"
                >
                  SEND RESET LINK
                </Button>

                <p className="text-center text-xs text-secondary-text">
                  <button
                    type="button"
                    onClick={() => setView("login")}
                    className="cursor-pointer text-primary-text underline underline-offset-2 hover:text-secondary"
                  >
                    Back to login
                  </button>
                </p>
              </form>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderAuth;