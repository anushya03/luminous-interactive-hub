import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  FileText,
  Youtube,
  Twitter,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY as string | undefined;
  const fallbackPublicKey = 'be39d78c-bd1a-4dd0-8b40-ab609f345ad6';
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const effectiveKey = accessKey || fallbackPublicKey;
    if (!effectiveKey) {
      // Fallback: open default email client with prefilled data
      const subject = formData.subject || 'New message from portfolio contact form';
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:anukarthikeyan03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      toast({
        title: "Email service not configured",
        description: "Opening your email client to send the message directly...",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: effectiveKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          reply_to: formData.email
        })
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Failed to send message",
          description: result.message || 'Please try again later.',
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "anukarthikeyan03@gmail.com",
      href: "mailto:anukarthikeyan03@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "63697 25720",
      href: "tel:+916369725720"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Tiruppur, Tamil Nadu",
      href: "https://www.google.com/maps/search/?api=1&query=Tiruppur%2C%20Tamil%20Nadu"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/anushyavarshinik/",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/anushya03",
      color: "hover:text-gray-400"
    },
    {
      name: "Medium",
      icon: <FileText className="w-5 h-5" />,
      href: "https://medium.com/@anukarthikeyan03",
      color: "hover:text-green-600"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      color: "hover:text-red-500"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      required
                      rows={6}
                      className="glass resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`flex items-center justify-center p-3 glass rounded-xl transition-all duration-300 ${social.color} group`}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mt-4 text-center">
                  Follow me for updates on my latest projects and tech insights
                </p>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-foreground/70">
                  I typically respond to messages within 24 hours. 
                  For urgent matters, feel free to reach out via phone.
                </p>
                <a
                  href="tel:+916369725720"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  63697 25720
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;