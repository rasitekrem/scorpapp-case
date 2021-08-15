import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lorem: {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    menu: {
      home: "Home Page",
      contactUs: "Contact Us",
    },
    login: {
      label: "Log In",
      name: "Name",
      surname: "Surname",
      email: "E-Mail",
      password: "Password",
      title: "Title",
      loginBtn: "Log In",
      logoutBtn: "Log Out",
    },
  },
  tr: {
    lorem: {
      title: "Lorem Ipsum Nedir?",
      description:
        "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
    },
    menu: {
      home: "Ana Sayfa",
      contactUs: "Bize Ulaş",
    },
    login: {
      label: "Giriş Yap",
      name: "İsim",
      surname: "Soy İsim",
      email: "E-Posta",
      password: "Parola",
      title: "Unvan",
      loginBtn: "Giriş Yap",
      logoutBtn: "Çıkış Yap",
    },
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "tr", // set locale
  messages, // set locale messages
});

// Create a Vue instance with `i18n` option
export default i18n;
