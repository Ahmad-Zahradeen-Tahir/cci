import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Validate data against schema first (client-side check)
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Handle validation error from backend
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        // Handle server error
        if (res.status === 500) {
           const error = api.contact.create.responses[500].parse(await res.json());
           throw new Error(error.message || "Server error");
        }
        throw new Error("Failed to send message");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "default", 
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
