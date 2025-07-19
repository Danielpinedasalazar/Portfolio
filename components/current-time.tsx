"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const update = () => setTime(new Date());

    update(); // actualiza al montar
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  // ⚠️ Si aún no ha montado, no renderizar nada
  if (!time) return null;

  return (
    <div className="text-white/60 text-sm hidden lg:block">
      {time.toLocaleTimeString()}
    </div>
  );
}
