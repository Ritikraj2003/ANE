"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  Shield,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Clock,
  Navigation,
  Sparkles,
} from "lucide-react";
import { FAQS_DATA } from "@/data/services";

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedBudget, setSelectedBudget] = useState("prod-core");
  const [mndaChecked, setMndaChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  // Form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("spatial-3d");
  const [message, setMessage] = useState("");

  // Contact Slider State
  const [activeSlide, setActiveSlide] = useState(0);

  const contactSlides = [
    {
      id: "hardware",
      badge: "3-AXIS 3D PRINTING HUB",
      badgeColor: "var(--color-amber)",
      title: "Kokrajhar 3D Printing & Hardware Lab",
      location: "Near CIT Kokrajhar, BTR, Assam, 783370",
      desc: "Custom 3D printing using 3-axis printer, rapid FDM prototyping, functional parts, and precision batch production.",
      email: "hardware@ane.technology",
      phone: "+91 6000212823",
      image: "/images/about/lab-foundry.jpg",
      sla: "3D Print Quote Response < 4h",
    },
    {
      id: "spatial",
      badge: "3D & SPATIAL COMPUTING",
      badgeColor: "var(--color-cyan)",
      title: "Spatial Digital Twin & CAD Studio",
      location: "Near CIT Kokrajhar, Assam",
      desc: "Precision STEP modeling, aerodynamic CFD analysis, interactive real-time WebGL 3D viewers, and simulation rigs.",
      email: "spatial@ane.technology",
      phone: "+91 6000212823",
      image: "/images/3d-modeling/turbine-digital-twin.jpg",
      sla: "CAD Triage Response < 12h",
    },
    {
      id: "cloud",
      badge: "CLOUD & EDGE SYSTEMS",
      badgeColor: "var(--color-purple)",
      title: "Distributed Cloud Architecture Command",
      location: "Global Edge Runtime Matrix",
      desc: "WebAssembly edge clusters, distributed multi-tenant ERP platforms, high-concurrency event brokers, and zero-trust cloud setups.",
      email: "cloud@ane.technology",
      phone: "+91 6000212823",
      image: "/images/hero/pillar-cloud.jpg",
      sla: "Cloud Architecture Review < 14h",
    },
    {
      id: "advisory",
      badge: "EXECUTIVE & PARTNERSHIPS",
      badgeColor: "var(--color-mint)",
      title: "Executive Strategic Partnerships",
      location: "Near CIT Kokrajhar & Global",
      desc: "Mutual NDAs, enterprise software retainers, custom R&D contracts, dedicated developer pods, and government deep-tech collaborations.",
      email: "contact@ane.technology",
      phone: "+91 6000212823",
      image: "/images/hero/pillar-hardware.jpg",
      sla: "Priority Response < 4h",
    },
  ];

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % contactSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [contactSlides.length]);

  // Amazon / Flipkart-Style Price Range Filter State
  const [minBudget, setMinBudget] = useState(5000);
  const [maxBudget, setMaxBudget] = useState(50000);
  const [activePricePreset, setActivePricePreset] = useState<string>("5k-25k");

  const pricePresets = [
    { id: "under-5k", label: "Under ₹5,000", min: 1000, max: 5000, tier: "Rapid 3D Print / Small Part" },
    { id: "5k-25k", label: "₹5,000 – ₹25,000", min: 5000, max: 25000, tier: "Functional Prototype / Batch" },
    { id: "25k-75k", label: "₹25,000 – ₹75,000", min: 25000, max: 75000, tier: "Advanced Prototyping & CAD" },
    { id: "75k-200k", label: "₹75,000 – ₹2,00,000", min: 75000, max: 200000, tier: "Production Web App / SaaS MVP" },
    { id: "above-200k", label: "₹2,00,000+", min: 200000, max: 500000, tier: "Enterprise Systems & R&D Pod" },
  ];

  const getEstimatedTimeline = () => {
    if (maxBudget <= 5000) return "24 – 48 Hours Turnaround";
    if (maxBudget <= 25000) return "3 – 5 Days Sprint";
    if (maxBudget <= 75000) return "1 – 2 Weeks Sprint";
    if (maxBudget <= 200000) return "3 – 6 Weeks Sprint";
    return "Dedicated Pod / 8+ Weeks";
  };

  const getTierName = () => {
    if (maxBudget <= 5000) return "Rapid Prototyping";
    if (maxBudget <= 25000) return "Functional Production";
    if (maxBudget <= 75000) return "Custom Engineering";
    if (maxBudget <= 200000) return "Production MVP";
    return "Enterprise Core";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div style={{ paddingBottom: "60px" }}>
      {/* CONTACT PAGE HERO */}
      <section style={{ paddingTop: "60px", paddingBottom: "36px" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "18px" }}>
            <div className="tag-pill">
              <span className="tag-dot" />
              <span>ANE // CONTACT &amp; PROJECT ENGINEERING BRIEF</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(30px, 4.5vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Connect With <span style={{ color: "var(--color-cyan)" }}>ANE</span> Labs
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--color-text-muted)",
                  maxWidth: "680px",
                  lineHeight: "1.6",
                  marginTop: "12px",
                }}
              >
                Initiate a project brief, schedule an on-site hardware lab visit in Kokrajhar, or
                reach out directly to our engineering teams.
              </p>
            </div>

            {/* Quick Status Pills */}
            <div
              className="font-mono"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "10px", color: "var(--color-text-dim)" }}>RESPONSE SLA</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--color-cyan)" }}>
                  &lt; 12 Hours
                </div>
              </div>

              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "10px", color: "var(--color-text-dim)" }}>PROTOTYPE SLOTS</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--color-mint)" }}>
                  3 Slots Open
                </div>
              </div>

              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "10px", color: "var(--color-text-dim)" }}>LOCATION</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "var(--color-text-main)" }}>
                  Kokrajhar, Assam
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS SLIDER SECTION ("some slider contact") */}
      <section style={{ paddingBottom: "48px" }}>
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
            }}
          >
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--color-cyan)",
                  letterSpacing: "0.12em",
                }}
              >
                // CONTACT HUBS &amp; DEPARTMENTS
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: 800, marginTop: "4px" }}>
                Direct Engineering Channels
              </h3>
            </div>

            {/* Slider Navigation Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() =>
                  setActiveSlide(
                    (prev) => (prev - 1 + contactSlides.length) % contactSlides.length
                  )
                }
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  color: "var(--color-text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                aria-label="Previous contact channel"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % contactSlides.length)
                }
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  color: "var(--color-text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                aria-label="Next contact channel"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Slide Card Display */}
          <div
            className="glass-card contact-slide-card"
            style={{
              overflow: "hidden",
              border: "1px solid var(--border-active)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                minHeight: "260px",
              }}
            >
              {/* Left Side: Department Details */}
              <div
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: "rgba(0, 240, 255, 0.1)",
                        color: contactSlides[activeSlide].badgeColor,
                        border: `1px solid ${contactSlides[activeSlide].badgeColor}`,
                      }}
                    >
                      {contactSlides[activeSlide].badge}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "11px",
                        color: "var(--color-mint)",
                        fontWeight: 600,
                      }}
                    >
                      • {contactSlides[activeSlide].sla}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "var(--color-text-main)",
                      marginBottom: "8px",
                    }}
                  >
                    {contactSlides[activeSlide].title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "var(--color-text-muted)",
                      marginBottom: "18px",
                    }}
                  >
                    {contactSlides[activeSlide].desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "13px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <MapPin size={15} color="var(--color-cyan)" />
                      <span>{contactSlides[activeSlide].location}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Mail size={15} color="var(--color-cyan)" />
                      <a
                        href={`mailto:${contactSlides[activeSlide].email}`}
                        style={{
                          color: "var(--color-cyan)",
                          textDecoration: "none",
                          fontFamily: "var(--font-mono)",
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                      >
                        {contactSlides[activeSlide].email}
                      </a>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Phone size={15} color="var(--color-cyan)" />
                      <span className="font-mono" style={{ fontSize: "12.5px" }}>
                        {contactSlides[activeSlide].phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Slide Indicators */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "24px",
                  }}
                >
                  {contactSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      style={{
                        height: "6px",
                        width: activeSlide === idx ? "28px" : "8px",
                        borderRadius: "3px",
                        background:
                          activeSlide === idx ? "var(--color-cyan)" : "var(--border-subtle)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      title={slide.title}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-text-dim)",
                      marginLeft: "6px",
                    }}
                  >
                    <span style={{ color: "var(--color-cyan)", fontWeight: 800 }}>
                      0{activeSlide + 1} / 0{contactSlides.length}
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Side: Associated Visual Facility Preview */}
              <div
                style={{
                  position: "relative",
                  minHeight: "220px",
                  background: "#0a0f18",
                }}
              >
                <Image
                  src={contactSlides[activeSlide].image}
                  alt={contactSlides[activeSlide].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, var(--bg-card) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN SECTION: GOOGLE MAP & LOCATION (LEFT) + CLEAN PROPER FORM (RIGHT) */}
      <section style={{ paddingBottom: "60px" }}>
        <div className="container-custom">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "36px",
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN: GOOGLE MAP & LOCATION CONTACT DETAILS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Card 1: Interactive Google Map */}
              <div className="glass-card" style={{ padding: "26px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <MapPin size={18} color="var(--color-cyan)" />
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--color-text-main)" }}>
                      Our Location on Google Maps
                    </h3>
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "10.5px",
                      padding: "3px 8px",
                      background: "rgba(0, 240, 255, 0.1)",
                      color: "var(--color-cyan)",
                      borderRadius: "4px",
                      fontWeight: 600,
                    }}
                  >
                    CIT Kokrajhar, Assam
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--color-text-muted)",
                    lineHeight: "1.6",
                    marginBottom: "18px",
                  }}
                >
                  Near CIT Kokrajhar, Bodoland Territorial Region (BTR), Assam 783370, India.
                </p>

                {/* Embedded Interactive Google Map */}
                <div
                  className="map-frame-wrapper"
                  style={{
                    width: "100%",
                    height: "280px",
                    marginBottom: "16px",
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=CIT+Kokrajhar,+Assam,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ANE Kokrajhar Google Map"
                    className="google-map-iframe"
                  />
                </div>

                {/* Map Action Links */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <a
                    href="https://www.google.com/maps/place/Central+Institute+of+Technology+Kokrajhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-dark"
                    style={{ fontSize: "12.5px", padding: "8px 14px" }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    onClick={() => setIsVisitModalOpen(true)}
                    className="btn-primary-cyan"
                    style={{ fontSize: "12.5px", padding: "8px 16px" }}
                  >
                    <Calendar size={13} />
                    <span>Request Lab Visit</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Contact Information & Direct Touchpoints */}
              <div className="glass-card" style={{ padding: "26px" }}>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--color-text-main)",
                    marginBottom: "18px",
                  }}
                >
                  Direct Engineering Touchpoints
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(0, 240, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-cyan)",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-dim)", textTransform: "uppercase" }}>
                        Primary Electronic Mail
                      </div>
                      <a
                        href="mailto:contact@ane.technology"
                        style={{
                          color: "var(--color-cyan)",
                          fontWeight: 600,
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                      >
                        contact@ane.technology
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(0, 255, 157, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-mint)",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-dim)", textTransform: "uppercase" }}>
                        Headquarters Phone
                      </div>
                      <div style={{ color: "var(--color-text-main)", fontWeight: 600, fontSize: "14px" }}>
                        +91 6000212823
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(255, 159, 28, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-amber)",
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-dim)", textTransform: "uppercase" }}>
                        Lab Working Hours
                      </div>
                      <div style={{ color: "var(--color-text-main)", fontWeight: 500, fontSize: "13.5px" }}>
                        Monday – Saturday: 09:00 – 18:00 IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PROPER, CLEAN, HIGH-CONVERTING CONTACT FORM */}
            <div
              className="glass-card"
              style={{
                padding: "36px",
                border: "1px solid var(--border-active)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <span className="tag-dot" />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-cyan)",
                      fontWeight: 700,
                    }}
                  >
                    CONFIDENTIAL BRIEFING
                  </span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--color-text-main)" }}>
                  Project Engineering Brief
                </h3>
                <p style={{ fontSize: "13.5px", color: "var(--color-text-muted)", marginTop: "4px" }}>
                  Fill out your specifications below. Our engineering team will review and respond within 12 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 20px",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "rgba(0, 255, 157, 0.12)",
                      border: "2px solid var(--color-mint)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                      color: "var(--color-mint)",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: "22px", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "8px" }}>
                    Project Brief Submitted!
                  </h4>
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--color-text-muted)",
                      maxWidth: "460px",
                      margin: "0 auto 24px auto",
                      lineHeight: "1.6",
                    }}
                  >
                    Thank you for reaching out to ANE Labs. Your inquiry has been routed to our Kokrajhar
                    team. We will contact you at <strong>{email}</strong> shortly.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="btn-secondary-dark"
                    style={{ fontSize: "13.5px", padding: "10px 24px" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Name & Work Email in 2 columns */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label className="cyber-label">Your Full Name / Entity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Elena Rostova or Apex Labs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="cyber-input"
                      />
                    </div>

                    <div>
                      <label className="cyber-label">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="cyber-input"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Interested In */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label className="cyber-label">Phone / WhatsApp (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="cyber-input"
                      />
                    </div>

                    <div>
                      <label className="cyber-label">Service Required *</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="cyber-input"
                        style={{ cursor: "pointer" }}
                      >
                        <option value="3d-printing">Custom 3D Printing &amp; Rapid Prototyping</option>
                        <option value="web-app-saas">Web / App Development &amp; Enterprise SaaS</option>
                        <option value="spatial-3d">Spatial 3D Modeling &amp; Digital Twins</option>
                        <option value="custom-rd">Custom Sensory R&amp;D &amp; Hardware</option>
                        <option value="general">General Partnership / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Amazon / Flipkart Style Price Range Filter */}
                  <div className="price-filter-box">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <label className="cyber-label" style={{ marginBottom: 0 }}>
                        Estimated Budget Scale (Price Range Filter)
                      </label>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "var(--color-cyan)",
                        }}
                      >
                        ₹{minBudget.toLocaleString("en-IN")} – ₹{maxBudget.toLocaleString("en-IN")}+ ({getTierName()})
                      </span>
                    </div>

                    {/* Dual Range Slider Bar */}
                    <div className="price-range-slider-wrapper">
                      <div className="price-range-track-bg" />
                      <div
                        className="price-range-track-highlight"
                        style={{
                          left: `${Math.min(100, Math.max(0, (minBudget / 500000) * 100))}%`,
                          width: `${Math.min(100, Math.max(0, ((maxBudget - minBudget) / 500000) * 100))}%`,
                        }}
                      />
                      <input
                        type="range"
                        min={1000}
                        max={500000}
                        step={1000}
                        value={minBudget}
                        onChange={(e) => {
                          const val = Math.min(Number(e.target.value), maxBudget - 1000);
                          setMinBudget(val);
                          setActivePricePreset("");
                        }}
                        className="dual-range-input"
                        aria-label="Minimum budget range"
                      />
                      <input
                        type="range"
                        min={1000}
                        max={500000}
                        step={1000}
                        value={maxBudget}
                        onChange={(e) => {
                          const val = Math.max(Number(e.target.value), minBudget + 1000);
                          setMaxBudget(val);
                          setActivePricePreset("");
                        }}
                        className="dual-range-input"
                        aria-label="Maximum budget range"
                      />
                    </div>

                    {/* Min & Max Price Input Boxes (Amazon / Flipkart layout) */}
                    <div className="price-range-inputs-row">
                      <div className="price-input-card">
                        <span className="price-input-currency">Min: ₹</span>
                        <input
                          type="number"
                          value={minBudget}
                          min={1000}
                          max={maxBudget}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setMinBudget(val);
                            setActivePricePreset("");
                          }}
                          className="price-input-field"
                          placeholder="1,000"
                        />
                      </div>

                      <span style={{ color: "var(--color-text-dim)", fontWeight: 700, fontSize: "13px" }}>to</span>

                      <div className="price-input-card">
                        <span className="price-input-currency">Max: ₹</span>
                        <input
                          type="number"
                          value={maxBudget}
                          min={minBudget}
                          max={1000000}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setMaxBudget(val);
                            setActivePricePreset("");
                          }}
                          className="price-input-field"
                          placeholder="50,000"
                        />
                      </div>
                    </div>

                    {/* Popular Budget Brackets / Filter Chips */}
                    <div className="price-presets-wrap">
                      {pricePresets.map((preset) => (
                        <button
                          type="button"
                          key={preset.id}
                          onClick={() => {
                            setMinBudget(preset.min);
                            setMaxBudget(preset.max);
                            setActivePricePreset(preset.id);
                          }}
                          className={`price-preset-chip ${activePricePreset === preset.id ? "active" : ""}`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    {/* Dynamic Sprint Timeline */}
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--color-mint)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span className="tag-dot-mint" />
                      <span>Estimated Timeline: {getEstimatedTimeline()}</span>
                    </div>
                  </div>

                  {/* Project Details Brief */}
                  <div>
                    <label className="cyber-label">Project Details &amp; Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please outline your technical goals, hardware tolerances, cloud scale, timeline expectations, or links to CAD/Figma artifacts..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="cyber-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* NDA Agreement Checkbox */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "12px 14px",
                      background: "rgba(0, 240, 255, 0.04)",
                      border: "1px solid rgba(0, 240, 255, 0.15)",
                      borderRadius: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="mnda"
                      checked={mndaChecked}
                      onChange={(e) => setMndaChecked(e.target.checked)}
                      style={{ marginTop: "3px", cursor: "pointer", accentColor: "var(--color-cyan)" }}
                    />
                    <label
                      htmlFor="mnda"
                      style={{
                        fontSize: "12.5px",
                        color: "var(--color-text-muted)",
                        lineHeight: "1.5",
                        cursor: "pointer",
                      }}
                    >
                      Require Mutual Non-Disclosure Agreement (M-NDA) executed prior to consultation.
                      Automatic digital countersignatures supported.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "6px",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      🔒 All inquiries are encrypted &amp; strictly confidential.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-cyan"
                      style={{
                        padding: "12px 28px",
                        opacity: isSubmitting ? 0.7 : 1,
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      <span>{isSubmitting ? "Sending Project Brief..." : "Submit Project Brief"}</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section style={{ padding: "60px 0 30px 0" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "36px" }}>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>// ENGAGEMENT PROTOCOLS &amp; ANSWERS</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc" style={{ marginTop: "10px" }}>
              Key details regarding our hybrid hardware-software execution model, milestones, and
              fabrication turnaround times.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "960px" }}>
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    border: isOpen
                      ? "1px solid var(--border-active)"
                      : "1px solid var(--border-subtle)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      padding: "18px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      color: "var(--color-text-main)",
                      fontSize: "15.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>{faq.question}</span>
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
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 22px 24px",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        color: "var(--color-text-muted)",
                        borderTop: "1px solid var(--border-subtle)",
                        paddingTop: "14px",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Visit Modal */}
      {isVisitModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(7, 9, 14, 0.85)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setIsVisitModalOpen(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: "520px",
              width: "100%",
              padding: "32px",
              position: "relative",
              border: "1px solid var(--border-active)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div className="tag-pill">
                <span className="tag-dot" />
                <span>KOKRAJHAR ON-SITE LAB CLEARANCE</span>
              </div>
              <button
                onClick={() => setIsVisitModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-text-main)",
                  cursor: "pointer",
                  fontSize: "18px",
                  padding: "4px",
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h4 style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "8px" }}>
              Request Hardware Lab Visit
            </h4>
            <p style={{ fontSize: "13.5px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
              On-site 3D printing &amp; prototyping clearances are available for engineering partners. Please provide your visit details.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
              <div>
                <label className="cyber-label">Visiting Lead Full Name</label>
                <input type="text" placeholder="Dr. / Eng. First Last" className="cyber-input" />
              </div>
              <div>
                <label className="cyber-label">Preferred Date</label>
                <input type="date" className="cyber-input" />
              </div>
              <div>
                <label className="cyber-label">Purpose of Lab Visit</label>
                <select className="cyber-input">
                  <option>3D Printing Prototyping &amp; Tolerance Inspection</option>
                  <option>FDM &amp; Flexible Material Prototyping Review</option>
                  <option>Embedded Firmware Telemetry Integration</option>
                  <option>Academic &amp; Student Research Delegation</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                alert("Visit clearance requested. Confirmation will be sent to your email.");
                setIsVisitModalOpen(false);
              }}
              className="btn-primary-cyan"
              style={{ width: "100%", padding: "12px" }}
            >
              Submit Lab Access Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
