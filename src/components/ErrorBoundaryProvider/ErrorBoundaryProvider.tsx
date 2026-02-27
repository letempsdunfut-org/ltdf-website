"use client";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toaster } from "@/components/ui/toaster"

export default function ErrorBoundaryProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <ErrorBoundary
      fallbackRender={() => children}
      onError={(error) => {
        toaster.create({
          title: error instanceof Error ? error.message : "An unknown error occurred",
          closable: true,
          type: "error",
        });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
