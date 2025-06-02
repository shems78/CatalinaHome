import { Header } from '@/components/header';
import { QuoteForm } from '@/components/quote-form';
import { Footer } from '@/components/footer';

export default function Quote() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto">
          <QuoteForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}