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
    imagen: 'https://cdn.motor1.com/images/mgl/1Zpol3/s1/2024-kia-seltos-us-spec.jpg',
    descripcion: 'Tecnología moderna y diseño deportivo.',
    marca: 'Kia'
  },
  {
    id: 3,
    modelo: 'Hyundai Tucson',
    precio: 32000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://th.bing.com/th/id/R.b93b3c1b7bb877bc035cacc417663d38?rik=5ui05NacJlj%2bYg&pid=ImgRaw&r=0',
    descripcion: 'Moderno, seguro y elegante.',
    marca: 'Hyundai'
  },
  {
    id: 4,
    modelo: 'Nissan Sentra',
    precio: 25000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://tse4.mm.bing.net/th/id/OIP.zwGkqP7thvBsida736sXWgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Equilibrio entre confort y economía.',
    marca: 'Nissan'
  },
  {
    id: 5,
    modelo: 'Chevrolet Onix',
    precio: 21000,
    lanzamiento: 2024,
    tipo: 'Hatchback',
    imagen: 'https://guiaauto.com.br/wp-content/uploads/2023/08/image-1024x796.png',
    descripcion: 'Eficiente y accesible.',
    marca: 'Chevrolet'
  },
  {
    id: 6,
    modelo: 'Suzuki Swift',
    precio: 19000,
    lanzamiento: 2024,
    tipo: 'Compacto',
    imagen: 'https://www.autosrodando.com/wp-content/uploads/2023/08/suzuki-swift-2024-rendered.jpeg',
    descripcion: 'Pequeño, ágil y económico.',
    marca: 'Suzuki'
  },
  {
    id: 7,
    modelo: 'Volkswagen Golf',
    precio: 27000,
    lanzamiento: 2024,
    tipo: 'Hatchback',
    imagen: 'https://cdn.motor1.com/images/mgl/nA9Joj/s1/2024-volkswagen-golf-gti-380.jpg',
    descripcion: 'Tradición y tecnología.',
    marca: 'Volkswagen'
  },
  {
    id: 8,
    modelo: 'Mitsubishi Outlander',
    precio: 34000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://tse2.mm.bing.net/th/id/OIP.jjoLoULsNqfH0oTnIsVXmQHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Espacioso, potente y familiar.',
    marca: 'Mitsubishi'
  },
  {
    id: 9,
    modelo: 'Toyota Hilux',
    precio: 38000,
    lanzamiento: 2023,
    tipo: 'Pickup',
    imagen: 'https://tse3.mm.bing.net/th/id/OIP.vIJ5ICY_9WuXVuxLpO0FvgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Potencia y resistencia para cualquier terreno.',
    marca: 'Toyota'
  },
  {
    id: 10,
    modelo: 'Toyota RAV4',
    precio: 42000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://www.motortrend.com/uploads/2023/08/009-2024-Toyota-RAV4-Prime-Plug-In-Hybrid-front-three-quarters.jpg',
    descripcion: 'SUV híbrido moderno y versátil.',
    marca: 'Toyota'
  },
  {
    id: 11,
    modelo: 'Toyota Yaris',
    precio: 19000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/01/Toyota-Yaris-Cross-GR-Sport-2WD-Hybrid-HERO-16x9-1-1.jpg',
    descripcion: 'Compacto, práctico y económico.',
    marca: 'Toyota'
  },
  {
    id: 12,
    modelo: 'Toyota Fortuner',
    precio: 52000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://cdn.pune.news/wp-content/uploads/2023/10/2024-Toyota-Fortuner-SUV.webp',
    descripcion: 'SUV robusto, ideal para aventuras.',
    marca: 'Toyota'
  },
  {
    id: 13,
    modelo: 'Kia Rio',
    precio: 20000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://th.bing.com/th/id/R.9956925e3f4b54686e8a9d3f819ce4ec?rik=RufPmlLIleAqzQ&pid=ImgRaw&r=0',
    descripcion: 'Eficiente, compacto y económico.',
    marca: 'Kia'
  },
  {
    id: 14,
    modelo: 'Kia Sportage',
    precio: 33000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/07/230324_Kia-Sportage-S-2.0D-AWD_Still-29.jpg',
    descripcion: 'SUV moderno con gran tecnología.',
    marca: 'Kia'
  },
  {
    id: 15,
    modelo: 'Kia Picanto',
    precio: 16000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://images.carexpert.com.au/crop/1600/1067/app/uploads/2023/01/2023-Kia-Picanto-GT-36.jpg',
    descripcion: 'Compacto, ideal para ciudad.',
    marca: 'Kia'
  },
  {
    id: 16,
    modelo: 'Kia Sorento',
    precio: 37000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://th.bing.com/th/id/R.b7fc2c3e60187ae439815c6d4a78fb51?rik=IXZycyxt251BZQ&pid=ImgRaw&r=0',
    descripcion: 'Espacio, potencia y elegancia.',
    marca: 'Kia'
  },
  {
    id: 17,
    modelo: 'Kia Stinger',
    precio: 45000,
    lanzamiento: 2023,
    tipo: 'Deportivo',
    imagen: 'https://th.bing.com/th/id/R.6e13258e4f7c4194880fc3bc4a5db149?rik=dqFRp%2biwRogPcQ&pid=ImgRaw&r=0',
    descripcion: 'Deportivo de alto rendimiento y lujo.',
    marca: 'Kia'
  },
  {
    id: 18,
    modelo: 'Kia Niro',
    precio: 31000,
    lanzamiento: 2024,
    tipo: 'SUV Híbrido',
    imagen: 'https://tse2.mm.bing.net/th/id/OIP.kA7WKsbKqfRLmlbysgB3FAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'SUV ecológico y moderno.',
    marca: 'Kia'
  },
  {
    id: 19,
    modelo: 'Kia Carnival',
    precio: 39000,
    lanzamiento: 2024,
    tipo: 'Minivan',
    imagen: 'https://carmoru.com/wp-content/uploads/2024/11/Kia-Carnival-2024-Price-In-Malaysia.jpg',
    descripcion: 'Espacio y comodidad para la familia.',
    marca: 'Kia'
  },
  {
    id: 20,
    modelo: 'Kia Soul',
    precio: 22000,
    lanzamiento: 2023,
    tipo: 'Crossover',
    imagen: 'https://tse1.mm.bing.net/th/id/OIP.RIi-Dznk16mBQCHvWEZfMwHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Estilo único y funcionalidad urbana.',
    marca: 'Kia'
  },
  {
    id: 21,
    modelo: 'Toyota Prius',
    precio: 30000,
    lanzamiento: 2024,
    tipo: 'Híbrido',
    imagen: 'https://www.motortrend.com/uploads/2023/08/2024-Toyota-Prius-Prime-front-view-25.jpeg',
    descripcion: 'Tecnología híbrida con diseño futurista.',
    marca: 'Toyota'
  },
  {
    id: 22,
    modelo: 'Toyota Camry',
    precio: 35000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://www.thedrive.com/uploads/2022/11/30/camrynightshadehybrid-39-scaled.jpg?auto=webp&crop=16:9&auto=webp&optimize=high&quality=70&width=1440',
    descripcion: 'Elegancia, espacio y eficiencia.',
    marca: 'Toyota'
  },
  {
    id: 23,
    modelo: 'Toyota Land Cruiser',
    precio: 60000,
    lanzamiento: 2024,
    tipo: 'SUV 4x4',
    imagen: 'https://cdn.motor1.com/images/mgl/MkJo74/s1/2024-toyota-land-cruiser-exterior-front-quarter.jpg',
    descripcion: 'Lujoso, potente y apto para todo terreno.',
    marca: 'Toyota'
  },
  {
    id: 24,
    modelo: 'Toyota Avanza',
    precio: 21000,
    lanzamiento: 2023,
    tipo: 'Minivan',
    imagen: 'https://th.bing.com/th/id/R.d098d56a05c8c8683724aa945d2237cc?rik=VatbpL2cNOUSnQ&pid=ImgRaw&r=0',
    descripcion: 'Compacta y versátil, ideal para familias.',
    marca: 'Toyota'
  },
  {
    id: 25,
    modelo: 'Hyundai Elantra',
    precio: 24000,
    lanzamiento: 2023,
    tipo: 'Sedán',
    imagen: 'https://tse4.mm.bing.net/th/id/OIP.vT2XdpIvnmg6ENu0KBtYpwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Diseño deportivo y eficiencia de combustible.',
    marca: 'Hyundai'
  },
  {
    id: 26,
    modelo: 'Hyundai Santa Fe',
    precio: 37000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqBzm575QkOZ_Cu6wuoHuK8w9dxV6UQ7IMbEOA0XNgUFD2wCAkI9KDhWOaSckvJ6MJtlyPa4WENdELREbeOcTmjHu3dy4MkDhnwZ54uYL4X3lJxeBNW22HOd8w79yGUaePYOZd1dbfnPIw9T1GE3DX6fF_ntS6Zpjva-mk9dEr-sDl6R3a3FccOu5regU/s1974/Hyundai-Santa-Fe-2024%20(1).jpg',
    descripcion: 'Amplio, cómodo y listo para aventuras.',
    marca: 'Hyundai'
  },
  {
    id: 27,
    modelo: 'Hyundai Accent',
    precio: 18000,
    lanzamiento: 2023,
    tipo: 'Sedán compacto',
    imagen: 'https://unbox.ph/wp-content/uploads/2023/03/hyundai-accent-2023-4-1679448111.jpeg',
    descripcion: 'Compacto, económico y confiable.',
    marca: 'Hyundai'
  },
  {
    id: 28,
    modelo: 'Hyundai Kona',
    precio: 27000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://tse4.mm.bing.net/th/id/OIP.je_7fJ6S2CkJ15J62SUVewHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    descripcion: 'Estilo moderno y tecnología avanzada.',
    marca: 'Hyundai'
  },
  {
    id: 29,
    modelo: 'Hyundai Creta',
    precio: 26000,
    lanzamiento: 2024,
    tipo: 'SUV',
    imagen: 'https://img-ik.cars.co.za/news-site-za/images/2024/01/2024-Hyundai-Creta-1.jpg?tr=w-1200,h-800',
    descripcion: 'SUV compacto con gran estilo.',
    marca: 'Hyundai'
  },
  {
    id: 30,
    modelo: 'Hyundai i20',
    precio: 20000,
    lanzamiento: 2023,
    tipo: 'Hatchback',
    imagen: 'https://images.prismic.io/carwow/e25c5425-47fb-4966-af5c-9006c9075ec5_Hyundaii20-012.jpg',
    descripcion: 'Ideal para ciudad, eficiente y moderno.',
    marca: 'Hyundai'
  },
  {
    id: 31,
    modelo: 'Hyundai Palisade',
    precio: 45000,
    lanzamiento: 2024,
    tipo: 'SUV grande',
    imagen: 'https://media.ed.edmunds-media.com/hyundai/palisade/2024/fe/2024_hyundai_palisade_f34_fe_1025221_1280.jpg',
    descripcion: 'Gran capacidad y lujo familiar.',
    marca: 'Hyundai'
  },
  {
    id: 32,
    modelo: 'Hyundai Venue',
    precio: 22000,
    lanzamiento: 2024,
    tipo: 'SUV compacto',
    imagen: 'https://www.motortrend.com/uploads/2023/07/2024-Hyundai-Venue-side-view-68.jpg',
    descripcion: 'Compacto, versátil y con estilo juvenil.',
    marca: 'Hyundai'
  },
  {
  id: 33,
  modelo: 'Nissan Versa',
  precio: 20000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/g4lQyE/s1/nissan-versa-2024.jpg',
  descripcion: 'Sedán confiable, económico y moderno.',
  marca: 'Nissan'
},
{
  id: 34,
  modelo: 'Nissan Altima',
  precio: 29000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://imageonthefly.autodatadirect.com/images/?width=1200&height=900&IMG=USD30NIC041E01300.jpg',
  descripcion: 'Diseño elegante con tecnología avanzada.',
  marca: 'Nissan'
},
{
  id: 35,
  modelo: 'Nissan Pathfinder',
  precio: 47000,
  lanzamiento: 2024,
  tipo: 'SUV grande',
  imagen: 'https://www.motortrend.com/uploads/2023/08/2024-Nissan-Pathfinder-Platinum-front-view-4.jpg',
  descripcion: 'Espacio para toda la familia y potencia.',
  marca: 'Nissan'
},
{
  id: 36,
  modelo: 'Nissan Frontier',
  precio: 36000,
  lanzamiento: 2023,
  tipo: 'Pickup',
  imagen: 'https://cdn.motor1.com/images/mgl/AkKKLN/s1/2023-nissan-frontier.jpg',
  descripcion: 'Pickup robusta y lista para el trabajo.',
  marca: 'Nissan'
},
{
  id: 37,
  modelo: 'Nissan X-Trail',
  precio: 39000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/08/230317_Nissan-X-Trail-ST-L-4WD-7-Seat_Still-21.jpg',
  descripcion: 'SUV versátil, ideal para familia y viajes.',
  marca: 'Nissan'
},
{
  id: 38,
  modelo: 'Nissan Kicks',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'SUV compacto',
  imagen: 'https://cdn.motor1.com/images/mgl/zx907W/s1/nissan-kicks-exclusive-2024.jpg',
  descripcion: 'Moderno, juvenil y eficiente.',
  marca: 'Nissan'
},
{
  id: 39,
  modelo: 'Nissan Leaf',
  precio: 37000,
  lanzamiento: 2023,
  tipo: 'Eléctrico',
  imagen: 'https://pictures.dealer.com/d/ddcleithvinfast/1121/e0c94b4704ccc6c93956cfc457b01e4fx.jpg?impolicy=resize&w=1024',
  descripcion: 'Eléctrico eficiente y ecológico.',
  marca: 'Nissan'
},
{
  id: 40,
  modelo: 'Nissan GT-R',
  precio: 113000,
  lanzamiento: 2023,
  tipo: 'Deportivo',
  imagen: 'https://i.gaw.to/vehicles/photos/40/33/403316-2023-nissan-gt-r.jpg',
  descripcion: 'Poder y velocidad en estado puro.',
  marca: 'Nissan'
},
{
  id: 41,
  modelo: 'Chevrolet Spark GT',
  precio: 15000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://www.comparendossimit.com/wp-content/uploads/2022/04/chevrolet-spark-gt-1-24.jpg',
  descripcion: 'Económico, compacto y perfecto para ciudad.',
  marca: 'Chevrolet'
},
{
  id: 42,
  modelo: 'Chevrolet Cruze',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://tse4.mm.bing.net/th/id/OIP.ezFqsnS4nuOjkNepEdQ6EgHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descripcion: 'Buen rendimiento y diseño moderno.',
  marca: 'Chevrolet'
},
{
  id: 43,
  modelo: 'Chevrolet Tracker Premier',
  precio: 29000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://garagem360.com.br/wp-content/uploads/2023/09/Chevrolet-Tracker-Premier-2024-2.jpg',
  descripcion: 'SUV urbano, práctico y tecnológico.',
  marca: 'Chevrolet'
},
{
  id: 44,
  modelo: 'Chevrolet Equinox',
  precio: 34000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://www.motortrend.com/uploads/2023/05/2024-chevrolet-equinox-motion-front-view-001.jpg',
  descripcion: 'Espacioso, seguro y conectado.',
  marca: 'Chevrolet'
},
{
  id: 45,
  modelo: 'Chevrolet Colorado',
  precio: 41000,
  lanzamiento: 2023,
  tipo: 'Pickup',
  imagen: 'https://www.motortrend.com/uploads/2022/07/005-2023-Chevrolet-Colorado-ZR2-First-Look.jpg',
  descripcion: 'Fuerza, durabilidad y capacidad de carga.',
  marca: 'Chevrolet'
},
{
  id: 46,
  modelo: 'Chevrolet Blazer',
  precio: 46000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://siempreauto.com/wp-content/uploads/sites/9/2023/10/2024-chevrolet-blazer-001-e1698622351488.jpg?resize=360',
  descripcion: 'SUV con estilo deportivo y tecnología.',
  marca: 'Chevrolet'
},
{
  id: 47,
  modelo: 'Chevrolet Tahoe',
  precio: 68000,
  lanzamiento: 2024,
  tipo: 'SUV grande',
  imagen: 'https://i.gaw.to/vehicles/photos/40/36/403661-2024-chevrolet-tahoe.jpg',
  descripcion: 'Gran espacio, lujo y potencia.',
  marca: 'Chevrolet'
},
{
  id: 48,
  modelo: 'Chevrolet Camaro',
  precio: 59000,
  lanzamiento: 2023,
  tipo: 'Deportivo',
  imagen: 'https://th.bing.com/th/id/R.ea81a6b2a86adabd0ed451949a127a70?rik=J6SEQY%2fVPPRKvg&pid=ImgRaw&r=0',
  descripcion: 'Muscle car icónico con gran potencia.',
  marca: 'Chevrolet'
},
{
  id: 49,
  modelo: 'Suzuki Baleno',
  precio: 18000,
  lanzamiento: 2024,
  tipo: 'Hatchback',
  imagen: 'https://revistartt.cl/wp-content/uploads/2022/11/Suzuki-New-Baleno-054-scaled.jpg',
  descripcion: 'Hatchback espacioso y eficiente.',
  marca: 'Suzuki'
},
{
  id: 50,
  modelo: 'Suzuki Celerio',
  precio: 14000,
  lanzamiento: 2023,
  tipo: 'Compacto',
  imagen: 'https://tse4.mm.bing.net/th/id/OIP.5ejETm_kS_XPiAHf02XOBQHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descripcion: 'Ideal para ciudad, económico y práctico.',
  marca: 'Suzuki'
},
{
  id: 51,
  modelo: 'Suzuki Vitara',
  precio: 26000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.motor1.com/images/mgl/MkOVVN/s1/suzuki-vitara-2024.jpg',
  descripcion: 'SUV versátil y confiable para toda la familia.',
  marca: 'Suzuki'
},
{
  id: 52,
  modelo: 'Suzuki Jimny',
  precio: 27000,
  lanzamiento: 2024,
  tipo: 'Todo terreno',
  imagen: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2024/08/Suzuki-Jimny-XL-5-Door-PROMO-PHOTOS-1.jpg',
  descripcion: 'Diseño retro y gran capacidad off-road.',
  marca: 'Suzuki'
},
{
  id: 53,
  modelo: 'Suzuki S-Cross',
  precio: 30000,
  lanzamiento: 2023,
  tipo: 'Crossover',
  imagen: 'https://galeria.cdn.totalcar.hu/tesztek/2023/05/17/suzuki_s-cross_2023/48935458_5726080fd5a2ccb1ff154025658805ae_x.jpg',
  descripcion: 'Crossover eficiente y elegante.',
  marca: 'Suzuki'
},
{
  id: 54,
  modelo: 'Suzuki Ignis',
  precio: 16000,
  lanzamiento: 2024,
  tipo: 'Micro SUV',
  imagen: 'https://th.bing.com/th/id/R.2021f6788d95c77434c2584d82323cd7?rik=wccS%2b4q5unGJNA&pid=ImgRaw&r=0',
  descripcion: 'Pequeño, divertido y práctico.',
  marca: 'Suzuki'
},
{
  id: 55,
  modelo: 'Suzuki Ertiga',
  precio: 24000,
  lanzamiento: 2024,
  tipo: 'Minivan',
  imagen: 'https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_e653fc28a7e447a598350f572051adc0.webp',
  descripcion: 'Minivan eficiente y funcional para familias.',
  marca: 'Suzuki'
},
{
  id: 56,
  modelo: 'Suzuki XL7',
  precio: 26000,
  lanzamiento: 2023,
  tipo: 'SUV',
  imagen: 'https://cloud.jpnn.com/photo/arsip/normal/2023/06/16/profil-suzuki-xl7-hybrid-foto-ridho-3g5dy-9vpj.jpg',
  descripcion: 'SUV moderno, ideal para familia y aventura.',
  marca: 'Suzuki'
},
{
  id: 57,
  modelo: 'Volkswagen Jetta',
  precio: 27000,
  lanzamiento: 2024,
  tipo: 'Sedán',
  imagen: 'https://carsfrenzy.net/wp-content/uploads/2023/05/2024-VW-Jetta-Design.jpg',
  descripcion: 'Elegancia y tecnología en un sedán clásico.',
  marca: 'Volkswagen'
},
{
  id: 58,
  modelo: 'Volkswagen Polo',
  precio: 22000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://th.bing.com/th/id/R.67f66fc18e9c57b499449c42224509b4?rik=l%2bcvxdihPWSFsg&pid=ImgRaw&r=0',
  descripcion: 'Compacto, eficiente y dinámico.',
  marca: 'Volkswagen'
},
{
  id: 59,
  modelo: 'Volkswagen Tiguan',
  precio: 35000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://tse1.mm.bing.net/th/id/OIP.-pfgfGCOXN61rC1m3yIoyAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descripcion: 'SUV familiar con diseño premium.',
  marca: 'Volkswagen'
},
{
  id: 60,
  modelo: 'Volkswagen Passat',
  precio: 32000,
  lanzamiento: 2023,
  tipo: 'Sedán',
  imagen: 'https://cdn.motor1.com/images/mgl/lYMx1/s1/vw-passat-facelift-2019.jpg',
  descripcion: 'Confort y elegancia para viajes largos.',
  marca: 'Volkswagen'
},
{
  id: 61,
  modelo: 'Volkswagen Arteon',
  precio: 45000,
  lanzamiento: 2024,
  tipo: 'Coupé',
  imagen: 'https://daxstreet.com/wp-content/uploads/2023/09/2024-Volkswagen-Arteon-1.jpg',
  descripcion: 'Diseño deportivo y sofisticado.',
  marca: 'Volkswagen'
},
{
  id: 62,
  modelo: 'Volkswagen Taos',
  precio: 30000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://fotos.perfil.com/2021/06/02/volkswagen-taos-1183537.jpg',
  descripcion: 'Compacto, tecnológico y versátil.',
  marca: 'Volkswagen'
},
{
  id: 63,
  modelo: 'Volkswagen T-Cross',
  precio: 29000,
  lanzamiento: 2023,
  tipo: 'SUV',
  imagen: 'https://www.topgear.com/sites/default/files/cars-car/carousel/2019/03/db2019au00235.jpg',
  descripcion: 'SUV juvenil con gran estilo.',
  marca: 'Volkswagen'
},
{
  id: 64,
  modelo: 'Volkswagen ID.4',
  precio: 50000,
  lanzamiento: 2024,
  tipo: 'SUV Eléctrico',
  imagen: 'https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/ahcbqvdrfhptm3fcpcbi',
  descripcion: 'SUV 100% eléctrico, moderno y sustentable.',
  marca: 'Volkswagen'
},
{
  id: 65,
  modelo: 'Mitsubishi Montero Sport',
  precio: 46000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://visor.ph/wp-content/uploads/2024/03/Check-out-the-facelifted-Mitsubishi-Montero-Sport-for-2024-2.jpg',
  descripcion: 'SUV resistente con capacidades off-road.',
  marca: 'Mitsubishi'
},
{
  id: 66,
  modelo: 'Mitsubishi L200',
  precio: 39000,
  lanzamiento: 2024,
  tipo: 'Pickup',
  imagen: 'https://cdn.motor1.com/images/mgl/MkJ24p/s3/2024-mitsubishi-triton-l200.jpg',
  descripcion: 'Pickup poderosa y confiable para el trabajo.',
  marca: 'Mitsubishi'
},
{
  id: 67,
  modelo: 'Mitsubishi Mirage',
  precio: 15000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://tse1.mm.bing.net/th/id/OIP.ca9JeibQ4A4YL_ul2gPc9gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descripcion: 'Compacto, económico y perfecto para ciudad.',
  marca: 'Mitsubishi'
},
{
  id: 68,
  modelo: 'Mitsubishi Eclipse Cross',
  precio: 33000,
  lanzamiento: 2024,
  tipo: 'SUV',
  imagen: 'https://cdn.autopapo.com.br/box/uploads/2023/08/14184958/mitsubish-eclipse-cross-sport-2024-branco-fuji-frente-parado.jpg',
  descripcion: 'SUV con diseño deportivo y eficiente.',
  marca: 'Mitsubishi'
},
{
  id: 69,
  modelo: 'Mitsubishi ASX',
  precio: 31000,
  lanzamiento: 2023,
  tipo: 'SUV Compacto',
  imagen: 'https://images.carexpert.com.au/crop/1200/630/app/uploads/2023/06/2023-Mitsubishi-ASX-ES-_HERO-16x9-1.jpg',
  descripcion: 'SUV compacto con buen rendimiento urbano.',
  marca: 'Mitsubishi'
},
{
  id: 70,
  modelo: 'Mitsubishi Outlander PHEV',
  precio: 47000,
  lanzamiento: 2024,
  tipo: 'SUV Híbrido',
  imagen: 'https://www.motortrend.com/uploads/2022/12/Mitsubishi-Outlander-PHEV-27.png',
  descripcion: 'SUV híbrido con gran autonomía eléctrica.',
  marca: 'Mitsubishi'
},
{
  id: 71,
  modelo: 'Mitsubishi Space Star',
  precio: 16000,
  lanzamiento: 2023,
  tipo: 'Hatchback',
  imagen: 'https://autorai.nl/wp-content/uploads/2023/02/mitsubishi-space-star-goedkoopste-auto-van-nederland-2023-review-foto29.jpg',
  descripcion: 'Pequeño, eficiente y maniobrable.',
  marca: 'Mitsubishi'
},
{
  id: 72,
  modelo: 'Mitsubishi Xpander',
  precio: 28000,
  lanzamiento: 2024,
  tipo: 'MPV',
  imagen: 'https://img.philkotse.com/2024/02/02/O3IWXvly/1-0ac2_wm.png',
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
