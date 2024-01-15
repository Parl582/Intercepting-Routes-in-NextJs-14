"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

export default function DialogComponent({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <Dialog modal={true} defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className="py-4">
        <DialogHeader>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
