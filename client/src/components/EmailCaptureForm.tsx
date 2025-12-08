import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { insertSubscriberSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Loader2, CheckCircle } from "lucide-react";

interface EmailCaptureFormProps {
  variant?: "inline" | "card";
  onSuccess?: () => void;
}

const emailFormSchema = insertSubscriberSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormValues = z.infer<typeof emailFormSchema>;

export default function EmailCaptureForm({ variant = "inline", onSuccess }: EmailCaptureFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: EmailFormValues) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing. We'll keep you updated.",
      });
      onSuccess?.();
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: EmailFormValues) => {
    subscribeMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 py-4 text-green-600 dark:text-green-400">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">Thank you for subscribing!</span>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-amber-500" />
          <span className="font-medium text-foreground text-sm">Stay Updated</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Subscribe to receive updates about new features and content.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col sm:flex-row gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      data-testid="input-email-subscribe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={subscribeMutation.isPending}
              data-testid="button-subscribe"
            >
              {subscribeMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  data-testid="input-email-subscribe-popup"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={subscribeMutation.isPending}
          data-testid="button-subscribe-popup"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </Form>
  );
}
