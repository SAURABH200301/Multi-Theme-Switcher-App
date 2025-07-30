import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@multitheme.app',
      description: 'Send us an email anytime',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-5PM EST',
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Theme Street',
      description: 'Design City, DC 12345',
    },
    {
      icon: '💬',
      title: 'Social',
      value: '@multithemeapp',
      description: 'Follow us for updates',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Get in Touch
        </h1>
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{
            color: currentTheme.colors.textSecondary,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          Have questions about our Multi-Theme Switcher? We'd love to hear from you!
        </p>
      </div>

      <div className={`grid gap-8 ${currentTheme.layout === 'sidebar' ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
    
        <div 
          className="p-8 rounded-lg"
          style={{
            backgroundColor: currentTheme.colors.surface,
            border: `1px solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.borderRadius,
            boxShadow: currentTheme.shadows.md,
          }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.primary,
              fontWeight: currentTheme.fonts.weight.bold,
            }}
          >
            Send us a Message
          </h2>

          {submitted ? (
            <div 
              className="text-center py-8 rounded-lg"
              style={{
                backgroundColor: currentTheme.colors.background,
                border: `2px solid ${currentTheme.colors.accent}`,
                borderRadius: currentTheme.borderRadius,
              }}
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{
                  color: currentTheme.colors.accent,
                  fontFamily: currentTheme.fonts.primary,
                  fontWeight: currentTheme.fonts.weight.bold,
                }}
              >
                Message Sent Successfully!
              </h3>
              <p 
                style={{
                  color: currentTheme.colors.textSecondary,
                  fontFamily: currentTheme.fonts.secondary,
                }}
              >
                Thank you for reaching out. We'll get back to you soon!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: currentTheme.colors.primary,
                  color: currentTheme.colors.surface,
                  fontFamily: currentTheme.fonts.secondary,
                  fontWeight: currentTheme.fonts.weight.medium,
                  borderRadius: currentTheme.borderRadius,
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{
                      color: currentTheme.colors.text,
                      fontFamily: currentTheme.fonts.secondary,
                      fontWeight: currentTheme.fonts.weight.medium,
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: currentTheme.colors.background,
                      color: currentTheme.colors.text,
                      borderColor: currentTheme.colors.border,
                      borderRadius: currentTheme.borderRadius,
                      fontFamily: currentTheme.fonts.secondary,
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{
                      color: currentTheme.colors.text,
                      fontFamily: currentTheme.fonts.secondary,
                      fontWeight: currentTheme.fonts.weight.medium,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: currentTheme.colors.background,
                      color: currentTheme.colors.text,
                      borderColor: currentTheme.colors.border,
                      borderRadius: currentTheme.borderRadius,
                      fontFamily: currentTheme.fonts.secondary,
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium mb-2"
                  style={{
                    color: currentTheme.colors.text,
                    fontFamily: currentTheme.fonts.secondary,
                    fontWeight: currentTheme.fonts.weight.medium,
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.text,
                    borderColor: currentTheme.colors.border,
                    borderRadius: currentTheme.borderRadius,
                    fontFamily: currentTheme.fonts.secondary,
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{
                    color: currentTheme.colors.text,
                    fontFamily: currentTheme.fonts.secondary,
                    fontWeight: currentTheme.fonts.weight.medium,
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.text,
                    borderColor: currentTheme.colors.border,
                    borderRadius: currentTheme.borderRadius,
                    fontFamily: currentTheme.fonts.secondary,
                  }}
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                }`}
                style={{
                  backgroundColor: currentTheme.colors.primary,
                  color: currentTheme.colors.surface,
                  fontFamily: currentTheme.fonts.secondary,
                  fontWeight: currentTheme.fonts.weight.medium,
                  borderRadius: currentTheme.borderRadius,
                  boxShadow: currentTheme.shadows.md,
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <h2 
            className="text-2xl font-bold"
            style={{
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.primary,
              fontWeight: currentTheme.fonts.weight.bold,
            }}
          >
            Contact Information
          </h2>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  border: `1px solid ${currentTheme.colors.border}`,
                  borderRadius: currentTheme.borderRadius,
                  boxShadow: currentTheme.shadows.sm,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3 
                      className="font-bold mb-1"
                      style={{
                        color: currentTheme.colors.text,
                        fontFamily: currentTheme.fonts.secondary,
                        fontWeight: currentTheme.fonts.weight.bold,
                      }}
                    >
                      {info.title}
                    </h3>
                    <p 
                      className="font-medium mb-1"
                      style={{
                        color: currentTheme.colors.primary,
                        fontFamily: currentTheme.fonts.secondary,
                        fontWeight: currentTheme.fonts.weight.medium,
                      }}
                    >
                      {info.value}
                    </p>
                    <p 
                      className="text-sm"
                      style={{
                        color: currentTheme.colors.textSecondary,
                        fontFamily: currentTheme.fonts.secondary,
                      }}
                    >
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;