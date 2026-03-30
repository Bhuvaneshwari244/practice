import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageCircle, Truck, Search, Package, MapPin, CheckCircle2, Circle, Copy, Check, Send } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/hooks/use-toast";
import { AnimatedLabel } from "@/components/AnimatedLabel";

const trackingSteps = [
  { key: "statusBooked", fallback: "Booked", icon: Package },
  { key: "statusPickedUp", fallback: "Picked Up", icon: Truck },
  { key: "statusInTransit", fallback: "In Transit", icon: MapPin },
  { key: "statusDelivered", fallback: "Delivered", icon: CheckCircle2 },
] as const;

const demoTrackingData: Record<string, { currentStep: number; eta: string; details: string[] }> = {
  "TRK-12345": { currentStep: 2, eta: "Mar 10, 2026", details: ["Booked on Mar 6", "Picked up from Warangal", "Currently near Hyderabad", ""] },
  "TRK-67890": { currentStep: 3, eta: "Delivered", details: ["Booked on Mar 3", "Picked up from Guntur", "Passed through Vijayawada", "Delivered at Secunderabad Mandi"] },
};

function generateTransportId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "TRK-";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

export default function Transport() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ cropType: "", quantity: "", pickup: "", destination: "", phone: "" });
  const [trackingId, setTrackingId] = useState("");
  const [activeTab, setActiveTab] = useState<"request" | "track">("request");
  const [trackedResult, setTrackedResult] = useState<typeof demoTrackingData[string] | null>(null);
  const [trackError, setTrackError] = useState(false);
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Step 1: Register & generate ID locally
  const handleRegister = () => {
    if (!form.cropType || !form.quantity || !form.pickup || !form.destination || !form.phone) {
      toast({ title: "Missing details", description: "Please fill all fields including phone number", variant: "destructive" });
      return;
    }
    const id = generateTransportId();
    setGeneratedId(id);
    demoTrackingData[id] = {
      currentStep: 0,
      eta: "Pending",
      details: [`Booked just now`, "", "", ""],
    };
    toast({ title: "✅ Pickup Registered!", description: `Your tracking ID is ${id}` });
  };

  // Step 2: Send ID + details via WhatsApp
  const handleSendWhatsApp = () => {
    if (!generatedId) return;
    const message = `🚛 Transport Pickup Request\n\n📋 Tracking ID: ${generatedId}\n🌾 Crop: ${form.cropType}\n📦 Quantity: ${form.quantity} Quintals\n📍 Pickup: ${form.pickup}\n🏁 Destination: ${form.destination}\n📱 Phone: ${form.phone}`;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const handleCopyId = () => {
    if (generatedId) {
      navigator.clipboard.writeText(generatedId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTrack = () => {
    const key = trackingId.trim().toUpperCase();
    const result = demoTrackingData[key];
    if (result) {
      setTrackedResult(result);
      setTrackError(false);
    } else {
      setTrackedResult(null);
      setTrackError(true);
    }
  };

  const tt = t.transport;

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <motion.h1 
          className="text-3xl font-display font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.span
            animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block mr-2"
          >
            🚛
          </motion.span>
          {tt.title}
        </motion.h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "request" as const, label: tt.requestPickup, icon: Truck },
            { id: "track" as const, label: tt.trackShipment || "Track Shipment", icon: Search },
          ].map((tab, i) => (
            <motion.button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all ${
                activeTab === tab.id ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <motion.span
                animate={activeTab === tab.id ? { y: [0, -3, 0], rotate: [0, 5, -5, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <tab.icon size={18} />
              </motion.span>
              <motion.span
                animate={activeTab === tab.id ? { y: [0, -2, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
              >
                {tab.label}
              </motion.span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "request" ? (
            <motion.div key="request" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
              <motion.div 
                className="glass-card p-6 mb-6"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center"
                    animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Truck size={24} className="text-primary" />
                  </motion.div>
                  <div>
                    <motion.h2 
                      className="font-display font-semibold text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {tt.requestPickup}
                    </motion.h2>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      {tt.fillDetails}
                    </motion.p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { key: "cropType", label: tt.cropType, placeholder: tt.placeholderCrop, type: "text" },
                    { key: "quantity", label: tt.quantity, placeholder: tt.placeholderQty, type: "number" },
                    { key: "pickup", label: tt.pickup, placeholder: tt.placeholderPickup, type: "text" },
                    { key: "destination", label: tt.destination, placeholder: tt.placeholderDest, type: "text" },
                    { key: "phone", label: "📱 Phone Number", placeholder: "e.g., 9876543210", type: "tel" },
                  ].map((field, i) => (
                    <motion.div 
                      key={field.key} 
                      initial={{ opacity: 0, y: 12 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ type: "spring", stiffness: 300, delay: i * 0.06 }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.label 
                        className="text-sm font-medium text-foreground mb-1.5 block"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                      >
                        {field.label}
                      </motion.label>
                      <input type={field.type} value={(form as Record<string, string>)[field.key]}
                        onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                        placeholder={field.placeholder}
                        disabled={!!generatedId}
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-2xl border border-border/50 outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-60" />
                    </motion.div>
                  ))}

                  {/* Register Button — generates ID */}
                  {!generatedId && (
                    <motion.button 
                      whileTap={{ scale: 0.97 }} 
                      whileHover={{ y: -4, scale: 1.02 }}
                      onClick={handleRegister}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors text-base"
                    >
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        <Package size={20} />
                      </motion.span>
                      {tt.requestPickup}
                    </motion.button>
                  )}
                </div>

                {/* Generated ID + WhatsApp send */}
                <AnimatePresence>
                  {generatedId && (
                    <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="mt-6 space-y-4">
                      {/* ID Card */}
                      <motion.div 
                        className="bg-success/10 border border-success/30 rounded-2xl p-5"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: 3, duration: 0.4 }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <CheckCircle2 size={20} className="text-success" />
                          </motion.span>
                          <p className="font-display font-semibold text-foreground">Pickup Registered!</p>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">Your unique tracking ID:</p>
                        <div className="flex items-center gap-2">
                          <motion.div 
                            className="flex-1 bg-card border-2 border-success/40 rounded-xl px-4 py-3 font-mono text-xl font-bold text-success tracking-widest text-center select-all"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            {generatedId}
                          </motion.div>
                          <motion.button 
                            onClick={handleCopyId}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary hover:bg-secondary/80 text-foreground p-3 rounded-xl transition-colors" 
                            title="Copy ID"
                          >
                            {copied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Send via WhatsApp */}
                      <motion.button 
                        whileTap={{ scale: 0.97 }} 
                        whileHover={{ y: -4, scale: 1.02 }}
                        onClick={handleSendWhatsApp}
                        className="w-full bg-success hover:bg-success/90 text-success-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors text-base"
                      >
                        <motion.span
                          animate={{ y: [0, -3, 0], rotate: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                          <Send size={20} />
                        </motion.span>
                        Send ID & Details via WhatsApp
                      </motion.button>

                      {/* Track link */}
                      <motion.button 
                        onClick={() => { setTrackingId(generatedId); setActiveTab("track"); }}
                        whileHover={{ scale: 1.02 }}
                        className="w-full text-sm text-primary font-semibold hover:underline py-2"
                      >
                        → Track this shipment
                      </motion.button>

                      {/* New request */}
                      <button onClick={() => { setGeneratedId(null); setForm({ cropType: "", quantity: "", pickup: "", destination: "", phone: "" }); }}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                        + New Request
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="track" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              <motion.div 
                className="glass-card p-6 mb-6"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-info/15 rounded-2xl flex items-center justify-center"
                    animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Search size={24} className="text-info" />
                  </motion.div>
                  <div>
                    <motion.h2 
                      className="font-display font-semibold text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      {tt.trackShipment || "Track Shipment"}
                    </motion.h2>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {tt.demoNote || "Demo tracking — real tracking coming soon"}
                    </motion.p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  <input value={trackingId} onChange={e => setTrackingId(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleTrack()}
                    placeholder={tt.placeholderTrackingId || "e.g., TRK-12345"}
                    className="flex-1 bg-secondary text-foreground px-4 py-3 rounded-2xl border border-border/50 outline-none focus:ring-2 focus:ring-info transition-all" />
                  <motion.button 
                    onClick={handleTrack}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-info hover:bg-info/90 text-info-foreground px-6 py-3 rounded-2xl font-semibold transition-colors"
                  >
                    {tt.track || "Track"}
                  </motion.button>
                </div>

                <p className="text-xs text-muted-foreground mb-4 text-center">
                  Try: <motion.span 
                    className="font-mono bg-secondary px-2 py-0.5 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    onClick={() => setTrackingId("TRK-12345")}
                  >TRK-12345</motion.span> or{" "}
                  <motion.span 
                    className="font-mono bg-secondary px-2 py-0.5 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    onClick={() => setTrackingId("TRK-67890")}
                  >TRK-67890</motion.span>
                </p>

                {trackError && (
                  <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-destructive/10 text-destructive border border-destructive/20 rounded-2xl p-4 text-sm text-center mb-4">
                    {tt.noTracking || "No shipment found with this ID. Please check and try again."}
                  </motion.div>
                )}

                {trackedResult && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="relative">
                      {trackingSteps.map((step, i) => {
                        const isCompleted = i < trackedResult.currentStep;
                        const isCurrent = i === trackedResult.currentStep;
                        const StepIcon = step.icon;
                        return (
                          <motion.div 
                            key={step.key} 
                            className="flex items-start gap-4 relative"
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {i < trackingSteps.length - 1 && (
                              <div className={`absolute left-5 top-10 w-0.5 h-12 ${isCompleted ? "bg-success" : "bg-border"}`} />
                            )}
                            <motion.div 
                              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                isCompleted ? "bg-success text-success-foreground" :
                                isCurrent ? "bg-primary text-primary-foreground" :
                                "bg-secondary text-muted-foreground"
                              }`}
                              animate={isCurrent ? { scale: [1, 1.15, 1], y: [0, -3, 0] } : {}}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              {isCompleted ? <CheckCircle2 size={20} /> : isCurrent ? <StepIcon size={20} /> : <Circle size={20} />}
                            </motion.div>
                            <div className="pb-8">
                              <motion.p 
                                className={`font-semibold text-sm ${isCompleted || isCurrent ? "text-foreground" : "text-muted-foreground"}`}
                                animate={isCurrent ? { y: [0, -2, 0] } : {}}
                                transition={{ repeat: Infinity, duration: 1.2 }}
                              >
                                {(tt as Record<string, string>)[step.key] || step.fallback}
                              </motion.p>
                              {trackedResult.details[i] && (
                                <p className="text-xs text-muted-foreground mt-0.5">{trackedResult.details[i]}</p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    <motion.div 
                      className="bg-secondary/50 rounded-2xl p-4 flex items-center justify-between"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <span className="text-sm font-medium text-foreground">{tt.estimatedArrival || "Estimated Arrival"}</span>
                      <motion.span 
                        className="text-sm font-bold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        {trackedResult.eta}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                )}

                {!trackedResult && !trackError && (
                  <div className="text-center py-8 text-muted-foreground">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Truck size={48} className="mx-auto mb-3 opacity-30" />
                    </motion.div>
                    <p className="text-sm">{tt.noTracking || "Enter a tracking ID to see status"}</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 gap-4">
          <motion.a 
            whileHover={{ y: -6, scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            href={buildWhatsAppLink("")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card-hover p-5 text-center"
          >
            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MessageCircle size={28} className="text-success mx-auto mb-2" />
            </motion.div>
            <p className="font-display font-semibold text-foreground">{tt.whatsapp}</p>
            <p className="text-xs text-muted-foreground mt-1">9701473371</p>
          </motion.a>
          <motion.a 
            whileHover={{ y: -6, scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            href="tel:+919701473371" 
            className="glass-card-hover p-5 text-center"
          >
            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <Phone size={28} className="text-primary mx-auto mb-2" />
            </motion.div>
            <p className="font-display font-semibold text-foreground">{tt.call}</p>
            <p className="text-xs text-muted-foreground mt-1">9701473371</p>
          </motion.a>
        </div>
      </div>
    </PageTransition>
  );
}
