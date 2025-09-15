import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Zap, Train, Construction } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: Zap,
      title: 'Hydro Power Project Arbitration',
      value: '₹115 Crores',
      description: 'Successfully represented contractor in arbitration against a Maharatna Power Company for a hydro-power project dispute.',
      category: 'Power & Energy',
      status: 'Won',
      timeline: '2022-2023'
    },
    {
      icon: Building,
      title: 'Underground Metro Transport',
      value: '₹420 Crores',
      description: 'Represented company in dispute pertaining to underground urban transport with Government Metro Undertaking.',
      category: 'Transportation',
      status: 'Ongoing',
      timeline: '2023-2024'
    },
    {
      icon: Train,
      title: 'Eastern Dedicated Freight Corridor',
      value: 'Multiple Cases',
      description: 'Successfully handled 6 different arbitration cases for client involving railway freight corridor projects.',
      category: 'Railways',
      status: 'Won',
      timeline: '2021-2023'
    },
    {
      icon: Construction,
      title: 'Tunnel & Bridge Works J&K',
      value: '₹300 Crores',
      description: 'Represented contractor in arbitrations for tunnel and bridge projects in Jammu & Kashmir region.',
      category: 'Infrastructure',
      status: 'Won',
      timeline: '2020-2022'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Won': return 'default';
      case 'Ongoing': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <section className="py-24 bg-background" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Notable <span className="text-accent">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. Here are some of the significant cases we have successfully handled across various infrastructure sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-case-${index}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant={getStatusColor(caseItem.status)}>
                        {caseItem.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{caseItem.timeline}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">
                    {caseItem.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="text-xs">
                      {caseItem.category}
                    </Badge>
                    <span className="text-lg font-bold text-accent">
                      {caseItem.value}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {caseItem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-card/50 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Success in Complex Disputes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">₹800+</div>
              <div className="text-muted-foreground">Crores Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Major Cases</div>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our proven track record in handling complex infrastructure disputes demonstrates our capability to protect your interests and maximize recovery in challenging legal situations.
          </p>
          <button 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all"
            data-testid="button-discuss-case"
            onClick={() => console.log('Discuss your case clicked')}
          >
            Discuss Your Case
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;