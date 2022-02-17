export interface PostInterface {
  id: string;
  _: string;

  input: {
    title: string;
    content: string;
    author: {
      _id: string;
      name: string;
      email: string;
      active: boolean;
    };
  };
}
