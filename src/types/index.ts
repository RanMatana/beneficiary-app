export type IUserData = {
  acount: string;
  balance: string;
  username: string;
};

export type IContactsData = {
  contacts: ContactType[];
};

export type ContactType = {
  name: string;
  acount: string;
};
