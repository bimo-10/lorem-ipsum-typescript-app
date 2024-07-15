"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import data from "../../../data";
export default function MainLayout() {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string[]>([]);

  const handleGenerateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section>
      <h1 className="text-4xl font-light">Tired of being bored?</h1>
      <div className="flex justify-center items-center gap-4 my-8">
        <span>Paragraphs:</span>
        <Input
          type="number"
          max={data.length}
          min={1}
          onChange={(e) => setCount(+e.target.value)}
          value={count}
          className="w-20"
        />
        <Button onClick={handleGenerateSubmit} className="bg-teal-500">
          Generate
        </Button>
      </div>

      <div>
        {text.map((paragraph, index) => (
          <p key={index} className="my-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
