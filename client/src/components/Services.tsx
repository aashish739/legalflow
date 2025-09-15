import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, HandHeart, Users, Building, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Contract Due Diligence',
      description: 'Comprehensive review and analysis of commercial contracts to identify potential risks and opportunities.'
    },
    {
      icon: Scale,
      title: 'Claims Management',
      description: 'Expert handling of claims identification, preparation, and defense for infrastructure projects.'
    },
    {
      icon: HandHeart,
      title: 'Dispute Resolution',
      description: 'Alternative dispute resolution including adjudication, conciliation, and arbitration services.'
    },
    {
      icon: Users,
      title: 'Extension of Time Entitlements',
      description: 'Professional assessment and management of time extension claims and related entitlements.'
    },
    {
      icon: Building,
      title: 'Infrastructure Legal Support',
      description: 'Specialized legal support for various infrastructure development projects and contracts.'
    },
    {
      icon: Clock,
      title: 'Prolongation Cost Analysis',
      description: 'Quantum quantification and analysis of costs arising from project delays and disruptions.'
    }
  ];

  return (
    <section className="py-24 bg-card/50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Legal Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive techno-legal consultancy services tailored to meet the complex needs of modern infrastructure and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-elevate group" data-testid={`card-service-${index}`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Need specialized legal assistance for your project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all"
              data-testid="button-consultation-services"
              onClick={() => console.log('Request consultation clicked')}
            >
              Request Consultation
            </button>
            <button 
              className="px-8 py-3 border border-border text-foreground rounded-lg hover-elevate transition-all"
              data-testid="button-view-cases"
              onClick={() => console.log('View case studies clicked')}
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;