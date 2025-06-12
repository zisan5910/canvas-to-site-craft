
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Linkedin, Mail, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: <Phone className="h-5 w-5 text-green-500" />, label: "Phone", value: "+8801712525910", color: "from-green-500/20 to-green-500/5" },
    { icon: <MapPin className="h-5 w-5 text-red-500" />, label: "Location", value: "Bogura, Bangladesh", color: "from-red-500/20 to-red-500/5" },
    { icon: <Linkedin className="h-5 w-5 text-blue-500" />, label: "LinkedIn", value: "LinkedIn Profile", color: "from-blue-500/20 to-blue-500/5" },
    { icon: <Mail className="h-5 w-5 text-purple-500" />, label: "Email", value: "ridoan.zisan@gmail.com", color: "from-purple-500/20 to-purple-500/5" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Contact</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">Get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${info.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/80 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground text-sm">{info.label}</p>
                          <p className="font-bold text-foreground">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                </div>
                <p className="text-muted-foreground">I'd love to hear from you!</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <User className="h-4 w-4 text-primary" />
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    required
                    className="h-12 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <Mail className="h-4 w-4 text-primary" />
                    Compose email
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    className="border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
