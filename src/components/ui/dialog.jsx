import React, { useState } from "react";

export function Dialog({ children }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children }) {
  return <>{children}</>;
}

export function DialogContent({ children, ...props }) {
  return (
    <div className="bg-white p-4 rounded-xl border shadow" {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}
