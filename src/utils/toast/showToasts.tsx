// utils/toast.ts
import { toast } from "@/hooks/use-toast";

interface ToastProps {
  title?: string;
  description: string;
}



export const showSuccessToast = ({
  title = "Success",
  description,
}: ToastProps) => {
  toast({
    title,
    description,
    style: {
      backgroundColor: "black",
      color: "#fff",
    },
  className: "w-full border border-gray-700",
  });
};

export const showErrorToast = ({
  title = "Error",
  description,
}: ToastProps) => {
  toast({
    title,
    description,
    style: {
      backgroundColor: "black",
      color: "#fff",
    },
  className: "w-full border border-gray-700",
  });
};