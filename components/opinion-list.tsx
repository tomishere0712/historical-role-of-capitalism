"use client";

import { useEffect, useState } from "react";
import { useOpinions } from "@/lib/contexts/opinions-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function OpinionList() {
  const { opinions, loading, error, voteForOpinion } = useOpinions();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getOpinionRank = (likes: number) => {
    if (!opinions) return -1;
    const sortedOpinions = [...opinions].sort((a, b) => b.likes - a.likes);
    const index = sortedOpinions.findIndex((op) => op.likes === likes);
    return index < 3 ? index + 1 : -1;
  };

  const topOpinions = opinions 
    ? [...opinions].sort((a, b) => b.likes - a.likes).slice(0, 3)
    : [];

  return (
    <div className="relative">
      <ScrollArea className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg border bg-background/50 backdrop-blur-sm shadow-sm">
        <div className="space-y-4 p-4">
          {!isClient || loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="p-4">
                <h3 className="font-bold text-lg bg-gray-200 animate-pulse h-4 w-1/4 rounded mb-4"></h3>
                <p className="bg-gray-200 animate-pulse h-3 w-3/4 rounded mb-2"></p>
                <p className="bg-gray-200 animate-pulse h-3 w-1/2 rounded mb-4"></p>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 animate-pulse h-8 w-20 rounded"></div>
                </div>
              </Card>
            ))
          ) : error ? (
            <Card className="p-4">
              <h3 className="font-bold text-lg text-red-500">Lỗi</h3>
              <p className="mt-2 text-red-500">{error}</p>
            </Card>
          ) : opinions.length === 0 ? (
            <Card className="p-4">
              <h3 className="font-bold text-lg">Chưa có ý kiến</h3>
              <p className="mt-2">Chưa có ý kiến nào được chia sẻ.</p>
            </Card>
          ) : (
            <>
              {/* Top 3 Section */}
              {topOpinions.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-amber-500">Top ý kiến được yêu thích 🏆</h4>
                  <div className="space-y-4">
                    {topOpinions.map((opinion, index) => (
                      <Card 
                        key={opinion.name} 
                        className={`p-4 relative border-2 transition-all ${
                          index === 0 ? 'border-yellow-500 bg-yellow-50/10' :
                          index === 1 ? 'border-gray-400 bg-gray-50/10' :
                          'border-amber-700 bg-amber-50/10'
                        }`}
                      >
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg
                          ${index === 0 ? 'bg-yellow-500' :
                            index === 1 ? 'bg-gray-400' :
                            'bg-amber-700'
                          }"
                        >
                          #{index + 1}
                        </div>
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          {opinion.name}
                          <span className="text-sm font-normal">
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                          </span>
                        </h3>
                        <p className="mt-2">{opinion.opinion}</p>
                        <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                          <span className="font-semibold text-amber-600">{opinion.likes} lượt thích</span>
                          <span>•</span>
                          <span>{isClient ? formatDate(opinion.createdAt) : "..."}</span>
                        </div>
                        <Button
                          onClick={() => voteForOpinion(opinion.name)}
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          👍 Vote
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Opinions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Các ý kiến khác</h4>
                {opinions
                  .filter(op => !topOpinions.find(top => top.name === op.name))
                  .map((opinion) => (
                    <Card key={opinion.name} className="p-4">
                      <h3 className="font-bold text-lg">{opinion.name}</h3>
                      <p className="mt-2">{opinion.opinion}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                        <span>{opinion.likes} lượt thích</span>
                        <span>•</span>
                        <span>{isClient ? formatDate(opinion.createdAt) : "..."}</span>
                      </div>
                      <Button
                        onClick={() => voteForOpinion(opinion.name)}
                        variant="outline"
                        size="sm"
                        className="mt-2"
                      >
                        👍 Vote
                      </Button>
                    </Card>
                  ))}
              </div>
            </>
          )}
        </div>
      </ScrollArea>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
}
