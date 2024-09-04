// etiket tipi
export type Tag = {
  label: string;
  value: string;
};

// formdan alınacak olan note verisinin tipi
export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

// state'e kaydedilecek olan note versinin tipi
export type Note = {
  id: string;
} & NoteData;

// partial
// generic olarak bir nesne tip alır
// ve tipin bütün özelliklerini opsiyonel yapar
const nesne: Partial<Tag> = {
  label: "selamlar",
};
