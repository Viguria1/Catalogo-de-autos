export interface Auto {
  id?: string;             // Opcional: útil para Firestore
  marca: string;
  modelo: string;
  tipo: string;
  año: number;
  imagen: string;
  precio?: number;         // Opcional: no todos los autos podrían tener precio definido
  lanzamiento?: number;    // Opcional: para usar en otros componentes si aplica
}
