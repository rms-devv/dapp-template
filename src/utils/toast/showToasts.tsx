// utils/toast.ts
import { toast } from "@/hooks/use-toast";

interface SuccessToastProps {
  title?: string;
  description: string;
}

export const showSuccessToast = ({
  title = "Success",
  description,
}: SuccessToastProps) => {
  toast({
    title,
    description,
    className: "w-full border border-gray-700 bg-black text-white",
  });
};

export const showErrorToast = (description: string) => {
  toast({
    title: "Error",
    description,
    variant: "destructive",
    className: "w-full border border-gray-700 bg-black text-white",
  });
};
