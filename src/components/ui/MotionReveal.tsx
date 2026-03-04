"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  // Garante que o componente só execute a lógica de animação após o mount no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enquanto estiver no Servidor ou no primeiro render do Cliente,
  // renderizamos uma div simples para bater o HTML exatamente.
  if (!isMounted) {
    return (
      <div className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  // Se o usuário prefere movimento reduzido, removemos a animação
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}