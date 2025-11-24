import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onNavigateToPeriod={(period) => console.log('Navigate to period:', period)} 
    />
  );
}
