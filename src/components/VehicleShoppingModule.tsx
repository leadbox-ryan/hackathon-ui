import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Zap, 
  Fuel, 
  Battery, 
  DollarSign, 
  Calendar, 
  Gauge, 
  Star,
  MessageCircle,
  Sparkles 
} from 'lucide-react';

import sedanBlue from '@/assets/sedan-blue.jpg';
import suvSilver from '@/assets/suv-silver.jpg';
import hatchbackWhite from '@/assets/hatchback-white.jpg';

interface Vehicle {
  id: string;
  name: string;
  price: number;
  year: number;
  image: string;
  fuelType: 'gas' | 'hybrid' | 'electric';
  condition: 'new' | 'used' | 'certified';
  mpg: string;
  horsepower: number;
  features: string[];
  matchReason?: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Accord Hybrid',
    price: 45500,
    year: 2024,
    image: sedanBlue,
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '48/47',
    horsepower: 204,
    features: ['Honda Sensing Suite', 'Wireless Apple CarPlay', 'Heated Seats'],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '2',
    name: 'CR-V',
    price: 38900,
    year: 2024,
    image: suvSilver,
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/34',
    horsepower: 190,
    features: ['AWD Available', 'Spacious Interior', 'Honda Sensing'],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '3',
    name: 'Civic Hatchback',
    price: 32200,
    year: 2023,
    image: hatchbackWhite,
    fuelType: 'gas',
    condition: 'certified',
    mpg: '32/42',
    horsepower: 180,
    features: ['Sport Mode', 'Manual Transmission', 'Compact & Efficient'],
    matchReason: 'Great value in your budget'
  },
  {
    id: '4',
    name: 'Pilot AWD',
    price: 52900,
    year: 2024,
    image: suvSilver,
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/27',
    horsepower: 280,
    features: ['8-Seater', 'AWD Standard', 'Premium Audio'],
    matchReason: 'Spacious for large families'
  },
  {
    id: '5',
    name: 'Civic Si',
    price: 35900,
    year: 2024,
    image: sedanBlue,
    fuelType: 'gas',
    condition: 'new',
    mpg: '27/37',
    horsepower: 200,
    features: ['Turbo Engine', '6-Speed Manual', 'Sport Suspension'],
    matchReason: 'Perfect sporty driving experience'
  },
  {
    id: '6',
    name: 'Ridgeline',
    price: 48900,
    year: 2024,
    image: suvSilver,
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/24',
    horsepower: 280,
    features: ['Truck Bed', 'AWD Available', 'Towing Package'],
    matchReason: 'Great for work and adventure'
  },
  {
    id: '7',
    name: 'Accord Sport',
    price: 41200,
    year: 2024,
    image: sedanBlue,
    fuelType: 'gas',
    condition: 'new',
    mpg: '30/38',
    horsepower: 192,
    features: ['Sport Wheels', 'Dual Exhaust', 'Paddle Shifters'],
    matchReason: 'Sporty yet practical sedan'
  },
  {
    id: '8',
    name: 'HR-V',
    price: 29900,
    year: 2024,
    image: hatchbackWhite,
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/34',
    horsepower: 158,
    features: ['Compact SUV', 'Good Cargo Space', 'Honda Sensing'],
    matchReason: 'Affordable and efficient SUV'
  }
];

const VehicleShoppingModule = () => {
  const [preferenceMode, setPreferenceMode] = useState<'want' | 'dont-want'>('want');
  const [userInput, setUserInput] = useState('');
  const [priceRange, setPriceRange] = useState([30000, 60000]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [minHorsepower, setMinHorsepower] = useState([150]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFuelTypeToggle = (fuelType: string) => {
    setSelectedFuelTypes(prev => 
      prev.includes(fuelType) 
        ? prev.filter(t => t !== fuelType)
        : [...prev, fuelType]
    );
  };

  const handleConditionToggle = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleSearch = () => {
    setHasSearched(true);
    
    // Filter vehicles based on current filters
    let filtered = mockVehicles.filter(vehicle => {
      const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const fuelTypeMatch = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType);
      const conditionMatch = selectedConditions.length === 0 || selectedConditions.includes(vehicle.condition);
      const horsepowerMatch = vehicle.horsepower >= minHorsepower[0];
      
      return priceMatch && fuelTypeMatch && conditionMatch && horsepowerMatch;
    });

    // Simple NLP-style matching for user input
    if (userInput.trim()) {
      const inputLower = userInput.toLowerCase();
      filtered = filtered.map(vehicle => {
        let matchScore = 0;
        let matchReason = '';

        if (inputLower.includes('kid') || inputLower.includes('family')) {
          if (vehicle.name.toLowerCase().includes('cr-v')) {
            matchScore += 3;
            matchReason = 'Perfect for families with kids';
          }
        }

        if (inputLower.includes('fuel') || inputLower.includes('gas') || inputLower.includes('efficient')) {
          if (vehicle.fuelType === 'hybrid' || parseInt(vehicle.mpg.split('/')[0]) > 30) {
            matchScore += 2;
            matchReason = 'Great fuel efficiency for your needs';
          }
        }

        if (inputLower.includes('budget') || inputLower.includes('30k') || inputLower.includes('$30')) {
          if (vehicle.price < 30000) {
            matchScore += 2;
            matchReason = 'Great value in your budget';
          }
        }

        if (inputLower.includes('sport') || inputLower.includes('fun')) {
          if (vehicle.features.some(f => f.toLowerCase().includes('sport'))) {
            matchScore += 2;
            matchReason = 'Perfect balance of sporty and practical';
          }
        }

        return { ...vehicle, matchReason: matchReason || vehicle.matchReason };
      }).sort((a, b) => {
        const aHasReason = a.matchReason ? 1 : 0;
        const bHasReason = b.matchReason ? 1 : 0;
        return bHasReason - aHasReason;
      });
    }

    setFilteredVehicles(filtered);
  };

  const suggestedInputs = [
    "I need a car that fits 3 kids and uses less gas",
    "Looking for something reliable under $30k",
    "Want a fuel-efficient car for daily commuting",
    "Need something sporty but practical"
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Find Your Perfect Vehicle
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell me what you're looking for, and I'll help you find the right match
          </p>
        </div>

        {/* Toggle Bar */}
        <div className="flex justify-center">
          <div className="bg-secondary p-1 rounded-lg inline-flex">
            <Button
              variant={preferenceMode === 'want' ? 'toggle-active' : 'toggle'}
              onClick={() => setPreferenceMode('want')}
              className="rounded-md"
            >
              <Sparkles className="w-4 h-4" />
              I Want
            </Button>
            <Button
              variant={preferenceMode === 'dont-want' ? 'toggle-active' : 'toggle'}
              onClick={() => setPreferenceMode('dont-want')}
              className="rounded-md"
            >
              I Don't Want
            </Button>
          </div>
        </div>

        {/* Conversational Input */}
        <Card className="shadow-card-hover">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">
                  {preferenceMode === 'want' ? "What are you looking for?" : "What would you prefer to avoid?"}
                </span>
              </div>
              
              <div className="relative">
                <Textarea
                  placeholder={preferenceMode === 'want' 
                    ? "e.g., I need a car that fits 3 kids and uses less gas..." 
                    : "e.g., I don't want anything that uses too much gas..."
                  }
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-[100px] resize-none border-border focus:ring-primary"
                />
                <Button 
                  size="sm" 
                  variant="gradient"
                  className="absolute bottom-3 right-3"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestedInputs.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setUserInput(suggestion)}
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Refinement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Fuel Type */}
          <Card className="shadow-card-hover">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-foreground">Fuel Type</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'gas', icon: Fuel, label: 'Gasoline' },
                    { id: 'hybrid', icon: Zap, label: 'Hybrid' },
                    { id: 'electric', icon: Battery, label: 'Electric' }
                  ].map(({ id, icon: Icon, label }) => (
                    <Button
                      key={id}
                      variant={selectedFuelTypes.includes(id) ? 'toggle-active' : 'toggle'}
                      size="sm"
                      onClick={() => handleFuelTypeToggle(id)}
                      className="w-full justify-start"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card className="shadow-card-hover">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-foreground">Budget</h3>
                </div>
                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={80000}
                    min={20000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Condition */}
          <Card className="shadow-card-hover">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-foreground">Condition</h3>
                </div>
                <div className="space-y-2">
                  {['new', 'certified', 'used'].map((condition) => (
                    <Button
                      key={condition}
                      variant={selectedConditions.includes(condition) ? 'toggle-active' : 'toggle'}
                      size="sm"
                      onClick={() => handleConditionToggle(condition)}
                      className="w-full justify-start capitalize"
                    >
                      {condition === 'certified' ? 'Certified Pre-Owned' : condition}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="shadow-card-hover">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-foreground">Performance</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Min Horsepower: {minHorsepower[0]}hp
                  </div>
                  <Slider
                    value={minHorsepower}
                    onValueChange={setMinHorsepower}
                    max={400}
                    min={100}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Recommended for You
              </h2>
              <Badge variant="secondary" className="text-sm">
                {filteredVehicles.length} vehicles found
              </Badge>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden shadow-card-hover hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{vehicle.name}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.year} • {vehicle.condition}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">${vehicle.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {vehicle.matchReason && (
                    <div className="bg-accent/10 border border-accent/20 rounded-md p-2">
                      <p className="text-sm text-accent font-medium flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {vehicle.matchReason}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4 text-muted-foreground" />
                      <span>{vehicle.mpg} MPG</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gauge className="w-4 h-4 text-muted-foreground" />
                      <span>{vehicle.horsepower} HP</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {vehicle.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{vehicle.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full" variant="gradient">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default VehicleShoppingModule;