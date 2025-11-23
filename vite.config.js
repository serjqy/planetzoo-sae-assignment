import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/layout/about.html"),
        gallery: resolve(__dirname, "src/layout/gallery.html"),
        tickets: resolve(__dirname, "src/layout/tickets.html"),
        contact: resolve(__dirname, "src/layout/contact.html"),
        donation: resolve(__dirname, "src/layout/donation.html"),
        donation_single: resolve(__dirname, "src/layout/donation_single.html"),
        gallery_single: resolve(__dirname, "src/layout/gallery_single.html"),
        tickets_order: resolve(__dirname, "src/layout/tickets-order.html"),
        not_found: resolve(__dirname, "src/layout/404.html"),
      },
    },
  },
};
