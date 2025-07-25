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


interface Vehicle {
  id: string;
  name: string;
  price: number;
  year: number;
  image: string;
  vin: string;
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
    name: 'Ford Bronco Sport Badlands',
    price: 54344,
    year: 2022,
    image: 'https://buildfoc.ford.com/dig//Ford/Bronco+Sport/2022/HD-FULL/Vin[3FMCR9D92NRD85998]/INT/3/vehicle.png',
    vin: '3FMCR9D92NRD85998',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '2',
    name: 'Ford Mustang Dark Horse',
    price: 99402,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1010639/pictures/ffcc2547-eeba-4be6-bd83-dadafc513d5e-XXL',
    vin: '1FA6P8R03R5505379',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 400,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '3',
    name: 'Ford Super Duty F-450 DRW XLT',
    price: 40595,
    year: 2023,
    image: 'https://buildfoc.ford.com/dig/Ford/Super Duty F-450 DRW/2023/HD-FULL/Vin[1FT8W4DM9PED49791]/EXT/1/vehicle.png',
    vin: '1FT8W4DM9PED49791',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 838,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '4',
    name: 'Ford Bronco Raptor',
    price: 126382,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1081893/pictures/649c14bd-b6b1-4868-aeae-96e403878ac4-XXL',
    vin: '1FMEE0RR5RLA82694',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '5',
    name: 'Ford Escape Active',
    price: 36994,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1124737/pictures/5fd72378-291a-4907-9148-71bc58b78a7d-XXL',
    vin: '1FMCU0GN4SUA00691',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '6',
    name: 'Ford Escape ST-Line',
    price: 42094,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1132086/pictures/bde1dcfa-7151-4758-ae10-242e543ad67d-XXL',
    vin: '1FMCU0MZ2SUA11955',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '7',
    name: 'Ford Escape ST-Line Select',
    price: 46744,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1132088/pictures/6098d5e8-3433-4a67-98e3-e02ad68ddb36-XXL',
    vin: '1FMCU9NZXSUA12550',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '8',
    name: 'Ford Transit Cargo Van',
    price: 57750,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1149258/pictures/5cc8d3f7-a1da-43de-821f-aeda341abb2d-XXL',
    vin: '1FTBR1Y8XRKB68776',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Keyless Entry","WiFi Hotspot"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '9',
    name: 'Ford Transit Cargo Van',
    price: 57750,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1154978/pictures/4c4d9df3-8ba9-4ec5-8ddc-09691bd5dd7f-XXL',
    vin: '1FTBR1Y85RKB68748',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Keyless Entry","WiFi Hotspot"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '10',
    name: 'Ford Escape PHEV',
    price: 41694,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1154981/pictures/31ff7d3d-581e-45ba-a732-ff61e7bc5a5a-XXL',
    vin: '1FMCU0E16SUA40710',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '11',
    name: 'Ford Transit Cargo Van',
    price: 57750,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1165244/pictures/f2270515-65c2-42bc-b278-819ed912fb03-XXL',
    vin: '1FTBR1Y80RKB72111',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Keyless Entry","WiFi Hotspot"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '12',
    name: 'Ford F-150 XL',
    price: 52500,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1200220/pictures/f0d04f87-7a0e-4345-b0ac-da22cb5c7d05-XXL',
    vin: '1FTMF1KPXSKD19302',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '13',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1200223/pictures/9652c9e1-8dff-4df3-8394-cec2beee9f57-XXL',
    vin: '1FTEW3LP2SKD30406',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '14',
    name: 'Ford F-150 XLT',
    price: 116794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1200226/pictures/96da9629-de69-41ef-b84e-2c31780b6a1c-XXL',
    vin: '1FTFW3L58SFA01589',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '15',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1205075/pictures/26753e42-8c1d-47e2-9757-516bbd38615b-XXL',
    vin: '1FMCU0E13SUA66228',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '16',
    name: 'Ford F-150 XLT',
    price: 60925,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1212026/pictures/2c280395-b364-41a8-b20b-2ca77cd8508f-XXL',
    vin: '1FTEW3LP8SKD40096',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '17',
    name: 'Ford Maverick XLT',
    price: 46895,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1213480/pictures/db95fa9f-d0d3-4a6b-ab1e-553a7421aafa-XXL',
    vin: '3FTTW8J37SRA23507',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '18',
    name: 'Ford Explorer Active',
    price: 52680,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1220364/pictures/06c11167-eaa5-4d22-b592-dda7169e733c-XXL',
    vin: '1FMUK8DHXSGA78530',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '19',
    name: 'Ford Escape ST-Line',
    price: 43594,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1224079/pictures/8c5447db-7d73-4b96-9398-85137b71a2e3-XXL',
    vin: '1FMCU9MZ0SUA67669',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '20',
    name: 'Ford Escape PHEV',
    price: 39594,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229608/pictures/050ae235-35cb-4863-b795-4557f6740cbd-XXL',
    vin: '1FMCU0E16SUA65848',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '21',
    name: 'Ford Expedition Tremor',
    price: 106008,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229612/pictures/f3cf524c-ef94-4f83-b6ef-498112428c2e-XXL',
    vin: '1FMJU1RG1SEA02520',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '22',
    name: 'Ford Maverick LARIAT',
    price: 53295,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229620/pictures/3601e581-93e0-4d24-8e89-01788592bbfc-XXL',
    vin: '3FTTW8SA3SRA23145',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '23',
    name: 'Ford Maverick XLT',
    price: 43995,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229622/pictures/9ca52e94-6b6a-4f77-b676-218ee1387375-XXL',
    vin: '3FTTW8JA6SRA32262',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '24',
    name: 'Ford Mustang GT Premium',
    price: 73815,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229623/pictures/741ca1b5-38fc-47e2-9a1c-ce49bf55a8a3-XXL',
    vin: '1FAGP8FF1S5107414',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '25',
    name: 'Ford Ranger Raptor',
    price: 83415,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229624/pictures/9edf5448-7210-426e-95a4-11d2e4f216a8-XXL',
    vin: '1FTER4LRXSLE00470',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '26',
    name: 'Ford Transit Cargo Van',
    price: 76300,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229632/pictures/2a1855a6-f90d-4692-a983-fefc235c2575-XXL',
    vin: '1FTBF8CG8SKA04478',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '27',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229637/pictures/96318996-5714-43bc-9c45-ef8229cffdb6-XXL',
    vin: '1FMCU0E17SUA66118',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '28',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229642/pictures/755df5f8-6c78-42f6-8132-029a17321216-XXL',
    vin: '1FMCU0E14SUA78856',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '29',
    name: 'Ford Maverick XLT',
    price: 44195,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229660/pictures/3377a873-2382-46f8-849c-e5c453182c18-XXL',
    vin: '3FTTW8J36SRA22784',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '30',
    name: 'Ford Maverick XLT',
    price: 41495,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229663/pictures/9f4a65fe-f5bf-4171-a3cf-d0a40e37d5b7-XXL',
    vin: '3FTTW8H39SRA21828',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '31',
    name: 'Ford Ranger LARIAT',
    price: 57215,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229666/pictures/2a4ad95e-3232-46ed-bb30-c9e82cc9df25-XXL',
    vin: '1FTER4KHXSLE03068',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '32',
    name: 'Ford Transit Cargo Van',
    price: 61845,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229668/pictures/848b2248-c783-463c-8d2a-cfcf9bdd7008-XXL',
    vin: '1FTBR1C86SKA08312',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '33',
    name: 'Ford Transit Cargo Van',
    price: 61745,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1229669/pictures/df61aec7-b166-471c-b932-02044b180127-XXL',
    vin: '1FTBR1C85SKA06521',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '34',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1232653/pictures/9f933738-26e4-4b3e-b0d0-f8c290247a1c-XXL',
    vin: '1FMCU0E15SUA66022',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '35',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1232654/pictures/dc513271-6d4d-425a-9698-a1809b9d9add-XXL',
    vin: '1FMCU0E1XSUA67196',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '36',
    name: 'Ford Mustang Mach-E Select',
    price: 59335,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1246001/pictures/d6eae17f-50db-40a4-8c1b-a2d2239da20a-XXL',
    vin: '3FMTK1S50SMA02008',
    fuelType: 'electric',
    condition: 'new',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '37',
    name: 'Ford Bronco Sport Big Bend',
    price: 44740,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1249422/pictures/6d24e15e-aa85-4c12-afb8-f968b05591f1-XXL',
    vin: '3FMCR9BN5SRE41539',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '38',
    name: 'Ford Maverick XLT',
    price: 45095,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1249429/pictures/7dc29fab-df04-4974-be8d-f945dac0953a-XXL',
    vin: '3FTTW8JA1SRA40981',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '39',
    name: 'Ford Ranger LARIAT',
    price: 57215,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1249430/pictures/c164d476-bcf6-4c33-a86d-95b0cc62e94b-XXL',
    vin: '1FTER4KH7SLE03478',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '40',
    name: 'Ford Mustang EcoBoost',
    price: 43570,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1251395/pictures/bc2c9424-cca9-4172-9fbe-083ee4f284bb-XXL',
    vin: '1FA6P8TH5S5109202',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '41',
    name: 'Ford Bronco Sport Badlands',
    price: 47990,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262822/pictures/2ff35e2d-f354-47b1-a4c6-cfda1b0364ca-XXL',
    vin: '3FMCR9DA9SRE42039',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '42',
    name: 'Ford Bronco Sport Badlands',
    price: 50545,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262824/pictures/335a8ab3-f3f1-4111-b5d0-2180a77edd94-XXL',
    vin: '3FMCR9DA0SRE40681',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '43',
    name: 'Ford Escape PHEV',
    price: 39794,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262835/pictures/55ef4834-d3ca-4ab1-8220-be69dfee5eaa-XXL',
    vin: '1FMCU0E16SUA74372',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '44',
    name: 'Ford Escape PHEV',
    price: 42444,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262836/pictures/0fbf2db0-8e90-4874-a701-95fe91923469-XXL',
    vin: '1FMCU0E1XSUA75167',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '45',
    name: 'Ford Escape PHEV',
    price: 41644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262839/pictures/16d20406-2476-4b28-8b16-df0eb237c1f6-XXL',
    vin: '1FMCU0E17SUA77376',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 200,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '46',
    name: 'Ford F-150 Raptor',
    price: 137962,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262861/pictures/c7400874-07af-4603-acb7-c56686710071-XXL',
    vin: '1FTFW1RGXSFA64688',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '47',
    name: 'Ford F-150 Raptor',
    price: 135796,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262862/pictures/aa39bdcc-6d41-4ba0-a393-2df49cbc73ea-XXL',
    vin: '1FTFW1RG7SFA88155',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '48',
    name: 'Ford F-150 Lightning Flash',
    price: 79090,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262871/pictures/eae38a5c-b5cd-4c53-a13e-50c84b1ae298-XXL',
    vin: '1FT6W3LU4SWG08872',
    fuelType: 'electric',
    condition: 'new',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '49',
    name: 'Ford Maverick XLT',
    price: 44295,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262875/pictures/6cc766a3-615f-4ae6-9f58-f56564e7b48e-XXL',
    vin: '3FTTW8JA3SRA44787',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '50',
    name: 'Ford Maverick XLT',
    price: 39695,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262876/pictures/96e116ad-c914-4e14-ab36-fa9bcfdab740-XXL',
    vin: '3FTTW8H39SRA44767',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '51',
    name: 'Ford Ranger Raptor',
    price: 85115,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262877/pictures/1ee0d8d9-375a-4086-9b42-5553426b9d99-XXL',
    vin: '1FTER4LR4SLE07303',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '52',
    name: 'Ford Super Duty F-350 SRW LARIAT',
    price: 105188.8,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1262882/pictures/8da691f2-73dc-4a75-84f5-0dbc926e51f6-XXL',
    vin: '1FT8W3BA3SEC61802',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 612,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '53',
    name: 'Ford F-150 XL',
    price: 52500,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263532/pictures/d47d3161-47d6-431b-830f-25d0b09a2da4-XXL',
    vin: '1FTMF1KP8SKD81541',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '54',
    name: 'Ford F-150 XL',
    price: 52500,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263533/pictures/178e0ef9-295e-4347-9083-6b7642978802-XXL',
    vin: '1FTMF1KP3SKD81544',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '55',
    name: 'Ford Maverick LARIAT',
    price: 51295,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263536/pictures/519d5fe9-85fc-4aa4-9497-002d1c7f3886-XXL',
    vin: '3FTTW8SA3SRA62205',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '56',
    name: 'Ford Maverick XLT',
    price: 42895,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263538/pictures/59ecedd3-701f-4edb-afc7-2d66598d3d37-XXL',
    vin: '3FTTW8H33SRA61595',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '57',
    name: 'Ford Mustang Mach-E Premium',
    price: 71975,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263540/pictures/eb20ba53-1afa-4f50-a034-3950d2c93eb4-XXL',
    vin: '3FMTK3SU1SMA12551',
    fuelType: 'electric',
    condition: 'new',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '58',
    name: 'Ford Super Duty F-250 SRW XLT',
    price: 88185,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1263543/pictures/7845fee4-2520-4d5b-954a-5371846168a7-XXL',
    vin: '1FT7W2BA2SEC88317',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 612,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '59',
    name: 'Ford Maverick XLT',
    price: 47115,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1269281/pictures/949e6b4e-24d3-41ca-99a9-efb9384c406a-XXL',
    vin: '3FTTW8J31SRA14740',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '60',
    name: 'Ford Mustang EcoBoost Premium',
    price: 55775,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1283249/pictures/475d488c-93d1-4f62-b5fa-4f517327ed2c-XXL',
    vin: '1FAGP8UH9S5113823',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 184,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '61',
    name: 'Ford Mustang EcoBoost',
    price: 42525,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1292102/pictures/03ad74d0-4478-4bd1-841d-8a44a5d660ee-XXL',
    vin: '1FA6P8TH5S5114044',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '62',
    name: 'Ford Bronco Base',
    price: 57896,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294902/pictures/56774686-65c7-4ba5-a454-b63fd5ffa85e-XXL',
    vin: '1FMDE6BH3SLA51708',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '63',
    name: 'Ford Transit Cargo Van',
    price: 62995,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298308/pictures/bdd72b6a-b32e-4ad2-9108-a1a3ed6f570d-XXL',
    vin: '1FTBR1C84SKA51045',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '64',
    name: 'Ford Bronco Badlands',
    price: 76085,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298309/pictures/142fd197-b824-4f9c-a3cb-1468723fad6a-XXL',
    vin: '1FMEE9BP1SLA71467',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '65',
    name: 'Ford Maverick XLT',
    price: 47095,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298310/pictures/98b7967a-784e-4af4-9140-6e7eaee2f3de-XXL',
    vin: '3FTTW8J38SRA59948',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '66',
    name: 'Ford Bronco Sport Big Bend',
    price: 41050,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298491/pictures/c11b95c2-0423-4c4e-aabd-a8be3b4a699b-XXL',
    vin: '3FMCR9BN3SRE51020',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '67',
    name: 'Ford Bronco Sport Big Bend',
    price: 40835,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298494/pictures/bf9ab84a-0f88-4e4c-9799-d2e916937db9-XXL',
    vin: '3FMCR9BN8SRE51336',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '68',
    name: 'Ford Escape ST-Line',
    price: 42094,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298498/pictures/0bd0017f-c75a-4c49-99ce-8b37f5744c40-XXL',
    vin: '1FMCU9MZ2SUA90225',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '69',
    name: 'Ford Transit Cargo Van',
    price: 63805,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298507/pictures/62f29ba7-b89e-4134-9698-9fe460c4dcc3-XXL',
    vin: '1FTBR1C81SKA51164',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '70',
    name: 'Ford Transit Cargo Van',
    price: 65495,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1298508/pictures/b7c0bb2d-e443-4d76-9016-fd6e1273a664-XXL',
    vin: '1FTBW1X88SKA51746',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '71',
    name: 'Ford F-150 STX',
    price: 65310,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1299687/pictures/ea876376-94a3-4074-b02f-07146a9722c5-XXL',
    vin: '1FTEW2LP2SKD88834',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '72',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1299689/pictures/3d214329-2d42-4c42-9938-29a59c5118d9-XXL',
    vin: '1FTEW3LP4SKD87772',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '73',
    name: 'Ford Bronco Big Bend',
    price: 63550,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1304602/pictures/108a98ca-1bb1-41fa-97b3-f903f23ad787-XXL',
    vin: '1FMEE7BH5SLA73817',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '74',
    name: 'Ford Explorer ST',
    price: 72565,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1305253/pictures/67d8383c-3833-4179-ba4c-399907394056-XXL',
    vin: '1FMWK8GC1SGB91842',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '75',
    name: 'Ford F-150 Raptor',
    price: 134812,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1308389/pictures/2604baf3-1bf8-4d9e-8c0c-bb132b8eff26-XXL',
    vin: '1FTFW1RG9SFB10883',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '76',
    name: 'Ford Bronco Sport Big Bend',
    price: 40715,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1308438/pictures/aad3eb29-815a-41ed-9693-1bccf5dde02f-XXL',
    vin: '3FMCR9BN8SRE41096',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '77',
    name: 'Ford Maverick XLT',
    price: 43395,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1315466/pictures/e7a80e2a-6105-40ee-8c5c-0f72593b11c3-XXL',
    vin: '3FTTW8JA6SRA79078',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '78',
    name: 'Ford Transit Cargo Van',
    price: 67405,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1315467/pictures/1888ffe2-a9d0-4b05-a1ef-0e0d097a40a5-XXL',
    vin: '1FTBR2C85SKA51349',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '79',
    name: 'Ford F-150 XLT',
    price: 67435,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1320994/pictures/585e0d47-4b8d-4c94-831d-62eaef605b6e-XXL',
    vin: '1FTEW3LP4SKE15408',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '80',
    name: 'Ford Mustang Mach-E Select',
    price: 60135,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1320995/pictures/8d01be03-04a8-4921-80f1-8e05c0d9319c-XXL',
    vin: '3FMTK1S51SMA15673',
    fuelType: 'electric',
    condition: 'new',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '81',
    name: 'Ford Bronco Sport Outer Banks',
    price: 42200,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324072/pictures/84551e9b-6ecf-4954-9e72-4f441ebde773-XXL',
    vin: '3FMCR9CN8SRE63016',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '82',
    name: 'Ford F-150 LARIAT',
    price: 84690,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324078/pictures/b99f4c80-1a22-4944-b0c0-07f1ff62c1f0-XXL',
    vin: '1FTFW5L58SKE05432',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '83',
    name: 'Ford F-150 XLT',
    price: 67035,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324081/pictures/e041bca8-e91a-45e6-8586-1b223bd8a175-XXL',
    vin: '1FTEW3LP9SKE16067',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '84',
    name: 'Ford Ranger Raptor',
    price: 83990,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324086/pictures/fa5c6458-894c-4e12-ab43-0a89a182056e-XXL',
    vin: '1FTER4LR9SLE11881',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '85',
    name: 'Ford Transit Cargo Van',
    price: 66705,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324088/pictures/4fc95729-9f70-4684-a42f-126908040453-XXL',
    vin: '1FTBR2C89SKA51693',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '86',
    name: 'Ford Transit Cargo Van',
    price: 63330,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324089/pictures/7b0c1f8b-5ee3-4090-b33d-0973af4c937b-XXL',
    vin: '1FTBR1C87SKA51248',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '87',
    name: 'Ford Transit Passenger Wagon XL',
    price: 80785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324090/pictures/9771a06e-80a5-484b-ab40-14a3943b4ccb-XXL',
    vin: '1FBAX9C87SKA43879',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["3rd Row Seat","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '88',
    name: 'Ford Bronco Sport Outer Banks',
    price: 42200,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324095/pictures/4e3facd0-87f0-4323-b701-2d311f706640-XXL',
    vin: '3FMCR9CN2SRE78434',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '89',
    name: 'Ford Bronco Sport Outer Banks',
    price: 42200,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324096/pictures/7237573b-de65-4cc4-93a6-810e1bbfbed7-XXL',
    vin: '3FMCR9CN4SRE78726',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '90',
    name: 'Ford Escape Active',
    price: 37344,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324097/pictures/c791e216-b362-4768-80c5-ee8106f399e7-XXL',
    vin: '1FMCU9GN2SUB09669',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '91',
    name: 'Ford Escape Active',
    price: 37894,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324098/pictures/c3066795-9a40-4d8a-8c91-e8e4c7509396-XXL',
    vin: '1FMCU9GN8SUB09949',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '92',
    name: 'Ford Explorer ST',
    price: 71765,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324101/pictures/4116fd3a-5351-4578-b640-aad1e3152c0d-XXL',
    vin: '1FMWK8GC1SGB87189',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '93',
    name: 'Ford F-150 XLT',
    price: 60445,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324111/pictures/2d2e5241-bf11-4cd6-bbbf-436c806188ec-XXL',
    vin: '1FTEW3LP9SKE22628',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '94',
    name: 'Ford F-150 Lightning Pro',
    price: 64110,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324114/pictures/85c12f5a-fc30-43e5-8362-d28d79ecbc99-XXL',
    vin: '1FTVW1BK5SWG14566',
    fuelType: 'electric',
    condition: 'new',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '95',
    name: 'Ford Maverick XLT',
    price: 45445,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324115/pictures/b88e8488-ba1f-43f6-92e1-60cfc146760f-XXL',
    vin: '3FTTW8J36SRA80295',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '96',
    name: 'Ford Transit Cargo Van',
    price: 79770,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1324117/pictures/6a10e4a1-2938-4c02-b828-aa1aa9603cc4-XXL',
    vin: '1FTBR3UG9SKA52905',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '97',
    name: 'Ford Bronco Raptor',
    price: 135766,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325635/pictures/74d80271-2da0-4286-b4df-de742e9f8f1b-XXL',
    vin: '1FMEE0RR7SLA78023',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '98',
    name: 'Ford Escape ST-Line',
    price: 39194,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325637/pictures/cc918992-9c27-4638-b220-9394ae898e97-XXL',
    vin: '1FMCU9MN8SUB12953',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '99',
    name: 'Ford F-150 LARIAT',
    price: 88615,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325638/pictures/568f9001-7a6f-43d1-81cd-cc4d6a3a248b-XXL',
    vin: '1FTFW5LD7SFB12427',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '100',
    name: 'Ford F-150 Raptor',
    price: 134812,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325640/pictures/1f984e55-6013-4d25-9665-e73465f31e20-XXL',
    vin: '1FTFW1RG0SFB14644',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '101',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325642/pictures/fb5c140d-9ac7-4fe9-96e0-bcef84592b54-XXL',
    vin: '1FTEW3LP5SFB13327',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '102',
    name: 'Ford Maverick XLT',
    price: 42245,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325645/pictures/0347c1b2-07d6-4f07-9168-20a79d4d8399-XXL',
    vin: '3FTTW8H32SRA91736',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '103',
    name: 'Ford Transit Cargo Van',
    price: 66965,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325647/pictures/bca5a375-7ee4-4356-aaaa-429558cc5d5b-XXL',
    vin: '1FTBR2C83SKA69218',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '104',
    name: 'Ford Transit Cargo Van',
    price: 63485,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325648/pictures/803d34b9-062c-4ba6-a99b-a9a9702a2d79-XXL',
    vin: '1FTBR1C85SKA69733',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '105',
    name: 'Ford Transit Cargo Van',
    price: 62695,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1325649/pictures/d298767c-2b53-492e-b427-c2b00964f2d2-XXL',
    vin: '1FTBR1C89SKA69895',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '106',
    name: 'Ford Escape ST-Line Elite',
    price: 45744,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1342701/pictures/a469e1f3-ed26-441d-8acc-b6d85e0cce74-XXL',
    vin: '1FMCU9PA4SUB26647',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '107',
    name: 'Ford Escape ST-Line Elite',
    price: 50244,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1342702/pictures/7875f9b7-41f9-41c3-aa8e-0f7266bb1626-XXL',
    vin: '1FMCU9PA4SUB25742',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '108',
    name: 'Ford F-150 LARIAT',
    price: 89390,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1342706/pictures/5f15cfd4-115f-4488-bd5a-611012b93167-XXL',
    vin: '1FTFW5LD3SFB24302',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '109',
    name: 'Ford Ranger XLT',
    price: 51450,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1342731/pictures/c3f68c52-e7a7-44de-9150-b875bf7d6912-XXL',
    vin: '1FTER4HH4SLE23159',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '110',
    name: 'Ford F-150 LARIAT',
    price: 84640,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1343323/pictures/e9e8edba-a2f3-4a1e-986c-88fb3375583f-XXL',
    vin: '1FTFW5L52SKD88112',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '111',
    name: 'Ford F-150 XLT',
    price: 59995,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1345382/pictures/71cf2715-ed22-420b-a3e5-1eca49f2c8d4-XXL',
    vin: '1FTEW3LP9SKE14903',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '112',
    name: 'Ford Explorer ST',
    price: 72430,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1345534/pictures/84c0d0c5-c32a-41db-96cb-4661c3d42b5a-XXL',
    vin: '1FMWK8GC4SGB91642',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 255,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '113',
    name: 'Ford F-150 LARIAT',
    price: 89985,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1346859/pictures/5d218ae3-7d00-4e06-877c-607239aa8603-XXL',
    vin: '1FTFW5LD6SFB24763',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 280,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '114',
    name: 'Ford F-150 LARIAT',
    price: 87190,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1346861/pictures/22ea2c95-5d04-4d03-aeb8-60c61502c6d9-XXL',
    vin: '1FTFW5LD5SFB25001',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 280,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '115',
    name: 'Ford Mustang EcoBoost',
    price: 44635,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1346862/pictures/5ee9106e-3d9e-4bad-add5-f569edfb4fbf-XXL',
    vin: '1FA6P8TH3S5121252',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 184,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '116',
    name: 'Ford Transit Cargo Van',
    price: 62905,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1348049/pictures/b73e5936-20ec-4798-afdd-21b7b59f8f62-XXL',
    vin: '1FTBR1C81SKA69891',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '117',
    name: 'Ford Bronco Raptor',
    price: 129226,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1349019/pictures/5299843d-c860-456d-acf8-6508f2406b05-XXL',
    vin: '1FMEE0RR5SLA78294',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '118',
    name: 'Ford Escape ST-Line',
    price: 37594,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1350825/pictures/2f77c5c8-3d63-43ef-91ff-c8e4fb5f35ad-XXL',
    vin: '1FMCU9MN4SUB13355',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '119',
    name: 'Ford F-150 LARIAT',
    price: 84610,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1350827/pictures/2a922ad0-f646-494a-bf9b-8e397022212c-XXL',
    vin: '1FTFW5L89SKE22394',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '120',
    name: 'Ford F-150 STX',
    price: 63035,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1350829/pictures/f2286e0f-f3be-4a55-bf22-b5b240764f25-XXL',
    vin: '1FTEW2LP8SKE41651',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '121',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1352563/pictures/a2081324-41f5-4dd0-acf2-94b2f462549a-XXL',
    vin: '1FTEW3LP3SFB12600',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '122',
    name: 'Ford Escape ST-Line',
    price: 39444,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1358661/pictures/6d200932-fe5f-4e25-9bc6-e1e706b6d81c-XXL',
    vin: '1FMCU9MN4SUB26266',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '123',
    name: 'Ford Escape ST-Line',
    price: 37944,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1358662/pictures/351496e6-6791-410c-9dec-38747814f636-XXL',
    vin: '1FMCU9MN3SUB25853',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '124',
    name: 'Ford Super Duty F-250 SRW Platinum',
    price: 129365,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1358665/pictures/2d194869-da14-44f6-ae5d-30163f8c2e11-XXL',
    vin: '1FT8W2BMXSED32322',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 603,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '125',
    name: 'Ford Transit Cargo Van',
    price: 62445,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1360804/pictures/1c523e93-3fd7-4b30-af44-bdcd4b4af6d2-XXL',
    vin: '1FTBR1C89SKA69430',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '126',
    name: 'Ford Explorer ST',
    price: 72665,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1363899/pictures/c050359d-957e-4f6c-ace9-42b60089cf64-XXL',
    vin: '1FMWK8GC2SGC13542',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '127',
    name: 'Ford F-150 LARIAT',
    price: 93360,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1363902/pictures/afeb2e08-2a15-4da2-8cac-96236cd00445-XXL',
    vin: '1FTFW5L5XSFB12267',
    fuelType: 'gas',
    condition: 'new',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '128',
    name: 'Ford F-150 XLT',
    price: 74350,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1366439/pictures/4f1de997-336a-4aaf-9364-f38c510f2455-XXL',
    vin: '1FTFW3LD0SFB26643',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '129',
    name: 'Ford Bronco Sport Big Bend',
    price: 40945,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1366556/pictures/30fc0869-3c9e-44c5-9cda-afb2ea499c32-XXL',
    vin: '3FMCR9BN1SRE78622',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '130',
    name: 'Ford Escape Active',
    price: 39144,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1366558/pictures/fd837d41-df79-49ed-ba95-dd5aee6b575a-XXL',
    vin: '1FMCU9GN3SUB27534',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '131',
    name: 'Ford Escape ST-Line Select',
    price: 49894,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1366559/pictures/e18c330a-eb85-4e57-b34c-f2393f2e9753-XXL',
    vin: '1FMCU9NA5SUB26921',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '132',
    name: 'Ford Escape Active',
    price: 39144,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1366560/pictures/96f11db9-96fb-49e0-9559-64f2259b503f-XXL',
    vin: '1FMCU9GN8SUB27190',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '133',
    name: 'Ford Explorer ST-Line',
    price: 64315,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1367640/pictures/c28d861d-4b69-4116-a498-35fdece378f3-XXL',
    vin: '1FMUK8KH7SGC12722',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 184,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '134',
    name: 'Ford Transit Cargo Van',
    price: 64845,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1367641/pictures/df5a90f1-33fa-46b4-909b-65c57e05baeb-XXL',
    vin: '1FTBW1X8XSKA69679',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '135',
    name: 'Ford Transit Cargo Van',
    price: 70145,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1367642/pictures/f94f60f0-12a2-4b65-a503-c4d2ead7eb0f-XXL',
    vin: '1FTBR2C83SKA69722',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '136',
    name: 'Ford F-150 XLT',
    price: 66960,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1368963/pictures/0774a8bd-67fc-42b7-87b3-40f09dd8a681-XXL',
    vin: '1FTEW3LP9SFB34617',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '137',
    name: 'Ford F-150 LARIAT',
    price: 82940,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1369316/pictures/f89afc2a-c6fe-485d-924f-07cf3bfcacf3-XXL',
    vin: '1FTFW5L85SKE26569',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '138',
    name: 'Ford Bronco Sport Outer Banks',
    price: 45625,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1373056/pictures/973c3898-29e4-44be-b069-e5e42043cb0a-XXL',
    vin: '3FMCR9CN5SRE77990',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '139',
    name: 'Ford Bronco Sport Outer Banks',
    price: 42050,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1373057/pictures/9cc1a2f0-1ec2-420b-9a74-38b8b195920d-XXL',
    vin: '3FMCR9CN5SRE91081',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '140',
    name: 'Ford Maverick XLT',
    price: 45095,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1373058/pictures/16542004-756a-40be-8702-56f8750ad8ba-XXL',
    vin: '3FTTW8JA7SRA91000',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '141',
    name: 'Ford F-150 XLT',
    price: 64860,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1375832/pictures/3430309b-53f6-4736-82e3-f29c9bcc3d20-XXL',
    vin: '1FTEW3LP3SFB48190',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '142',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1375833/pictures/9660b487-e83f-458c-b314-f3f39947a146-XXL',
    vin: '1FTEW3LP8SFB35287',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '143',
    name: 'Ford Transit Cargo Van',
    price: 65495,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1375834/pictures/c284b250-9ec0-4e3b-96ea-f398be19f32a-XXL',
    vin: '1FTBW1X82SKA69224',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '144',
    name: 'Ford Escape ST-Line Select',
    price: 45744,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1380173/pictures/f21b99d0-3043-4bc2-91be-ada8b96080ba-XXL',
    vin: '1FMCU9NAXSUB26249',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '145',
    name: 'Ford F-150 XLT',
    price: 67185,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1380176/pictures/d5da7bc8-8a3c-4c70-b6ab-a5128981a083-XXL',
    vin: '1FTEW3LP0SFB35283',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '146',
    name: 'Ford Transit Cargo Van',
    price: 61820,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1380178/pictures/85395222-89e9-4142-ac16-ac20a7be86f6-XXL',
    vin: '1FTBR1Y84SKA76763',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '147',
    name: 'Ford Explorer Platinum',
    price: 66715,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1384699/pictures/bba81af8-d71b-42e6-b1f9-39d7eb70a0f7-XXL',
    vin: '1FMUK8HH3SGC27676',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '148',
    name: 'Ford F-150 LARIAT',
    price: 84840,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1384701/pictures/901eced5-1b9c-4880-9458-bb7d3f06d998-XXL',
    vin: '1FTFW5LD0SFB53336',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '149',
    name: 'Ford F-150 Platinum',
    price: 122218,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1384702/pictures/41f8b9c9-1279-4653-9975-403b39d07691-XXL',
    vin: '1FTFW7LD0SFB53512',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '150',
    name: 'Ford F-150 XLT',
    price: 66635,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1384703/pictures/37a5d9c0-b892-480a-9945-ebd9d86f067d-XXL',
    vin: '1FTEW3LP9SKE34889',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '151',
    name: 'Ford Bronco Sport Big Bend',
    price: 40945,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385757/pictures/a1312b67-ad66-4693-aeb5-cc68e0858d06-XXL',
    vin: '3FMCR9BN5SRE78753',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '152',
    name: 'Ford F-150 Raptor',
    price: 116644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385758/pictures/63411173-3c44-48dd-9d58-a8e2928771f5-XXL',
    vin: '1FTFW1RG1SFB52433',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '153',
    name: 'Ford F-150 XLT',
    price: 66885,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385759/pictures/769fe78f-1143-438e-ac12-241b04f9a465-XXL',
    vin: '1FTEW3LP4SKE41314',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '154',
    name: 'Ford Transit Cargo Van',
    price: 62985,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385761/pictures/3cd58b2e-41db-4965-b23b-ee1c2cd32b21-XXL',
    vin: '1FTBR1C88SKA84999',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '155',
    name: 'Ford Escape Active',
    price: 37444,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385835/pictures/6b1c3b91-ffbb-47bf-818c-2ddb56030d38-XXL',
    vin: '1FMCU9GN6SUA97624',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '156',
    name: 'Ford Escape Active',
    price: 34694,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385837/pictures/756162cc-5745-4716-af2a-7c5292698d61-XXL',
    vin: '1FMCU0GN3SUB10843',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '157',
    name: 'Ford F-150 LARIAT',
    price: 85109,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385842/pictures/fab518c3-89e8-4339-a66f-5412519c293a-XXL',
    vin: '1FTFW5L89SFB56190',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '158',
    name: 'Ford F-150 LARIAT',
    price: 86590,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385843/pictures/77a69e5b-5b6d-45a1-9e9f-10bc078548da-XXL',
    vin: '1FTFW5LD7SFB52670',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '159',
    name: 'Ford F-150 Platinum',
    price: 118078,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385844/pictures/b0148de3-2b23-4e5b-9c6b-f03a80f9ea7b-XXL',
    vin: '1FTFW7LD8SFB39602',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '160',
    name: 'Ford F-150 Raptor',
    price: 116644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385848/pictures/136f3dc0-1390-452e-a526-4247b52a73a4-XXL',
    vin: '1FTFW1RG6SFB48975',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '161',
    name: 'Ford F-150 XLT',
    price: 66485,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385852/pictures/1b3d3225-06d6-42d7-aa8b-28092801cdf5-XXL',
    vin: '1FTEW3LP1SKE45241',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '162',
    name: 'Ford Maverick LARIAT',
    price: 53860,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385853/pictures/cd78a314-60b0-437a-aa55-1707bb5c4f12-XXL',
    vin: '3FTTW8S37SRB01363',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '163',
    name: 'Ford Transit Cargo Van',
    price: 62035,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1385854/pictures/ad259dbb-8a1c-48d4-a74c-da28fa9ced9e-XXL',
    vin: '1FTBR1C86SKA84662',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '164',
    name: 'Ford F-150 LARIAT',
    price: 86040,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387075/pictures/d777eea9-3dd6-484f-8b66-7771c8e79afb-XXL',
    vin: '1FTFW5LD4SFB52903',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '165',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387078/pictures/48944902-756e-40f4-aa3b-e6ab378a6e0c-XXL',
    vin: '1FTEW3LP5SFB47882',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '166',
    name: 'Ford F-150 XLT',
    price: 70110,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387079/pictures/4e51e118-4ad7-42eb-ac7f-5e4474699cc0-XXL',
    vin: '1FTEW3LPXSFB48140',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '167',
    name: 'Ford F-150 Raptor',
    price: 116644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387249/pictures/ed7ee388-190e-4eed-a544-cfa5665bd467-XXL',
    vin: '1FTFW1RG2SFB49346',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '168',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387250/pictures/c2a855ab-288f-42e1-8253-b4bbddb6ee19-XXL',
    vin: '1FTEW3LP5SFB48059',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '169',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387251/pictures/00897049-6004-4267-b91f-d9a3a6953b0a-XXL',
    vin: '1FTEW3LP9SFB47349',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '170',
    name: 'Ford F-150 XLT',
    price: 67535,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1387252/pictures/79aac0b2-c375-4481-8ca5-dd75b668e225-XXL',
    vin: '1FTEW3LP2SFB47712',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '171',
    name: 'Ford F-150 Raptor',
    price: 116644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1388783/pictures/2a4c1e49-4828-4767-91ad-166d2a2be199-XXL',
    vin: '1FTFW1RGXSFB52964',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '172',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1388785/pictures/d90bb34e-0d43-42e6-8bf5-d50acfa2a43d-XXL',
    vin: '1FTEW3LP6SFB47969',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '173',
    name: 'Ford Transit Cargo Van',
    price: 63735,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1388787/pictures/34b0b987-04a0-4bfc-ac25-e6ca437eb8cf-XXL',
    vin: '1FTBR1C89SKA84803',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '174',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1390467/pictures/1c76a59e-d9ee-4fa7-8088-a4f72b946ab8-XXL',
    vin: '1FTEW3LP5SFB47347',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '175',
    name: 'Ford Transit Cargo Van',
    price: 63575,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1393080/pictures/6f058136-2483-4ffe-b3a8-24b3da43e295-XXL',
    vin: '1FTBR1C84SKA85549',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '176',
    name: 'Ford Transit Cargo Van',
    price: 63675,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1393081/pictures/09f9f933-041e-4c6c-85c1-14faf1aaea07-XXL',
    vin: '1FTBR1C82SKA84299',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '177',
    name: 'Ford Transit Cargo Van',
    price: 63575,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1393082/pictures/31846daf-042e-4a8e-af7f-16d1220c84e5-XXL',
    vin: '1FTBR1C83SKA85087',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '178',
    name: 'Ford Explorer ST-Line',
    price: 63765,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1399070/pictures/317b416d-a0b7-49d2-867c-7f2beb06e12e-XXL',
    vin: '1FMUK8KH7SGC34011',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '179',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1399071/pictures/b9a43ad8-ca2d-4067-a1c1-255e0b02124f-XXL',
    vin: '1FTEW3LP2SKE65577',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '180',
    name: 'Ford F-150 XLT',
    price: 64860,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1402143/pictures/0e730f15-24fe-4d53-940c-d02894ac4e53-XXL',
    vin: '1FTEW3LP7SKE65543',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '181',
    name: 'Ford F-150 XLT',
    price: 64585,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1402144/pictures/957aba48-6df8-448d-b327-fed2d6188a68-XXL',
    vin: '1FTEW3LP8SKE34981',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '182',
    name: 'Ford Bronco Sport Badlands',
    price: 50395,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1402326/pictures/a7c2af22-3851-4daa-933a-75429f91bd87-XXL',
    vin: '3FMCR9DA7SRE90560',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '183',
    name: 'Ford Escape Active',
    price: 39144,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1402327/pictures/77d54488-38aa-4cba-bc6a-74a9f76c187a-XXL',
    vin: '1FMCU9GN1SUB26981',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '184',
    name: 'Ford Escape ST-Line Select',
    price: 43644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1402328/pictures/5f86cd0a-6c8a-4ccb-892c-a110bee03f5f-XXL',
    vin: '1FMCU9NA7SUB39606',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '185',
    name: 'Ford Escape ST-Line',
    price: 39444,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403555/pictures/d46a21c3-ac61-447c-81bb-c3787aa83d73-XXL',
    vin: '1FMCU9MN1SUB37872',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '186',
    name: 'Ford Escape ST-Line Select',
    price: 45544,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403556/pictures/fa65621b-4d38-489b-88f0-a6e7d2d06476-XXL',
    vin: '1FMCU9NA4SUB39062',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '187',
    name: 'Ford F-150 LARIAT',
    price: 89015,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403560/pictures/6a84cb17-63c3-4df1-bc8c-e12416382e5d-XXL',
    vin: '1FTFW5LD5SFB35656',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '188',
    name: 'Ford F-150 XLT',
    price: 67435,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403564/pictures/e26cf2aa-cc1c-40c7-adee-24d69c64db2c-XXL',
    vin: '1FTEW3LP4SKE35979',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '189',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403565/pictures/b855b831-02b1-45ee-9880-8f5c68904991-XXL',
    vin: '1FTEW3LP4SKE34282',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '190',
    name: 'Ford F-150 XLT',
    price: 67435,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403566/pictures/4184eb0b-5e33-470a-8ea7-1da7c3e0404c-XXL',
    vin: '1FTEW3LP0SKE35042',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '191',
    name: 'Ford F-150 XLT',
    price: 67185,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403567/pictures/5358a1ef-4ce0-4dc0-9455-36f271b508b5-XXL',
    vin: '1FTEW3LP6SKE35076',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '192',
    name: 'Ford F-150 XLT',
    price: 72205,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403568/pictures/23f777b8-e20e-45cf-9ac7-6fbca4238fea-XXL',
    vin: '1FTEW3LP0SKE36742',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '193',
    name: 'Ford F-150 XLT',
    price: 66885,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403569/pictures/dc5b5f44-b550-4c26-8633-8460f84d895d-XXL',
    vin: '1FTEW3LP5SKE38003',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '194',
    name: 'Ford F-150 XLT',
    price: 72205,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403572/pictures/ff30a0ec-51e3-4480-a3d0-f9b9c684284b-XXL',
    vin: '1FTEW3LP4SKE37764',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '195',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403575/pictures/2ec4b0aa-fcf9-4736-85d6-9172db02d485-XXL',
    vin: '1FTEW3LP8SKE65437',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '196',
    name: 'Ford F-150 XLT',
    price: 67435,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403576/pictures/758a8ae9-c1f0-4acb-a55f-5d9dd1563899-XXL',
    vin: '1FTEW3LP0SFB47692',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '197',
    name: 'Ford F-150 XLT',
    price: 61195,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403577/pictures/195cc465-d1e7-47b5-9c7f-fc02a4fae2bc-XXL',
    vin: '1FTEW3LP6SKE72676',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '198',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403579/pictures/401e4f54-e41f-49a6-bbe7-e52c235da850-XXL',
    vin: '1FTEW3LP4SKE72997',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '199',
    name: 'Ford F-150 XLT',
    price: 60995,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403581/pictures/04171cbe-cabb-41aa-97c1-85937abe51b1-XXL',
    vin: '1FTEW3LP7SKE73769',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '200',
    name: 'Ford Maverick Lobo Standard',
    price: 45695,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403582/pictures/2cb49173-3cc7-44b0-b305-d14142a104af-XXL',
    vin: '3FTCW8TAXSRB03105',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Affordable compact truck option'
  },
  {
    id: '201',
    name: 'Ford Escape ST-Line',
    price: 39444,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403979/pictures/f5ae45df-8467-4b60-bed2-234d2e1129a8-XXL',
    vin: '1FMCU9MN6SUB38886',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '202',
    name: 'Ford Escape ST-Line Select',
    price: 45294,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403980/pictures/ec0d0329-96d2-4bf0-9dce-939747eb81e3-XXL',
    vin: '1FMCU9NA5SUB38535',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '203',
    name: 'Ford Escape ST-Line Select',
    price: 43644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1403981/pictures/38919bd3-64f1-4d01-92e7-3fb6a2f6c0b1-XXL',
    vin: '1FMCU9NA4SUB39479',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '204',
    name: 'Ford F-150 Platinum',
    price: 117622,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1404266/pictures/2431dac8-cd13-42f1-bc79-e890f9e5b5fc-XXL',
    vin: '1FTFW7LD0SFB44356',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 280,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '205',
    name: 'Ford Escape Active',
    price: 37694,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1408173/pictures/6633d853-f10e-4228-b7af-d4a4fbe8bf9d-XXL',
    vin: '1FMCU9GN9SUA62477',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 120,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '206',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1408177/pictures/eea09d22-6971-46b8-bbec-9058909606c5-XXL',
    vin: '1FTEW3LP1SKE73668',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '207',
    name: 'Ford F-150 LARIAT',
    price: 88815,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1414220/pictures/8d30b7b5-b443-4cb9-97c2-8953e8666bd5-XXL',
    vin: '1FTFW5L83SFA59938',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '208',
    name: 'Ford Escape Active',
    price: 39644,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415639/pictures/d930c759-964a-4367-8153-8635f6534176-XXL',
    vin: '1FMCU9GN7SUB26452',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '209',
    name: 'Jeep Gladiator Sport S',
    price: 49840,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415640/pictures/07c5ad3e-618f-48b8-b0e1-c3f0925f12f4-XXL',
    vin: '1C6HJTAG1LL127203',
    fuelType: 'gas',
    condition: 'new',
    mpg: '20/28',
    horsepower: 306,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Start"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '210',
    name: 'Ford F-150 XLT',
    price: 62610,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415641/pictures/113e4e15-89dd-4990-9b6e-647a4a441aec-XXL',
    vin: '1FTEW3LP5SFB40723',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '211',
    name: 'Ford F-150 LARIAT',
    price: 87990,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415667/pictures/88ea9dbc-ac51-42dc-9c8d-7143224ff7ff-XXL',
    vin: '1FTFW5LD3SFB76139',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '212',
    name: 'Ford Ranger Raptor',
    price: 84790,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415668/pictures/c5ef3de2-b985-424e-aa5b-6dc4ea741715-XXL',
    vin: '1FTER4LR4SLE27194',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 375,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '213',
    name: 'Ford Bronco Sport Outer Banks',
    price: 45445,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1417130/pictures/941d3c38-31bb-459d-b77f-bcfce8c31b5d-XXL',
    vin: '3FMCR9CN4SRE90987',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '214',
    name: 'Ford F-150 XLT',
    price: 71605,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418549/pictures/e010cfd3-0369-4495-b1e5-469e59ec5034-XXL',
    vin: '1FTEW3LP6SKE41282',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '215',
    name: 'Ford F-150 XLT',
    price: 71855,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418550/pictures/0e714790-1c90-4aa7-a878-58b0471f8c26-XXL',
    vin: '1FTEW3LP1SKE34479',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '216',
    name: 'Ford F-150 XLT',
    price: 71255,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418551/pictures/65e1908b-25ef-4591-90c3-fda4bc7ceead-XXL',
    vin: '1FTEW3LP1SKE43313',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '217',
    name: 'Ford F-150 XLT',
    price: 60645,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418553/pictures/13873049-95bd-45b4-822f-cac1cca937da-XXL',
    vin: '1FTEW3LP3SKE73896',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '218',
    name: 'Ford F-150 LARIAT',
    price: 88615,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418554/pictures/cb077319-da1b-4f04-b49f-719df615d4ea-XXL',
    vin: '1FTFW5LD3SFB75802',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '219',
    name: 'Ford Bronco Sport Outer Banks',
    price: 45445,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1420483/pictures/c9170447-ce23-43af-ab96-ad033db4e03b-XXL',
    vin: '3FMCR9CN1SRF11505',
    fuelType: 'gas',
    condition: 'new',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '220',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1421927/pictures/aec8a531-c9ab-40b5-a826-2d83cfe1f052-XXL',
    vin: '1FTEW3LP1SKE74187',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '221',
    name: 'Ford F-150 XLT',
    price: 67785,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1421928/pictures/5c708fb6-3c7c-40f1-8598-642432d4cdb2-XXL',
    vin: '1FTEW3LP6SKE73259',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '222',
    name: 'Ford F-150 LARIAT',
    price: 84590,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1421929/pictures/9ab85d72-8e3d-4d38-a70b-84372ec4f6ac-XXL',
    vin: '1FTFW5LD2SFB76679',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '223',
    name: 'Ford F-150 LARIAT',
    price: 88615,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1421930/pictures/e85a10df-e41c-4f72-bcd1-82e11936ad4f-XXL',
    vin: '1FTFW5LD9SFB75075',
    fuelType: 'hybrid',
    condition: 'new',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '224',
    name: 'Ford Explorer ST-Line',
    price: 62765,
    year: 2025,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1423717/pictures/ff3f86cb-53ba-40c9-a51a-adaa2deae002-XXL',
    vin: '1FMUK8KH6SGC35120',
    fuelType: 'gas',
    condition: 'new',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '225',
    name: 'Ford Escape SE',
    price: 21988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/609159/pictures/484deb51-c321-4ade-966d-72aa89c7b968-XXL',
    vin: '1FMCU0G67MUA23443',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '226',
    name: 'Ford F-150 LARIAT',
    price: 50988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/655030/pictures/be22da79-78b1-4f18-ab16-af83a84fb805-XXL',
    vin: '1FTFW1E86MKE27397',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '227',
    name: 'Ford F-150 XLT',
    price: 38998,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/655033/pictures/ca6e4695-bb2d-4f1f-882b-ff8a5bbf1418-XXL',
    vin: '1FTFW1E85MKE27391',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '228',
    name: 'Ford Bronco Sport Badlands',
    price: 19988,
    year: 2021,
    image: 'https://buildfoc.ford.com/dig//Ford/Bronco+Sport/2021/HD-FULL/Image%5b%7cFord%7cBronco+Sport%7c2021%7c1%7c1.%7c400A.R9D..YZ..88Z.BADLANDS.BPM.57G.50B.41H.18B.19B.47C.58F.ADVANCED+4X4.999.LTP.T7F.448.89P.64U.SXM.SY3.2021+R9D+FORD.%5d/INT/3/vehicle.png',
    vin: '3FMCR9D93MRA40140',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '229',
    name: 'Ford F-150 LARIAT',
    price: 54998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/697176/pictures/80e8e22b-812f-4c45-b603-0ddb0782acb3-XXL',
    vin: '1FTFW1ED1NFA33927',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '230',
    name: 'Ford F-150 LARIAT',
    price: 53988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/697180/pictures/2fc51fe8-826b-45cf-b690-72c80b43f9d4-XXL',
    vin: '1FTEW1EP5NFA74941',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '231',
    name: 'Ford F-150 XLT',
    price: 47988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/709735/pictures/d1abb34d-3c93-48d2-98b6-24fd297a1942-XXL',
    vin: '1FTEW1EP3NFA74940',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '232',
    name: 'Ford F-150 LARIAT',
    price: 59988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/716640/pictures/4a159c58-9aff-43ec-ae5e-f56dedc040a5-XXL',
    vin: '1FTEW1EP6NKD88069',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '233',
    name: 'Ford F-150 LARIAT',
    price: 64998,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/824422/pictures/ba10b73d-431d-485b-b108-c92651c6f906-XXL',
    vin: '1FTFW1ED6PFA95715',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '234',
    name: 'Ford Escape SE',
    price: 16500,
    year: 2018,
    image: 'https://buildfoc.ford.com/dig/Ford/Escape/2018/HD-FULL/Vin[1FMCU0GD0JUB89880]/EXT/1/vehicle.png',
    vin: '1FMCU0GD0JUB89880',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Ford Co-Pilot360","SYNC","Back-Up Camera"],
    matchReason: 'Great value in your budget'
  },
  {
    id: '235',
    name: 'Ford Explorer ST',
    price: 38888,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/973389/pictures/ee6c5219-023b-43e3-bb5d-cf3cfe5b19e0-XXL',
    vin: '1FM5K8GCXMGA89714',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '236',
    name: 'Ford Bronco Sport Outer Banks',
    price: 38988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/994126/pictures/71f8a513-bbb5-4a2c-a900-07e9df3c9ffc-XXL',
    vin: '3FMCR9C60RRE65023',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '237',
    name: 'Ford Edge ST',
    price: 30988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1097521/pictures/69ee01ee-bb0a-4789-80f7-c2c2d36141f7-XXL',
    vin: '2FMPK4AP3LBA63300',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '238',
    name: 'Ford Bronco Sport Outer Banks',
    price: 30988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1274352/pictures/0fc8e8a1-5151-429a-b0ee-d1959d35f5b7-XXL',
    vin: '3FMCR9C60NRD69967',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '239',
    name: 'Ford F-150 XLT',
    price: 48998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1275843/pictures/3681bc26-e8e6-44ef-941b-fdc74fa76efa-XXL',
    vin: '1FTEW1EP0NFB81606',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '240',
    name: 'Ford Bronco Sport Big Bend',
    price: 35988,
    year: 2024,
    image: 'https://buildfoc.ford.com/dig/Ford/Bronco Sport/2024/HD-FULL/Vin[3FMCR9B6XRRE03744]/EXT/1/vehicle.png',
    vin: '3FMCR9B6XRRE03744',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '241',
    name: 'Ford Escape SE Hybrid',
    price: 29988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294920/pictures/43adc682-2fae-4df1-a267-05d039ecc0a0-XXL',
    vin: '1FMCU9BZ6NUA21190',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '242',
    name: 'Ford F-150 XLT',
    price: 50998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294922/pictures/2f662f3e-b52d-4b80-bf27-7be0dc582d00-XXL',
    vin: '1FTFW1E83NFA54054',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '243',
    name: 'Ford Escape S',
    price: 19988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294924/pictures/e639acf6-406c-4b5c-bfcc-a697f80d5eed-XXL',
    vin: '1FMCU0F6XMUA44871',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '244',
    name: 'Kia Soul EX Premium',
    price: 16988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294927/pictures/c3f19ccd-8b78-4d32-94af-bd7394f53b2a-XXL',
    vin: 'KNDJ33AU3M7141057',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Great value in your budget'
  },
  {
    id: '245',
    name: 'Ford Edge SEL',
    price: 29988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294928/pictures/2b690c5b-aa10-4701-a686-46fb25bb3218-XXL',
    vin: '2FMPK4J95LBB18752',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '246',
    name: 'Ford Escape SE',
    price: 24988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1294929/pictures/01ba27a3-61d8-430f-ba15-9901ae902990-XXL',
    vin: '1FMCU0G66LUC59239',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '247',
    name: 'Ford F-150 XLT',
    price: 63988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312680/pictures/c5789033-8f4a-4d98-bd57-687b093406e6-XXL',
    vin: '1FTFW3L83RKD22127',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '248',
    name: 'Ford Escape SE',
    price: 27998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312683/pictures/75ae4e4f-4632-4bd6-8dca-c77d2560ae82-XXL',
    vin: '1FMCU9G60NUA42289',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '249',
    name: 'Ford F-150 XLT',
    price: 55988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312685/pictures/4daf1c8d-af1a-420a-b9d0-f513bb1ff74e-XXL',
    vin: '1FTFW1E87NKE94754',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '250',
    name: 'Ford F-150 LARIAT',
    price: 59988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312687/pictures/b876fc20-6a92-442d-a975-11ead6690131-XXL',
    vin: '1FTFW1E80NKE84079',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '251',
    name: 'Hyundai Santa Fe Hybrid Luxury',
    price: 34988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312690/pictures/c6621a67-e174-4a5a-b41e-ebe650399704-XXL',
    vin: 'KM8S5DA10MU003757',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '252',
    name: 'Ford F-150 LARIAT',
    price: 57988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312693/pictures/2c03917f-4109-4863-832f-4fd2677329f8-XXL',
    vin: '1FTFW1E5XMFC54384',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '253',
    name: 'Ford Mustang Mach-E Premium',
    price: 37988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312694/pictures/62d47e18-2d17-4e06-9658-33f2918383ae-XXL',
    vin: '3FMTK3SU6MMA28831',
    fuelType: 'electric',
    condition: 'used',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '254',
    name: 'Ford Edge SEL',
    price: 21988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312697/pictures/2b659072-1f9d-4a0d-8239-f8e69b47573d-XXL',
    vin: '2FMPK3J94LBB19157',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '255',
    name: 'Ford Edge ST Line',
    price: 24988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312698/pictures/a542fb3f-ab56-4a9b-9791-c117e3afb728-XXL',
    vin: '2FMPK4J95LBB48754',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '256',
    name: 'Ford Explorer XLT',
    price: 29988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1312700/pictures/8e8d48ab-2ffd-4001-bbd0-85df77e858b3-XXL',
    vin: '1FMSK8DHXLGB88082',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '257',
    name: 'Ford F-150 XLT',
    price: 44998,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335008/pictures/7f5c3fed-d71d-438d-88d1-8b632928de13-XXL',
    vin: '1FTEW1EPXPFA74324',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '258',
    name: 'Ford Bronco Sport Big Bend',
    price: 31988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335009/pictures/81ffb303-7609-4f2a-b7d5-324d302dc050-XXL',
    vin: '3FMCR9B64NRD73439',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '259',
    name: 'Ford Bronco Sport Outer Banks',
    price: 29988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335010/pictures/737de566-c476-4399-9813-63a48cedcecc-XXL',
    vin: '3FMCR9C64NRD68224',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '260',
    name: 'Ford Escape SE',
    price: 28998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335011/pictures/153e9c1a-363c-4ff7-af52-b8853770404b-XXL',
    vin: '1FMCU9G67NUB31440',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '261',
    name: 'Ford F-150 XLT',
    price: 45998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335013/pictures/7b67ab6b-077b-498d-bcc4-116860706709-XXL',
    vin: '1FTFW1E51NFB14225',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '262',
    name: 'Ford F-150 XLT',
    price: 43988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335014/pictures/4a23fb75-4d82-4844-8ab1-dde6dd4e41be-XXL',
    vin: '1FTEW1EP3NFA74579',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '263',
    name: 'Ford F-150 LARIAT',
    price: 57988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335015/pictures/917a15d1-713f-44d5-aec0-7b35aae8c146-XXL',
    vin: '1FTEW1EP9NKE56803',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '264',
    name: 'Ford F-150 LARIAT',
    price: 48998,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335016/pictures/1df043ef-f480-4e38-bb9e-3af78272d7bf-XXL',
    vin: '1FTEW1EPXNFC07290',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '265',
    name: 'Ford Escape SEL',
    price: 25998,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335018/pictures/c4fb13da-3f78-4b8d-a97c-afc5da543a5f-XXL',
    vin: '1FMCU9H99MUA53962',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '266',
    name: 'Ford Explorer Limited',
    price: 39988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335020/pictures/802a3bd3-f85e-4831-b249-e98c90b8c4cb-XXL',
    vin: '1FMSK8FH7MGB73635',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '267',
    name: 'Ford F-150 LARIAT',
    price: 47488,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335022/pictures/ce308f2d-75a4-49b2-8f77-3bee17b1f16b-XXL',
    vin: '1FTFW1E52MKD95649',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '268',
    name: 'Ford Ranger XLT',
    price: 32998,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335025/pictures/fe024d44-c83c-4559-bcab-06508a5cd588-XXL',
    vin: '1FTER4FH7LLA77628',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 288,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '269',
    name: 'Hyundai Santa Fe Luxury',
    price: 19988,
    year: 2019,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1335026/pictures/a6228143-200d-4d1a-b948-9f77356a74f7-XXL',
    vin: '5NMS3CAAXKH091810',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '270',
    name: 'Ford Mustang GT Premium',
    price: 57988,
    year: 2024,
    image: 'https://buildfoc.ford.com/dig/Ford/Mustang/2024/HD-FULL/Vin[1FAGP8FF4R5103450]/EXT/1/vehicle.png',
    vin: '1FAGP8FF4R5103450',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Convertible"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '271',
    name: 'Ford Escape Active',
    price: 31988,
    year: 2023,
    image: 'https://buildfoc.ford.com/dig/Ford/Escape/2023/HD-FULL/Vin[1FMCU9GN8PUB09974]/EXT/1/vehicle.png',
    vin: '1FMCU9GN8PUB09974',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '272',
    name: 'Ford Escape SE',
    price: 20988,
    year: 2022,
    image: 'https://buildfoc.ford.com/dig/Ford/Escape/2022/HD-FULL/Vin[1FMCU0G61NUB24219]/EXT/1/vehicle.png',
    vin: '1FMCU0G61NUB24219',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '273',
    name: 'Ford Escape Titanium Hybrid',
    price: 25988,
    year: 2022,
    image: 'https://buildfoc.ford.com/dig/Ford/Escape/2022/HD-FULL/Vin[1FMCU9DZ7NUA49786]/EXT/1/vehicle.png',
    vin: '1FMCU9DZ7NUA49786',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '274',
    name: 'Ford Explorer XLT',
    price: 34998,
    year: 2022,
    image: 'https://buildfoc.ford.com/dig/Ford/Explorer/2022/HD-FULL/Vin[1FMSK8DH2NGB19308]/EXT/1/vehicle.png',
    vin: '1FMSK8DH2NGB19308',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '275',
    name: 'Ford F-150 LARIAT',
    price: 52988,
    year: 2022,
    image: 'https://buildfoc.ford.com/dig/Ford/F-150/2022/HD-FULL/Vin[1FTFW1EDXNFC41580]/EXT/1/vehicle.png',
    vin: '1FTFW1EDXNFC41580',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '276',
    name: 'Ford Explorer ST',
    price: 41998,
    year: 2021,
    image: 'https://buildfoc.ford.com/dig/Ford/Explorer/2021/HD-FULL/Vin[1FM5K8GC6MGB08422]/EXT/1/vehicle.png',
    vin: '1FM5K8GC6MGB08422',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '277',
    name: 'Ford Mustang Mach-E Premium',
    price: 29988,
    year: 2021,
    image: 'https://buildfoc.ford.com/dig/Ford/Mustang Mach-E/2021/HD-FULL/Vin[3FMTK3SU2MMA36618]/EXT/1/vehicle.png',
    vin: '3FMTK3SU2MMA36618',
    fuelType: 'electric',
    condition: 'used',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great value in your budget'
  },
  {
    id: '278',
    name: 'Ford F-150 Lariat',
    price: 47999,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415670/pictures/a4ab475b-a7f1-4155-a2d0-beb068db5c68-XXL',
    vin: '1FTFW1EDXMFB20059',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '279',
    name: 'Ford Explorer ST',
    price: 0,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415673/pictures/4579cd82-602a-409f-9f6d-6ab7f998638a-XXL',
    vin: '1FM5K8GC7MGB08638',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '280',
    name: 'Ford F-150 Lariat',
    price: 45101.11,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415674/pictures/31b009a0-ffa4-4fbd-b421-70f48ba8cb78-XXL',
    vin: '1FTEW1EPXMFC54222',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '281',
    name: 'Ford F-150 XLT',
    price: 39988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415683/pictures/89123bf0-f45f-4cbf-ab44-de49ae00de67-XXL',
    vin: '1FTEW1EP3MFA95785',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '282',
    name: 'Ford Escape Titanium',
    price: 27998,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415684/pictures/c8f014fb-d6f6-408a-9536-e565d6d81edb-XXL',
    vin: '1FMCU9J98LUB50966',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '283',
    name: 'Ford F-150 XLT',
    price: 52640.05,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415685/pictures/bbc7e1bb-3d8f-451b-bd48-c5050a497aac-XXL',
    vin: '1FTFW1E88PFA35714',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '284',
    name: 'Ford Mustang Mach-E Premium',
    price: 49995,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415686/pictures/a4104c54-831d-4a4d-82d7-70ad664abe9e-XXL',
    vin: '3FMTK3RMXNMA30640',
    fuelType: 'electric',
    condition: 'used',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '285',
    name: 'Lincoln Corsair Reserve',
    price: 40640.05,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415687/pictures/79e93492-d0a2-4f7a-a2e5-ed829339bcd3-XXL',
    vin: '5LMCJ2D95NUL19241',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '286',
    name: 'GMC Sierra 1500 Denali',
    price: 60000,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415688/pictures/710915d4-0816-4a6d-94e3-c51842f71b28-XXL',
    vin: '3GTU9FEL8MG376914',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '287',
    name: 'Ford F-150 Lariat',
    price: 61988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415689/pictures/0195b9f1-363e-40a5-8181-7cc35e192fb4-XXL',
    vin: '1FTFW1E81PFC46978',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '288',
    name: 'Ford Expedition Platinum',
    price: 89988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415690/pictures/1f167630-6f03-4c4b-a773-95f672025030-XXL',
    vin: '1FMJU1M81REA61867',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '289',
    name: 'Ford F-150 XLT',
    price: 35988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415692/pictures/a8718efc-3eb9-468b-aedc-29e384ca449c-XXL',
    vin: '1FTFW1E56NFA74577',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '290',
    name: 'Lincoln Corsair Reserve',
    price: 34988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415693/pictures/7f033d0a-4d24-4bf8-ae1b-2a03f96110c5-XXL',
    vin: '5LMCJ2D90MUL02393',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '291',
    name: 'Lincoln Corsair Reserve',
    price: 33988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415694/pictures/269d099c-ea96-46af-8af0-35b7e696b3b7-XXL',
    vin: '5LMCJ2D94MUL05202',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '292',
    name: 'Ford F-150 Tremor',
    price: 59988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415695/pictures/c9dd710f-23fb-48c9-b1a2-7b634d566286-XXL',
    vin: '1FTEW1E81NFB75435',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '293',
    name: 'Ford Edge SEL',
    price: 0,
    year: 2019,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415697/pictures/76900df6-f1d2-4420-882b-a7cfdb649123-XXL',
    vin: '2FMPK4J93KBB58004',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '294',
    name: 'Ford Escape SE Hybrid',
    price: 27988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415698/pictures/2f758254-6fc2-4f38-9416-ee697309ffe1-XXL',
    vin: '1FMCU9BZ8NUA74974',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 200,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '295',
    name: 'Ford Bronco Badlands',
    price: 54988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415699/pictures/10401e95-7d4d-43f7-8e3b-8e7f710969b0-XXL',
    vin: '1FMEE5DP2PLB57268',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Convertible"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '296',
    name: 'Ford F-150 XLT',
    price: 69988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415700/pictures/6ca0b26d-12e8-4795-9859-f677252bf650-XXL',
    vin: '1FTFW3LD3RFA54623',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '297',
    name: 'Ford Edge ST Line',
    price: 28988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415701/pictures/c8b8291c-3216-4cbc-99cf-be8a3def1ba2-XXL',
    vin: '2FMPK4J95MBA38045',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '298',
    name: 'MINI 3 Door Cooper SE',
    price: 33988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415702/pictures/ed41d51d-4e42-489f-be43-18068d62b3d2-XXL',
    vin: 'WMW13DJ00R2U48500',
    fuelType: 'electric',
    condition: 'used',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Back-Up Camera","Bluetooth Connection","Electric Motor"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '299',
    name: 'Ford F-150 Lariat',
    price: 49988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415703/pictures/0c7fc4b2-2e31-49fc-b9ab-fb537e40f851-XXL',
    vin: '1FTEW1EP2NFC02455',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '300',
    name: 'Ford F-150 Limited',
    price: 63988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415705/pictures/eb51a5be-26ba-48ad-bc3b-f562e086c929-XXL',
    vin: '1FTFW1ED5NFB71034',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '301',
    name: 'Ford F-150 XLT',
    price: 56988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415706/pictures/67b8b3ee-f54e-4011-99ec-84fc154e1072-XXL',
    vin: '1FTFW1E5XNFB19407',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '302',
    name: 'Ford Edge Titanium',
    price: 20988,
    year: 2019,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415707/pictures/3f124f04-e557-4fb4-87b8-5a38f1fbdbde-XXL',
    vin: '2FMPK4K96KBC53901',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '303',
    name: 'Ford F-150 Lariat',
    price: 56988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415708/pictures/dd1bee47-5e43-4110-88ee-2eca76862027-XXL',
    vin: '1FTFW1E80NKE27218',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '304',
    name: 'Ford Escape Titanium',
    price: 30988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415709/pictures/b4f5a255-c402-46d5-9eb9-9c27fce275e6-XXL',
    vin: '1FMCU9J94NUB25954',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '305',
    name: 'Ford Mustang Mach-E Premium',
    price: 49988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415710/pictures/e1c28c37-71bd-4498-95d7-18d8d0002cc2-XXL',
    vin: '3FMTK3SU5NMA26098',
    fuelType: 'electric',
    condition: 'used',
    mpg: '100/95 MPGe',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Electric performance with zero emissions'
  },
  {
    id: '306',
    name: 'Ford F-150 Lariat',
    price: 57988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415712/pictures/bf159176-e878-45c3-b946-45ff17df3ee1-XXL',
    vin: '1FTFW1E59NFB44668',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '307',
    name: 'Ford Explorer Limited',
    price: 41988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415714/pictures/007333de-1ebb-4bc2-ab94-645df13bf85a-XXL',
    vin: '1FMSK8FH5NGB57497',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 288,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '308',
    name: 'Ford Expedition Limited',
    price: 24988,
    year: 2018,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415716/pictures/245ad3e5-655a-4a27-a0a2-e40a9169de57-XXL',
    vin: '1FMJU2AT7JEA02695',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["3rd Row Seat","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '309',
    name: 'Ford F-150 Lariat',
    price: 62988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415717/pictures/74c14987-1e92-4261-893b-c42e5bb4757b-XXL',
    vin: '1FTFW1E88PFB64391',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '310',
    name: 'Ford F-150 Lariat',
    price: 60988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415718/pictures/c4b35ba6-fa1c-49aa-ac05-c493d3e3c566-XXL',
    vin: '1FTFW1E83PFB64752',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '311',
    name: 'Ford EcoSport Titanium',
    price: 14988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415719/pictures/d7707fbe-9143-4d2f-a763-b2bf045892e2-XXL',
    vin: 'MAJ6S3KL2LC382781',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 160,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '312',
    name: 'Ford F-150 XLT',
    price: 48988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415720/pictures/ec59980f-7c7a-4a19-a7b2-fabd0147effc-XXL',
    vin: '1FTEW1EP1PFC38964',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '313',
    name: 'Ford F-150 Lariat',
    price: 63988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415721/pictures/f3043640-b45f-4194-a2aa-c62255797d74-XXL',
    vin: '1FTFW1E84PFC12601',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '314',
    name: 'Ford Explorer ST',
    price: 32988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415722/pictures/20b71163-51ff-4e2a-876d-0109a39dc799-XXL',
    vin: '1FM5K8GC9LGD11268',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '315',
    name: 'Cadillac CT4-V Blackwing',
    price: 72988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415723/pictures/d7b90162-a8a0-4564-b40b-47bb0dae906f-XXL',
    vin: '1G6DL5RP2P0460621',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 255,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '316',
    name: 'Ford F-150 King Ranch',
    price: 60988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415724/pictures/3ef8af08-ef5c-43d5-ba9a-155c6f5133f1-XXL',
    vin: '1FTFW1ED7NFB15399',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '317',
    name: 'Ford F-150 Lariat',
    price: 59300,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415726/pictures/8ecfa923-6932-4354-b90a-d8efd1c5a657-XXL',
    vin: '1FTEW1EP0PFA74199',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '318',
    name: 'Kia Seltos EX',
    price: 19988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415727/pictures/d7c12663-e116-4932-923b-63cd4edacf68-XXL',
    vin: 'KNDEUCAA1M7069022',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '319',
    name: 'Ford F-150 Tremor',
    price: 56988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415728/pictures/956b65f8-13f3-4bcc-9d87-42de66c187be-XXL',
    vin: '1FTEW1E85NFA33945',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '320',
    name: 'Ford F-150 Lariat',
    price: 49988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415729/pictures/7fcdda73-6833-42c0-ae42-7ff2d3a3762a-XXL',
    vin: '1FTEW1EP6NFA74947',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '321',
    name: 'Ford F-150 XLT',
    price: 48988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415730/pictures/107648fd-1c20-4472-ab62-9a9c351b1d74-XXL',
    vin: '1FTEW1EP8PFA18883',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '322',
    name: 'Ford Escape SEL',
    price: 23988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415731/pictures/0d4737bd-5486-44b7-bc8d-973d7c32f886-XXL',
    vin: '1FMCU9H94MUA84312',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '323',
    name: 'Volkswagen Jetta GLI',
    price: 26988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415732/pictures/c289815c-d2fb-4369-803d-7d34fddd6144-XXL',
    vin: '3VW1T7BU1PM034294',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great value in your budget'
  },
  {
    id: '324',
    name: 'Ford Super Duty F-350 SRW XLT',
    price: 62988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415733/pictures/f2223c28-66ab-4e62-bd2d-f747bfa42242-XXL',
    vin: '1FT8W3B67MED34426',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 558,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '325',
    name: 'Ford F-150 Lariat',
    price: 74988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415734/pictures/ebce4e5a-7e4a-4dbf-8515-a683dd027fa1-XXL',
    vin: '1FTFW5L56RFA96806',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '326',
    name: 'Mercedes-Benz C-Class C 300',
    price: 56988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415735/pictures/60b79c48-8c75-4451-b7a5-52cd0d944c65-XXL',
    vin: 'W1KAF4HB6RR174086',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '327',
    name: 'Ford Mustang GT Premium',
    price: 34988,
    year: 2016,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415736/pictures/f177b5b2-fd4f-477e-925a-250e591787d4-XXL',
    vin: '1FATP8FF3G5296931',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 450,
    features: ["Back-Up Camera","Bluetooth Connection","Convertible"],
    matchReason: 'Iconic American sports car'
  },
  {
    id: '328',
    name: 'Ford Bronco Sport Outer Banks',
    price: 26995,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415737/pictures/ca3b91c7-9e91-4037-a47c-ef084c902d6b-XXL',
    vin: '3FMCR9C6XMRB09980',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '329',
    name: 'Ford Edge ST Line',
    price: 37988,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415738/pictures/8e218e6b-1a88-45a6-8ff5-810f6ab5d663-XXL',
    vin: '2FMPK4J97RBA25367',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '330',
    name: 'Ford F-150 XLT',
    price: 43988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415740/pictures/58d65ac3-c207-4ea4-8bf9-9944c097e615-XXL',
    vin: '1FTEW1EP3NFB90798',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '331',
    name: 'Ford F-150 XLT',
    price: 42988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415741/pictures/fda46fdf-c947-4d04-ac73-887469c0a3b0-XXL',
    vin: '1FTFW1EDXNFC42924',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '332',
    name: 'Lincoln Navigator L Reserve',
    price: 74988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415743/pictures/0850fa8a-de06-4881-bcbe-5c4ec5dd663a-XXL',
    vin: '5LMJJ3LG5PEL05821',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '333',
    name: 'Ford Explorer ST',
    price: 58988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415745/pictures/257de7c4-76f1-4534-87b5-ecf6ffac568e-XXL',
    vin: '1FM5K8GC4PGA30677',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 375,
    features: ["3rd Row Seat","Adaptive Cruise Control","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '334',
    name: 'Land Rover Range Rover Velar S',
    price: 48888,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415746/pictures/c37fbf06-f0c9-42cb-8fb4-908a800c57d2-XXL',
    vin: 'SALYJ2EX3PA363343',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '335',
    name: 'Ford Bronco Sport Outer Banks',
    price: 28988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415747/pictures/ccc98a3e-97a2-4f9d-a14c-8bc9d709047c-XXL',
    vin: '3FMCR9C68NRD75662',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 188,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '336',
    name: 'Ford Super Duty F-450 DRW Platinum',
    price: 115888,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415748/pictures/c833014f-09ba-4fd3-b4e3-a3c872d234f7-XXL',
    vin: '1FT8W4DM0REE93068',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 603,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '337',
    name: 'Audi Q5 Progressiv',
    price: 28000,
    year: 2018,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415753/pictures/5ec9ba4e-6ad2-40a7-8d99-b325e58cfbe3-XXL',
    vin: 'WA1BNAFY3J2188770',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 240,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '338',
    name: 'Ford F-150 XLT',
    price: 23500,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415755/pictures/7f411197-e501-4753-a509-815d938beae6-XXL',
    vin: '1FTEW1E40LFC13053',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '339',
    name: 'Ford F-150 Raptor',
    price: 89988,
    year: 2023,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415757/pictures/99155967-4f13-42e8-b319-cdb7b8f9eb8b-XXL',
    vin: '1FTFW1RG0PFA62231',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '340',
    name: 'Ford F-150 Lariat',
    price: 47988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1415758/pictures/385e4466-5e0e-412b-9858-46fdc6e76062-XXL',
    vin: '1FTFW1ED8MFA93363',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '341',
    name: 'Ford F-150 Lariat',
    price: 51988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418544/pictures/4ebc11f4-c004-4dc8-be1f-3d4ab2806eae-XXL',
    vin: '1FTFW1ED5NFA54148',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '342',
    name: 'Ford F-150 Lariat',
    price: 50988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418545/pictures/0c4b404e-4de0-4150-9f47-c12229bb43b7-XXL',
    vin: '1FTFW1ED4NFB70442',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '343',
    name: 'Ford F-150 Lariat',
    price: 42988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418546/pictures/c3f48045-82cf-47c0-a895-eb4720b46f94-XXL',
    vin: '1FTEW1EP6NFB55107',
    fuelType: 'gas',
    condition: 'used',
    mpg: '22/30',
    horsepower: 338,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '344',
    name: 'Ford F-150 Lariat',
    price: 50988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418547/pictures/309ff5af-6903-4639-a8cd-20279ae29b4b-XXL',
    vin: '1FTFW1ED5NFA33946',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 298,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '345',
    name: 'Ford F-150 Platinum',
    price: 49988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418555/pictures/dad0b6f4-dc52-4bdd-a9e2-458f494d397e-XXL',
    vin: '1FTFW1E87MFB20068',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 438,
    features: ["Adaptive Cruise Control","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'America\'s best-selling truck'
  },
  {
    id: '346',
    name: 'Ford Bronco Sport Badlands',
    price: 33500,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1418556/pictures/0cc7c309-7785-499f-9949-a5abbcc9f890-XXL',
    vin: '3FMCR9D95NRE07413',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["Back-Up Camera","Bluetooth Connection","Heated Front Seats"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '347',
    name: 'Ford Edge Titanium',
    price: 23988,
    year: 2020,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1419384/pictures/3c81d152-df44-4423-b8d2-713f9ff7da3e-XXL',
    vin: '2FMPK4K92LBA51770',
    fuelType: 'gas',
    condition: 'used',
    mpg: '28/35',
    horsepower: 250,
    features: ["All Wheel Drive","Back-Up Camera","Bluetooth Connection"],
    matchReason: 'Perfect for families with kids'
  },
  {
    id: '348',
    name: 'Ford Escape SE Hybrid',
    price: 21988,
    year: 2021,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1420485/pictures/1a117678-2ef8-4177-8978-ed9ebf430db4-XXL',
    vin: '1FMCU9BZ5MUA19428',
    fuelType: 'hybrid',
    condition: 'used',
    mpg: '40/45',
    horsepower: 200,
    features: ["Adaptive Cruise Control","All Wheel Drive","Back-Up Camera"],
    matchReason: 'Great fuel efficiency for your needs'
  },
  {
    id: '349',
    name: 'Ford Super Duty F-250 SRW XL',
    price: 55988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1420486/pictures/fb7f4883-b771-4edf-9653-126a144c2eaf-XXL',
    vin: '1FT8W2BTXNEE72253',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 838,
    features: ["Bluetooth Connection","WiFi Hotspot"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '350',
    name: 'Ford Super Duty F-250 SRW XLT',
    price: 59988,
    year: 2022,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1421933/pictures/5a60ad9f-924d-419c-850e-b83e8502e631-XXL',
    vin: '1FT7W2BN1NEC22560',
    fuelType: 'gas',
    condition: 'used',
    mpg: '18/25',
    horsepower: 657,
    features: ["Back-Up Camera","Bluetooth Connection","Cloth Seats"],
    matchReason: 'Excellent choice for your needs'
  },
  {
    id: '351',
    name: 'Ford Transit Cargo Van',
    price: 54857.65,
    year: 2024,
    image: 'https://cardealerstg.blob.core.windows.net/erinwoodford/vehicles/1423716/pictures/a83cf051-074b-4849-becc-6f9ffb73df17-XXL',
    vin: '1FTBR1X81RKB62026',
    fuelType: 'gas',
    condition: 'used',
    mpg: '20/28',
    horsepower: 298,
    features: ["Back-Up Camera","Bluetooth Connection","Keyless Entry"],
    matchReason: 'Excellent choice for your needs'
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
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSearch = async () => {
    setHasSearched(true);
    setIsLoading(true);
    
    try {
      // Build the query string with user requirements
      const requirements = [];
      
      if (userInput.trim()) {
        requirements.push(`User said: "${userInput.trim()}"`);
      }
      
      if (selectedFuelTypes.length > 0) {
        requirements.push(`Fuel types: ${selectedFuelTypes.join(', ')}`);
      }
      
      if (selectedConditions.length > 0) {
        requirements.push(`Condition: ${selectedConditions.join(', ')}`);
      }
      
      requirements.push(`Budget: $${priceRange[0].toLocaleString()} - $${priceRange[1].toLocaleString()}`);
      requirements.push(`Minimum horsepower: ${minHorsepower[0]}hp`);
      
      const queryText = requirements.join('. ');
      
      // Make API call to local LLM
      const response = await fetch(`http://localhost:8000/search?query=${encodeURIComponent(queryText)}&dealer=ErinwoodFord&format=vins&top_k=10`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiResult = await response.json();
      
      // Filter vehicles based on VINs returned by the API
      let filtered: Vehicle[] = [];
      
      if (apiResult.vins && Array.isArray(apiResult.vins)) {
        // First, filter by VINs from API
        const vinsFromApi = apiResult.vins;
        filtered = mockVehicles.filter(vehicle => vinsFromApi.includes(vehicle.vin));
        
        // If no vehicles match the VINs, fall back to local filtering
        if (filtered.length === 0) {
          console.warn('No vehicles matched API VINs, falling back to local filtering');
          filtered = mockVehicles.filter(vehicle => {
            const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
            const fuelTypeMatch = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType);
            const conditionMatch = selectedConditions.length === 0 || selectedConditions.includes(vehicle.condition);
            const horsepowerMatch = vehicle.horsepower >= minHorsepower[0];
            
            return priceMatch && fuelTypeMatch && conditionMatch && horsepowerMatch;
          });
        }
      } else {
        // If API doesn't return VINs, use local filtering
        console.warn('API did not return VINs, using local filtering');
        filtered = mockVehicles.filter(vehicle => {
          const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
          const fuelTypeMatch = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType);
          const conditionMatch = selectedConditions.length === 0 || selectedConditions.includes(vehicle.condition);
          const horsepowerMatch = vehicle.horsepower >= minHorsepower[0];
          
          return priceMatch && fuelTypeMatch && conditionMatch && horsepowerMatch;
        });
      }

      // Enhanced matching based on user input
      if (userInput.trim()) {
        const inputLower = userInput.toLowerCase();
        filtered = filtered.map(vehicle => {
          let matchReason = '';

          if (inputLower.includes('kid') || inputLower.includes('family')) {
            if (vehicle.name.toLowerCase().includes('explorer') || vehicle.name.toLowerCase().includes('expedition')) {
              matchReason = 'Perfect for families with kids';
            }
          }

          if (inputLower.includes('fuel') || inputLower.includes('efficient')) {
            if (vehicle.fuelType === 'hybrid' || vehicle.fuelType === 'electric') {
              matchReason = 'Great fuel efficiency for your needs';
            }
          }

          if (inputLower.includes('budget') || inputLower.includes('affordable')) {
            if (vehicle.price < 40000) {
              matchReason = 'Great value in your budget';
            }
          }

          if (inputLower.includes('sport') || inputLower.includes('performance') || inputLower.includes('fast')) {
            if (vehicle.name.toLowerCase().includes('mustang') || vehicle.name.toLowerCase().includes('raptor')) {
              matchReason = 'High-performance vehicle for driving enthusiasts';
            }
          }

          if (inputLower.includes('work') || inputLower.includes('business') || inputLower.includes('cargo')) {
            if (vehicle.name.toLowerCase().includes('transit') || vehicle.name.toLowerCase().includes('f-150')) {
              matchReason = 'Perfect for work and business needs';
            }
          }

          return { ...vehicle, matchReason: matchReason || vehicle.matchReason };
        }).sort((a, b) => {
          const aHasCustomReason = a.matchReason ? 1 : 0;
          const bHasCustomReason = b.matchReason ? 1 : 0;
          return bHasCustomReason - aHasCustomReason;
        });
      }

      setFilteredVehicles(filtered);
      
      // Log the API response for debugging
      console.log('LLM API Response:', apiResult);
      
    } catch (error) {
      console.error('Error calling LLM API:', error);
      
      // Fallback to local filtering if API fails
      let filtered = mockVehicles.filter(vehicle => {
        const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
        const fuelTypeMatch = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType);
        const conditionMatch = selectedConditions.length === 0 || selectedConditions.includes(vehicle.condition);
        const horsepowerMatch = vehicle.horsepower >= minHorsepower[0];
        
        return priceMatch && fuelTypeMatch && conditionMatch && horsepowerMatch;
      });
      
      setFilteredVehicles(filtered);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedInputs = [
    "I need a car that fits 3 kids and uses less gas",
    "Looking for something reliable under $30k",
    "Want a fuel-efficient car for daily commuting",
    "Need something sporty but practical",
    "Loaded with safety features",
    "Plenty of cargo space"
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
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
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
                    Tailor Your Test Drive
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