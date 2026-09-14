"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Box,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Server,
  Quote,
  Star,
  Send,
} from "lucide-react";
import { SERVICES_LIST, WHY_CHOOSE_ANE, TESTIMONIALS } from "@/data/services";

export default function Services() {
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [selectedService, setSelectedService] = useState("3d-spatial");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const showcaseItems = [
    {
      title: "Precision 3D Modelling & Digital Twins",
      desc: "From sub-millimeter CAD component design to real-time WebGL digital twins of industrial plants, our spatial team crafts photorealistic and engineering-accurate models.",
      image: "/images/3d-modeling/turbine-digital-twin.jpg",
      tags: ["SUB-MILLIMETER CAD", "PHOTOREALISTIC RENDERING", "SPATIAL MESH"],
      stats: "12 / 12 SLOTS FILLED",
      status: "STATUS: PREMIUM",
    },
    {
      title: "Mission-Critical Cloud ERP & SaaS Mesh",
      desc: "High-concurrency microservices, automated ledger synchronization, and real-time distributed telemetry runtimes engineered with Go, Rust, and Next.js.",
      image: "/images/saas/enterprise-erp-dashboard.jpg",
      tags: ["EVENT-DRIVEN ARCHITECTURE", "SUB-10MS LATENCY", "SOC2 COMPLIANT"],
      stats: "99.99% RUNTIME SLA",
      status: "STATUS: ACTIVE",
    },
  ];

  const currentShowcase = showcaseItems[activeShowcaseIndex];

  const handleNextShowcase = () => {
    setActiveShowcaseIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrevShowcase = () => {
    setActiveShowcaseIndex(
      (prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length
    );
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setFormSubmitted(true);
  };

  return (
    <div style={{ paddingBottom: "60px" }}>
      {/* HERO SECTION */}
      <section style={{ paddingTop: "60px", paddingBottom: "50px" }}>
        <div className="container-custom">
          {/* Header Tag */}
          <div style={{ marginBottom: "20px" }}>
            <div className="tag-pill">
              <span className="tag-dot" />
              <span>• FULL-SPECTRUM TECHNICAL CAPABILITIES</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(34px, 5.5vw, 64px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Anything. Everything.
                <br />
                One <span className="gradient-text-cyan">Technology Partner.</span>
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--color-text-muted)",
                  maxWidth: "620px",
                  lineHeight: 1.6,
                  marginTop: "16px",
                }}
              >
                Seamlessly combining industrial-grade 3D spatial engineering with high-concurrency
                enterprise cloud architectures under a single unified engineering team.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary-cyan">
                <span>Schedule Consultation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="#dual-services"
                className="btn-secondary-dark"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <Download size={15} color="var(--color-cyan)" />
                <span>All Specifications</span>
              </a>
            </div>
          </div>

          {/* FEATURED SHOWCASE COMPONENT */}
          <div
            className="glass-card"
            style={{
              borderColor: "rgba(0, 240, 255, 0.25)",
              overflow: "hidden",
            }}
          >
            {/* Top Bar with Controls */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(11, 16, 26, 0.5)",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "11px",
                  color: "var(--color-cyan)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span className="tag-dot" />
                <span>FEATURED SPECIFICATION // 0{activeShowcaseIndex + 1} OF 0{showcaseItems.length}</span>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handlePrevShowcase}
                  style={{
                    background: "rgba(14, 20, 32, 0.9)",
                    border: "1px solid var(--border-subtle)",
                    color: "#FFFFFF",
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Previous Showcase"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextShowcase}
                  style={{
                    background: "rgba(14, 20, 32, 0.9)",
                    border: "1px solid var(--border-subtle)",
                    color: "#FFFFFF",
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Next Showcase"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Showcase Image with Telemetry Overlay */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "460px",
              }}
            >
              <Image
                src={currentShowcase.image}
                alt={currentShowcase.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(7, 9, 14, 0.95) 0%, rgba(7, 9, 14, 0.4) 40%, transparent 100%)",
                }}
              />

              {/* Bottom Showcase Info */}
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "28px",
                  right: "28px",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div style={{ maxWidth: "600px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                    {currentShowcase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono"
                        style={{
                          fontSize: "10px",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: "rgba(0, 240, 255, 0.15)",
                          border: "1px solid rgba(0, 240, 255, 0.3)",
                          color: "var(--color-cyan)",
                          fontWeight: 700,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {currentShowcase.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {currentShowcase.desc}
                  </p>
                </div>

                <div
                  className="font-mono"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    {currentShowcase.stats}
                  </span>
                  <span
                    style={{
                      fontSize: "10.5px",
                      color: "var(--color-cyan)",
                      fontWeight: 700,
                    }}
                  >
                    {currentShowcase.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY BLOCKQUOTE SECTION */}
      <section style={{ padding: "60px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <div
            className="glass-card"
            style={{
              padding: "48px 36px",
              maxWidth: "880px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(0, 240, 255, 0.1)",
                border: "1px solid rgba(0, 240, 255, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                color: "var(--color-cyan)",
              }}
            >
              <Quote size={20} />
            </div>

            <blockquote
              style={{
                fontSize: "clamp(17px, 2.2vw, 22px)",
                lineHeight: "1.6",
                fontWeight: 500,
                color: "#FFFFFF",
                fontStyle: "italic",
              }}
            >
              &ldquo;In the next era of industrial innovation, every physical product will demand a{" "}
              <span className="gradient-text-cyan" style={{ fontStyle: "normal", fontWeight: 700 }}>
                digital twin
              </span>
              , and every enterprise operation will demand{" "}
              <span className="gradient-text-amber" style={{ fontStyle: "normal", fontWeight: 700 }}>
                adaptive cloud intelligence
              </span>
              . ANE is built to deliver both with uncompromising precision.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* DUAL SERVICES SECTION */}
      <section id="dual-services" style={{ padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "48px" }}>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>// CORE SERVICE PILLARS</span>
            </div>
            <h2 className="section-title">About Our Dual Services</h2>
            <p className="section-desc" style={{ marginTop: "12px" }}>
              Two deep verticals executed under one roof, eliminating the friction between design,
              fabrication, and cloud delivery.
            </p>
          </div>

          {/* 2 Big Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "32px",
            }}
          >
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 0 28px 0",
                }}
              >
                {/* Header Tag */}
                <div
                  style={{
                    padding: "16px 24px",
                    borderBottom: "1px solid var(--border-subtle)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(11, 16, 26, 0.4)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background:
                        srv.id === "3d-spatial"
                          ? "rgba(0, 240, 255, 0.1)"
                          : "rgba(157, 78, 221, 0.1)",
                      border: `1px solid ${
                        srv.id === "3d-spatial" ? "rgba(0, 240, 255, 0.3)" : "rgba(157, 78, 221, 0.3)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: srv.id === "3d-spatial" ? "var(--color-cyan)" : "var(--color-purple)",
                    }}
                  >
                    {srv.id === "3d-spatial" ? <Box size={16} /> : <Server size={16} />}
                  </div>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: srv.id === "3d-spatial" ? "var(--color-cyan)" : "var(--color-purple)",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      background:
                        srv.id === "3d-spatial"
                          ? "rgba(0, 240, 255, 0.08)"
                          : "rgba(157, 78, 221, 0.08)",
                      border: `1px solid ${
                        srv.id === "3d-spatial" ? "rgba(0, 240, 255, 0.2)" : "rgba(157, 78, 221, 0.2)"
                      }`,
                    }}
                  >
                    {srv.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 28px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "var(--color-text-main)",
                      marginBottom: "10px",
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text-muted)",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {srv.description}
                  </p>

                  {/* Image Preview */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "210px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "24px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* 6 Capability Bullets Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                      marginBottom: "28px",
                    }}
                  >
                    {srv.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "12.5px",
                          color: "#CBD5E1",
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          color={srv.id === "3d-spatial" ? "var(--color-cyan)" : "var(--color-purple)"}
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={srv.linkHref}
                    className="font-mono"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: srv.id === "3d-spatial" ? "var(--color-cyan)" : "var(--color-purple)",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <span>{srv.linkText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ANE SECTION */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "48px" }}>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>// ARCHITECTURAL ADVANTAGE</span>
            </div>
            <h2 className="section-title">Why Choose ANE</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {WHY_CHOOSE_ANE.map((item) => (
              <div
                key={item.num}
                className="glass-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "var(--color-cyan)",
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "10px",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      background: "rgba(0, 240, 255, 0.08)",
                      color: "var(--color-text-dim)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--color-text-main)",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--color-text-muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY INDUSTRY PIONEERS (TESTIMONIALS) */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              <span className="tag-dot" />
              <span>// PROVEN TRACK RECORD</span>
            </div>
            <h2 className="section-title">Trusted by Industry Pioneers</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#E2E8F0",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(0, 240, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-cyan)",
                    }}
                  >
                    <Star size={16} fill="var(--color-cyan)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                      {t.author}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      {t.title}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTANT SCOPING FORM CTA BANNER */}
      <section style={{ padding: "40px 0" }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: "48px",
              border: "1px solid rgba(0, 240, 255, 0.25)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-tag">
                <span className="tag-dot" />
                <span>ACCELERATED DISPATCH PROTOCOL</span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  fontWeight: 800,
                  color: "var(--color-text-main)",
                  marginBottom: "14px",
                }}
              >
                Ready to build Anything &amp; Everything?
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                }}
              >
                Partner with ANE. We architect, model, and deploy world-class 3D spatial experiences,
                custom full-stack ERP systems, and sovereign hardware prototypes.
              </p>
            </div>

            {/* Quick Inquiry Form */}
            <div
              style={{
                backgroundColor: "var(--card-inner-bg)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(0, 255, 157, 0.1)",
                      border: "1px solid var(--color-mint)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px auto",
                      color: "var(--color-mint)",
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                    Scoping Request Dispatched
                  </h4>
                  <p className="font-mono" style={{ fontSize: "12px", color: "var(--color-cyan)" }}>
                    Telemetry ACK: [ID: {Math.floor(10000 + Math.random() * 90000)}]
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label className="cyber-label">WORK EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.corp"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="cyber-input"
                    />
                  </div>

                  <div>
                    <label className="cyber-label">SELECT SERVICE VECTOR</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="cyber-input"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="3d-spatial">3D Modelling &amp; Spatial Engineering</option>
                      <option value="saas-erp">Enterprise SaaS &amp; ERP Systems</option>
                      <option value="dual-stack">Dual-Native (Hardware + Cloud Suite)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary-cyan" style={{ width: "100%", marginTop: "8px" }}>
                    <span>Request Immediate Scoping Consultation</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
