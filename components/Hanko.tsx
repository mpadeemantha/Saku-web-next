"use client";

import React from "react";

const Hanko = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
        <div className={`hanko text-sm ${className}`}>
            <span className="writing-vertical p-1">{text}</span>
        </div>
    );
};

export default Hanko;
