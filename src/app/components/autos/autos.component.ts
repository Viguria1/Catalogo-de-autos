import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Auto {
  id: number;
  modelo: string;
  precio: number;
  lanzamiento: number;
  tipo: string;
  imagen?: string;
  descripcion?: string;
  marca: string;
}

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent {
    autos: Auto[] = [
  {
    id: 1,
    modelo: 'Toyota Corolla',
    precio: 23000,
    lanzamiento: 2024,
    tipo: 'Sedán',
    imagen: 'https://cdn.motor1.com/images/mgl/vxpwev/s1/toyota-corolla-5.jpg',
    descripcion: 'Confiabilidad, rendimiento y comodidad.',
    marca: 'Toyota'
  },
  {
    id: 2,
    modelo: 'Kia Seltos',
    precio: 28000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://www.kia.com/content/dam/kia2/in/en/images/showroom/seltos/showroom-seltos-23my-gallery-exterior-01.jpg',
    descripcion: 'Tecnología moderna y diseño deportivo.',
    marca: 'Kia'
  },
  {
    id: 3,
    modelo: 'Hyundai Tucson',
    precio: 32000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/g6ZP3/s1/hyundai-tucson-2021.jpg',
    descripcion: 'Moderno, seguro y elegante.',
    marca: 'Hyundai'
  },
  {
    id: 4,
    modelo: 'Nissan Sentra',
    precio: 25000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://cdn.motor1.com/images/mgl/v0qLJ/s1/2020-nissan-sentra.jpg',
    descripcion: 'Equilibrio entre confort y economía.',
    marca: 'Nissan'
  },
  {
    id: 5,
    modelo: 'Chevrolet Onix',
    precio: 21000,
    lanzamiento: 2024,
    tipo: 'Hatchback',
    imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_2f3172c23a01421a88380fe6f3bc877e.jpg',
    descripcion: 'Eficiente y accesible.',
    marca: 'Chevrolet'
  },
  {
    id: 6,
    modelo: 'Suzuki Swift',
    precio: 19000,
    lanzamiento: 2024,
    tipo: 'Compacto',
    imagen: 'https://cdn.motor1.com/images/mgl/KY9jm/s1/2021-suzuki-swift-sport.jpg',
    descripcion: 'Pequeño, ágil y económico.',
    marca: 'Suzuki'
  },
  {
    id: 7,
    modelo: 'Volkswagen Golf',
    precio: 27000,
    lanzamiento: 2024,
    tipo: 'Hatchback',
    imagen: 'https://cdn.motor1.com/images/mgl/M0A6z/s1/2021-volkswagen-golf-gti.jpg',
    descripcion: 'Tradición y tecnología.',
    marca: 'Volkswagen'
  },
  {
    id: 8,
    modelo: 'Mitsubishi Outlander',
    precio: 34000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/kWWOo/s1/2022-mitsubishi-outlander.jpg',
    descripcion: 'Espacioso, potente y familiar.',
    marca: 'Mitsubishi'
  },
  {
    id: 9,
    modelo: 'Toyota Hilux',
    precio: 38000,
    lanzamiento: 2023,
    tipo: 'Pickup',
    imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_9bcb844f4d3444518bc7cda1d879a4f2.jpg',
    descripcion: 'Potencia y resistencia para cualquier terreno.',
    marca: 'Toyota'
  },
  {
    id: 10,
    modelo: 'Toyota RAV4',
    precio: 42000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://toyotaperu.vtexassets.com/arquivos/ids/158344/TOYOTA-RAV4-HYBRID-1.jpg?v=638144164447300000',
    descripcion: 'SUV híbrido moderno y versátil.',
    marca: 'Toyota'
  },
  {
    id: 11,
    modelo: 'Toyota Yaris',
    precio: 19000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://cdn.motor1.com/images/mgl/zjjwW/s1/2023-toyota-yaris.jpg',
    descripcion: 'Compacto, práctico y económico.',
    marca: 'Toyota'
  },
  {
    id: 12,
    modelo: 'Toyota Fortuner',
    precio: 52000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://img.remediosdigitales.com/61ae89/toyota-fortuner-2021-1600-02/840_560.jpg',
    descripcion: 'SUV robusto, ideal para aventuras.',
    marca: 'Toyota'
  },
  {
    id: 13,
    modelo: 'Kia Rio',
    precio: 20000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://cdn.motor1.com/images/mgl/KP1zJ/s1/kia-rio-2021.jpg',
    descripcion: 'Eficiente, compacto y económico.',
    marca: 'Kia'
  },
  {
    id: 14,
    modelo: 'Kia Sportage',
    precio: 33000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_b5e9a63a164e432c81b74e2b69432894.jpg',
    descripcion: 'SUV moderno con gran tecnología.',
    marca: 'Kia'
  },
  {
    id: 15,
    modelo: 'Kia Picanto',
    precio: 16000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://cdn.motor1.com/images/mgl/qOkpE/s1/kia-picanto-2021.jpg',
    descripcion: 'Compacto, ideal para ciudad.',
    marca: 'Kia'
  },
  {
    id: 16,
    modelo: 'Kia Sorento',
    precio: 37000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/0ANXY/s1/2021-kia-sorento.jpg',
    descripcion: 'Espacio, potencia y elegancia.',
    marca: 'Kia'
  },
  {
    id: 17,
    modelo: 'Kia Stinger',
    precio: 45000,
    lanzamiento: 2023,
    tipo: 'Deportivo',
    imagen: 'https://cdn.motor1.com/images/mgl/6VVXb/s1/2022-kia-stinger.jpg',
    descripcion: 'Deportivo de alto rendimiento y lujo.',
    marca: 'Kia'
  },
  {
    id: 18,
    modelo: 'Kia Niro',
    precio: 31000,
    lanzamiento: 2024,
    tipo: 'SUV Híbrido',
    imagen: 'https://cdn.motor1.com/images/mgl/Wp2Ew/s1/kia-niro-2022.jpg',
    descripcion: 'SUV ecológico y moderno.',
    marca: 'Kia'
  },
  {
    id: 19,
    modelo: 'Kia Carnival',
    precio: 39000,
    lanzamiento: 2024,
    tipo: 'Minivan',
    imagen: 'https://cdn.motor1.com/images/mgl/6yNWR/s1/kia-carnival.jpg',
    descripcion: 'Espacio y comodidad para la familia.',
    marca: 'Kia'
  },
  {
    id: 20,
    modelo: 'Kia Soul',
    precio: 22000,
    lanzamiento: 2023,
    tipo: 'Crossover',
    imagen: 'https://cdn.motor1.com/images/mgl/0ANXY/s1/2021-kia-soul.jpg',
    descripcion: 'Estilo único y funcionalidad urbana.',
    marca: 'Kia'
  },
  {
    id: 21,
    modelo: 'Toyota Prius',
    precio: 30000,
    lanzamiento: 2024,
    tipo: 'Híbrido',
    imagen: 'https://cdn.motor1.com/images/mgl/LBB6R/s1/2023-toyota-prius.jpg',
    descripcion: 'Tecnología híbrida con diseño futurista.',
    marca: 'Toyota'
  },
  {
    id: 22,
    modelo: 'Toyota Camry',
    precio: 35000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://cdn.motor1.com/images/mgl/8BB6R/s1/2023-toyota-camry.jpg',
    descripcion: 'Elegancia, espacio y eficiencia.',
    marca: 'Toyota'
  },
  {
    id: 23,
    modelo: 'Toyota Land Cruiser',
    precio: 60000,
    lanzamiento: 2024,
    tipo: 'SUV 4x4',
    imagen: 'https://cdn.motor1.com/images/mgl/xPPWb/s1/2023-toyota-land-cruiser.jpg',
    descripcion: 'Lujoso, potente y apto para todo terreno.',
    marca: 'Toyota'
  },
  {
    id: 24,
    modelo: 'Toyota Avanza',
    precio: 21000,
    lanzamiento: 2023,
    tipo: 'Minivan',
    imagen: 'https://toyotaperu.vtexassets.com/arquivos/ids/156190/Toyota-Avanza-2.jpg',
    descripcion: 'Compacta y versátil, ideal para familias.',
    marca: 'Toyota'
  },
  {
    id: 25,
    modelo: 'Hyundai Elantra',
    precio: 24000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://cdn.motor1.com/images/mgl/0xM2V/s1/2023-hyundai-elantra.jpg',
    descripcion: 'Diseño deportivo y eficiencia de combustible.',
    marca: 'Hyundai'
  },
  {
    id: 26,
    modelo: 'Hyundai Santa Fe',
    precio: 37000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/JwwZq/s1/2024-hyundai-santa-fe.jpg',
    descripcion: 'Amplio, cómodo y listo para aventuras.',
    marca: 'Hyundai'
  },
  {
    id: 27,
    modelo: 'Hyundai Accent',
    precio: 18000,
    lanzamiento: 2023,
    tipo: 'Sedán compacto',
    imagen: 'https://cdn.motor1.com/images/mgl/0xqPm/s1/hyundai-accent-2023.jpg',
    descripcion: 'Compacto, económico y confiable.',
    marca: 'Hyundai'
  },
  {
    id: 28,
    modelo: 'Hyundai Kona',
    precio: 27000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/LPP0J/s1/2024-hyundai-kona.jpg',
    descripcion: 'Estilo moderno y tecnología avanzada.',
    marca: 'Hyundai'
  },
  {
    id: 29,
    modelo: 'Hyundai Creta',
    precio: 26000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.motor1.com/images/mgl/BXXQP/s1/hyundai-creta-2023.jpg',
    descripcion: 'SUV compacto con gran estilo.',
    marca: 'Hyundai'
  },
  {
    id: 30,
    modelo: 'Hyundai i20',
    precio: 20000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://cdn.motor1.com/images/mgl/g22Mb/s1/hyundai-i20-n-line-2023.jpg',
    descripcion: 'Ideal para ciudad, eficiente y moderno.',
    marca: 'Hyundai'
  },
  {
    id: 31,
    modelo: 'Hyundai Palisade',
    precio: 45000,
    lanzamiento: 2024,
    tipo: 'SUV grande',
    imagen: 'https://cdn.motor1.com/images/mgl/7YYRW/s1/2023-hyundai-palisade.jpg',
    descripcion: 'Gran capacidad y lujo familiar.',
    marca: 'Hyundai'
  },
  {
    id: 32,
    modelo: 'Hyundai Venue',
    precio: 22000,
    lanzamiento: 2024,
    tipo: 'SUV compacto',
    imagen: 'https://cdn.motor1.com/images/mgl/6ooXb/s1/2022-hyundai-venue.jpg',
    descripcion: 'Compacto, versátil y con estilo juvenil.',
    marca: 'Hyundai'
  },
  {
  id: 33,
  modelo: 'Nissan Versa',
  precio: 20000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/Qm9kb/s1/2023-nissan-versa.jpg',
  descripcion: 'Sedán confiable, económico y moderno.',
  marca: 'Nissan'
},
{
  id: 34,
  modelo: 'Nissan Altima',
  precio: 29000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/6xJ3v/s1/2023-nissan-altima.jpg',
  descripcion: 'Diseño elegante con tecnología avanzada.',
  marca: 'Nissan'
},
{
  id: 35,
  modelo: 'Nissan Pathfinder',
  precio: 47000,
  lanzamiento: 2024,
  tipo: 'SUV grande',
  imagen: 'https://cdn.motor1.com/images/mgl/wJxkN/s1/2022-nissan-pathfinder.jpg',
  descripcion: 'Espacio para toda la familia y potencia.',
  marca: 'Nissan'
},
{
  id: 36,
  modelo: 'Nissan Frontier',
  precio: 36000,
  lanzamiento: 2023,
  tipo: 'Pickup',
  imagen: 'https://cdn.motor1.com/images/mgl/QkkPn/s1/2022-nissan-frontier.jpg',
  descripcion: 'Pickup robusta y lista para el trabajo.',
  marca: 'Nissan'
},
{
  id: 37,
  modelo: 'Nissan X-Trail',
  precio: 39000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/QZZz6/s1/nissan-x-trail-2023.jpg',
  descripcion: 'SUV versátil, ideal para familia y viajes.',
  marca: 'Nissan'
},
{
  id: 38,
  modelo: 'Nissan Kicks',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'SUV compacto',
  imagen: 'https://cdn.motor1.com/images/mgl/Mzzlp/s1/2023-nissan-kicks.jpg',
  descripcion: 'Moderno, juvenil y eficiente.',
  marca: 'Nissan'
},
{
  id: 39,
  modelo: 'Nissan Leaf',
  precio: 37000,
  lanzamiento: 2023,
  tipo: 'Eléctrico',
  imagen: 'https://cdn.motor1.com/images/mgl/jppMn/s1/2022-nissan-leaf.jpg',
  descripcion: 'Eléctrico eficiente y ecológico.',
  marca: 'Nissan'
},
{
  id: 40,
  modelo: 'Nissan GT-R',
  precio: 113000,
  lanzamiento: 2023,
  tipo: 'Deportivo',
  imagen: 'https://cdn.motor1.com/images/mgl/zZ3eE/s1/nissan-gt-r-2023.jpg',
  descripcion: 'Poder y velocidad en estado puro.',
  marca: 'Nissan'
},
{
  id: 41,
  modelo: 'Chevrolet Spark GT',
  precio: 15000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://cdn.motor1.com/images/mgl/Y4bLw/s1/chevrolet-spark-2022.jpg',
  descripcion: 'Económico, compacto y perfecto para ciudad.',
  marca: 'Chevrolet'
},
{
  id: 42,
  modelo: 'Chevrolet Cruze',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/vqqJg/s1/chevrolet-cruze-2022.jpg',
  descripcion: 'Buen rendimiento y diseño moderno.',
  marca: 'Chevrolet'
},
{
  id: 43,
  modelo: 'Chevrolet Tracker Premier',
  precio: 29000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/3XnXm/s1/chevrolet-tracker-2021.jpg',
  descripcion: 'SUV urbano, práctico y tecnológico.',
  marca: 'Chevrolet'
},
{
  id: 44,
  modelo: 'Chevrolet Equinox',
  precio: 34000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/2bL7J/s1/2022-chevrolet-equinox.jpg',
  descripcion: 'Espacioso, seguro y conectado.',
  marca: 'Chevrolet'
},
{
  id: 45,
  modelo: 'Chevrolet Colorado',
  precio: 41000,
  lanzamiento: 2023,
  tipo: 'Pickup',
  imagen: 'https://cdn.motor1.com/images/mgl/BXAKz/s1/2023-chevrolet-colorado.jpg',
  descripcion: 'Fuerza, durabilidad y capacidad de carga.',
  marca: 'Chevrolet'
},
{
  id: 46,
  modelo: 'Chevrolet Blazer',
  precio: 46000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/JXXRk/s1/2023-chevrolet-blazer.jpg',
  descripcion: 'SUV con estilo deportivo y tecnología.',
  marca: 'Chevrolet'
},
{
  id: 47,
  modelo: 'Chevrolet Tahoe',
  precio: 68000,
  lanzamiento: 2024,
  tipo: 'SUV grande',
  imagen: 'https://cdn.motor1.com/images/mgl/80pJj/s1/2023-chevrolet-tahoe.jpg',
  descripcion: 'Gran espacio, lujo y potencia.',
  marca: 'Chevrolet'
},
{
  id: 48,
  modelo: 'Chevrolet Camaro',
  precio: 59000,
  lanzamiento: 2023,
  tipo: 'Deportivo',
  imagen: 'https://cdn.motor1.com/images/mgl/nAAqP/s1/2023-chevrolet-camaro.jpg',
  descripcion: 'Muscle car icónico con gran potencia.',
  marca: 'Chevrolet'
},
{
  id: 49,
  modelo: 'Suzuki Baleno',
  precio: 18000,
  lanzamiento: 2024,
  tipo: 'Hatchback',
  imagen: 'https://cdn.motor1.com/images/mgl/mBBkZ/s1/2022-suzuki-baleno.jpg',
  descripcion: 'Hatchback espacioso y eficiente.',
  marca: 'Suzuki'
},
{
  id: 50,
  modelo: 'Suzuki Celerio',
  precio: 14000,
  lanzamiento: 2023,
  tipo: 'Compacto',
  imagen: 'https://cdn.motor1.com/images/mgl/nx33e/s1/2022-suzuki-celerio.jpg',
  descripcion: 'Ideal para ciudad, económico y práctico.',
  marca: 'Suzuki'
},
{
  id: 51,
  modelo: 'Suzuki Vitara',
  precio: 26000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/gppN6/s1/2021-suzuki-vitara.jpg',
  descripcion: 'SUV versátil y confiable para toda la familia.',
  marca: 'Suzuki'
},
{
  id: 52,
  modelo: 'Suzuki Jimny',
  precio: 27000,
  lanzamiento: 2024,
  tipo: 'Todo terreno',
  imagen: 'https://cdn.motor1.com/images/mgl/JqqNk/s1/2023-suzuki-jimny.jpg',
  descripcion: 'Diseño retro y gran capacidad off-road.',
  marca: 'Suzuki'
},
{
  id: 53,
  modelo: 'Suzuki S-Cross',
  precio: 30000,
  lanzamiento: 2023,
  tipo: 'Crossover',
  imagen: 'https://cdn.motor1.com/images/mgl/pqqxz/s1/2022-suzuki-s-cross.jpg',
  descripcion: 'Crossover eficiente y elegante.',
  marca: 'Suzuki'
},
{
  id: 54,
  modelo: 'Suzuki Ignis',
  precio: 16000,
  lanzamiento: 2024,
  tipo: 'Micro SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/ErvYe/s1/2023-suzuki-ignis.jpg',
  descripcion: 'Pequeño, divertido y práctico.',
  marca: 'Suzuki'
},
{
  id: 55,
  modelo: 'Suzuki Ertiga',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'Minivan',
  imagen: 'https://cdn.motor1.com/images/mgl/lAAp3/s1/2022-suzuki-ertiga.jpg',
  descripcion: 'Minivan eficiente y funcional para familias.',
  marca: 'Suzuki'
},
{
  id: 56,
  modelo: 'Suzuki XL7',
  precio: 26000,
  lanzamiento: 2023,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/VAAqM/s1/2022-suzuki-xl7.jpg',
  descripcion: 'SUV moderno, ideal para familia y aventura.',
  marca: 'Suzuki'
},
{
  id: 57,
  modelo: 'Volkswagen Jetta',
  precio: 27000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/8VV0b/s1/2022-volkswagen-jetta.jpg',
  descripcion: 'Elegancia y tecnología en un sedán clásico.',
  marca: 'Volkswagen'
},
{
  id: 58,
  modelo: 'Volkswagen Polo',
  precio: 22000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://cdn.motor1.com/images/mgl/2qqPg/s1/2022-volkswagen-polo.jpg',
  descripcion: 'Compacto, eficiente y dinámico.',
  marca: 'Volkswagen'
},
{
  id: 59,
  modelo: 'Volkswagen Tiguan',
  precio: 35000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/LZJYK/s1/2022-volkswagen-tiguan.jpg',
  descripcion: 'SUV familiar con diseño premium.',
  marca: 'Volkswagen'
},
{
  id: 60,
  modelo: 'Volkswagen Passat',
  precio: 32000,
  lanzamiento: 2023,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/0ANoY/s1/2021-volkswagen-passat.jpg',
  descripcion: 'Confort y elegancia para viajes largos.',
  marca: 'Volkswagen'
},
{
  id: 61,
  modelo: 'Volkswagen Arteon',
  precio: 45000,
  lanzamiento: 2024,
  tipo: 'Coupé',
  imagen: 'https://cdn.motor1.com/images/mgl/2ooNN/s1/2022-volkswagen-arteon.jpg',
  descripcion: 'Diseño deportivo y sofisticado.',
  marca: 'Volkswagen'
},
{
  id: 62,
  modelo: 'Volkswagen Taos',
  precio: 30000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/9kkE6/s1/2022-volkswagen-taos.jpg',
  descripcion: 'Compacto, tecnológico y versátil.',
  marca: 'Volkswagen'
},
{
  id: 63,
  modelo: 'Volkswagen T-Cross',
  precio: 29000,
  lanzamiento: 2023,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/L2rV8/s1/2023-volkswagen-t-cross.jpg',
  descripcion: 'SUV juvenil con gran estilo.',
  marca: 'Volkswagen'
},
{
  id: 64,
  modelo: 'Volkswagen ID.4',
  precio: 50000,
  lanzamiento: 2024,
  tipo: 'SUV Eléctrico',
  imagen: 'https://cdn.motor1.com/images/mgl/lAAem/s1/2023-volkswagen-id4.jpg',
  descripcion: 'SUV 100% eléctrico, moderno y sustentable.',
  marca: 'Volkswagen'
},
{
  id: 65,
  modelo: 'Mitsubishi Montero Sport',
  precio: 46000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/yM99B/s1/2020-mitsubishi-montero-sport.jpg',
  descripcion: 'SUV resistente con capacidades off-road.',
  marca: 'Mitsubishi'
},
{
  id: 66,
  modelo: 'Mitsubishi L200',
  precio: 39000,
  lanzamiento: 2024,
  tipo: 'Pickup',
  imagen: 'https://cdn.motor1.com/images/mgl/7zzGz/s1/mitsubishi-l200-2024.jpg',
  descripcion: 'Pickup poderosa y confiable para el trabajo.',
  marca: 'Mitsubishi'
},
{
  id: 67,
  modelo: 'Mitsubishi Mirage',
  precio: 15000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://cdn.motor1.com/images/mgl/L2rrX/s1/2022-mitsubishi-mirage.jpg',
  descripcion: 'Compacto, económico y perfecto para ciudad.',
  marca: 'Mitsubishi'
},
{
  id: 68,
  modelo: 'Mitsubishi Eclipse Cross',
  precio: 33000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/6XK9E/s1/2023-mitsubishi-eclipse-cross.jpg',
  descripcion: 'SUV con diseño deportivo y eficiente.',
  marca: 'Mitsubishi'
},
{
  id: 69,
  modelo: 'Mitsubishi ASX',
  precio: 31000,
  lanzamiento: 2023,
  tipo: 'SUV Compacto',
  imagen: 'https://cdn.motor1.com/images/mgl/73Jym/s1/2023-mitsubishi-asx.jpg',
  descripcion: 'SUV compacto con buen rendimiento urbano.',
  marca: 'Mitsubishi'
},
{
  id: 70,
  modelo: 'Mitsubishi Outlander PHEV',
  precio: 47000,
  lanzamiento: 2024,
  tipo: 'SUV Híbrido',
  imagen: 'https://cdn.motor1.com/images/mgl/WqqvN/s1/2023-mitsubishi-outlander-phev.jpg',
  descripcion: 'SUV híbrido con gran autonomía eléctrica.',
  marca: 'Mitsubishi'
},
{
  id: 71,
  modelo: 'Mitsubishi Space Star',
  precio: 16000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://cdn.motor1.com/images/mgl/gqqqP/s1/2022-mitsubishi-space-star.jpg',
  descripcion: 'Pequeño, eficiente y maniobrable.',
  marca: 'Mitsubishi'
},
{
  id: 72,
  modelo: 'Mitsubishi Xpander',
  precio: 28000,
  lanzamiento: 2024,
  tipo: 'MPV',
  imagen: 'https://cdn.motor1.com/images/mgl/8ooLz/s1/2022-mitsubishi-xpander.jpg',
  descripcion: 'Vehículo familiar con diseño moderno y amplio espacio.',
  marca: 'Mitsubishi'
}





];

  marcas: string[] = [
    'Toyota',
    'Kia',
    'Hyundai',
    'Nissan',
    'Chevrolet',
    'Suzuki',
    'Volkswagen',
    'Mitsubishi'
  ];

  autoSeleccionado: Auto | null = null;

  abrirDetalle(auto: Auto) {
    this.autoSeleccionado = auto;
  }

  cerrarDetalle() {
    this.autoSeleccionado = null;
  }

  getAutosPorMarca(marca: string): Auto[] {
    return this.autos.filter(auto => auto.marca === marca);
  }

  scrollTo(marca: string) {
    const seccion = document.getElementById(marca);
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
