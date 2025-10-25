"use client";

import { OpinionForm } from "./opinion-form";
import { OpinionList } from "./opinion-list";

export function OpinionsSection() {
  return (
    <section id="opinions" className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ý kiến của cộng đồng
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Chia sẻ ý kiến của bạn</h3>
          <OpinionForm />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Ý kiến đã chia sẻ</h3>
          <OpinionList />
        </div>
      </div>
    </section>
  );
}
