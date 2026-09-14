"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Activity,
  Layers,
  ArrowRight,
  Clock,
  MapPin,
  Cpu,
  Compass,
  FileText,
  Radio,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import { TIMELINE_DATA, TEAM_DATA } from "@/data/services";

export default function About() {
  return (
    <div style={{ paddingBottom: "60px" }}>
      {/* ABOUT HERO */}
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container-custom">
          {/* Node Tag */}
          <div style={{ marginBottom: "20px" }}>
            <div className="tag-pill">
              <span className="tag-dot" />
              <span>PROTOCOL: V-CORP // QUANTUM NODE Kokrajhar-1</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 62px)",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "920px",
              marginBottom: "48px",
            }}
          >
            Built in <span className="gradient-text-cyan">Kokrajhar, Assam.</span>
            <br />
            Engineered for the <span className="gradient-text-purple">Global Stage.</span>
          </h1>

          {/* Dual Hero Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            {/* Left: Lab Foundry Showcase */}
            <div
              className="glass-card"
              style={{
                position: "relative",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "28px",
              }}
            >
              <Image
                src="/images/about/lab-foundry.jpg"
                alt="Kokrajhar Hardware Lab & Foundry"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(7, 9, 14, 0.95) 0%, rgba(7, 9, 14, 0.4) 50%, transparent 100%)",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--color-cyan)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginBottom: "8px",
                  }}
                >
                  KOKRAJHAP FACILITY 01 // MAIN FAB
                </div>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  The Convergence of Physical Armor &amp; Pure Logic
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  Precision fabrication meets sovereign cloud architecture in our primary
                  Kokrajhar laboratory.
                </p>
              </div>
            </div>

            {/* Right: Overview, Latency Sparkline, Creed */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Mission Summary Card */}
              <div className="glass-card" style={{ padding: "28px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "var(--color-text-main)",
                  }}
                >
                  ANE operates from a dual-vantage point in Northeast India, bridging physical
                  fabrication foundries with hyper-resilient modern cloud software. Founded to
                  anchor sovereign engineering capacity while projecting execution power worldwide.
                </p>
              </div>

              {/* Latency Telemetry Card */}
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  borderColor: "rgba(0, 240, 255, 0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "32px",
                        fontWeight: 900,
                        color: "var(--color-cyan)",
                      }}
                    >
                      14.2
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "11px",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      ms LATENCY (INTERNAL TO FAB)
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "var(--color-mint)",
                      background: "rgba(0, 255, 157, 0.1)",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      border: "1px solid rgba(0, 255, 157, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span className="tag-dot-mint" />
                    LIVE
                  </span>
                </div>

                {/* SVG Sparkline waveform */}
                <svg
                  viewBox="0 0 400 60"
                  style={{
                    width: "100%",
                    height: "50px",
                    overflow: "visible",
                  }}
                >
                  <defs>
                    <linearGradient id="sparkGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#9D4EDD" />
                      <stop offset="100%" stopColor="#00F0FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,45 Q50,15 100,38 T200,20 T300,45 T400,25"
                    fill="none"
                    stroke="url(#sparkGradient)"
                    strokeWidth="2.5"
                  />
                  <circle cx="400" cy="25" r="4" fill="#00F0FF" />
                </svg>
              </div>

              {/* Founder's Creed */}
              <div
                className="glass-card glass-card-amber"
                style={{
                  padding: "24px",
                  borderLeft: "3px solid var(--color-amber)",
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--color-amber)",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                  }}
                >
                  // FOUNDER&apos;S CREED
                </div>
                <blockquote
                  style={{
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "#E2E8F0",
                    lineHeight: "1.6",
                    marginBottom: "10px",
                  }}
                >
                  &ldquo;We architect for extreme durability over disposable speed. If an artifact
                  cannot survive ten years in the field, or if a software runtime requires continuous
                  vendor ransom to survive, it has failed our baseline.&rdquo;
                </blockquote>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--color-text-dim)",
                  }}
                >
                  Barunmoy Basumatary // Lead Architect
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION & VISION SECTION */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-custom">
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 52px auto",
            }}
          >
            <div
              className="section-tag"
              style={{ justifyContent: "center", marginBottom: "12px" }}
            >
              <span className="tag-dot" />
              <span>// PURPOSE &amp; AMBITION</span>
            </div>
            <h2 className="section-title" style={{ fontSize: "36px", marginBottom: "8px" }}>
              Our Mission &amp; Vision
            </h2>
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
              The foundational purpose and long-horizon ambitions guiding our deep-tech research,
              physical manufacturing, and sovereign cloud systems from Kokrajhar, Assam.
            </p>
          </div>

          {/* 2 Mission & Vision Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Mission Card */}
            <div
              className="glass-card"
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: "1px solid var(--border-active)",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--color-cyan)",
                    background: "rgba(0, 240, 255, 0.08)",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-active)",
                  }}
                >
                  CORE MISSION // PURPOSE
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00d2ff 0%, #008ba3 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    boxShadow: "0 6px 18px rgba(0, 210, 255, 0.3)",
                  }}
                >
                  <Target size={22} />
                </div>
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--color-text-main)",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Mission
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "var(--color-text-muted)",
                  marginBottom: "28px",
                }}
              >
                To engineer field-resilient physical hardware and sovereign cloud platforms that eliminate planned obsolescence, proprietary lock-in, and fragile dependencies—proving that world-class deep-tech innovation can be built and scaled directly from Northeast India.
              </p>

              {/* Key Mission Pillars */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-cyan)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      Zero-Compromise Fabrication:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Aerospace-grade CNC milling with sub-micron geometric verification.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-cyan)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      100% IP Sovereignty:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Unconditional client ownership over all code, schematics, and design assets.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-cyan)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      Grassroots Engineering:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Empowering regional engineers to manufacture high-concurrency deep tech.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="glass-card"
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: "1px solid var(--border-active)",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--color-amber)",
                    background: "rgba(255, 159, 28, 0.08)",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-amber)",
                  }}
                >
                  HORIZON 2035 // AMBITION
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FFB703 0%, #D97706 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    boxShadow: "0 6px 18px rgba(255, 159, 28, 0.3)",
                  }}
                >
                  <Eye size={22} />
                </div>
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--color-text-main)",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Vision
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "var(--color-text-muted)",
                  marginBottom: "28px",
                }}
              >
                To establish Kokrajhar, Assam as an internationally recognized epicenter for dual-native physical and spatial engineering, bridging high-precision CNC hardware with autonomous cloud intelligence to power the next century of resilient computing.
              </p>

              {/* Key Vision Pillars */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-amber)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      Spatial Digital Twins:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Unified telemetry between real-time 3D models and living physical machines.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-amber)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      Decade-First Durability:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Building industrial assets engineered to outlast a decade of field operation.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle size={16} color="var(--color-amber)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--color-text-main)", fontSize: "13.5px" }}>
                      Global Edge Mesh:{" "}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "13.5px" }}>
                      Decentralized WebAssembly edge matrices serving critical global applications.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHRONOLOGY TIMELINE SECTION */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(180deg, transparent 0%, rgba(157, 78, 221, 0.03) 50%, transparent 100%)",
        }}
      >
        <div className="container-custom">
          <div style={{ marginBottom: "50px" }}>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>// EVOLUTION LOG // CHRONOLOGY</span>
            </div>
            <h2 className="section-title">The Path from Inception to Multi-Node Mesh</h2>
          </div>

          {/* Timeline Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={item.year}
                className="glass-card"
                style={{
                  padding: "24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      color: index === TIMELINE_DATA.length - 1 ? "var(--color-cyan)" : "#FFFFFF",
                    }}
                  >
                    {item.year}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "10px",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--color-text-dim)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#F1F5F9",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "13px",
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

      {/* ARCHITECTS OF THE SYNTHESIS (TEAM) SECTION */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "48px" }}>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>// THE BUILDERS &amp; ARCHITECTS</span>
            </div>
            <h2 className="section-title">Architects of the Synthesis</h2>
            <p className="section-desc" style={{ marginTop: "12px" }}>
              Talented engineering leads piloting the confluence of hardware craft, cloud systems,
              and spatial compute.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {TEAM_DATA.map((member) => (
              <div
                key={member.name}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 0 24px 0",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(11, 16, 26, 0.9) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="font-mono"
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "20px",
                      fontSize: "11px",
                      color: "var(--color-cyan)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(7, 9, 14, 0.7)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <MapPin size={11} />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "20px 24px", flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--color-text-main)",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </h3>

                  <div
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-cyan)",
                      letterSpacing: "0.08em",
                      marginBottom: "14px",
                    }}
                  >
                    {member.role}
                  </div>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--color-text-muted)",
                      lineHeight: "1.6",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PAGE CTA */}
      <section style={{ padding: "40px 0" }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "center",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <div>
              <div className="section-tag">
                <span className="tag-dot" />
                <span>PARTNER WITH ANE LABS</span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "var(--color-text-main)",
                  marginBottom: "14px",
                }}
              >
                Ready to deploy hardware or scale computational nodes with us?
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  marginBottom: "28px",
                }}
              >
                Whether you require custom enclosure fabrication, high-throughput cloud
                architectures, or end-to-end parametric engineering from scratch.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary-cyan">
                  <span>Initiate A Project Brief</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn-secondary-dark">
                  <span>Access Public Specs</span>
                </Link>
              </div>
            </div>

            {/* Telemetry Stats Card on the right */}
            <div
              style={{
                backgroundColor: "var(--card-inner-bg)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "11px",
                  color: "var(--color-text-dim)",
                  marginBottom: "16px",
                  letterSpacing: "0.1em",
                }}
              >
                FABRICATION PIPELINE TELEMETRY
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>CNC Cycle Queue:</span>
                  <span className="font-mono" style={{ color: "var(--color-cyan)" }}>
                    3 AVAILABLE
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>Optical Tolerance:</span>
                  <span className="font-mono" style={{ color: "#FFFFFF" }}>
                    ± 0.002 mm
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>WASM Edge Runtimes:</span>
                  <span className="font-mono" style={{ color: "var(--color-mint)" }}>
                    OPERATIONAL (99.98%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
