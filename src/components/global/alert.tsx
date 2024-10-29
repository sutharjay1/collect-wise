import { CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "success" | "error" | "warning" | "info";

type AlertProps = {
  title: string;
  description: string;
  type?: AlertType;
};

const Alert = ({ title, description, type = "success" }: AlertProps) => {
  const getAlertStyles = (type: AlertType) => {
    switch (type) {
      case "success":
        return "border-green-700 bg-gradient-to-r from-green-700/60 to-transparent";
      case "error":
        return "border-red-700 bg-gradient-to-r from-red-700/60 to-transparent";
      case "warning":
        return "border-yellow-700 bg-gradient-to-r from-yellow-700/60 to-transparent";
      case "info":
        return "border-blue-700 bg-gradient-to-r from-blue-700/60 to-transparent";
    }
  };

  const getIcon = (type: AlertType) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-6 w-6 text-green-800" />;
      case "error":
        return <XCircle className="h-6 w-6 text-red-800" />;
      case "warning":
        return <AlertCircle className="h-6 w-6 text-yellow-800" />;
      case "info":
        return <Info className="h-6 w-6 text-blue-800" />;
    }
  };

  return (
    <div
      className={cn(
        "flex items-start rounded-xl border p-4",
        getAlertStyles(type),
      )}
    >
      <div className="mr-3 flex flex-shrink-0 items-center justify-center">
        {getIcon(type)}
      </div>
      <div className="flex flex-col items-start justify-start">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-200">
          {title}
        </h3>
        <div className="font-geistSans text-sm text-zinc-900/90 dark:text-zinc-200/90">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Alert;
