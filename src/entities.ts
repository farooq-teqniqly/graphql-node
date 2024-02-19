type Genre = {
  id: string;
  name: string;
};

type Course = {
  id: string;
  name: string;
  description: string;
  price: number;
  isDiscounted: boolean;
};

export { Course, Genre };
