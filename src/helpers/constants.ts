export type Results = {
  id: number;
  name: string;
};

export const results: Results[] = [
  {
    id: 1,
    name: "RABLET",
  },
  {
    id: 2,
    name: "NICOTEX",
  },
  {
    id: 3,
    name: "ROSEDAY",
  },
  {
    id: 4,
    name: "PROMOLET",
  },
  {
    id: 4,
    name: "TELMA",
  },
  {
    id: 4,
    name: "DOLO",
  },
];

export const fetchSearch = (query: string): Promise<Results[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const quriedData: Results[] = results.filter((item: Results) => {
        const data: RegExpMatchArray | null = item.name
          .toLowerCase()
          .match(query.toLowerCase());
        if (data !== null && data[0]) return data[0];
      });
      if (quriedData.length <= 0) {
        reject("NO_RESULTS");
      } else {
        resolve(quriedData);
      }
    }, 500);
  });
};
