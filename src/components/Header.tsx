"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "static",
        zIndex: 50,
        width: "100%",
        backgroundColor: "var(--header-bg)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(0, 240, 255, 0.08)",
              border: "1px dashed var(--border-active)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-cyan)",
            }}
          >
            <Shield size={18} strokeWidth={2.2} />
          </div>
          <div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                color: "var(--color-text-main)",
                lineHeight: 1,
              }}
            >
              ANE
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: "8.5px",
                fontWeight: 700,
                color: "var(--color-cyan)",
                letterSpacing: "0.22em",
                marginTop: "3px",
              }}
            >
              ANE.SERVICE
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "var(--card-inner-bg)",
            padding: "4px 8px",
            borderRadius: "9999px",
            border: "1px solid var(--border-subtle)",
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--color-cyan)" : "var(--color-text-muted)",
                  backgroundColor: isActive
                    ? "rgba(0, 240, 255, 0.12)"
                    : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  border: isActive
                    ? "1px solid var(--border-active)"
                    : "1px solid transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text-main)",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
          className="mobile-drawer"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: pathname === item.href ? "var(--color-cyan)" : "var(--color-text-muted)",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="font-mono"
            style={{
              fontSize: "11px",
              color: "var(--color-text-dim)",
              marginTop: "8px",
              paddingTop: "12px",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Terminal size={12} color="var(--color-cyan)" />
            NODE: KOKRAJHAP_01 // SYSTEM RUNNING
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
