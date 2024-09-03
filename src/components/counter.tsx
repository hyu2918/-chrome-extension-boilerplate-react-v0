'use client'

import React from 'react';
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold text-primary">Counter</h2>
      <p className="text-4xl font-semibold text-secondary-foreground">{count}</p>
      <div className="flex space-x-2">
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  )
}