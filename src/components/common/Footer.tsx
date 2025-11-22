import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 footer-gradient-blur py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-foreground/80 body-text">
          built by yesh.dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
