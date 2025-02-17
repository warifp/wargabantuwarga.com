import { getContactMeta, getProvinceMeta, Meta } from "../meta";
import { Contact } from "../provinces";

describe("getProvinceMeta", () => {
  const fixtures = [
    [
      "DKI Jakarta",
      {
        description:
          "Informasi seputar COVID-19 dan kontak fasilitas/alat kesehatan di Provinsi DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial.",
        title:
          "Informasi Faskes & Alkes untuk COVID-19 di Provinsi DKI Jakarta",
      } as Meta,
    ],
  ];

  it.each(fixtures)(
    "should return correct value when %s is provided",
    (input, expected) => {
      expect(getProvinceMeta(input as string)).toStrictEqual(expected as Meta);
    },
  );
});

describe("getContactMeta", () => {
  const fixtures = [
    [
      "All data contact are exist",
      "DKI Jakarta",
      {
        id: "3rmedika-gas",
        slug: "3rmedika-gas",
        keterangan: "Isi ulang tabung oksigen",
        lokasi: "Jakarta Barat",
        penyedia: "3R Medika Gas",
      },
      {
        description:
          "Informasi 3R Medika Gas - Isi ulang tabung oksigen di Jakarta Barat, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial.",
        title:
          "3R Medika Gas - Isi ulang tabung oksigen di Jakarta Barat, DKI Jakarta",
      } as Meta,
    ],
    [
      "Penyedia data unavailable",
      "DKI Jakarta",
      {
        id: "3rmedika-gas",
        slug: "3rmedika-gas",
        keterangan: "Isi ulang tabung oksigen",
        lokasi: "Jakarta Barat",
        penyedia: "",
      },
      {
        description:
          "Informasi Isi ulang tabung oksigen di Jakarta Barat, DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial.",
        title: "Isi ulang tabung oksigen di Jakarta Barat, DKI Jakarta",
      } as Meta,
    ],
    [
      "Lokasi data unavailable",
      "DKI Jakarta",
      {
        id: "3rmedika-gas",
        slug: "3rmedika-gas",
        keterangan: "Isi ulang tabung oksigen",
        lokasi: "",
        penyedia: "",
      },
      {
        description:
          "Informasi Isi ulang tabung oksigen di DKI Jakarta yang dikumpulkan relawan melalui pencarian di internet atau media sosial.",
        title: "Isi ulang tabung oksigen di DKI Jakarta",
      } as Meta,
    ],
  ];

  it.each(fixtures)(
    "should return correct result when: %s",
    (_, provinceName, contact, expected) => {
      expect(
        getContactMeta(provinceName as string, contact as Contact),
      ).toStrictEqual(expected as Meta);
    },
  );
});
