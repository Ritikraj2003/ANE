import React from "react";
import Link from "next/link";
import { Shield, Github, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Spatial & 3D Modeling", href: "/services" },
    { label: "Cloud & Edge Infrastructure", href: "/services" },
    { label: "Precision Hardware & Foundry", href: "/services" },
    { label: "Enterprise Software Platforms", href: "/services" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products & Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github size={18} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin size={18} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter size={18} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram size={18} />,
    },
    {
      name: "Email",
      href: "mailto:contact@ane.technology",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "56px",
        paddingBottom: "32px",
        marginTop: "80px",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="container-custom">
        {/* Main Footer Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand & Mission */}
          <div style={{ maxWidth: "340px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(0, 240, 255, 0.08)",
                  border: "1px dashed var(--border-active)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-cyan)",
                }}
              >
                <Shield size={16} strokeWidth={2.2} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "17px",
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
                    letterSpacing: "0.2em",
                    marginTop: "2px",
                  }}
                >
                  ANE.SERVICE
                </div>
              </div>
            </Link>

            <p
              style={{
                fontSize: "13.5px",
                lineHeight: "1.65",
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              Synthesizing precision physical hardware, spatial computing, and high-performance cloud architectures.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12.5px",
                color: "var(--color-text-dim)",
              }}
            >
              <MapPin size={14} color="var(--color-cyan)" />
              <span>Kokrajhar, Assam, India</span>
            </div>
          </div>

          {/* ANE Services */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-cyan)",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              ANE Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--color-text-muted)",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                    }}
                    className="footer-clean-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-text-dim)",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--color-text-muted)",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                    }}
                    className="footer-clean-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Connect */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-text-dim)",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Connect
            </h4>
            <p
              style={{
                fontSize: "13.5px",
                color: "var(--color-text-muted)",
                marginBottom: "16px",
                lineHeight: "1.5",
              }}
            >
              Follow our engineering dispatches and open developments.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="footer-social-btn"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Bottom Copyright Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "12.5px",
              color: "var(--color-text-dim)",
            }}
          >
            © {currentYear} ANE Technology Corp. All rights reserved.
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: "11.5px",
              color: "var(--color-text-dim)",
              letterSpacing: "0.05em",
            }}
          >
            ANE.SERVICE // ASSAM, INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
