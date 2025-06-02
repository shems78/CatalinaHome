import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : t.contact.nameRequired;
      case 'email':
        if (!value.trim()) return t.contact.emailRequired;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : t.contact.emailInvalid;
      case 'message':
        return value.trim() ? '' : t.contact.messageRequired;
      default:
        return '';
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // Clear error if field becomes valid
    if (errors[field]) {
      const error = validateField(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/movdgono', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Show success message
        toast({
          title: t.contact.success,
          description: '',
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      toast({
        title: t.contact.error,
        description: '',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative section-title">
          {t.contact.title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-envelope text-purple-400 mr-3"></i>
                  Envoyez-nous un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.contact.name}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder={t.contact.name}
                      className={`w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.name && (
                      <div className="text-red-400 text-sm mt-1">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.contact.email}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder={t.contact.email}
                      className={`w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.email && (
                      <div className="text-red-400 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder={t.contact.message}
                      rows={5}
                      className={`w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.message && (
                      <div className="text-red-400 text-sm mt-1">{errors.message}</div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner animate-spin mr-2"></i>
                        {t.contact.sending}
                      </>
                    ) : (
                      t.contact.send
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-info-circle text-blue-400 mr-3"></i>
                  Informations de contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.contact.info.email}</h4>
                      <p className="text-slate-300">contact@catalinahome.net</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.contact.info.phone}</h4>
                      <p className="text-slate-300">+216 23 552 210</p>
                      <p className="text-slate-300">+216 22 135 511</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.contact.info.address}</h4>
                      <p className="text-slate-300">{t.contact.info.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white">Temps de réponse</h4>
                </div>
                <p className="text-purple-200 text-sm">
                  Nous vous répondons généralement sous 24h en jours ouvrables.
                  Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}