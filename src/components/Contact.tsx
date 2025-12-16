import { useState } from "react";
import { Mail, Phone, MapPin, Key, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Encrypted Email:", value: "cipher@cyberspace.sec" },
  { icon: Phone, label: "Secure Line:", value: "+1 (555) HACK-SEC" },
  { icon: MapPin, label: "Location:", value: "Distributed Network" },
  { icon: Key, label: "PGP Key:", value: "4A8B 9C2D 1E5F 7G3H" },
];

const responseTime = [
  { label: "Critical Issues:", value: "< 1 Hour" },
  { label: "General Inquiries:", value: "< 24 Hours" },
  { label: "Project Proposals:", value: "< 48 Hours" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "[MESSAGE_TRANSMITTED]",
      description: "Your secure message has been sent successfully.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="cyber-heading text-4xl md:text-5xl text-center text-primary text-glow mb-16">
          [CONTACT]
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="cyber-heading text-2xl text-primary mb-6">[SECURE_CHANNELS]</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-3 bg-secondary/30 border border-border"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <p className="text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="cyber-heading text-2xl text-primary mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                [RESPONSE_TIME]
              </h3>
              <div className="space-y-3">
                {responseTime.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center p-3 bg-secondary/30 border border-border"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-border bg-card p-8">
            <h3 className="cyber-heading text-2xl text-primary mb-6">[SEND_MESSAGE]</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-muted-foreground text-sm mb-2">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-input border border-border p-3 text-primary focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-muted-foreground text-sm mb-2">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-input border border-border p-3 text-primary focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-muted-foreground text-sm mb-2">Subject:</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-input border border-border p-3 text-primary focus:border-primary focus:outline-none transition-colors"
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
                <label className="block text-muted-foreground text-sm mb-2">Message:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-input border border-border p-3 text-primary focus:border-primary focus:outline-none transition-colors resize-none h-32"
                  maxLength={500}
                  required
                />
                <p className="text-muted-foreground text-xs mt-1">
                  Maximum 500 characters ({500 - formData.message.length} remaining)
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:animate-pulse-glow transition-all"
              >
                <Send className="w-4 h-4" />
                [TRANSMIT_MESSAGE]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
