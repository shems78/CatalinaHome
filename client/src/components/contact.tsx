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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: t.contact.success,
        description: '',
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      
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

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 space-y-6">
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

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-white mb-2">Email</h4>
              <p className="text-slate-400">contact@catalinahome.net</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-white mb-2">
                {t.language === 'fr' ? 'Téléphone' : 'Phone'}
              </h4>
              <p className="text-slate-400">+216 23 552 210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
