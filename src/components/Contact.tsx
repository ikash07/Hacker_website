import { useState } from "react";
import { Mail, Phone, MapPin, Key, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "cipher@cyberspace.sec" },
  { icon: Phone, label: "Secure Line", value: "+1 (555) HACK-SEC" },
  { icon: MapPin, label: "Location", value: "Distributed Network" },
  { icon: Key, label: "PGP Key", value: "4A8B 9C2D 1E5F" },
];

const responseTime = [
  { label: "Critical:", value: "< 1 Hour" },
  { label: "General:", value: "< 24 Hours" },
  { label: "Projects:", value: "< 48 Hours" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "[MESSAGE_TRANSMITTED]",
      description: "Your secure message has been sent successfully.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="cyber-heading text-3xl sm:text-4xl md:text-5xl text-primary text-glow mb-4">
            [CONTACT]
          </h2>
          <p className="text-muted-foreground text-sm">
            ESTABLISHING SECURE CONNECTION... <span className="text-primary">READY</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="cyber-heading text-lg sm:text-xl lg:text-2xl text-primary mb-4 sm:mb-6">
                [SECURE_CHANNELS]
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-muted-foreground text-xs block">{item.label}</span>
                      <p className="text-primary text-sm truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="cyber-heading text-lg sm:text-xl lg:text-2xl text-primary mb-4 sm:mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                [RESPONSE_TIME]
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {responseTime.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center p-2.5 sm:p-3 bg-secondary/30 border border-border"
                  >
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="text-primary font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-border bg-card p-4 sm:p-6 lg:p-8">
            <h3 className="cyber-heading text-lg sm:text-xl lg:text-2xl text-primary mb-4 sm:mb-6">
              [SEND_MESSAGE]
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted-foreground text-xs sm:text-sm mb-1.5">Name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-input border border-border p-2.5 sm:p-3 text-primary text-sm focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground text-xs sm:text-sm mb-1.5">Email:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-input border border-border p-2.5 sm:p-3 text-primary text-sm focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground text-xs sm:text-sm mb-1.5">Subject:</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-input border border-border p-2.5 sm:p-3 text-primary text-sm focus:border-primary focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select subject</option>
                  <option value="pentest">Penetration Testing</option>
                  <option value="vuln">Vulnerability Assessment</option>
                  <option value="consult">Security Consultation</option>
                  <option value="forensics">Digital Forensics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-muted-foreground text-xs sm:text-sm mb-1.5">Message:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-input border border-border p-2.5 sm:p-3 text-primary text-sm focus:border-primary focus:outline-none transition-colors resize-none h-24 sm:h-32"
                  maxLength={500}
                  required
                />
                <p className="text-muted-foreground text-xs mt-1">
                  {500 - formData.message.length} characters remaining
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:animate-pulse-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    [TRANSMITTING...]
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    [TRANSMIT_MESSAGE]
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
