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
  genreId: string;
};

type Review = {
  id: string;
  courseId: string;
  rating: number;
  title: string;
  comment: string;
};

export { Course, Genre, Review };
