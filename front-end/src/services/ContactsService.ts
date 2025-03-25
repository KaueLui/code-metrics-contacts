import { IContact } from "../@types/Contact";
import api from "../configs/api";

type orderBy = "ASC" | "DESC";

interface IGetContactsParams {
  name?: string;
  orderBy?: orderBy;
}

interface ICreateContactParams {
  name: string;
  email: string;
  phone: string;
  category_id?: string;
}

class ContactsService {
  // Pegas os contatos
  async getContacts(params: IGetContactsParams) {
    const response = await api.get<IContact[]>("/contacts", { params });
    return response.data;
  }

  // Cria um contato
  async createContact(contactData: ICreateContactParams) {
    const response = await api.post("/contacts", contactData);
    return response.data;
  }
}

export default new ContactsService();

export type { orderBy };
