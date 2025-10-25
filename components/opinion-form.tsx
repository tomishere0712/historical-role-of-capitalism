"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useOpinions } from "@/lib/contexts/opinions-context";
import { Card } from "@/components/ui/card";

export function OpinionForm() {
  const [name, setName] = useState("");
  const [opinion, setOpinion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addNewOpinion } = useOpinions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !opinion) return;

    try {
      setIsSubmitting(true);
      await addNewOpinion(name, opinion);
      setName("");
      setOpinion("");
    } catch (error) {
      console.error("Failed to submit opinion:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Textarea
          placeholder="Chia sẻ ý kiến của bạn..."
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          disabled={isSubmitting}
          rows={4}
        />
      </div>
      <Button type="submit" disabled={isSubmitting || !name || !opinion}>
        {isSubmitting ? "Đang gửi..." : "Chia sẻ ý kiến"}
      </Button>
    </form>
  );
}
