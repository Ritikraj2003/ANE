"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Cpu,
  Radio,
  CheckCircle,
  Activity,
  Layers,
  Globe,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Lock,
  HelpCircle,
  Laptop,
  Headphones,
} from "lucide-react";

export default function Home() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  // 1-2 line Quotation Slider State & Data (NO BOX CONTAINER)
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const quotationSlides = [
    {
      id: "useful-well-last",
      tag: "FOUNDATIONAL MAXIM",
      quote: (
        <span>
          Make it <span className="gradient-text-cyan">useful.</span>{" "}
          Make it <span style={{ color: "var(--color-purple)", fontWeight: 900 }}>well.</span>{" "}
          Make it <span className="gradient-text-amber">last.</span>
        </span>
      ),
      sub: "Resilient physical hardware married to timeless, sovereign computing.",
      author: "ANE PHILOSOPHY // KOKRAJHAR",
    },
    {
      id: "precision-code",
      tag: "CORE PRINCIPLE",
      quote: (
        <span>
          Precision in <span className="gradient-text-cyan">physical matter.</span>{" "}
          Sovereignty in <span className="gradient-text-amber">code.</span>
        </span>
      ),
      sub: "Zero-compromise engineering from sub-micron tolerances to global edge clusters.",
      author: "ARCHITECTURAL CORE // ASSAM",
    },
    {
      id: "physical-digital",
      tag: "SYSTEM INQUIRY",
      quote: (
        <span>
          Where hardware ends,{" "}
          <span className="gradient-text-cyan">spatial computation begins.</span>
        </span>
      ),
      sub: "Unifying 5-axis CNC foundry fabrication with real-time 3D spatial twins.",
      author: "SPATIAL SYNTHESIS // ANE LABS",
    },
    {
      id: "tolerance",
      tag: "AEROSPACE TOLERANCE",
      quote: (
        <span>
          Quantum tolerance of{" "}
          <span className="gradient-text-cyan">±0.002mm</span> meets{" "}
          <span className="gradient-text-amber">hyperscale cloud.</span>
        </span>
      ),
      sub: "Optical geometric scanning of every millimeter before firmware integration.",
      author: "DETERMINISTIC FOUNDRY // BTR",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % quotationSlides.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [quotationSlides.length]);

  const heroSlides = [
    {
      image: "/images/3d-modeling/turbine-digital-twin.jpg",
      title: "SPATIAL DIGITAL TWIN",
      meta: "CAD / CAM PRECISION SYNTHESIS",
    },
    {
      image: "/images/about/lab-foundry.jpg",
      title: "KOKRAJHAR HARDWARE LAB & FOUNDRY",
      meta: "5-AXIS CNC HARDWARE ENCLAVE",
    },
    {
      image: "/images/hero/pillar-cloud.jpg",
      title: "AUTONOMOUS CLOUD MESH",
      meta: "WASM EDGE RUNTIME MATRIX",
    },
    {
      image: "/images/hero/pillar-hardware.jpg",
      title: "MICRO-TOLERANCE ENCLOSURES",
      meta: "AERO-GRADE 7075-T6 ALLOY",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Core Services Data: Exactly 2 Boxes (1 for 3D Modeling, 1 for Web / App Development & SaaS)
  const homeServices = [
    {
      id: "spatial-3d",
      tag: "SPATIAL COMPUTING & 3D",
      title: "3D Modeling & Digital Twins",
      desc: "High-precision parametric STEP/CAD modeling, aerodynamic CFD simulations, and real-time interactive 60 FPS WebGL 3D viewers for complex engineering assemblies.",
      icon: <Box size={24} color="var(--color-cyan)" />,
      image: "/images/3d-modeling/turbine-digital-twin.jpg",
      features: [
        "Parametric STEP, IGES & SolidWorks CAD Generation",
        "Real-Time Interactive 60 FPS WebGL 3D Viewers",
        "Aerodynamic & Computational Fluid Dynamics (CFD)",
        "Physical-Digital Telemetry Synchronization",
      ],
      link: "/services",
      linkText: "Explore 3D Modeling Services",
    },
    {
      id: "web-app-saas",
      tag: "SOFTWARE & CLOUD PLATFORMS",
      title: "Web / App Development & SaaS",
      desc: "Custom high-performance web applications, multi-tenant enterprise SaaS systems, distributed edge backbones, and intuitive operational dashboards.",
      icon: <Globe size={24} color="var(--color-purple)" />,
      image: "/images/saas/enterprise-erp-dashboard.jpg",
      features: [
        "Full-Stack Web & Mobile Application Engineering",
        "Enterprise SaaS & Multi-Tenant Distributed Architecture",
        "High-Concurrency Edge APIs & Real-Time WebSockets",
        "Mission-Critical Security, Zero-Trust & M-NDA Protected",
      ],
      link: "/services",
      linkText: "Explore Web & SaaS Services",
    },
  ];


  // Why Choose Us Data (Section 4: Why Choose Us - Exactly 3 Cards)
  const whyChooseUsPoints = [
    {
      icon: <Shield size={26} color="#FFFFFF" strokeWidth={2.2} />,
      title: "Secure & Reliable",
      desc: "Bank-grade zero-trust security, strict M-NDA protocols, and 100% sovereign client IP ownership for your designs and data.",
    },
    {
      icon: <Laptop size={26} color="#FFFFFF" strokeWidth={2.2} />,
      title: "Easy to Use",
      desc: "Intuitive operational dashboards, automated edge workflows, and clean APIs engineered for effortless control and rapid adoption.",
    },
    {
      icon: <Headphones size={26} color="#FFFFFF" strokeWidth={2.2} />,
      title: "24/7 Support",
      desc: "Direct technical assistance and dedicated engineering collaboration with lead architects ready to help anytime.",
    },
  ];

  // Common Questions Data (Section 6: Placed at the LAST before CTA)
  const homeQuestions = [
    {
      q: "What does ANE Technology specialize in?",
      a: "ANE is a technology company from Kokrajhar, Assam, synthesizing high-precision physical hardware (5-axis CNC enclosures, aerospace alloys) with spatial computing (real-time 3D digital twins) and high-performance sovereign cloud architectures.",
    },
    {
      q: "How do your hardware and cloud systems communicate together?",
      a: "Our hardware systems embed dedicated micro-telemetry controllers that stream real-time sensor metrics through WebAssembly edge runtimes to our distributed cloud mesh, allowing live 3D digital twin tracking and remote diagnostics.",
    },
    {
      q: "Can clients commission custom hardware fabrication or custom software?",
      a: "Yes. We operate dedicated engineering pods for partner companies. We handle end-to-end execution—from initial CAD STEP schematics and material selection to CNC milling, embedded firmware, and production cloud applications under a signed M-NDA.",
    },
    {
      q: "Where is ANE located and can we visit the physical facilities?",
      a: "Our primary hardware foundry and deep-tech research lab are located in the Kokrajhar Fabrication Enclave, Bodoland Territorial Region (BTR), Assam, India. Facility visits and on-site prototyping clearances are available by appointment.",
    },
    {
      q: "What are typical delivery timelines for project sprints?",
      a: "Seed MVPs and rapid functional prototypes are delivered in 3 to 4 week sprints. Complete production-grade hardware enclosures and distributed enterprise platforms typically require 6 to 12 weeks.",
    },
  ];

  return (
    <div style={{ paddingBottom: "40px" }}>
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE SLIDER */}
      <section
        style={{
          position: "relative",
          paddingTop: "70px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        {/* Background Image Slide Track */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`hero-slide-item ${currentSlide === idx ? "active" : ""}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}

          {/* Adaptive Dual-Theme Mask Overlay */}
          <div
            className="hero-slider-overlay"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
            }}
          />
        </div>

        <div className="container-custom" style={{ textAlign: "center", position: "relative", zIndex: 5 }}>
          {/* Live Deployment Tag */}
          <div style={{ display: "inline-block", marginBottom: "28px" }}>
            <div className="tag-pill">
              <span className="tag-dot" />
              <span>PROTOCOL: V2 // LIVE DEPLOYMENT | 26.4014° N, 90.2727° E</span>
            </div>
          </div>

          {/* Main Hero Headline */}
          <h1
            className="hero-title-text"
            style={{
              fontSize: "clamp(34px, 5.5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
              margin: "0 auto 24px auto",
            }}
          >
            Engineering the <span className="gradient-text-amber">Physical &</span>{" "}
            <span className="gradient-text-cyan">Digital</span> Frontier
          </h1>

          {/* Hero Subtitle */}
          <p
            className="hero-subtitle-text"
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.6,
              color: "var(--color-text-muted)",
              maxWidth: "740px",
              margin: "0 auto 36px auto",
              fontWeight: 500,
            }}
          >
            ANE is a technology company from Kokrajhar, Assam, synthesizing precision physical hardware,
            spatial computing, and high-performance cloud architectures.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <Link href="/services" className="btn-primary-white">
              <span>Explore Ecosystem</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Background Slide Indicator Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "44px",
              padding: "7px 18px",
              background: "var(--bg-card)",
              borderRadius: "9999px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.title}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  background: currentSlide === idx ? "var(--color-cyan)" : "var(--border-subtle)",
                  border: "none",
                  height: "5px",
                  width: currentSlide === idx ? "32px" : "12px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: currentSlide === idx ? "0 0 10px var(--color-cyan)" : "none",
                }}
                title={slide.title}
              />
            ))}
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                color: "var(--color-text-main)",
                marginLeft: "6px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "var(--color-cyan)" }}>[{currentSlide + 1}/4]</span>{" "}
              {heroSlides[currentSlide].title}
            </span>
          </div>

          {/* 3-Part Telemetry Status Bar */}
          <div
            className="telemetry-bar"
            style={{
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <div className="telemetry-item" style={{ textAlign: "left" }}>
              <span className="telemetry-label">PHYSICAL</span>
              <span className="telemetry-value" style={{ color: "var(--color-cyan)" }}>
                Quantum Tolerance ±0.002mm
              </span>
            </div>

            <div
              style={{
                width: "1px",
                height: "36px",
                background: "var(--border-subtle)",
                display: "none",
              }}
              className="telemetry-divider"
            />

            <div className="telemetry-item" style={{ textAlign: "left" }}>
              <span className="telemetry-label">SYNTHETIC</span>
              <span className="telemetry-value">Global Mesh Latency 12ms p99</span>
            </div>

            <div
              style={{
                width: "1px",
                height: "36px",
                background: "var(--border-subtle)",
                display: "none",
              }}
              className="telemetry-divider"
            />

            <div className="telemetry-item" style={{ textAlign: "left" }}>
              <span className="telemetry-label">RUNTIME</span>
              <span
                className="telemetry-value"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="tag-dot-mint" />
                <span>System Synthesis • ACTIVE FULL DUPLEX</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUOTATION SECTION (Box-free: clean, seamless typography floating directly on page) */}
      <section
        style={{
          padding: "54px 0 28px 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Subtle Tag Indicator */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <span className="tag-dot" />
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "var(--color-cyan)",
              }}
            >
              {quotationSlides[activeQuoteIndex].tag}
            </span>
          </div>

          {/* 1-2 Lines Punchy Quote - NO CARD BOX */}
          <blockquote
            style={{
              fontSize: "clamp(24px, 3.8vw, 40px)",
              fontWeight: 900,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              color: "var(--color-text-main)",
              margin: "0 0 12px 0",
            }}
          >
            “{quotationSlides[activeQuoteIndex].quote}”
          </blockquote>

          <p
            style={{
              fontSize: "14.5px",
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto 22px auto",
              lineHeight: 1.6,
            }}
          >
            {quotationSlides[activeQuoteIndex].sub}
          </p>

          {/* Seamless navigation dots & attribution */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {quotationSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveQuoteIndex(idx)}
                  style={{
                    height: "4px",
                    width: activeQuoteIndex === idx ? "26px" : "8px",
                    borderRadius: "2px",
                    background:
                      activeQuoteIndex === idx ? "var(--color-cyan)" : "var(--border-subtle)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                  title={slide.tag}
                  aria-label={`Quotation slide ${idx + 1}`}
                />
              ))}
            </div>

            <span
              className="font-mono"
              style={{
                fontSize: "10.5px",
                color: "var(--color-text-dim)",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              // {quotationSlides[activeQuoteIndex].author}
            </span>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section style={{ padding: "60px 0 50px 0" }}>
        <div className="container-custom">
          <div
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 48px auto",
            }}
          >
            <div
              className="section-tag"
              style={{ justifyContent: "center", marginBottom: "12px" }}
            >
              <span className="tag-dot" />
              <span>// CAPABILITIES &amp; ENGINEERING SPECTRUM</span>
            </div>
            <h2 className="section-title" style={{ fontSize: "36px", marginBottom: "8px" }}>
              Our Services
            </h2>
            {/* Cyan Accent Bar Under Title matching Why Choose Us */}
            <div
              style={{
                width: "44px",
                height: "3px",
                backgroundColor: "var(--color-cyan)",
                borderRadius: "2px",
                margin: "12px auto 16px auto",
              }}
            />
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Specialized execution across spatial 3D digital twins and full-scale web application &amp; enterprise SaaS development.
            </p>
          </div>

          {/* 2 Service Boxes Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "32px",
            }}
          >
            {homeServices.map((service) => (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                }}
              >
                {/* Visual Image Preview */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      fontSize: "10.5px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "var(--color-cyan)",
                      background: "rgba(7, 9, 14, 0.85)",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-active)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(0, 240, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "var(--color-text-main)",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.6",
                      color: "var(--color-text-muted)",
                      marginBottom: "18px",
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Key Capabilities List */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 22px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {service.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12.5px",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        <CheckCircle size={13} color="var(--color-cyan)" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Service Link */}
                  <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid var(--border-subtle)" }}>
                    <Link
                      href={service.link}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: "var(--color-cyan)",
                        textDecoration: "none",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION (Exactly 3 Boxes) */}
      <section style={{ padding: "70px 0" }}>
        <div className="container-custom">
          <div
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 48px auto",
            }}
          >
            <h2 className="section-title" style={{ fontSize: "36px", marginBottom: "8px" }}>
              Why Choose Us
            </h2>
            {/* Cyan Accent Bar Under Title matching design */}
            <div
              style={{
                width: "44px",
                height: "3px",
                backgroundColor: "var(--color-cyan)",
                borderRadius: "2px",
                margin: "12px auto 16px auto",
              }}
            />
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Premium engineering and technology solutions designed to give your enterprise the best operational advantage.
            </p>
          </div>

          {/* Exactly 3 Cards Grid */}
          <div className="why-choose-grid">
            {whyChooseUsPoints.map((point, idx) => (
              <div key={idx} className="why-choose-card">
                <div className="why-choose-icon-wrap">
                  {point.icon}
                </div>

                <h3 className="why-choose-title">
                  {point.title}
                </h3>

                <p className="why-choose-desc">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMON QUESTIONS SECTION ("wo lassst me aaye ga") */}
      <section style={{ padding: "70px 0 50px 0" }}>
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div>
              <div className="section-tag">
                <HelpCircle size={15} />
                <span>// CORE INQUIRIES &amp; CLARIFICATIONS</span>
              </div>
              <h2 className="section-title">Common Questions Answered</h2>
            </div>
            <p className="section-desc">
              Key questions on how ANE synthesizes physical hardware fabrication with spatial
              3D computing and sovereign cloud architectures.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            {homeQuestions.map((item, idx) => {
              const isOpen = openQuestionIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    border: isOpen
                      ? "1px solid var(--border-active)"
                      : "1px solid var(--border-subtle)",
                    transition: "all 0.25s ease",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenQuestionIndex(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      color: "var(--color-text-main)",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "12px",
                          color: "var(--color-cyan)",
                          fontWeight: 700,
                        }}
                      >
                        0{idx + 1}.
                      </span>
                      <span>{item.q}</span>
                    </span>

                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: isOpen
                          ? "rgba(0, 240, 255, 0.12)"
                          : "rgba(255, 255, 255, 0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isOpen ? "var(--color-cyan)" : "var(--color-text-muted)",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 22px 52px",
                        fontSize: "14.5px",
                        lineHeight: "1.7",
                        color: "var(--color-text-muted)",
                        borderTop: "1px solid var(--border-subtle)",
                        paddingTop: "16px",
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section style={{ padding: "40px 0" }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: "52px 36px",
              textAlign: "center",
              position: "relative",
              border: "1px solid var(--border-active)",
              background:
                "radial-gradient(ellipse at 50% -20%, rgba(0, 240, 255, 0.15) 0%, rgba(14, 20, 32, 0.85) 70%)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: "11px",
                color: "var(--color-cyan)",
                letterSpacing: "0.15em",
                marginBottom: "14px",
              }}
            >
              ACCELERATE YOUR INFRASTRUCTURE
            </div>

            <h3
              style={{
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 800,
                color: "var(--color-text-main)",
                marginBottom: "14px",
              }}
            >
              Ready to synthesize physical &amp; spatial engineering?
            </h3>

            <p
              style={{
                fontSize: "15px",
                color: "var(--color-text-muted)",
                maxWidth: "600px",
                margin: "0 auto 30px auto",
                lineHeight: 1.6,
              }}
            >
              Engage directly with our Kokrajhar laboratory engineers to develop custom hardware
              chassis, cloud meshes, or sensory prototypes.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/services" className="btn-primary-white">
                <span>Review Product Lineup</span>
              </Link>

              <Link href="/contact" className="btn-secondary-dark">
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
