import { cn } from "@/lib/utils";
import { Cloud, File, Loader2 } from "lucide-react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Progress } from "../ui/progress";

const UploadDropZone = ({ className }: { className?: string }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress] = useState<number>(0);

  // const startSimulatedProgress = () => {
  //   setUploadProgress(0);

  //   const interval = setInterval(() => {
  //     setUploadProgress((prevProgress: number) => {
  //       if (prevProgress >= 95) {
  //         clearInterval(interval);
  //         return prevProgress;
  //       }
  //       return prevProgress + 5;
  //     });
  //   }, 500);
  //   return interval;
  // };

  return (
    <Dropzone
      multiple={false}
      disabled={isUploading}
      onDrop={async (acceptedFiles) => {
        console.log(`dropped`, acceptedFiles);
        setIsUploading(true);
      }}
    >
      {({ getInputProps, getRootProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className={cn(
            "my-2 h-64 w-full rounded-lg border border-dashed border-accent-foreground/20",
            className,
          )}
        >
          <div className="flex h-full w-full items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-background hover:bg-accent/25 dark:hover:bg-accent/25"
            >
              <div className="flex select-none flex-col items-center justify-center pb-6 pt-5">
                <Cloud className="mb-2 h-10 w-10 text-zinc-400" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span>Click to upload</span>or drag and drop
                </p>
                <p className="text-xs text-zinc-500">PDF (Up to 4MB)</p>
              </div>
              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200">
                  <div className="grid h-full place-items-center px-3 py-2">
                    <File className="h-4 w-4 text-primary" />
                  </div>
                  <div className="truncate px-3 py-2 text-sm">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <>
                  <div className="mx-auto mt-4 w-full max-w-xs">
                    <Progress
                      indicatorColor={
                        uploadProgress === 100 ? "bg-green-500" : ""
                      }
                      value={uploadProgress}
                      className="h-1 w-full bg-zinc-200"
                    />
                  </div>
                  {uploadProgress === 100 || uploadProgress >= 90 ? (
                    <div className="flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Redirecting...
                    </div>
                  ) : null}
                </>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export { UploadDropZone };
