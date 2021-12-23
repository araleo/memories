export interface Profile {
  id: string;
  name: string;
  birth: Date;
  placeOfBirth: string;
  profileImage: string;
}

export const ProfileFactory = () => {
  return {
    id: '',
    name: '',
    birth: new Date(),
    placeOfBirth: '',
    profileImage: '',
  };
};
