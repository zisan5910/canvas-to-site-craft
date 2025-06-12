
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Linkedin, Mail, Send } from 'lucide-react';

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

  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Contact</h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground">Get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">+8801712525910</span>
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                <span className="text-foreground">Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                <span className="text-foreground">LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground break-all">ridoan.zisan@gmail.com</span>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Compose email
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message..."
                    rows={6}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base">
                  <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
