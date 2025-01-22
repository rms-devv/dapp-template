"use client";
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Hero } from "@/components/Home";

const Dashboard: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <Hero />
    </div>
  );
};

export default Dashboard;
