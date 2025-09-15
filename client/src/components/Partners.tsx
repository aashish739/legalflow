import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import partner1 from '@assets/generated_images/Senior_executive_portrait_1_64d980f6.png';
import partner2 from '@assets/generated_images/Senior_executive_portrait_2_e4d0909b.png';
import partner3 from '@assets/generated_images/Legal_professional_portrait_7f1774a2.png';

const Partners = () => {
  const partners = [
    {
      name: 'Mr. Aditya Nath Das',
      title: 'IAS (Retd), Advocate',
      image: partner1,
      initials: 'AD',
      experience: '35+ Years',
      specialization: 'Government Affairs & Infrastructure',
      description: 'Former IAS Officer of Andhra Pradesh Cadre with extensive experience as Principal Secretary Irrigation and Chief Secretary. Specialized in commercial contracts and infrastructure development.',
      achievements: [
        'Former Chief Secretary of Andhra Pradesh',
        'Principal Secretary Irrigation',
        'Expert in Infrastructure Contracts'
      ]
    },
    {
      name: 'Mr. Sunil Kumar Das',
      title: 'IRS (Retd), Advocate',
      image: partner2,
      initials: 'SD',
      experience: '35+ Years',
      specialization: 'Revenue & Customs Law',
      description: 'Highly decorated IRS Officer (1986 C&CE Batch) with extensive experience as Director Revenue Intelligence and Principal Commissioner Customs. Member of GST Settlement Commission.',
      achievements: [
        'Director Revenue Intelligence',
        'Principal Commissioner Mumbai',
        'GST Settlement Commission Member'
      ]
    },
    {
      name: 'Mr. Abhay N. Das',
      title: 'Advocate',
      image: partner3,
      initials: 'AB',
      experience: '25+ Years',
      specialization: 'Construction & Commercial Law',
      description: 'Practicing advocate in Delhi High Court with substantial experience in construction and commercial contracts. Successfully handled arbitrations worth over ₹400 crores.',
      achievements: [
        'Delhi High Court Practice',
        '₹400+ Cr. Cases Won',
        'Infrastructure Arbitration Expert'
      ]
    }
  ];

  return (
    <section className="py-24 bg-background" id="partners">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced partners who bring decades of expertise in government administration, revenue services, and legal practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="hover-elevate group text-center" data-testid={`card-partner-${index}`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={partner.image} alt={partner.name} />
                    <AvatarFallback className="text-2xl font-semibold">{partner.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-bold">{partner.name}</CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">{partner.title}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-3">
                      <Badge variant="secondary">{partner.experience}</Badge>
                      <Badge variant="outline">{partner.specialization}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {partner.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {partner.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to benefit from our combined expertise?
          </p>
          <button 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-elevate transition-all"
            data-testid="button-meet-partners"
            onClick={() => console.log('Schedule meeting clicked')}
          >
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;