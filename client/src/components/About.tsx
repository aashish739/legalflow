import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '35+',
      label: 'Years Combined Experience'
    },
    {
      icon: Award,
      number: '₹400+',
      label: 'Crores in Cases Won'
    },
    {
      icon: Building2,
      number: '50+',
      label: 'Infrastructure Projects'
    },
    {
      icon: TrendingUp,
      number: '90%',
      label: 'Success Rate in Arbitrations'
    }
  ];

  const expertise = [
    'Contract Management Services',
    'Claims Identification & Preparation',
    'Dispute Avoidance & Resolution', 
    'Extension of Time Entitlements',
    'Prolongation Cost Quantification',
    'Alternative Dispute Resolution',
    'Government Contract Expertise',
    'Infrastructure Project Advisory'
  ];

  return (
    <section className="py-24 bg-card/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About <span className="text-accent">AAS Legal</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">AAS Legal</strong> is a Registered Limited Liability Partnership Law Firm established in June 2024 as a techno-legal consultancy specializing in contract execution and management.
              </p>
              
              <p className="leading-relaxed">
                Our firm was founded to bridge the gap between legal expertise and practical government experience. With our partners' combined 35+ years in government administration, we bring unique insights into commercial contracts and infrastructure projects.
              </p>
              
              <p className="leading-relaxed">
                We focus on supporting clients across various aspects of <strong className="text-foreground">Contract Management</strong>, <strong className="text-foreground">Dispute Avoidance</strong>, and <strong className="text-foreground">Dispute Resolution</strong> for different domains of commercial contracts in infrastructure projects.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-accent">
                        {stat.number}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm font-medium">
                        {stat.label}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  To leverage our extensive government and legal experience to support the industry in contract management and dispute resolution, fostering sustainable growth in India's infrastructure sector.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;