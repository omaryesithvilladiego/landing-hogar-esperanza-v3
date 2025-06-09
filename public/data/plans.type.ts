export type plan = {
  id: number;
  nombre: string;
  descripcion: string;
  incluye: incluye;
  url: string;
};

type incluye = string[];
