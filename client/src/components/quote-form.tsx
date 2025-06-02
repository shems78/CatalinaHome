import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';


interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
}

interface QuoteFormErrors {
  name: string;
  email: string;
  projectType: string;
  description: string;
}

export function QuoteForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [],
  });
  const [errors, setErrors] = useState<QuoteFormErrors>({
    name: '',
    email: '',
    projectType: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof QuoteFormErrors, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : t.quote.nameRequired;
      case 'email':
        if (!value.trim()) return t.quote.emailRequired;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : t.quote.emailInvalid;
      case 'projectType':
        return value ? '' : t.quote.projectTypeRequired;
      case 'description':
        return value.trim() ? '' : t.quote.descriptionRequired;
      default:
        return '';
    }
  };

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    if (field in errors) {
      const error = validateField(field as keyof QuoteFormErrors, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, feature] });
    } else {
      setFormData({ ...formData, features: formData.features.filter(f => f !== feature) });
    }
  };

  const handleBlur = (field: keyof QuoteFormErrors) => {
    const error = validateField(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: QuoteFormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      projectType: validateField('projectType', formData.projectType),
      description: validateField('description', formData.description),
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      toast({
        title: t.quote.success,
        description: '',
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        features: [],
      });
      setErrors({ name: '', email: '', projectType: '', description: '' });
      
    } catch (error) {
      toast({
        title: t.quote.error,
        description: '',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative section-title">
          {t.quote.title}
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {t.quote.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <i className="fas fa-user text-purple-400 mr-3"></i>
            {t.quote.personalInfo}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.quote.name} *
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder={t.quote.name}
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
                {t.quote.email} *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder={t.quote.email}
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
                {t.quote.phone}
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder={t.quote.phone}
                className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.quote.company}
              </label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder={t.quote.company}
                className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <i className="fas fa-project-diagram text-blue-400 mr-3"></i>
            {t.quote.projectDetails}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.quote.projectType} *
              </label>
              <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                <SelectTrigger className={`w-full bg-slate-900/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.projectType ? 'border-red-500 focus:border-red-500' : ''
                }`}>
                  <SelectValue placeholder={t.quote.projectType} />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="website">{t.quote.projectTypes.website}</SelectItem>
                  <SelectItem value="ecommerce">{t.quote.projectTypes.ecommerce}</SelectItem>
                  <SelectItem value="mobileApp">{t.quote.projectTypes.mobileApp}</SelectItem>
                  <SelectItem value="desktopApp">{t.quote.projectTypes.desktopApp}</SelectItem>
                  <SelectItem value="consulting">{t.quote.projectTypes.consulting}</SelectItem>
                  <SelectItem value="maintenance">{t.quote.projectTypes.maintenance}</SelectItem>
                  <SelectItem value="other">{t.quote.projectTypes.other}</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <div className="text-red-400 text-sm mt-1">{errors.projectType}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.quote.budget}
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                <SelectTrigger className="w-full bg-slate-900/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20">
                  <SelectValue placeholder={t.quote.budget} />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="small">{t.quote.budgetRanges.small}</SelectItem>
                  <SelectItem value="medium">{t.quote.budgetRanges.medium}</SelectItem>
                  <SelectItem value="large">{t.quote.budgetRanges.large}</SelectItem>
                  <SelectItem value="enterprise">{t.quote.budgetRanges.enterprise}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.quote.timeline}
              </label>
              <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                <SelectTrigger className="w-full bg-slate-900/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20">
                  <SelectValue placeholder={t.quote.timeline} />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="urgent">{t.quote.timelineOptions.urgent}</SelectItem>
                  <SelectItem value="normal">{t.quote.timelineOptions.normal}</SelectItem>
                  <SelectItem value="flexible">{t.quote.timelineOptions.flexible}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.quote.description} *
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              onBlur={() => handleBlur('description')}
              placeholder={t.quote.description}
              rows={5}
              className={`w-full bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none ${
                errors.description ? 'border-red-500 focus:border-red-500' : ''
              }`}
              required
            />
            {errors.description && (
              <div className="text-red-400 text-sm mt-1">{errors.description}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-4">
              {t.quote.features}
            </label>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(t.quote.featureOptions).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={formData.features.includes(key)}
                    onCheckedChange={(checked) => handleFeatureChange(key, !!checked)}
                    className="border-slate-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <label htmlFor={key} className="text-sm text-slate-300 cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner animate-spin mr-2"></i>
              {t.quote.submitting}
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-2"></i>
              {t.quote.submit}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}